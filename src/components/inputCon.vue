<template>
  <div class="inputCon">
    <div class="conWrap">
      <div class="inputItem">
        <h3 class="itemTit"><span class="ico"></span>保单信息</h3>
        <div class="itemCon">
          <div class="secTit clearFix">
            <label for="" class="t">险种名称</label>
            <span class="org">泰康尊享岁月(B)款终身保险</span>
          </div>
          <ul class="baseInfor clearFix ">
            <div class="block">
              <li>
                <label for="" class="t">计划类型</label>
                <span class="baseCon">员工计划</span>
              </li>
              <li>
                <label for="" class="t le1">保单号</label>
                <span class="baseCon">
                  <input type="tel" placeholder="请输入保单号" class="ipt import" v-model.trim="policy.policyCode" maxlength='8'>
                </span>
              </li>
            </div>
            <div class="doubleItem clearFix">
              <div class="singleItem clearFix">
                <p class="item pr" style="width:100%">
                  <label for="" class="t lre1">分公司</label>
                  <input type="text" placeholder="请选择" v-model.trim="textData.tComCodeStatusText" class="ipt rightArrow import">
                  <button @click="tComCodePopup" class="btn"></button>
                  <mt-popup v-model.trim="comCodeStatusPopup" position="bottom" class="mint-datetime">
                    <mt-picker
                      :slots="companyCode"
                      valueKey='text' @change="onComCodeChange" show-toolbar>
                      <span class="mint-datetime-action mint-datetime-cancel" @click="comCodeStatusPopup = false">取消</span>
                      <span class="mint-datetime-action mint-datetime-confirm" @click="confirmComCodeStatus">确定</span>
                    </mt-picker>
                  </mt-popup>
                </p>
              </div>
                
            </div>
            <div class="block2">
              <li>
                <label for="" class="t le1">投保人</label>
                <span class="baseCon">
                  <input type="text" class="ipt import" placeholder="请输入投保人" v-model.trim="policy.holderId">
                </span>
              </li>
              <li>
                <label for="" class="t">被保险人</label>
                <span class="baseCon">
                  <input type="text" class="ipt" placeholder="被保险人" readonly="readonly" v-model.trim="policy.holderId">
                </span>
              </li>
            </div>
            <div class="block3">
              <li class="nopb">
                <label for="" class="t">期交保费</label>
                <span class="baseCon">
                  <input type="number" placeholder="请输入期交保费" class="ipt org import" v-model.trim="policy.premium" >元
                </span>
              </li>
              <li class="nopb">
                <label for="" class="t">交费期间</label>
                <span class="baseCon"><input type="number" placeholder="请输入交费期间" class="ipt org import" v-model.trim="policy.payYears">年
                </span>
              </li>
            </div>
          </ul>
        </div>
      </div>
      <div class="inputItem">
        <h3 class="itemTit"><span class="ico ico2"></span>您的基本信息</h3>
        <div class="itemCon">
          <div class="doubleItem clearFix">
            <p class="item">
              <label for="" class="t">姓　　名</label>
              <input type="text" value="张三" placeholder="姓名" class="ipt " readonly="readonly" v-model.trim="policy.holderId">
            </p>
            <p class="item pr">
              <label for="" class="t">称　　谓</label>
              <input type="text" placeholder="请选择" v-model.trim="textData.tSexText" class="ipt rightArrow import">
              <button @click="tNamePopup" class="btn"></button>
              <mt-popup v-model.trim="namePopup" position="bottom" class="mint-datetime">
                <mt-picker
                  :slots="tName"
                  valueKey='text' @change="onNameChange" show-toolbar>
                  <span class="mint-datetime-action mint-datetime-cancel" @click="namePopup = false">取消</span>
                  <span class="mint-datetime-action mint-datetime-confirm" @click="confirmName">确定</span>
                </mt-picker>
              </mt-popup>
            </p>
          </div>
          <div class="singleItem clearFix">
            <p class="item">
              <label for="" class="t">身份证号</label>
              <input type="text" placeholder="请输入身份证号" class="ipt import" v-model.trim="conApplication.holderCertNum" maxlength='18' @blur='getBirthday'>
            </p>
          </div>
          <div class="doubleItem clearFix">
            <p class="item pr">
              <label for="" class="t">出生日期</label>
              <input type="text" placeholder="" class="ipt" v-model.trim="conApplication.tBirthday" style="width:58%"  readonly="readonly">
