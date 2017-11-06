<template>
  <div class="applyResult">
    <div class="result" v-if="resultCode">
      <div class="icon">
        <div class="success">
          <p class="right"></p>
          <p class="right2"></p>
        </div>
      </div>
      <p class="rTxt">申请提交成功</p>
      <p class="boBg"><img src="../assets/images/bg_02.png"/></p>
    </div>
    <div class="result" v-else>
      <div class="icon">
        <div class="fail">
          <p class="right"></p>
          <p class="right2"></p>
        </div>
      </div>
      <p class="rTxt">申请提交失败</p>
      <p class="boBg"><img src="../assets/images/bg_02.png"/></p>
    </div>
    <div class="defulatCon">
      <p class="tipsTxt" v-if='fail'>请仔细核对信息是否填写准确！</p>
      <p class="tipsTxt" v-if='ExMode'>保单号已存在,请勿重复提交！</p>
      <p>如有疑问请咨询<span class="org">业管部或人力资源部</span>，我们将竭诚为您服务！</p>
      <p>感谢选择泰康，祝您一路泰康！</p>
    </div>
    <div class="cc-btn" @click="check()">
        <div class='a'><p class="btn-keep">{{btnInfo}}</p></div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'getResult',
  data () {
      return {
          resultCode: '', // 判断返回状态
          fail: false, // 返回失败的提示
          ExMode: false,
          btnInfo: '' // 按钮文字
      };
  },
  mounted () {
      this.getResult();
    },
  methods: {
    getResult () {
        this.resultCode = sessionStorage.getItem('resultStatus') === 'success';
        this.Mode = sessionStorage.getItem('resultMode') === 'exist';
        // companyCode(this.resultCode + 'a');
        // companyCode(this.Mode + 'b');
        if (this.resultCode === false && this.Mode === true) {
          this.ExMode = true;
          this.fail = false;
          // companyCode('1');
          return;
        };
        if (this.resultCode === false && this.Mode === false) {
          this.fail = true;
          this.ExMode = false;
          // companyCode('2');
        };
        this.btnInfo = this.resultCode ? '返回到主页' : '再试一次';
    },
    check () {
      if (this.resultCode) {
        this.$router.push(this.routerFixed + '/');
      } else {
        history.back();
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.result{
  width: 100%;
  overflow: hidden;
  background: #ff7200;
  font-size: 4vw;
  color: #fff;
  text-align: center;
  padding: 5.5vh 0 10vh;
  position: relative;
}
.result .icon{
  width: 20vw;
  height: 20vw;
  background: url(../assets/images/bg.png); 
  background-size: 100%;
  margin: 0 auto;
  position: relative;
}
.result .rTxt{
  padding-top: 2.5vh;
}
.icon .success{
  position: absolute;
  top:50%;
  left: 50%;
  transform: translate(-50%,-80%);
  -webkit-transform: translate(-50%,-80%);
}
.success .right{
  width:8.3vw;
  height:1.3vw;
  background:#fff;
  border-radius: 4px;
  border-color: transparent transparent #fff #fff; 
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  position: absolute;
  left: -2.4vw;
}
.success .right2{
  width:4.8vw;
  height:1.3vw;
  background:#fff;
  border-radius: 4px;
  border-color: transparent transparent #fff #fff; 
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  position: absolute;
  left: -4.8vw;
    bottom: -1.4vh;
}
.fail .right{
  width:11vw;
  height:1.3vw;
  background:#fff;
  border-radius: 4px;
  border-color: transparent transparent #fff #fff; 
    position: absolute; 
    top:50%; 
    left:50%; 
    -webkit-transform: translate(-50%,-50%) rotate(-45deg); 
    transform: translate(-50%,-50%) rotate(-45deg);
}
.fail .right2{
  width:11vw;
  height:1.3vw;
  background:#fff;
  border-radius: 4px;
  border-color: transparent transparent #fff #fff; 
   position: absolute; 
   top:50%; 
   left:50%; 
   -webkit-transform: translate(-50%,-50%) rotate(45deg); 
   transform: translate(-50%,-50%) rotate(45deg);
}
.boBg{
  width: 100%; 
  height: 5vh;
  overflow: hidden;
  position: absolute; 
  bottom: -1vw;
  left:0;
}
.boBg img{
  width: 100%;
}
.defulatCon{
  font-size: 3.7vw;
  color: #999;
  text-align: center;
  line-height: 3.6vh;
  padding: 10.8vh 0;
}
.defulatCon .org{
  font-size: 4.8vw;
  color: #ff7200;
}
.tipsTxt{
  font-size: 4.3vw;
  color: #333;
  text-align: center;
}
.cc-btn{
  position: fixed;
  width: 100%;
  bottom: 0;
  background:#FD7B0F;
  z-index: 999;
}
.cc-btn>a{
  position: relative;
  width: 100%;
}
.btn-keep{
    position: relative;
    text-align: center;
    width: 100%;
    font-size: 4.8vw;
    color: #fff;
    line-height: 13.33vw;
}
.btn{
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0;
}
</style>