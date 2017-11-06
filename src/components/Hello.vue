<template>
  <div class="hello">
    <img src="../assets/images/logo.png" height="200" width="200" alt="">
    <h1>{{ msg }}</h1>
    <p @click="sayHello">this is a btn</p>
    <ul v-for="subRouter in routerArr">
      <li v-text="subRouter" @click="goNext(subRouter)"></li>
    </ul>
    <router-link to='guide' class='a'>router link ele</router-link>
    <input type="text" placeholder="请输入姓名" v-model='obj.name'>
    <input type="text" placeholder="请输入手机号" v-model='obj.telNum'>
    <button @click='check'>校验</button>
    <button @click='openPicker'>触发日期</button>
    <button @click='openPopup'>触发popup</button>
    <mt-popup v-model="visible" position="bottom" class="mint-datetime">
      <mt-picker
        :slots="slots"
        valueKey='text' @change="onValuesChange" show-toolbar>
        <span class="mint-datetime-action mint-datetime-cancel" @click="visible = false">取消</span>
        <span class="mint-datetime-action mint-datetime-confirm" @click="confirmType">确定</span>
      </mt-picker>
    </mt-popup>
    <mt-datetime-picker ref="birthPicker" type="date" :start-date="startDate" :end-date="endDate" year-format="{value} 年" month-format="{value} 月"  date-format="{value} 日" v-model="birthday" @confirm="confirmBth()"></mt-datetime-picker>
    <mt-picker :slots="typeSlots"></mt-picker>
    <div class="card-info">
      <p class="id-title">身份证背面</p>
      <div class="clearfix">
        <label class="img-wrap ba-fl label" for="bidback">
          <img v-if="bidback" :src="bidback">
          <!-- <img v-else src="../../assets/images/idback.png"> -->
        </label>
        <div class="ba-fl right-wrap">
          <label class="icon-wrap label" for="bidback">
            <span class="icon-photo"></span><span v-if="bidback" class="photo-text">重新上传</span><span v-else class="photo-text">点击拍照</span>
          </label>
        </div>
      </div>
      <!-- bidback： 图片资源， img: 子组件向父组件通信 limit:图片大小限制， prcrate： 宽高比, dataname: 该字段前没有':', 意为'bidback'字符串传给子组件， 此处用意给子组件input 绑定一个字符串为'bidback'的id, 上述label 的for属性可以唤起此input, 注意跟this.bidback的区别， 两者没有任何关系，变量名字可自行定义 -->
      <picup-div :usrc="bidback" v-on:img = "imgRefresh" :limit = "100" :picrate="1.6" dataname='bidback'></picup-div>
    </div>
  </div>

</template>

<script>
import validate from '../utils/validate.js';
// import {mprovince, mcity, mdistrict} from '../utils/city_data.js';
// console.log(mprovince, mcity, mdistrict);
import picupDiv from './picupload.vue';
export default {
  name: 'hello',
  mixins: [validate],
  components: {
    'picup-div': picupDiv
  },
  data () {
    return {
      bidback: '',
      msg: 'Welcome to Your Vue.js App',
      routerArr: ['guide', 'input', 'result'],
      test: 'test',
      obj: {
        name: '',
        telNum: ''
      },
      startDate: new Date('1940-01-01'),
      endDate: new Date(),
      birthday: '',
      visible: true,
      typeSlots: [
        {
          flex: 1,
          values: [2017, 2018, 2019]
        }
      ],
      slots: [
        {
          flex: 1,
          values: [
            {
              code: '01',
              text: '身份证'
            }, {
              code: '02',
              text: '护照'
            }, {
              code: '03',
              text: '军人证'
            }, {
              code: '99',
              text: '其他'
            }
          ],
          className: 'slot1',
          textAlign: 'center',
          defaultIndex: 0
        }
      ],
      nowType: '01',
      nowTypeText: '身份证'
    };
  },
  created () {
    console.log(this.msg);
    console.log(this.isNoEmpty('kk'));
    if (sessionStorage.getItem('obj')) {
      this.obj = JSON.parse(sessionStorage.getItem('obj'));
    }
  },
  methods: {
    imgRefresh (data) {
       this[data.name] = data.src;
    },
    sayHello () {
      alert('hello');
      console.log('hello');
    },
    goNext (subRouter) {
      if (subRouter === 'guide') {
        this.$router.push({path: '/guide', query: {a: '333'}});
      } else {
        this.$router.push('/guide');
      }
    },
    check () {
      this.setValidateData();
      if (this.validateEngine(this.validateData)) {
        sessionStorage.setItem('obj', JSON.stringify(this.obj));
        console.log('校验成功，继续往下处理逻辑');
      }
    },
    // 校验引擎
    validateEngine: function (data) {
      for (var i = 0; i < data.length; i++) {
        if (!this[data[i].type](data[i].value)) {
          alert(data[i].info);
          return false;
        }
      }
        return true;
    },
    // 配置校验数据
    setValidateData: function () {
      this.validateData = [
        {
          type: 'isNoEmpty',
          value: this.obj.name,
          info: '投保人姓名不能为空，请输入！'
        },
        {
          type: 'isName',
          value: this.obj.name,
          info: '投保人姓名格式错误，请重新输入！'
        },
        {
          type: 'isNoEmpty',
          value: this.obj.telNum,
          info: '手机号码不能为空，请输入！'
        },
        {
          type: 'isPhoneNum',
          value: this.obj.telNum,
          info: '手机号码格式错误，请重新输入！'
        }];
    },
    confirmBth () {
      console.log(this.birthday);
    },
    openPicker () {
      this.$refs.birthPicker.open();
    },
    openPopup () {
      this.visible = true;
    },
    onValuesChange (picker, values) {
      console.log(values);
      this.nowType1 = values[0].code;
      this.nowTypeText1 = values[0].text;
      // alert(this.nowType1 + this.nowTypeText1);
    },
    confirmType () {
      this.idType = this.nowType;
      this.idTypeText = this.nowTypeText;
      console.log(this.idType, this.idTypeText);
      this.visible = false;
    }
  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.a{
  color: #000;
}
</style>