<!--               <input type="text" placeholder="" class="ipt" v-model.trim="conApplication.tBirthday" style="width:58%" @click='birthDayPicker' readonly="readonly"> -->
              <!-- <mt-datetime-picker ref="birthPicker" type="date" :start-date="startDate" :end-date="endDate" year-format="{value} 年" month-format="{value} 月"  date-format="{value} 日" v-model.trim="birthday" @confirm="confirmBth()"></mt-datetime-picker> -->
            </p>
            <p class="item pr">
              <label for="" class="t">民　　族</label>
              <input type="text" placeholder="请选择" v-model.trim="textData.tNationText" class="ipt rightArrow import">
              <button @click="tNationPopup" class="btn"></button>
              <mt-popup v-model.trim="nationPopup" position="bottom" class="mint-datetime">
                <mt-picker
                  :slots="tNation"
                  valueKey='text' @change="onNationChange" show-toolbar>
                  <span class="mint-datetime-action mint-datetime-cancel" @click="nationPopup = false">取消</span>
                  <span class="mint-datetime-action mint-datetime-confirm" @click="confirmNation">确定</span>
                </mt-picker>
              </mt-popup>
            </p>
          </div>
          <div class="singleItem clearFix">
            <p class="item">
              <label for="" class="t">联系电话</label>
              <input type="tel" placeholder="请输入联系电话" v-model.trim="conApplication.holderMobile" class="ipt width-bx import" maxlength='18'>
            </p>
          </div>
          <div class="singleItem clearFix">
            <p class="item">
              <label for="" class="t">电子邮箱</label>
              <input type="email" placeholder="请输入电子邮箱,若没有则填无" v-model.trim="conApplication.holderEmail" class="ipt width-bx import">
            </p>
          </div>
          <div class="singleItem clearFix">
            <p class="item">
              <label for="" class="t">所　　属</label>
              <span style="text-align:right;float:right;line-height: 11vw;">境内居民</span>
            </p>
          </div>
          <div class="singleItem clearFix">
            <p class="item pr">
              <label for="" class="t">教育背景</label>
              <input type="text" placeholder="请选择" v-model.trim="textData.tEduText" class="ipt rightArrow import">
              <button @click="tEduPopup" class="btn"></button>
              <mt-popup v-model.trim="eduPopup" position="bottom" class="mint-datetime">
                <mt-picker
                  :slots="tEdu"
                  valueKey='text' @change="onEduChange" show-toolbar>
                  <span class="mint-datetime-action mint-datetime-cancel" @click="eduPopup = false">取消</span>
                  <span class="mint-datetime-action mint-datetime-confirm" @click="confirmEdu">确定</span>
                </mt-picker>
              </mt-popup>
            </p>
          </div>
          <div class="singleItem clearFix">
            <p class="item pr">
              <label for="" class="t">婚姻状况</label>
              <input type="text" placeholder="请选择" v-model.trim="textData.tMaritalStatusText" class="ipt rightArrow import">
              <button @click="tMaritalStatusPopup" class="btn"></button>
              <mt-popup v-model.trim="maritalStatusPopup" position="bottom" class="mint-datetime">
                <mt-picker
                  :slots="tMaritalStatus"
                  valueKey='text' @change="onMaritalStatusChange" show-toolbar>
                  <span class="mint-datetime-action mint-datetime-cancel" @click="maritalStatusPopup = false">取消</span>
                  <span class="mint-datetime-action mint-datetime-confirm" @click="confirmMaritalStatus">确定</span>
                </mt-picker>
              </mt-popup>
            </p>
          </div>
          <div class="singleItem clearFix">
            <p class="item pr">
              <label for="" class="t">子女数量</label>  
              <input type="text" placeholder="请选择" v-model.trim="textData.tChildNumText" class="ipt rightArrow import">
              <button @click="tChildNumPopup" class="btn"></button>
              <mt-popup v-model.trim="childNumPopup" position="bottom" class="mint-datetime">
                <mt-picker
                  :slots="tChildNum"
                  valueKey='text' @change="onChildNumChange" show-toolbar>
                  <span class="mint-datetime-action mint-datetime-cancel" @click="childNumPopup = false">取消</span>
                  <span class="mint-datetime-action mint-datetime-confirm" @click="confirmChildNum">确定</span>
                </mt-picker>
              </mt-popup>
            </p>
          </div>
          <div class="singleItem clearFix">
            <p class="item pr">
              <label for="" class="t">您工作和生活的城市</label>
              <input type="text" placeholder="请选择" class="ipt rightArrow import" v-model="textData.threeDeepAddress" @click="openAddressPopUp" readonly="readonly">
            </p>
          </div>
          <div class="singleItem clearFix">
            <textarea name="" id="" placeholder="请填写详细地址" class="import" v-model.trim="conApplication.holderLiveAddresss"></textarea> 
          </div>
          <div class="singleItem clearFix">
            <p class="item">
              <label for="" class="t">邮　　编</label>
              <input type="tel"  placeholder="请输入邮编" class="ipt " v-model.trim="conApplication.holderZipCode" maxlength='6'>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="cc-btn" @click="check">
      <div class='a'><p class="btn-keep">保存</p></div>
    </div>
    <mt-popup v-model="addressPopUp" position="bottom" class="mint-datetime">
      <mt-picker
        :slots="addressSlots"  @change="addressChange" show-toolbar>
        <span class="mint-datetime-action mint-datetime-cancel" @click="addressPopUp = false">取消</span>
        <span class="mint-datetime-action mint-datetime-confirm" @click="confirmAddress">确定</span>
      </mt-picker>
    </mt-popup>
  </div>
