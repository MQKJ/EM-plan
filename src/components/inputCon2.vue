<template>
  <div class="inputCon2">
    <div class="conWrap">
      <div class="inputItem">
        <h3 class="itemTit"><span class="ico ico3"></span>备用联系人信息</h3>
        <div class="itemCon">
          <div class="doubleItem dif clearFix">
            <p class="item long">
              <label for="" class="t">姓　　名</label>
              <input type="text" placeholder="请填写联系人姓名" class="ipt import" v-model.trim="conApplication.backName">
            </p>
            <p class="item short pr">
              <label for="" class="t">关　　系</label>
              <input type="text" placeholder="请选择" class="ipt rightArrow import" v-model="textData.backHolderRelationText" readonly="readonly">
              <button @click="backNamePopup" class="btn"></button>
              <mt-popup v-model="bnamePopup" position="bottom" class="mint-datetime">
                <mt-picker
                  :slots="backName"
                  valueKey='text' @change="onbackNameChange" show-toolbar>
                  <span class="mint-datetime-action mint-datetime-cancel" @click="bnamePopup = false">取消</span>
                  <span class="mint-datetime-action mint-datetime-confirm" @click="confirmbackName">确定</span>
                </mt-picker>
              </mt-popup>
            </p>
          </div>
          <div class="singleItem clearFix">
            <p class="item full">
              <label for="" class="t">联系电话</label>
              <input type="tel" placeholder="请填写联系电话" class="ipt import" v-model.trim="conApplication.backMobile" maxlength="18">
            </p>
          </div>
        </div>
      </div>
      <div class="inputItem" v-if="noMarryS">
        <h3 class="itemTit"><span class="ico ico4"></span>您法定配偶的基本信息</h3>
        <div class="itemCon">
          <div class="doubleItem dif clearFix">
            <p class="item long">
              <label for="" class="t">姓　　名</label>
              <input type="text" placeholder="请填写您配偶姓名" class="ipt import" v-model.trim="conApplication.mateName">
            </p>
            <p class="item short pr">
              <label for="" class="t">称　　谓</label>
              <input type="text" placeholder="请选择" class="ipt rightArrow import" v-model="textData.mateSexText" readonly="readonly">
              <button @click="mateNamePopup" class="btn"></button>
              <mt-popup v-model="mnamePopup" position="bottom" class="mint-datetime">
                <mt-picker
                  :slots="mateName"
                  valueKey='text' @change="onmateNameChange" show-toolbar>
                  <span class="mint-datetime-action mint-datetime-cancel" @click="mnamePopup = false">取消</span>
                  <span class="mint-datetime-action mint-datetime-confirm" @click="confirmmateName">确定</span>
                </mt-picker>
              </mt-popup>
            </p>
          </div>
          <div class="singleItem clearFix">
            <p class="item pr">
              <label for="" class="t">证件类型</label>
              <input type="text" placeholder="请选择" class="ipt rightArrow import" v-model="textData.mateIdText">
              <button @click="idTypePopup" class="btn"></button>
              <mt-popup v-model="typePopup" position="bottom" class="mint-datetime">
                <mt-picker
                  :slots="idType"
                  valueKey='text' @change="onidTypeChange" show-toolbar>
                  <span class="mint-datetime-action mint-datetime-cancel" @click="typePopup = false">取消</span>
                  <span class="mint-datetime-action mint-datetime-confirm" @click="confirmidType">确定</span>
                </mt-picker>
              </mt-popup>
            </p>
          </div>
          <div class="singleItem clearFix">
            <p class="item full">
              <label for="" class="t">证件号码</label>
              <input type="text" placeholder="请填写您配偶的证件号码" class="ipt import" v-model.trim="conApplication.mateCertNum" @blur='idTypeNumBlur' @focus='changeInput'>
            </p>
          </div>
          <div class="doubleItem clearFix">
            <p class="item pr"> 
              <label for="" class="t" style="display: inline;">出生日期</label>
              <input type="text"style="display: inline;width: 58%" :placeholder="isMateIdCard ? '': '请选择'" class="ipt rightArrow import" :class="{noArrow: isMateIdCard}" v-model="conApplication.tMateBirth" readonly="readonly">
              <button @click='birthDayPicker' class="btn" style="width: 61%" v-show="!isMateIdCard">触发日期</button>
              <mt-datetime-picker ref="birthPicker" type="date" :start-date="startDate" :end-date="endDate" year-format="{value} 年" month-format="{value} 月"  date-format="{value} 日" v-model="birthday" @confirm="confirmBth()"></mt-datetime-picker>
            </p>
            <p class="item short pr">
              <label for="" class="t">民　　族</label>
              <input type="text" placeholder="请选择" v-model="textData.mateNationText" class="ipt rightArrow import">
              <button @click="tNationPopup" class="btn"></button>
              <mt-popup v-model="nationPopup" position="bottom" class="mint-datetime">
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
            <p class="item full">
              <label for="" class="t">联系电话</label>
              <input type="tel" placeholder="请填写您配偶的联系电话" class="ipt import" v-model.trim="conApplication.mateMibile" maxlength="18">
            </p>
          </div>
          <div class="singleItem clearFix">
            <p class="item pr">
              <label for="" class="t">所在行业</label>
              <input type="text" placeholder="请选择" v-model="textData.mateIndustryText" class="ipt rightArrow" readonly="readonly">
              <button @click="mateIndustryPopup" class="btn"></button>
              <mt-popup v-model="mIndustryPopup" position="bottom" class="mint-datetime">
                <mt-picker
                  :slots="mateIndustry"
                  valueKey='text' @change="onmateIndustryChange" show-toolbar>
                  <span class="mint-datetime-action mint-datetime-cancel" @click="mIndustryPopup = false">取消</span>
                  <span class="mint-datetime-action mint-datetime-confirm" @click="confirmmateIndustry">确定</span>
                </mt-picker>
              </mt-popup>
            </p>
          </div>
        </div>
      </div>
      <div class="inputItem">
        <h3 class="itemTit"><span class="ico ico5"></span>其他家庭成员基础信息</h3>
        <div class="itemCon">
          <div class="chooseCon clearFix">
            <p class="tit">您或配偶父母是否考虑入住</p>
            <div class="chooseItem clearFix " id="parentHold">
              <p class="type" @click="showMe()" :class="{active: textData.chooseYes}" value='1'><span id="yes"></span><label for="yes">是</label></p>
              <p class="type" @click="hideMe()" value='2' :class="{active: textData.chooseNo}"><span id="no"></span><label for="no">否</label></p>
            </div>
          </div>
          <div class="chooseCon dif clearFix" v-show="textData.chooseYes">
            <p class="tit">入住对象</p>
            <div class="chooseItem clearFix">
              <p class="type" :class="{active: textData.fNameShow}" @click="toggleParent('fNameShow')"><span id="father"></span><label for="father">本人父亲</label></p>
              <p class="type" @click="toggleParent('mNameShow')" :class="{active: textData.mNameShow}"><span id="mother"></span><label for="mother">本人母亲</label></p>
              <p class="type" @click="toggleParent('lfNameShow')" v-show="noMarry" :class="{active: textData.lfNameShow}"><span id="mateFather"></span><label for="mateFather">配偶父亲</label></p>
              <p class="type" @click="toggleParent('lmNameShow')" v-show="noMarry" :class="{active: textData.lmNameShow}"><span id="mateMother"></span><label for="mateMother">配偶母亲</label></p>
            </div>
          </div>
        </div>
        <div class="grayBg"></div>
        <div class="fName" v-show="textData.fNameShow">
          <div class="itemCon">
            <h4 class="sTit">您本人父亲</h4>
            <div class="doubleItem dif clearFix">
              <p class="item long">
                <label for="" class="t">姓　　名</label>
                <input type="text" placeholder="请填写您父亲姓名" class="ipt import" v-model.trim="conApplication.fName">
              </p>
              <p class="item short pr">
                <label for="" class="t">年　　龄</label>
                <input type="text" placeholder="填写年龄" class="ipt import" v-model.trim="conApplication.fAge">
              </p>
            </div>
            <div class="singleItem clearFix">
              <p class="item pr">
                <label for="tfIdType" class="t">证件类型</label>
                <input id="tfIdType" type="text" placeholder="请选择" class="ipt rightArrow import" v-model="textData.fIdTypeText" readonly="readonly" @click="idTypeShowPopUp('fIdPop')">
                <mt-popup v-model="fIdPop" position="bottom" class="mint-datetime">
                <mt-picker
                  :slots="idType"
                  valueKey='text' @change="idTypeChange" show-toolbar>
                  <span class="mint-datetime-action mint-datetime-cancel" @click="fIdPop = false">取消</span>
                  <span class="mint-datetime-action mint-datetime-confirm" @click='idTypeConfirm("fIdType","fIdTypeText", "fIdPop")'>确定</span>
                </mt-picker>
              </mt-popup>
            </p>
            </div>
            <div class="singleItem clearFix">
              <p class="item full">
                <label for="" class="t">证件号码</label>
                <input type="text" placeholder="请填写您父亲的证件号码" class="ipt import" v-model.trim="conApplication.fCertNum">
              </p>
            </div>
            <div class="singleItem clearFix">
              <p class="item full">
                <label for="" class="t">联系电话</label>
                <input type="text" placeholder="请填写您父亲的联系电话,若没有则填无" class="ipt import" v-model.trim="conApplication.fPhone">
              </p>
            </div>
            <div class="singleItem clearFix">
              <p class="item pr">
                <label for="" class="t">现居城市</label>
                <input type="text" placeholder="请选择" class="ipt rightArrow import" v-model="conApplication.fLiveCity" readonly="readonly"
                @click="openAddressPopUp('fAddressPopUp')">
              </p>
            </div>
          </div>
          <div class="grayBg"></div>
        </div>
        <div class="mName" v-show="textData.mNameShow">
          <div class="itemCon">
            <h4 class="sTit">您本人母亲</h4>
            <div class="doubleItem dif clearFix">
              <p class="item long">
                <label for="" class="t">姓　　名</label>
                <input type="text" placeholder="请填写您母亲姓名" class="ipt import" v-model.trim="conApplication.mName">
              </p>
              <p class="item short pr">
                <label for="" class="t">年　　龄</label>
                <input type="text" placeholder="填写年龄" class="ipt import" v-model.trim="conApplication.mAge">
              </p>
            </div>
            <div class="singleItem clearFix">
              <p class="item pr">
                <label for="tmIdType" class="t">证件类型</label>
                <input id="tmIdType" type="text" placeholder="请选择" class="ipt rightArrow import" v-model="textData.mIdTypeText" readonly="readonly" @click="idTypeShowPopUp('mIdPop')">
                <mt-popup v-model="mIdPop" position="bottom" class="mint-datetime">
                <mt-picker
                  :slots="idType"
                  valueKey='text' @change="idTypeChange" show-toolbar>
                  <span class="mint-datetime-action mint-datetime-cancel" @click="mIdPop = false">取消</span>
                  <span class="mint-datetime-action mint-datetime-confirm" @click='idTypeConfirm("mIdType","mIdTypeText", "mIdPop")'>确定</span>
                </mt-picker>
              </mt-popup>
              </p>
            </div>
            <div class="singleItem clearFix">
              <p class="item full">
                <label for="" class="t">证件号码</label>
                <input type="text" placeholder="请填写您母亲的证件号码" class="ipt import" v-model.trim="conApplication.mCertNum">
              </p>
            </div>
            <div class="singleItem clearFix">
              <p class="item full">
                <label for="" class="t">联系电话</label>
                <input type="text" placeholder="请填写您母亲的联系电话,若没有则填无" class="ipt import" v-model.trim="conApplication.mPhone">
              </p>
            </div>
            <div class="singleItem clearFix">
              <p class="item pr">
                <label for="" class="t">现居城市</label>
                <input type="text" placeholder="请选择" class="ipt rightArrow import" v-model="conApplication.mLiveCity" readonly="readonly" @click="openAddressPopUp('mAddressPopUp')">
              </p>
            </div>
          </div>
          <div class="grayBg"></div>
        </div>
        <div class="mName" v-show="textData.lfNameShow">
          <div class="itemCon">
            <h4 class="sTit">您配偶父亲</h4>
            <div class="doubleItem dif clearFix">
              <p class="item long">
                <label for="" class="t">姓　　名</label>
                <input type="text" placeholder="请填写您配偶父亲姓名" class="ipt import" v-model.trim="conApplication.lfName">
              </p>
              <p class="item short pr">
                <label for="" class="t">年　　龄</label>
                <input type="text" placeholder="填写年龄" class="ipt import" v-model.trim="conApplication.lfAge">
              </p>
            </div>
            <div class="singleItem clearFix">
              <p class="item pr">
                <label for="tmIdType" class="t">证件类型</label>
                <input id="tmIdType" type="text" placeholder="请选择" class="ipt rightArrow import" v-model="textData.lfIdTypeText" readonly="readonly" @click="idTypeShowPopUp('lfIdPop')">
                <mt-popup v-model="lfIdPop" position="bottom" class="mint-datetime">
                <mt-picker
                  :slots="idType"
                  valueKey='text' @change="idTypeChange" show-toolbar>
                  <span class="mint-datetime-action mint-datetime-cancel" @click="lfIdPop = false">取消</span>
                  <span class="mint-datetime-action mint-datetime-confirm" @click='idTypeConfirm("lfIdType","lfIdTypeText", "lfIdPop")'>确定</span>
                </mt-picker>
              </mt-popup>
              </p>
            </div>
            <div class="singleItem clearFix">
              <p class="item full">
                <label for="" class="t">证件号码</label>
                <input type="text" placeholder="请填写您配偶父亲的证件号码" class="ipt import" v-model.trim="conApplication.lfCertNum">
              </p>
            </div>
            <div class="singleItem clearFix">
              <p class="item full">
                <label for="" class="t">联系电话</label>
                <input type="text" placeholder="请填写您配偶父亲的联系电话,若没有则填无" class="ipt import" v-model.trim="conApplication.lfPhone">
              </p>
            </div>
            <div class="singleItem clearFix">
              <p class="item pr">
                <label for="" class="t">现居城市</label>
                <input type="text" placeholder="请选择" class="ipt rightArrow import" v-model="conApplication.lfLiveCity" readonly="readonly" @click="openAddressPopUp('lfAddressPopUp')">
              </p>
            </div>
          </div>
          <div class="grayBg"></div>
        </div>
        <div class="mName" v-show="textData.lmNameShow">
          <div class="itemCon">
            <h4 class="sTit">您配偶母亲</h4>
            <div class="doubleItem dif clearFix">
              <p class="item long">
                <label for="" class="t">姓　　名</label>
                <input type="text" placeholder="请填写您配偶母亲姓名" class="ipt import" v-model.trim="conApplication.lmName">
              </p>
              <p class="item short pr">
                <label for="" class="t">年　　龄</label>
                <input type="text" placeholder="填写年龄" class="ipt import" v-model.trim="conApplication.lmAge">
              </p>
            </div>
            <div class="singleItem clearFix">
              <p class="item pr">
                <label for="tmIdType" class="t">证件类型</label>
                <input id="tmIdType" type="text" placeholder="请选择" class="ipt rightArrow import" v-model="textData.lmIdTypeText" readonly="readonly" @click="idTypeShowPopUp('lmIdPop')">
                <mt-popup v-model="lmIdPop" position="bottom" class="mint-datetime">
                <mt-picker
                  :slots="idType"
                  valueKey='text' @change="idTypeChange" show-toolbar>
                  <span class="mint-datetime-action mint-datetime-cancel" @click="lmIdPop = false">取消</span>
                  <span class="mint-datetime-action mint-datetime-confirm" @click='idTypeConfirm("lmIdType","lmIdTypeText", "lmIdPop")'>确定</span>
                </mt-picker>
              </mt-popup>
              </p>
            </div>
            <div class="singleItem clearFix">
              <p class="item full">
                <label for="" class="t">证件号码</label>
                <input type="text" placeholder="请填写您配偶母亲的证件号码" class="ipt import" v-model.trim="conApplication.lmCertNum">
              </p>
            </div>
            <div class="singleItem clearFix">
              <p class="item full">
                <label for="" class="t">联系电话</label>
                <input type="text" placeholder="请填写您配偶母亲的联系电话,若没有则填无" class="ipt import" v-model.trim="conApplication.lmPhone">
              </p>
            </div>
            <div class="singleItem clearFix">
              <p class="item pr">
                <label for="" class="t">现居城市</label>
                <input type="text" placeholder="请选择" class="ipt rightArrow import" v-model="conApplication.lmLiveCity" readonly="readonly" @click="openAddressPopUp('lmAddressPopUp')">
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div  class="cc-btn" @click="check">
      <div class='a'><p class="btn-keep">保存</p></div>
    </div>
    <!-- 身份类型组件 -->
    <!-- 地址组件  父亲 -->
    <mt-popup v-model="fAddressPopUp" position="bottom" class="mint-datetime">
      <mt-picker
        :slots="faddressSlots"  @change="faddressChange" show-toolbar>
        <span class="mint-datetime-action mint-datetime-cancel" @click="fAddressPopUp = false">取消</span>
        <span class="mint-datetime-action mint-datetime-confirm" @click="confirmAddress('fLiveCity', 'fAddressPopUp')">确定</span>
      </mt-picker>
    </mt-popup>
    <!-- 地址组件  母亲 -->
    <mt-popup v-model="mAddressPopUp" position="bottom" class="mint-datetime">
      <mt-picker
        :slots="maddressSlots"  @change="maddressChange" show-toolbar>
        <span class="mint-datetime-action mint-datetime-cancel" @click="mAddressPopUp = false">取消</span>
        <span class="mint-datetime-action mint-datetime-confirm" @click="confirmAddress('mLiveCity', 'mAddressPopUp')">确定</span>
      </mt-picker>
    </mt-popup>
    <!-- 地址组件  配偶父亲 -->
    <mt-popup v-model="lfAddressPopUp" position="bottom" class="mint-datetime">
      <mt-picker
        :slots="lfaddressSlots"  @change="lfaddressChange" show-toolbar>
        <span class="mint-datetime-action mint-datetime-cancel" @click="lfAddressPopUp = false">取消</span>
        <span class="mint-datetime-action mint-datetime-confirm" @click="confirmAddress('lfLiveCity', 'lfAddressPopUp')">确定</span>
      </mt-picker>
    </mt-popup>
    <!-- 地址组件  配偶母亲 -->
    <mt-popup v-model="lmAddressPopUp" position="bottom" class="mint-datetime">
      <mt-picker
        :slots="lmaddressSlots"  @change="lmaddressChange" show-toolbar>
        <span class="mint-datetime-action mint-datetime-cancel" @click="lmAddressPopUp = false">取消</span>
        <span class="mint-datetime-action mint-datetime-confirm" @click="confirmAddress('lmLiveCity', 'lmAddressPopUp')">确定</span>
      </mt-picker>
    </mt-popup>
  </div>