</template>
<script>
import $ from 'jquery';
import validate from '../utils/validate.js';
import {mprovince, mcity, mdistrict} from '../utils/city_data.js';
import {tNation} from '../utils/nation_data.js';
import {policy, conApplication} from '../utils/content.js';
import {sexCode, tEduCode, tMaritalStatusCode, tChildNumCode, tComCode} from '../utils/codeTable.js';
export default {
  name: 'inputCon',
  mixins: [validate],
  data () {
    return {
      textData: {
        tSexText: '', // 基本信息的称谓
        tNationText: '', // 基本信息的民族
        tIdentityText: '境内居民', // 基本信息的所属
        tEduText: '', // 基本信息的教育背景
        tMaritalStatusText: '', // 婚姻状况
        tComCodeStatusText: '', // 分公司代码
        tChildNumText: '', // 子女数量
        threeDeepAddress: '' // 三级地址 您工作和生活的城市
      },
      policy: policy,
      conApplication: conApplication,
      startDate: new Date('1940-01-01'),
      endDate: new Date(),
      birthday: '',
      namePopup: false,
      nationPopup: false,
      identityPopup: false,
      eduPopup: false,
      maritalStatusPopup: false,
      comCodeStatusPopup: false,
      childNumPopup: false,
      values: '',
      tName: [
        {
          flex: 1,
          values: sexCode,
          className: 'tName',
          textAlign: 'center',
          defaultIndex: 0
        }
      ],
      tNation: [
        {
          flex: 1,
          values: tNation,
          className: 'tNation',
          textAlign: 'center',
          defaultIndex: 0
        }
      ],
      tEdu: [
        {
          flex: 1,
          values: tEduCode,
          className: 'tEdu',
          textAlign: 'center',
          defaultIndex: 0
        }
      ],
      tMaritalStatus: [
        {
          flex: 1,
          values: tMaritalStatusCode,
          className: 'tMaritalStatus',
          textAlign: 'center',
          defaultIndex: 0
        }
      ],
      companyCode: [
        {
          flex: 1,
          values: tComCode,
          className: 'companyCode',
          textAlign: 'center',
          defaultIndex: 0
        }
      ],
      tChildNum: [
        {
          flex: 1,
          values: tChildNumCode,
          className: 'tChildNum',
          textAlign: 'center',
          defaultIndex: 0
        }
      ],
      mcityIndex: 0,
      mdistrictIndex: 0,
      addressPopUp: false,
      addressSlots: [
        {
          flex: 1,
          // values: mprovince,
          values: [],
          textAlign: 'center',
          defaultIndex: 0
        },
        {
          flex: 1,
          // values: mcity[this.mcityIndex],
          values: [],
          textAlign: 'center',
          defaultIndex: 0
        },
        {
          flex: 1,
          // values: mdistrict[this.mcityIndex][this.mdistrictIndex],
          values: [],
          textAlign: 'center',
          defaultIndex: 0
        }
      ]
    };
  },
  created () {
    this.policy = policy;
    this.conApplication = conApplication;
    this.addressSlots[0].values = mprovince;
    this.addressSlots[1].values = mcity[this.mcityIndex];
    this.addressSlots[2].values = mdistrict[this.mcityIndex][this.mdistrictIndex];
    if (sessionStorage.getItem('policy')) {
      this.policy = JSON.parse(sessionStorage.getItem('policy'));
    }
    if (sessionStorage.getItem('conApplication')) {
      this.conApplication = JSON.parse(sessionStorage.getItem('conApplication'));
    };
    if (sessionStorage.getItem('textData')) {
      this.textData = JSON.parse(sessionStorage.getItem('textData'));
    }

  },
  mounted () {
    // 触发软键盘时，保存按钮隐藏？显示
    // $('.import').focus(function () {
    //   $('.cc-btn').hide();
    //  });
    // $('.import').blur(function () {
    //   $('.cc-btn').show();
    //  });
    var h = $(window).height();
    $(window).resize(function () {
        if ($(window).height() < h) {
            $('.cc-btn').hide();
        };
        if ($(window).height() >= h) {
            $('.cc-btn').show();
        };
    });
  },
  methods: {
    openAddressPopUp () {
      this.addressPopUp = true;
    },
    addressChange (picker, values) {
      this.midAddProvince = values[0];
      this.mcityIndex = mprovince.indexOf(values[0]);
      this.addressSlots[1].values = mcity[this.mcityIndex];
      this.midAddCity = values[1];
      this.mdistrictIndex = mcity[this.mcityIndex].indexOf(values[1]);
      this.addressSlots[2].values = mdistrict[this.mcityIndex][this.mdistrictIndex];
      this.midAddArea = values[2];
    },
    confirmAddress () {
      this.conApplication.tProvince = this.midAddProvince;
      this.conApplication.tCity = this.midAddCity;
      this.conApplication.area = this.midAddArea;
      this.textData.threeDeepAddress = this.conApplication.tProvince + this.conApplication.tCity + this.conApplication.area;
      this.addressPopUp = false;
    },
    check () {
      this.policy.insuredId = this.conApplication.tName = this.policy.holderId;
      this.setValidateData();
      if (!this.validateEngine(this.validateData)) return;
      var IDNum = this.conApplication.holderCertNum;
      // companyCode(IDNum, 'Id');
      if (this.isIdCard(IDNum)) {
          var sex = IDNum.substr(16, 1) % 2; // 身份证截取性别
          // companyCode(sex, 'sex1');
          var nameSex = Number(this.conApplication.tSex); // 称谓
          // companyCode(nameSex, 'sex2');
          var tBirthday = '';
          if (sex === 1 && nameSex === '') {
            this.toast('请先选择称谓！');
          } else if (sex === 1 && nameSex === 1) {
            tBirthday = IDNum.slice(6, 10) + '-' + IDNum.slice(10, 12) + '-' + IDNum.slice(12, 14);
            this.conApplication.tBirthday = tBirthday;
          } else if (sex === 0 && nameSex === 2) {
            tBirthday = IDNum.slice(6, 10) + '-' + IDNum.slice(10, 12) + '-' + IDNum.slice(12, 14);
            this.conApplication.tBirthday = tBirthday;
          } else {
            this.toast('称谓和身份证性别不符！');
            return;
          };
      };
      this.setSessionStorage();
      // companyCode('校验成功，继续往下处理逻辑');
      // companyCode('this.policy', this.policy);
      // companyCode('this.conApplication', this.conApplication);
      // companyCode('this.textData', this.textData);
      this.$router.push(this.routerFixed + '/inputCon2');
    },
    setSessionStorage () {
      sessionStorage.setItem('policy', JSON.stringify(this.policy));
      sessionStorage.setItem('conApplication', JSON.stringify(this.conApplication));
      sessionStorage.setItem('textData', JSON.stringify(this.textData));
    },
    // 校验引擎
    validateEngine: function (data) {
      for (var i = 0; i < data.length; i++) {
        if (!this[data[i].type](data[i].value)) {
          // 提示具体的错误信息
          this.toast(data[i].info);
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
          value: this.policy.policyCode,
          info: '保单号不能为空'
        },
        {
          type: 'isPolicyCode',
          value: this.policy.policyCode,
          info: '请输入正确的保单号（8位数字）！'
        },
        {
          type: 'isNoEmpty',
          value: this.textData.tComCodeStatusText,
          info: '请选择分公司！'
        },
        {
          type: 'isNoEmpty',
          value: this.policy.holderId,
          info: '投保人姓名不能为空！'
        },
        {
          type: 'isName',
          value: this.policy.holderId,
          info: '姓名长度需为3至27个字符，且不得有数字出现。若为中国籍，姓名间隔符请使用“·”录入！'
        },
        {
          // type: 'isPremium',
          type: 'isNoEmpty',
          value: this.policy.premium,
          info: '期交保费不能为空！'
        },
        {
          // type: 'isPremium',
          type: 'isMoneyNum',
          value: this.policy.premium,
          info: '期交保费只能输入数字（含小数点后两位），请重新输入！'
        },
        {
          // type: 'isPaymentYear',
          type: 'isNoEmpty',
          value: this.policy.payYears,
          info: '交费期间不能为空！'
        },
        {
          // type: 'isPaymentYear',
          type: 'isYearNum',
          value: this.policy.payYears,
          info: '交费期间只能是整数，请重新输入！'
        },
        {
          type: 'isNoEmpty',
          value: this.textData.tSexText,
          info: '请选择称谓！'
        },
        {
          type: 'isNoEmpty',
          value: this.conApplication.holderCertNum,
          info: '身份证号码不能为空！'
        },
        {
          type: 'isIdCard',
          value: this.conApplication.holderCertNum,
          info: '身份证号码有误，请重新填写。'
        },
        {
          type: 'isNoEmpty',
          value: this.conApplication.tBirthday,
          info: '请选择出生日期！'
        },
        {
          type: 'isNoEmpty',
          value: this.textData.tNationText,
          info: '请选择民族！'
        },
        {
          type: 'isNoEmpty',
          value: this.conApplication.holderMobile,
          info: '手机号码不能为空，请输入！'
        },
        {
          type: 'isPhoneNum',
          value: this.conApplication.holderMobile,
          info: '联系电话最多可录入18位数字，请重新填写。'
        },
        {
          type: 'isNoEmpty',
          value: this.conApplication.holderEmail,
          info: '请输入电子邮箱！'
        },
        {
          type: 'isEmail',
          value: this.conApplication.holderEmail,
          info: '邮箱格式有误，请重新输入！'
        },
        {
          type: 'isNoEmpty',
          value: this.textData.tEduText,
          info: '请选择教育背景！'
        },
        {
          type: 'isNoEmpty',
          value: this.textData.tMaritalStatusText,
          info: '请选择婚姻状况！'
        },
        {
          type: 'isNoEmpty',
          value: this.textData.tChildNumText,
          info: '请选择子女数量！'
        },
        {
          type: 'isNoEmpty',
          value: this.textData.threeDeepAddress,
          info: '请选择您的工作和生活城市！'
        },
        {
          type: 'isAddress',
          value: this.conApplication.holderLiveAddresss,
          info: '请正确选择并填写居住地址（需大于等于4个汉字）!'
        },
        {
          type: 'isNoEmpty',
          value: this.conApplication.holderZipCode,
          info: '邮编不能为空!'
        },
        {
          type: 'isZipCode',
          value: this.conApplication.holderZipCode,
          info: '请输入正确的邮编!'
        }
      ];
    },
    confirmBth () {
      // this.toast(this.GMTToStr(this.birthday));
      this.conApplication.tBirthday = this.GMTToStr(this.birthday);
      // companyCode(this.conApplication.tBirthday);
    },
    getBirthday () {
      // var IDNum = conApplication.holderCertNum;
      // var tBirthday = '';
      // tBirthday = IDNum.slice(6, 10) + '-' + IDNum.slice(10, 12) + '-' + IDNum.slice(12, 14);
      // this.conApplication.tBirthday = tBirthday;
      var tBirthday = '';
      var IDNum = this.conApplication.holderCertNum;
      if (this.isIdCard(IDNum)) {
        tBirthday = IDNum.slice(6, 10) + '-' + IDNum.slice(10, 12) + '-' + IDNum.slice(12, 14);
      }
      this.conApplication.tBirthday = tBirthday;
    },
    GMTToStr (time) {
    var date = new Date(time);
    var monthNum = date.getMonth() + 1;
    // this.toast(monthNum.toString().length);
    if (monthNum.toString().length === 1) {
      monthNum = '0' + monthNum;
    }
    var dateNum = date.getDate();
    if (dateNum.toString().length === 1) {
      dateNum = '0' + dateNum;
    }
    var Str = date.getFullYear() + '-' + monthNum + '-' + dateNum;
    return Str;
    },
    birthDayPicker () {
      // if (this.idType === '01') {return};
      this.$refs.birthPicker.open();
    },
    // 称谓
    tNamePopup () {
      this.namePopup = true;
    },
    onNameChange (picker, values) {
      // values[0] = values[0] || {code: '01', text: '先生'};
      // companyCode(values);
      this.nowType = values[0].code;
      this.nowTypeText = values[0].text;
    },
    confirmName () {
      this.textData.tSexText = this.nowTypeText;
      this.conApplication.tSex = this.nowType;
      // companyCode(this.conApplication.tSex, this.textData.tSexText);
      this.namePopup = false;
    },
    // 民族
    tNationPopup () {
      this.nationPopup = true;
    },
    onNationChange (picker, values) {
      // values[0] = values[0] || {code: '01', text: '汉族'};
      // companyCode(values);
      this.nowType2 = values[0].code;
      this.nowTypeText2 = values[0].text;
    },
    confirmNation () {
      this.conApplication.tNation = this.nowType2;
      this.textData.tNationText = this.nowTypeText2;
      // companyCode(this.conApplication.tNation, this.textData.tNationText);

      this.nationPopup = false;
    },
    // // 身份属性
    // tIdentityPopup () {
    //   this.identityPopup = true;
    // },
    // onIdentityChange (picker, values) {
    //   // companyCode(values);
    //   this.nowType3 = values[0].code;
    //   this.nowTypeText3 = values[0].text;
    // },
    // confirmIdentity () {
    //   this.conApplication.tIdentity = this.nowType3;
    //   this.textData.tIdentityText = this.nowTypeText3;
    //   // companyCode(this.conApplication.tIdentity, this.textData.tIdentityText);
    //   this.identityPopup = false;
    // },
    // 教育背景
    tEduPopup () {
      this.eduPopup = true;
    },
    onEduChange (picker, values) {
      // companyCode(values);
      this.nowType4 = values[0].code;
      this.nowTypeText4 = values[0].text;
    },
    confirmEdu () {
      this.conApplication.tEdu = this.nowType4;
      this.textData.tEduText = this.nowTypeText4;
      // companyCode(this.conApplication.tEdu, this.textData.tEduText);
      this.eduPopup = false;
    },
    // 分公司代码状况
    tComCodePopup () {
      this.comCodeStatusPopup = true;
    },
    onComCodeChange (picker, values) {
      // companyCode(values);
      this.nowComCode = values[0].code;
      this.nowComCodeText = values[0].text;
    },
    confirmComCodeStatus () {
      this.policy.companyCode = this.nowComCode;
      this.textData.tComCodeStatusText = this.nowComCodeText;
      // companyCode(this.policy.companyCode, this.textData.tComCodeStatusText);
      this.comCodeStatusPopup = false;
    },
    // 婚姻状况
    tMaritalStatusPopup () {
      this.maritalStatusPopup = true;
    },
    onMaritalStatusChange (picker, values) {
      // companyCode(values);
      this.nowType5 = values[0].code;
      this.nowTypeText5 = values[0].text;
    },
    confirmMaritalStatus () {
      this.conApplication.tMaritalStatus = this.nowType5;
      this.textData.tMaritalStatusText = this.nowTypeText5;
      // companyCode(this.conApplication.tMaritalStatus, this.textData.tMaritalStatusText);
      this.maritalStatusPopup = false;
    },
    // 子女数量
    tChildNumPopup () {
      this.childNumPopup = true;
    },
    onChildNumChange (picker, values) {
      // this.toast(11);
      // companyCode(values);
      this.nowType6 = values[0].code;
      this.nowTypeText6 = values[0].text;
    },
    confirmChildNum () {
      this.conApplication.tChildNum = this.nowType6;
      this.textData.tChildNumText = this.nowTypeText6;
      // companyCode(this.conApplication.tChildNum, this.textData.tChildNumText);
      this.childNumPopup = false;
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.inputCon{
  width: 100%;
  overflow: hidden;
  background: #eee;
}
.mint-datetime-action {
    display: inline-block;
    width: 50%;
    text-align: center;
    line-height: 40px;
    font-size: 16px;
    color: #ff7200;
}
.block{
  width: 100%;
  border-bottom: 1px solid #eee;
  height: 11.5vw;
}
.block2{
  width: 100%;
  border-bottom: 1px solid #eee;
  height: 11.5vw;
}
.lre1{
  letter-spacing: 1.5vw;
}
.itemTit{
  width: 100%;
  height: 13.1vw;
  line-height: 13.1vw;
  padding: 0 4vw;
  font-size: 4vw;
  color: #ff7200;
  text-align: left;
}
.itemTit .ico{
  display: block;
  width: 5.8vw;
  height: 5.8vw;
  background: url(../assets/images/y_icon1.png) no-repeat center;
  -webkit-background-size: 100%;
  background-size: 100%;
  float: left;
  margin: 3.5vw 1vw 0 0;
}
.width-bx{
  width: 50vw;
}
.itemTit .ico2{
  background: url(../assets/images/y_icon2.png) no-repeat center;
  -webkit-background-size: 100%;
  background-size: 100%;
}
.itemCon{
  padding: 0 4vw;
  background: #fff;
  border-top: 1px solid #e1e1e1;
  border-bottom: 1px solid #e1e1e1;
  font-size: 4vw;
  color: #333;
}
.itemCon .secTit{
  line-height: 12vw;
  border-bottom: 1px solid #eee;
  text-align: left;
}
.secTit .t,.baseInfor li .t,.doubleItem .item .t,.singleItem .t{
  padding-right: 2vw;
  float: left;
}
.secTit .org{
  color: #ff7200;
  display: inline-block;
  float: left;
}
.baseInfor{
  width: 100%;
  overflow: hidden;
  text-align: left;
  padding: 0vw 0;
}
.baseInfor li{
  width: 50%;
  line-height: 11.5vw;
  float: left;
}
/*.baseInfor li:nth-child(2n-1){
  padding-right: 2%;
}
.baseInfor li:nth-child(2n){
  float: right;
}*/
.baseInfor li.nopb{
  padding-bottom: 0;
}
.baseInfor li .baseCon{
  font-size: 3.5vw;
  color: #666;
}
.baseInfor li .ipt{
  display: inline-block;
  width: 25vw;
  color: #666;
}
.baseInfor li .le1{
  letter-spacing: 1.5vw;
}
.baseInfor li .org{
  color: #ff7200;
  text-align: right;
  width: 20vw;
  margin-right: 1vw;
}
.doubleItem,.singleItem{
  width: 100%;
  border-bottom: 1px solid #eee;
  line-height: 11vw;;
  text-align: left;
}
.doubleItem .item{
  width: 48%;
  float:left;
  position: relative;
}
.doubleItem .item:nth-child(2){
  float: right;
}
.doubleItem .item .ipt{
  float: left;
  width: 20vw;
  line-height: 11vw;;
}
.doubleItem .item .ipt,.singleItem .item .ipt{
  font-size: 3.5vw;
  color: #666;
}
.doubleItem .item.pr,.singleItem .item.pr{
  position: relative;
}
.doubleItem .item.pr .select,.singleItem .item.pr .select{
  width: 100%;
  height: 11vw;;
  position: absolute;
  left:20vw;
  top:0;
  opacity: 0;
}
.doubleItem .item .rightArrow,.singleItem .item .rightArrow{
  line-height: 11vw;;
  text-align: right;
  float: right;
  padding-right: 6vw;
  background: url(../assets/images/y_arrowDown.png) no-repeat right center;
  -webkit-background-size:3.3vw;
  background-size: 3.3vw;
}
.singleItem textarea{
  width: 100%;
  font-family: '黑体';
  font-size: 3.5vw;
  color: #666;
  height: 18vw;
  margin: 3.5vw 0;
}
.singleItem:nth-last-child(1){
  border: none;
}
.singleItem .item{
  position: relative;
  overflow: hidden;
}
.conWrap{
  position: relative;
  padding-bottom: 14vw;
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