</template>
<script>
import $ from 'jquery';
import validate from '../utils/validate.js';
import {mprovince, mcity, mdistrict} from '../utils/city_data.js';
import {tNation} from '../utils/nation_data.js';
import {backNameCode, sexCode, idTypeCode, mateIndustryCode} from '../utils/codeTable.js';
import {parentInfo, mateInfo} from '../utils/content.js';
export default {
  name: 'inputCon2',
  mixins: [validate],
  data () {
    return {
      live: '',
      fatherLive: '',
      motherLive: '',
      mateFatherlive: '',
      mateMotherlive: '',
      idTypeText3: '',
      noMarry: true,
      noMarryS: '',
      button: true,
      conApplication: '',
      textData: {
        backHolderRelationText: '', // 备用人的关系
        mateSexText: '', // 配偶的称谓
        mateNationText: '', // 配偶的民族
        mateIndustryText: '', // 所在行业
        mateIdText: '', // 配偶的身份类型文字
        fIdTypeText: '', // 父亲的身份类型文字
        mIdTypeText: '', // 母亲的身份类型文字
        lfIdTypeText: '', // 配偶父亲的身份类型文字
        lmIdTypeText: '', // 配偶母亲的身份类型文字
        chooseYes: false, // 初始化父母不勾选考虑入住社区按钮
        chooseNo: false, // 初始化配偶父母不勾选考虑入住社区按钮
        fNameShow: false, // 初始化 父亲不勾选入住社区
        mNameShow: false, // 初始化 母亲不勾选入住社区
        lfNameShow: false, // 初始化 配偶父亲不勾选入住社区
        lmNameShow: false // 初始化 配偶母亲不勾选入住社区
      },
      active: false,
      startDate: new Date('1940-01-01'),
      endDate: new Date(),
      birthday: '',
      isActive: false,
      bnamePopup: false,
      mnamePopup: false,
      typePopup: false,
      nationPopup: false,
      mIndustryPopup: false,
      isMateIdCard: true,
      backName: [
        {
          flex: 1,
          values: backNameCode,
          className: 'backName',
          textAlign: 'center',
          defaultIndex: 0
        }
      ],
      mateName: [
        {
          flex: 1,
          values: sexCode,
          className: 'mateName',
          textAlign: 'center',
          defaultIndex: 0
        }
      ],
      idType: [
        {
          flex: 1,
          values: idTypeCode,
          className: 'idType',
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
      mateIndustry: [
        {
          flex: 1,
          values: mateIndustryCode,
          className: 'mateIndustry',
          textAlign: 'center',
          defaultIndex: 0
        }
      ],
      fIdPop: false,
      mIdPop: false,
      lfIdPop: false,
      lmIdPop: false,
      fAddressPopUp: false,
      mAddressPopUp: false,
      lfAddressPopUp: false,
      lmAddressPopUp: false,
      fcityIndex: 0,
      fdistrictIndex: 0,
      faddressSlots: [
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
      ],
      mcityIndex: 0,
      mdistrictIndex: 0,
      maddressSlots: [
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
      ],
      lfcityIndex: 0,
      lfdistrictIndex: 0,
      lfaddressSlots: [
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
      ],
      lmcityIndex: 0,
      lmdistrictIndex: 0,
      lmaddressSlots: [
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

    this.initAddress();
    this.getSessionStorage();
    this.marryStatus();
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
    // sessionStorage取值
    getSessionStorage () {
      if (sessionStorage.getItem('conApplication')) {
        this.conApplication = JSON.parse(sessionStorage.getItem('conApplication'));
      }
      if (sessionStorage.getItem('textData')) {
        var textDataFromInputCon = JSON.parse(sessionStorage.getItem('textData'));
        Object.assign(this.textData, textDataFromInputCon);
      }
    },
    // 初始化地址
    initAddress () {
      this.faddressSlots[0].values = mprovince;
      this.faddressSlots[1].values = mcity[this.fcityIndex];
      this.faddressSlots[2].values = mdistrict[this.fcityIndex][this.fdistrictIndex];

      this.maddressSlots[0].values = mprovince;
      this.maddressSlots[1].values = mcity[this.mcityIndex];
      this.maddressSlots[2].values = mdistrict[this.mcityIndex][this.mdistrictIndex];

      this.lfaddressSlots[0].values = mprovince;
      this.lfaddressSlots[1].values = mcity[this.lfcityIndex];
      this.lfaddressSlots[2].values = mdistrict[this.lfcityIndex][this.lfdistrictIndex];

      this.lmaddressSlots[0].values = mprovince;
      this.lmaddressSlots[1].values = mcity[this.lmcityIndex];
      this.lmaddressSlots[2].values = mdistrict[this.lmcityIndex][this.lmdistrictIndex];
    },
    openAddressPopUp (popup) {
      this[popup] = true;
    },
    faddressChange (picker, values) {
      this.midAddProvince = values[0];
      this.fcityIndex = mprovince.indexOf(values[0]);
      this.faddressSlots[1].values = mcity[this.fcityIndex];
      this.midAddCity = values[1];
      this.fdistrictIndex = mcity[this.fcityIndex].indexOf(values[1]);
      this.faddressSlots[2].values = mdistrict[this.fcityIndex][this.fdistrictIndex];
      this.midAddArea = values[2];
    },
    maddressChange (picker, values) {
      this.midAddProvince = values[0];
      this.mcityIndex = mprovince.indexOf(values[0]);
      this.maddressSlots[1].values = mcity[this.mcityIndex];
      this.midAddCity = values[1];
      this.mdistrictIndex = mcity[this.mcityIndex].indexOf(values[1]);
      this.maddressSlots[2].values = mdistrict[this.mcityIndex][this.mdistrictIndex];
      this.midAddArea = values[2];
    },
    lfaddressChange (picker, values) {
      this.midAddProvince = values[0];
      this.lfcityIndex = mprovince.indexOf(values[0]);
      this.lfaddressSlots[1].values = mcity[this.lfcityIndex];
      this.midAddCity = values[1];
      this.lfdistrictIndex = mcity[this.lfcityIndex].indexOf(values[1]);
      this.lfaddressSlots[2].values = mdistrict[this.lfcityIndex][this.lfdistrictIndex];
      this.midAddArea = values[2];
    },
    lmaddressChange (picker, values) {
      this.midAddProvince = values[0];
      this.lmcityIndex = mprovince.indexOf(values[0]);
      this.lmaddressSlots[1].values = mcity[this.lmcityIndex];
      this.midAddCity = values[1];
      this.lmdistrictIndex = mcity[this.lmcityIndex].indexOf(values[1]);
      this.lmaddressSlots[2].values = mdistrict[this.lmcityIndex][this.lmdistrictIndex];
      this.midAddArea = values[2];
    },
    confirmAddress (city, popup) {
      this.conApplication[city] = this.midAddProvince + this.midAddCity + this.midAddArea;
      this[popup] = false;
    },
    // 公用身份类型确定
    idTypeConfirm (code, codeText, popup) {
      this.textData[codeText] = this.parentMidText;
      this.conApplication[code] = this.parentMidId;
      this[popup] = false;
    },
    // 公用身份类型change
    idTypeChange (picker, values) {
      this.parentMidId = values[0].code;
      this.parentMidText = values[0].text;
    },
    // 公用身份类型选择器触发
    idTypeShowPopUp (popup) {
      this[popup] = true;
    },
    marryStatus () {
      if (this.conApplication.tMaritalStatus === '1' || this.conApplication.tMaritalStatus === '3') {
        this.noMarryS = false;
        this.noMarry = false;
        this.textData.lfNameShow = false; // 未婚、离异 配偶父母信息隐藏
        this.textData.lmNameShow = false;
        this.clearLParentInfo(); // 未婚、离异 清除缓存的配偶父母信息
        // companyCode(this.noMarry);
        // companyCode(this.noMarryS);
        return;
      };
      if (this.conApplication.tMaritalStatus === '2') {
        this.noMarry = true;
        this.noMarryS = true;
        // companyCode(this.noMarry);
        // companyCode(this.noMarryS);
        return;
      };
      if (this.conApplication.tMaritalStatus === '4') {
        this.noMarry = true;
        this.noMarryS = false;
        this.clearMateInfo();
        // companyCode(this.noMarry);
        // companyCode(this.noMarryS);
        return;
      };
      this.noMarryS === '2' && backNameCode.length === 5 ? backNameCode.splice(1, 1) : backNameCode;
      this.backName.values = backNameCode;
    },
    showMe () {
      this.textData.chooseYes = true;
      this.textData.chooseNo = false;
    },
    hideMe () {
      this.textData.chooseNo = true;
      this.textData.chooseYes = false;
      this.textData.fNameShow = false;
      this.textData.mNameShow = false;
      this.textData.lfNameShow = false;
      this.textData.lmNameShow = false;
    },
    toggleParent (val) {
      this.textData[val] = !this.textData[val];
    },
    // 确定按钮
    check () {
      // companyCode(this.conApplication);
      this.setValidateData();
      if (this.conApplication.mateIdType === '0' && this.conApplication.mateCertNum === '') {
        this.toast('身份证号码不能为空！');
        return;
      };
      if (this.conApplication.mateIdType === '13' && this.conApplication.mateCertNum === '') {
        this.toast('护照号码不能为空！');
        return;
      };
      if (this.validateEngine(this.validateData)) {
        var IDNum = this.conApplication.mateCertNum;
        // companyCode(IDNum);
        if (this.isIdCard(IDNum)) {
          var sex = IDNum.substr(16, 1) % 2; // 身份证截取性别
          var nameSex = Number(this.conApplication.mateSex); // 称谓
          var tMateBirth = '';
          tMateBirth = IDNum.slice(6, 10) + '-' + IDNum.slice(10, 12) + '-' + IDNum.slice(12, 14);
          if (sex === 1 && nameSex === '') {
            this.toast('请先选择称谓！');
            return;
          } else if (sex === 1 && nameSex === 1) {
            tMateBirth = IDNum.slice(6, 10) + '-' + IDNum.slice(10, 12) + '-' + IDNum.slice(12, 14);
            this.conApplication.tMateBirth = tMateBirth;
          } else if (sex === 0 && nameSex === 2) {
            tMateBirth = IDNum.slice(6, 10) + '-' + IDNum.slice(10, 12) + '-' + IDNum.slice(12, 14);
            this.conApplication.tMateBirth = tMateBirth;
          } else {
            this.toast('称谓和身份证性别不符！');
            return;
          };
          if (this.textData.mateNationText === '') {
            this.toast('请选择民族！');
            return;
          };
        };
        if (this.nowType3 === '13') {
          if (this.conApplication.tMateBirth === '') {
            this.toast('请选择出生日期！');
            return;
          };
        };
        this.setSessionStorage();
        // companyCode(this.conApplication.parentHold);
        // companyCode('校验成功，继续往下处理逻辑');
        this.$router.push(this.routerFixed + '/checkCommunity');
      }
    },
    // 清除父母信息
    clearParentInfo () {
      Object.assign(this.conApplication, parentInfo.f, parentInfo.m, parentInfo.lf, parentInfo.lm);
    },
    // 清楚某一个信息
    clearOneParentInfo (who) {
      Object.assign(this.conApplication, parentInfo[who]);
    },
    clearMateInfo () {
      Object.assign(this.conApplication, mateInfo);
    },
    // 未婚，离异，清除配偶父母信息
    clearLParentInfo () {
      Object.assign(this.conApplication, parentInfo.lf, parentInfo.lm);
    },
    // 本地存储信息
    setSessionStorage () {
      if (!this.noMarry) {
        this.clearMateInfo();
      };
      if (this.textData.chooseNo) {
        this.clearParentInfo();
      };
      if (!this.textData.fNameShow) this.clearOneParentInfo('f');
      if (!this.textData.mNameShow) this.clearOneParentInfo('m');
      if (!this.textData.lfNameShow) this.clearOneParentInfo('lf');
      if (!this.textData.lmNameShow) this.clearOneParentInfo('lm');

      this.conApplication.parentHold = Number(this.textData.fNameShow || this.textData.mNameShow);
      this.conApplication.mateParentHold = Number(this.textData.lfNameShow || this.textData.lmNameShow);

      sessionStorage.setItem('conApplication', JSON.stringify(this.conApplication));
      sessionStorage.setItem('textData', JSON.stringify(this.textData));
    },
    // 校验引擎
    validateEngine: function (data) {
      for (var i = 0; i < data.length; i++) {
        if (!this[data[i].type](data[i].value)) {
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
          type: 'isName',
          value: this.conApplication.backName,
          info: '姓名长度需为3至27个字符，且不得有数字出现。若为中国籍，姓名间隔符请使用“·”录入。'
        },
        {
          type: 'isNoEmpty',
          value: this.textData.backHolderRelationText,
          info: '请选择关系！'
        },
        {
          type: 'isNoEmpty',
          value: this.conApplication.backMobile,
          info: '手机号码不能为空，请输入！'
        },
        {
          type: 'isPhoneNum',
          value: this.conApplication.backMobile,
          info: '联系电话最多可录入18位数字，请重新填写。'
        }];

      var mateArr = [
        {
          type: 'isName',
          value: this.conApplication.mateName,
          info: '姓名长度需为3至27个字符，且不得有数字出现。若为中国籍，姓名间隔符请使用“·”录入。'
        },
        {
          type: 'isNoEmpty',
          value: this.textData.mateSexText,
          info: '请选择称谓！'
        },
        {
          type: 'isNoEmpty',
          value: this.textData.mateIdText,
          info: '请选择证件类型'
        },
        {
          type: this.whichIdType(this.conApplication.mateIdType),
          value: this.conApplication.mateCertNum,
          info: '证件号码格式有误，请重新填写'
        },
        {
          type: 'isNoEmpty',
          value: this.conApplication.mateMibile,
          info: '手机号码不能为空，请输入！'
        },
        {
          type: 'isPhoneNum',
          value: this.conApplication.mateMibile,
          info: '联系电话最多可录入18位数字，请重新填写。'
        },
        {
          type: 'isNoEmpty',
          value: this.textData.mateIndustryText,
          info: '请选择所在行业！'
        }];
      // 如果有配偶 增加配偶信息校验
      if (this.noMarryS) this.validateData = this.validateData.concat(mateArr);

      var parentChooseStatus = {
          type: 'isBooblean',
          value: this.textData.chooseNo || this.textData.chooseYes,
          info: '请选择是否您或配偶父母考虑入住'
        };

      this.validateData.push(parentChooseStatus);

      if (this.textData.chooseNo) {
        return;
      } else { // 选择入住对象
        var checkIn = {
          type: 'isBooblean',
          value: this.textData.fNameShow || this.textData.mNameShow || this.textData.lfNameShow || this.textData.lmNameShow,
          info: '请选择入住对象！'
        };
        this.validateData.push(checkIn);
      }
      if (this.textData.fNameShow) {
        var objF = this.configCheckParentData('f');
        this.validateData = this.validateData.concat(this.configCheckParent(objF, '本人父亲'));
      }

      if (this.textData.mNameShow) {
        var objM = this.configCheckParentData('m');
        this.validateData = this.validateData.concat(this.configCheckParent(objM, '本人母亲'));
      }

      if (this.textData.lfNameShow) {
        var objLf = this.configCheckParentData('lf');
        this.validateData = this.validateData.concat(this.configCheckParent(objLf, '配偶父亲'));
      }

      if (this.textData.lmNameShow) {
        var objLm = this.configCheckParentData('lm');
        this.validateData = this.validateData.concat(this.configCheckParent(objLm, '配偶母亲'));
      }
    },
    configCheckParentData (who) {
      var obj = {
          nameText: this.conApplication[who + 'Name'],
          ageText: this.conApplication[who + 'Age'],
          certNum: this.conApplication[who + 'CertNum'],
          idType: this.conApplication[who + 'IdType'],
          fPhoneText: this.conApplication[who + 'Phone'],
          address: this.conApplication[who + 'LiveCity']
        };
        return obj;
    },
    whichIdType (idType) {
      return idType === '0' ? 'isIdCard' : 'isHid';
    },
    confirmBth () {
      this.conApplication.tMateBirth = this.GMTToStr(this.birthday);
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
      this.$refs.birthPicker.open();
    },
    // 关系
    backNamePopup () {
      this.bnamePopup = true;
    },
    onbackNameChange (picker, values) {
      // companyCode(values);
      this.nowType = values[0].code;
      this.nowTypeText = values[0].text;
    },
    confirmbackName () {
      this.conApplication.backHolderRelation = this.nowType;
      this.textData.backHolderRelationText = this.nowTypeText;
      // companyCode(this.conApplication.backHolderRelation, this.textData.backHolderRelationText);
      this.bnamePopup = false;
    },
    // 称谓
    mateNamePopup () {
      this.mnamePopup = true;
    },
    onmateNameChange (picker, values) {
      // values[0] = values[0] || {code: '01', text: '先生'};
      // companyCode(values);
      this.nowType2 = values[0].code;
      this.nowTypeText2 = values[0].text;
    },
    confirmmateName () {
      this.conApplication.mateSex = this.nowType2;
      this.textData.mateSexText = this.nowTypeText2;
      // companyCode(this.conApplication.mateSex, this.textData.mateSexText);
      this.mnamePopup = false;
    },
    // 证件类型
    idTypePopup () {
      this.typePopup = true;
    },
    onidTypeChange (picker, values) {
      // companyCode(values);
      this.nowType3 = values[0].code;
      this.nowTypeText3 = values[0].text;
      // companyCode(this.nowType3);
      // companyCode(this.conApplication.tMateBirth);
      // companyCode(this.conApplication.mateCertNum);
      if (this.nowType3 === '13') {
        this.conApplication.tMateBirth = '';
        this.conApplication.mateCertNum = '';
      }
      // companyCode(this.nowType3, this.nowTypeText3, 1);
    },
    // 配偶身份类型选择器确定按钮
    confirmidType () {
      this.conApplication.mateIdType = this.nowType3;
      this.textData.mateIdText = this.nowTypeText3;
      this.isMateIdCard = this.textData.mateIdText === '身份证';
      this.conApplication.mateCertNum = '';
      this.conApplication.tMateBirth = '';
      this.typePopup = false;
    },
    // 证件号输入时校验是否选择证件类型
    changeInput () {
      var IDNum = this.conApplication.mateIdType;
      // companyCode(IDNum);
      if (IDNum === '') {
        this.toast('请先选择证件类型！');
      };
    },
    // 配偶身份信息失焦
    idTypeNumBlur () {
      if (!this.isMateIdCard) {
        // 校验护照
        return;
      };
      var tMateBirth = '';
      var IDNum = this.conApplication.mateCertNum;
      if (this.isIdCard(IDNum)) {
          tMateBirth = IDNum.slice(6, 10) + '-' + IDNum.slice(10, 12) + '-' + IDNum.slice(12, 14);
      };
      this.conApplication.tMateBirth = tMateBirth;
    },
    // 身份证截取生日
    // getBirthday (IDNum) {
    //   var birthday = IDNum.slice(6, 10) + '-' + IDNum.slice(10, 12) + '-' + IDNum.slice(12, 14);
    //   return birthday;
    // },
    // 民族
    tNationPopup () {
      this.nationPopup = true;
    },
    onNationChange (picker, values) {
      // values[0] = values[0] || {code: '01', text: '汉族'};
      // companyCode(values);
      this.nowtNationType = values[0].code;
      this.nowtNationTypeText = values[0].text;
    },
    confirmNation () {
      this.conApplication.mateNation = this.nowtNationType;
      this.textData.mateNationText = this.nowtNationTypeText;
      // companyCode(this.conApplication.mateNation, this.textData.mateNationText);
      this.nationPopup = false;
    },
    // 所在行业
    mateIndustryPopup () {
      this.mIndustryPopup = true;
    },
    onmateIndustryChange (picker, values) {
      // values[0] = values[0] || {code: '01', text: '汉族'};
      // companyCode(values);
      this.nowmateIndustry = values[0].code;
      this.nowmateIndustryText = values[0].text;
    },
    // 所属行业确定按钮
    confirmmateIndustry () {
      this.conApplication.mateIndustry = this.nowmateIndustry;
      this.textData.mateIndustryText = this.nowmateIndustryText;
      // companyCode(this.conApplication.mateIndustry, this.textData.mateIndustryText);
      this.mIndustryPopup = false;
    },
    getAgeFormCerm (certNum) {
      var nowDate = new Date();
      var nowMonth = nowDate.getMonth() + 1;
      var nowDay = nowDate.getDate();

      var birthYear = Number(certNum.slice(6, 10));
      var birthMonth = Number(certNum.slice(10, 12));
      var birthDay = Number(certNum.slice(12, 14));

      var age = nowDate.getFullYear() - birthYear - 1;

      if (birthMonth < nowMonth || birthMonth === nowMonth && birthDay <= nowDay) age++;
      return age;
    },
    isSameAge (idType, certNum, ageText) {
      var isSame = true;
      if (idType === '0') isSame = this.getAgeFormCerm(certNum) === Number(ageText);

      return isSame;
    },
    configCheckParent (obj, who) {
      var subCheckArr = [
        {
          type: 'isNoEmpty',
          value: obj.nameText,
          info: '请输入' + who + '姓名！'
        },
        {
          type: 'isName',
          value: obj.nameText,
          info: who + '姓名长度需为3至27个字符，且不得有数字出现。若为中国籍，姓名间隔符请使用“·”录入。'
        },
        {
          type: 'isNoEmpty',
          value: obj.ageText,
          info: '请输入' + who + '年龄！'
        },
        {
          type: 'isAge',
          value: obj.ageText,
          info: who + '年龄只能输入30-120之间的整数。'
        },
        {
          type: 'isNoEmpty',
          value: obj.idType,
          info: '请选择' + who + '证件类型！'
        },
        {
          type: 'isNoEmpty',
          value: obj.certNum,
          info: '请输入' + who + '证件号码！'
        },
        {
          type: this.whichIdType(obj.idType),
          value: obj.certNum,
          info: who + '证件号码有误，请重新填写！'
        },
        {
          type: 'isBooblean',
          value: this.isSameAge(obj.idType, obj.certNum, obj.ageText),
          info: who + '的身份证和输入的年龄不符，请核实！'
        },
        {
          type: 'isNoEmpty',
          value: obj.fPhoneText,
          info: who + '手机号码不能为空，请输入！'
        },
        {
          type: 'isPhoneNumJ',
          value: obj.fPhoneText,
          info: who + '联系电话最多可录入18位数字，请重新填写。'
        },
        {
          type: 'isNoEmpty',
          value: obj.address,
          info: '请选择' + who + '地址！'
        }
      ];
      return subCheckArr;
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.inputCon2{
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
  float: left;
  margin: 3.5vw 1vw 0 0;
}
.itemTit .ico3{
  background: url(../assets/images/y_icon3.png) no-repeat center;
  -webkit-background-size: 100%;
  background-size: 100%;
}
.itemTit .ico4{
  background: url(../assets/images/y_icon4.png) no-repeat center;
  -webkit-background-size: 100%;
  background-size: 100%;
}
.itemTit .ico5{
  background: url(../assets/images/y_icon5.png) no-repeat center;
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
  padding: 4vw 0;
}
.baseInfor li{
  width: 48%;
  padding-bottom: 5.5vw;
  float: left;
}
.baseInfor li:nth-child(2n-1){
  padding-right: 4%;
}
.baseInfor li:nth-child(2n){
  float: right;
}
.baseInfor li.nopb{
  padding-bottom: 0;
}
.baseInfor li .baseCon{
  font-size: 3.5vw;
  color: #666;
}
.baseInfor li .ipt{
  display: inline-block;
  width: 18vw;
  color: #666;
}
.baseInfor li .le1{
  letter-spacing: 1.5vw;
}
.baseInfor li .org{
  color: #ff7200;
  text-align: right;
  margin-right: 1vw;
}
.doubleItem,.singleItem{
  width: 100%;
  border-bottom: 1px solid #eee;
  line-height: 11vw;;
  text-align: left;
}
.doubleItem .item{
  width: 50%;
  float:left;
}
.doubleItem .item:nth-child(2){
  float: right;
}
.doubleItem .item .ipt{
  float: left;
  width: 28vw;
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
.singleItem .item .rightArrow,.doubleItem .item .rightArrow{
  line-height: 11vw;;
  text-align: right;
  float: right;
  padding-right: 6vw;
  background: url(../assets/images/y_arrowDown.png) no-repeat right center;
  -webkit-background-size:3.3vw;
  background-size: 3.3vw;
}
.doubleItem .item .noArrow{
  background: transparent;
}
.singleItem textarea{
  width: 100%;
  font-family: '黑体';
  font-size: 3.5vw;
  color: #666;
  height: 10vh;
  margin: 3.5vw 0;
}
.singleItem:nth-last-child(1){
  border: none;
}
.sTit{
  font-size: 4vw;
  color: #ff7200;
  text-align: left;
  padding-top: 3.5vw;
}
.grayBg{
  width: 100%;
  height: 2vw;
  background: #eee;
}
.chooseCon{
  width: 100%;
  overflow: hidden;
  font-size: 4vw;
  color: #333;
  text-align: left;
  padding: 3.5vw 0;
  position: relative;
  border-bottom: 1px solid #eee;
}
.chooseCon:nth-last-child(1){
  border: none;
}
.chooseCon .tit{
  padding-right: 3.6vw;
  position: absolute;
  left:0;
  top:3.5vw;
}
.chooseCon.dif .tit{
  top:4vw;
}
.chooseCon .chooseItem{
  padding-left: 52vw;
}
.chooseCon.dif .chooseItem{
  padding-left: 26vw;
  line-height: 8vw;
}
.chooseCon .chooseItem .type{
  float: left;
  margin-right: 10vw;
}
.chooseCon .chooseItem .type:nth-child(2n){
  margin-right: 0;
}
.chooseItem .type span{
  display: inline-block;
  width: 5vw;
  height: 5vw;
  background: url(../assets/images/y_h_notick.png) no-repeat center;
  -webkit-background-size: 100%;
  background-size: 100%;
  margin-right: 2vw;
  float: left;
}
.chooseItem .type.active span{
  background: url(../assets/images/y_h_tick.png) no-repeat center;
  -webkit-background-size: 100%;
  background-size: 100%;
}
.chooseCon.dif .chooseItem .type span{
  margin-top:1.8vw;
}
.chooseCon.dif .chooseItem .type span:nth-child(2n){
  margin-right: 0;
}
.doubleItem .long{
  width: 60%;
}
.doubleItem .short{
  width: 40%;
}
.doubleItem .short .ipt{
  width: 18vw;
}
.singleItem .item.full .ipt{
  width: 70vw;
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
  border:0;
}
.clear{
  clear: both;
}
</style>