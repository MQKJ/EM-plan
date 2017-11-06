<template>
  <div class="container">
    <div class="content">
      <div class="page-down">
        <div class="c-Detaile">
          <div class="c-content">
            <div class="cont-bx">
              <div class="tai-bx">
                <div class="c-text">
                  <div class="logo-bx">
                    <div class="logo-img">
                      <img src="../assets/images/y_tkzj_logo.png" alt="" class="">
                    </div>
                  </div>
                  <div class="title-bxx">
                    <h1 class="Title">泰康员工（专属）养老社区入住计划确认函</h1>
                    <h1 class="Title">（集团元年2017版）申请书</h1>
                    <!-- <h1 class="Title">《泰康人寿保险客户入住养老社区确认函》</h1> -->
                    <!-- <h1 class="Title">员工计划申请书</h1> -->
                  </div>
                  <h3 class="j-center">尊敬的泰康伙伴：</h3>
                  <h3 class="j-center">您好！</h3>
                  <p class="c-p-text">
                    感谢您（“您”指投保人及被保险人本人）选择泰康人寿保险有限责任公司（以下简称“泰康人寿”）提供的保险产品的同时，选择了申请泰康之家（北京）投资有限公司（以下简称“泰康之家”）提供的养老社区相关服务，与泰康共享幸福生活！
                  </p>
                  <p class="c-p-text">
                    为了维护您和被保险人的合法权益，我们将就您未来入住养老社区的相关意向，向您进行征询及确认，请您认真阅读并填写本申请书，并在填写完毕后亲笔签署您和被保险人的尊名。本申请书将作为您向泰康之家申请《泰康员工（专属）养老社区入住计划确认函》（集团元年2017版）(以下简称“确认函”)的资料之一，且作为通过评估后您和被保险人未来签署确认函的重要依据之一。（除跳选题外，其它题目均为必填项）
                  </p>
                  <div class="j-part">
                    <p class="j-title">一、申请部分</p>
                    <p class="special">以下题目是您和其他权利人申请入住养老社区的关键信息，请您仔细考量并确认，审慎填写：</p>
                    <div class="part-text">
                      <p class="j-p-tt">
                        1.您和您的配偶选择未来入住泰康之家投资建设的哪个养老社区：<span class="special">{{Cty}}</span>
                      </p>
                      <p class="j-p-tt" v-if='pHold'>
                        {{number}}.您父母计划选择未来入住泰康之家投资建设的哪个养老社区：<span class="special">{{PCty}}</span>
                      </p>
                      <p class="j-p-tt" v-if='mHold'>
                        {{numberM}}.您配偶父母计划选择未来入住泰康之家投资建设的哪个养老社区：<span class="special">{{PtCty}}</span>
                      </p>
                    </div>
                  </div>
                  <div class="j-part">
                    <p class="j-title">二、个人及家庭基本信息</p>
                    <div class="part-text">
                      <p class="j-p-t">
                        1.您的基本信息：
                      </p>
                      <div class="j-form">
                        <table border="1" class="border-bx">
                          <tr>
                            <th class="term">姓名</th>
                            <th class="subitem">{{policy.holderId}}</th>
                            <th class="term">称谓</th>
                            <th class="subitem" >{{textData.tSexText}}</th>
                          </tr>
                          <tr>
                            <th class="term">出生日期</th>
                            <th class="subitem">{{conApplication.tBirthday}}</th>
                            <th class="term">民族</th>
                            <th class="subitem">{{textData.tNationText}}</th>
                          </tr>
                          <tr>
                            <th class="term">联系电话</th>
                            <th class="subitem">{{conApplication.holderMobile}}</th>
                            <th class="term">婚姻状况</th>
                            <th class="subitem">{{textData.tMaritalStatusText}}</th>
                          </tr>
                          <tr>
                            <td class="term">证件号码</td>
                            <td class="subitem" colspan="3">{{conApplication.holderCertNum}}</td>
                          </tr>
                          <tr>
                            <td class="term">子女数量</td>
                            <td class="subitem" colspan="3">{{textData.tChildNumText}}</td>
                          </tr>
                          <tr>
                            <td class="dd-table">您工作和生活的城市</td>
                            <td class="subitem" colspan="3">{{textData.threeDeepAddress}}{{conApplication.holderLiveAddresss}}</td>
                          </tr>
                          <tr>
                            <td class="dd-table">邮编</td>
                            <td class="subitem" colspan="3">{{conApplication.holderZipCode}}</td>
                          </tr>
                          <tr>
                            <td class="term">电子邮箱</td>
                            <td class="subitem" colspan="3">{{conApplication.holderEmail}}</td>
                          </tr>
                          <tr>
                            <th class="term">所属</th>
                            <th class="subitem">{{textData.tIdentityText}}</th>
                            <th class="term">教育背景</th>
                            <th class="subitem">{{textData.tEduText}}</th>
                          </tr>
                          <tr>
                            <td class="term" colspan="4">备用联系人信息</td>
                          </tr>
                          <tr>
                            <th class="term">姓名</th>
                            <th class="subitem">{{conApplication.backName}}</th>
                            <th class="term">关系</th>
                            <th class="subitem">{{textData.backHolderRelationText}}</th>
                          </tr>
                          <tr>
                            <td class="term">联系电话</td>
                            <td class="subitem" colspan="3">{{conApplication.backMobile}}</td>
                          </tr>
                        </table>
                      </div>
                    </div>
                    <div class="part-text" v-if='tMStatus'>
                      <p class="j-p-t">
                        {{num}}.您法定配偶的基本信息：
                      </p>
                      <p class="j-p-t">
                        若婚姻状况为未婚、离异或丧偶，则以下信息无需填写:
                      </p>
                      <div class="j-form">
                        <table border="1" class="border-bx">
                          <tr>
                            <th class="term">姓名</th>
                            <th class="subitem">{{conApplication.mateName}}</th>
                            <th class="term">称谓</th>
                            <th class="subitem" >{{textData.mateSexText}}</th>
                          </tr>
                          <tr>
                            <th class="term">出生日期</th>
                            <th class="subitem">{{conApplication.tMateBirth}}</th>
                            <th class="term">民族</th>
                            <th class="subitem">{{textData.mateNationText}}</th>
                          </tr>
                          <tr>
                            <th class="term">所在行业</th>
                            <th class="subitem">{{textData.mateIndustryText}}</th>
                            <th class="term">联系电话</th>
                            <th class="subitem">{{conApplication.mateMibile}}</th>
                          </tr>
                          <tr>
                            <td class="term">证件号码</td>
                            <td class="subitem" colspan="3">{{conApplication.mateCertNum}}</td>
                          </tr>
                        </table>
                      </div>
                    </div>
                    <div class="part-text" v-if='relatives'>
                      <p class="j-p-t">
                        {{numB}}.其他家庭成员基础信息：
                      </p>
                      <!-- 本人父亲 -->
                      <div class="j-form" v-if='faName'>
                        <table border="1" class="border-bx">
                          <tr>
                            <th class="term">姓名</th>
                            <th class="subitem">{{conApplication.fName}}</th>
                            <th class="term">亲属关系</th>
                            <th class="subitem" >您本人父亲</th>
                          </tr>
                          <tr>
                            <th class="term">年龄</th>
                            <th class="subitem">{{conApplication.fAge}}岁</th>
                            <th class="term">居住城市</th>
                            <th class="subitem">{{conApplication.fLiveCity}}</th>
                          </tr>
                          <tr>
                            <th class="term">联系电话</th>
                            <th class="subitem" colspan="3">{{conApplication.fPhone}}</th>
                          </tr>
                          <tr>
                            <td class="term">证件号码</td>
                            <td class="subitem" colspan="3">{{conApplication.fCertNum}}</td>
                          </tr>
                        </table>
                        <div class="j-blank"></div>
                      </div>
                      <!-- 本人母亲 -->
                      <div class="j-form" v-if='moName'>
                        <table border="1" class="border-bx">
                          <tr>
                            <th class="term">姓名</th>
                            <th class="subitem">{{conApplication.mName}}</th>
                            <th class="term">亲属关系</th>
                            <th class="subitem" >您本人母亲</th>
                          </tr>
                          <tr>
                            <th class="term">年龄</th>
                            <th class="subitem">{{conApplication.mAge}}岁</th>
                            <th class="term">居住城市</th>
                            <th class="subitem">{{conApplication.mLiveCity}}</th>
                          </tr>
                          <tr>
                            <th class="term">联系电话</th>
                            <th class="subitem" colspan="3">{{conApplication.mPhone}}</th>
                          </tr>
                          <tr>
                            <td class="term">证件号码</td>
                            <td class="subitem" colspan="3">{{conApplication.mCertNum}}</td>
                          </tr>
                        </table>
                        <div class="j-blank"></div>
                      </div>
                      <!-- 配偶父亲 -->
                      <div class="j-form" v-if='lfaName'>
                        <table border="1" class="border-bx">
                          <tr>
                            <th class="term">姓名</th>
                            <th class="subitem">{{conApplication.lfName}}</th>
                            <th class="term">亲属关系</th>
                            <th class="subitem" >您配偶父亲</th>
                          </tr>
                          <tr>
                            <th class="term">年龄</th>
                            <th class="subitem">{{conApplication.lfAge}}岁</th>
                            <th class="term">居住城市</th>
                            <th class="subitem">{{conApplication.lfLiveCity}}</th>
                          </tr>
                          <tr>
                            <th class="term">联系电话</th>
                            <th class="subitem" colspan="3">{{conApplication.lfPhone}}</th>
                          </tr>
                          <tr>
                            <td class="term">证件号码</td>
                            <td class="subitem" colspan="3">{{conApplication.lfCertNum}}</td>
                          </tr>
                        </table>
                        <div class="j-blank"></div>
                      </div>
                      <!-- 配偶母亲 -->
                      <div class="j-form" v-if='lmoName'>
                        <table border="1" class="border-bx">
                          <tr>
                            <th class="term">姓名</th>
                            <th class="subitem">{{conApplication.lmName}}</th>
                            <th class="term">亲属关系</th>
                            <th class="subitem" >您配偶母亲</th>
                          </tr>
                          <tr>
                            <th class="term">年龄</th>
                            <th class="subitem">{{conApplication.lmAge}}岁</th>
                            <th class="term">居住城市</th>
                            <th class="subitem">{{conApplication.lmLiveCity}}</th>
                          </tr>
                          <tr>
                            <th class="term">联系电话</th>
                            <th class="subitem" colspan="3">{{conApplication.lmPhone}}</th>
                          </tr>
                          <tr>
                            <td class="term">证件号码</td>
                            <td class="subitem" colspan="3">{{conApplication.lmCertNum}}</td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div class="j-part">
                    <p class="j-title">三、确认函关键事项提示</p>
                    <div class="c-content">
                      <div class="cont-bx">
                        <div class="tai-bx" style="width：100%;margin:0;">
                          <div class="c-text">
                            <p class="c-p-text">
                              为协助您和其他权利人更好的理解确认函内容，保障您和其他权利人的权益，我们特将确认函中部分关键事项在此为您和其他权利人简要列示，请您和其他权利人认真阅读：
                            </p>
                            <div class="cp-rules">
                              <ul class="rules-bx">
                                <li class="left cp-icon">
                                  <div class="y-icon"></div>
                                </li>
                                <li class="left cp-text">
                                  <p class="cp-rule">
                                    确认函保证您和其他权利人在符合约定的前提下，享有入住泰康养老社区的权利。如签署确认函后，您签署的与确认函所涉养老社区入住权相对接的《保险合同》发生无效/效力中止/合同解除/合同终止（确认函另有约定除外）等情况，您和其他权利人将无法享受确认函项下有关权利。
                                  </p>
                                </li>
                                <div class="clear"></div>
                              </ul>
                            </div>
                            <div class="cp-rules">
                              <ul class="rules-bx">
                                <li class="left cp-icon">
                                  <div class="y-icon"></div>
                                </li> 
                                <li class="left cp-text">
                                  <p class="cp-rule">
                                    您和其他权利人入住养老社区的前提条件，包括但不限于如下两项：1）您所签署的与确认函所涉养老社区入住权相对接的《保险合同》未发生无效/效力中止未效力恢复/合同解除/合同终止（确认函另有约定除外）等情况；2)与确认函所涉养老社区入住权相对接的保险产品之已缴保险费加上累计未缴保险费大于或等于伍拾万元人民币。
                                  </p>
                                </li>
                                <div class="clear"></div>
                              </ul>
                            </div>
                            <div class="cp-rules">
                              <ul class="rules-bx">
                                <li class="left cp-icon">
                                  <div class="y-icon"></div>
                                </li>
                                <li class="left cp-text">
                                  <p class="cp-rule">
                                    您申请的确认函为泰康员工专属版，除确认函另有约定外，您和其他权利人在入住时需按照社区届时规定的收费标准另行及时支付各类押金（入门费、乐泰财富卡）、月费（房屋使用费、居家费用、餐费）、其他特约服务及慢病管理费等，具体收费项目及标准以养老社区届时公布的规定为准。该费用与您的保单收益是不相关的。申请入住时如需交纳预订费用，该等费用将在入住前转为入门费。
                                  </p>
                                </li>
                                <div class="clear"></div>
                              </ul>
                            </div>
                            <div class="cp-rules">
                              <ul class="rules-bx">
                                <li class="left cp-icon">
                                  <div class="y-icon"></div>
                                </li>
                                <li class="left cp-text">
                                  <p class="cp-rule">
                                    确认函项下给予您和其他权利人的相关保险对应权利全部仅由您和其他权利人本人享用，不能转让、赠与、交换、授权、许可或以其他任何方式进行处置，亦不属于继承和遗嘱的范围。
                                  </p>
                                </li>
                                <div class="clear"></div>
                              </ul>
                            </div>
                            <div class="cp-rules">
                              <ul class="rules-bx">
                                <li class="left cp-icon">
                                  <div class="y-icon"></div>
                                </li>
                                <li class="left cp-text">
                                  <p class="cp-rule">
                                    我们为您和其他权利人提供的是养老社区房屋居住权及居住时的相关养老服务，而不是房屋所有权或产权，泰康之家或其相关主体拥有土地使用权及房屋所有权，社区居民对社区房屋及其居住权不得转租、出售、交换、分租、授权、许可或以其他任何方式进行处置。
                                  </p>
                                </li>
                                <div class="clear"></div>
                              </ul>
                            </div>
                            <div class="cp-rules">
                              <ul class="rules-bx">
                                <li class="left cp-icon">
                                  <div class="y-icon"></div>
                                </li>
                                <li class="left cp-text">
                                  <p class="cp-rule">
                                    您和其他权利人在符合约定的前提下可根据确认函的有关规定享受一次入住养老社区的权利，且一套户型最多仅能供符合条件的入住人及其配偶两人入住。
                                  </p>
                                </li>
                                <div class="clear"></div>
                              </ul>
                            </div>
                            <div class="cp-rules">
                              <ul class="rules-bx">
                                <li class="left cp-icon">
                                  <div class="y-icon"></div>
                                </li>
                                <li class="left cp-text">
                                  <p class="cp-rule">
                                    泰康之家将在全国省会或中心城市建立10-15个连锁养老社区，目前首先在北京、上海、广州、苏州、成都、武汉、杭州布局选址，其它地区社区位置及入住时间以泰康之家公示为准。
                                  </p>
                                </li>
                                <div class="clear"></div>
                              </ul>
                            </div>
                            <div class="cp-rules">
                              <ul class="rules-bx">
                                <li class="left cp-icon">
                                  <div class="y-icon"></div>
                                </li>
                                <li class="left cp-text">
                                  <p class="cp-rule">
                                    社区大部分服务内容包含在月费中，部分个性化服务项目需要收费；建筑装修及房内家具电器，将以社区届时公布内容为准，示范区/样板间仅为展示。
                                  </p>
                                </li>
                                <div class="clear"></div>
                              </ul>
                            </div>
                            <div class="cp-rules">
                              <ul class="rules-bx">
                                <li class="left cp-icon">
                                  <div class="y-icon"></div>
                                </li>
                                <li class="left cp-text">
                                  <p class="cp-rule">
                                    如您或其他权利人需要申请变更（长期变更居住场所）或短期入住其它地区的社区，泰康之家及社区可根据届时公布的管理规则、程序等进行整体安排。
                                  </p>
                                </li>
                                <div class="clear"></div>
                              </ul>
                            </div>
                            <div class="cp-rules">
                              <ul class="rules-bx">
                                <li class="left cp-icon">
                                  <div class="y-icon"></div>
                                </li>
                                <li class="left cp-text">
                                  <p class="cp-rule">
                                    <span class="special">特别约定：</span>因被保险人身故导致相关《保险合同》终止的，其他权利人可持确认函按相关《保险合同》终止时其所享有的权利类型行使申请入住养老社区的权利；同时，被保险人本人根据确认函约定所应享有的优惠政策，由其在确认函附件一《权利人信息登记表》中登记的法定配偶全部承继。
                                  </p>
                                </li>
                                <div class="clear"></div>
                              </ul>
                            </div>
                            <div class="cp-rules">
                              <ul class="rules-bx">
                                <li class="left cp-icon">
                                 
                                </li>
                                <li class="left cp-text" style="width:100%">
                                  <p class="cp-rule special">
                                    上述关键事项内容之表述仅用作提示，不能作为签署、修改及/或解释确认函之依据，其未明确之词语定义、权利内容、权利行使前提条件等，最终均应以确认函所载内容为准。相关解释权归泰康之家及社区所有，泰康之家及社区保留调整及补充说明的权利。
                                  </p>
                                  <p class="cp-rule ">
                                    以上内容本人已认真阅读并理解，且确保其他权利人已认真阅读并理解，本人和其他权利人均已经清楚并了解泰康之家提供相关养老社区及养老服务相关事项及本人和其他权利人的权利及义务，并申请签署确认函。
                                  </p>
                                </li>
                                <div class="clear"></div>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- <p class="j-p-tt">
                      以上内容本人已认真阅读并理解，且确保其他权利人已认真阅读并理解，本人和其他权利均已已经清楚并了解泰康之家提供相关养老社区及养老服务相关事项及本人和其他权利人的权利及义务，并申请签署确认函。
                    </p> -->
                  </div>
                  <div class="j-part">
                    <div class="sign-bxx">
                      <div class="j-sign-text left">
                        <p class="j-title">保险合同投保人及被保险人签名：</p>
                      </div>
                      <div class="j-sign-img  left">
                        <img :src="signature" class="printt">
                      </div>
                      <div class="clear"></div>
                    </div>
                  </div>
                  <div class="j-part">
                    <div class="sign-bxx">
                      <div class="j-photo-text left">
                        <p class="j-title">现场采集照片：</p>
                      </div>
                      <div class="j-photo-img  left">
                        <img :src="faceImg" alt="" class="sign-img">
                      </div>
                      <div class="clear"></div>
                    </div>
                  </div>
                  <div class="j-part">
                    <div class="sign-bxx j-margin">
                      <div class="j-data-text left">
                        <p class="j-title">填写日期：</p>
                      </div>
                      <div class="j_data  left">
                        <p class="left">{{time}}</p>
                        <p class="left none">{{conApplication.confApplyDate}}</p>
                      </div>
                      <div class="clear"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="c-Check">
            <label class="c-know"><input v-bind:class="{ knowbtn: isActive, 'active': hasError }" name="" type="checkbox"  @click='checkKnow()' v-model="checkknow" />我已阅读并了解以上关键事项</label> 
          </div> -->
          <div class="c-btn">
            <div to='guide' class='a'><p class="apply-btn" @click='Submit()'>确定 </p></div>
          </div>
        </div>
      </div>
    </div>
    <div class="loading-bx" v-if='load'>
      <div class="lod">
        <vue-loading  type="spiningDubbles" color="#FD7B0F"  :size="{ width: '50px', height: '50px'}"></vue-loading> 
        <!-- <h1 class="">上传中,请稍等！</h1> -->
      </div>
    </div>
  </div>
</template>

<script>
import {policy, conApplication} from '../utils/content.js';
import axios from 'axios';
import vueLoading from 'vue-loading-template';
export default {
  name: 'Mirror',
  components: {
    vueLoading
  },
  data () {
    return {
      pHold: '', // 判断父母入住
      mHold: '', // 判断配偶父母入住
      tMStatus: '', // 判断是否已婚
      relatives: '', // 通过对亲属成员判断是否存在亲属，来显示亲属模块显示与隐藏
      faName: '', // 显示家庭成员本人父亲
      moName: '', // 显示家庭成员本人母亲
      lfaName: '', // 显示家庭成员配偶父亲
      lmoName: '', // 显示家庭成员配偶母亲
      num: '', // 页面显示数字2或者3
      numB: '', // 页面显示数字2或者3
      number: '', // 页面显示数字2或者3
      numberM: '', // 页面显示数字2或者3
      Cty: '', // 本人选择社区
      PCty: '', // 本人父母选择社区
      PtCty: '', // 配偶父母选择社区
      load: false, // loadling
      policy: policy, // 保单
      conApplication: conApplication,
      time: '', // 镜像合成时间
      textData: '',
      signature: '', // 签名
      faceImg: '',
      faceImage: '' // 脸部识别
    };
  },
  created () {
    if (sessionStorage.getItem('policy')) {
      this.policy = JSON.parse(sessionStorage.getItem('policy'));
    };
    if (sessionStorage.getItem('conApplication')) {
      this.conApplication = JSON.parse(sessionStorage.getItem('conApplication'));
    };
    this.signature = 'data:' + sessionStorage['signImg']; // 签名
    this.faceImg = sessionStorage['hImages'];
    this.faceImage = sessionStorage['faceImage']; // 脸部识别
    this.textData = JSON.parse(sessionStorage.getItem('textData'));
    // console.log(this.textData);
    this.Show();
    this.Ergodic();
  },
  mounted () {
    this.getTime(); // 镜像合成时间格式 年 月 日
    this.getTimer(); // 传给后台镜像合成时间格式2017-10-01
    // sessionStorage.setItem('resultMode', 'Unexist');
    // sessionStorage.setItem('resultStatus', 'fail');
  },
  methods: {
    getTime () {
      let mydate = new Date();
      let str = '' + mydate.getFullYear() + '年';
      str += (mydate.getMonth() + 1) + '月';
      str += mydate.getDate() + '日';
      this.time = str;
      return str;
    },
    getTimer () {
      let mydate = new Date();
      let str = '' + mydate.getFullYear() + '-';
      str += (mydate.getMonth() + 1) + '-';
      str += mydate.getDate();
      this.conApplication.confApplyDate = str;
      sessionStorage.setItem('conApplication', JSON.stringify(this.conApplication));
      return str;
    },
    Ergodic (e, cot) { // 遍历显示社区,参数e代表：传入城市代号，如：003，参数cot代表：保存到sesson中的键名，方便取值
      var json = [{'001': '北京昌平区养老社区', '003': '上海松江区养老社区', '004': '广州萝岗区养老社区', '006': '成都温江区养老社区', '007': '武汉东湖高新区养老社区', '008': '杭州西湖区养老社区', '005': '苏州工业园(阳澄湖半岛)区养老社区'}];
       for (var i = 0, l = json.length; i < l; i++) {
          for (var key in json[i]) {
            if (key === e) {
              var Cty = json[i][key];
              // console.log(Cty);
              sessionStorage[cot] = Cty; // 将遍历出的值保存到sesson中，如：I = 北京昌平区养老社区
              this.Cty = sessionStorage['I'];
              this.PCty = sessionStorage['P'];
              this.PtCty = sessionStorage['Pt'];
            };
          };
       };
    },
    Show () {
      var Cty = this.conApplication.communityId;
      this.Ergodic(Cty, 'I');
      var PCty = this.conApplication.parentCommunity;
      this.Ergodic(PCty, 'P');
      var PtCty = this.conApplication.mateParentCommunity;
      this.Ergodic(PtCty, 'Pt');
      let paHold = this.conApplication.parentHold; // 父母是否考虑入住
      // console.log(paHold + 'P');
      // console.log(typeof (paHold));
      let maHold = this.conApplication.mateParentHold; // 配偶父母是否考虑入住
      // console.log(maHold + 'M');
      let TMStatus = this.conApplication.tMaritalStatus; // 配偶信息
      let fName = this.conApplication.fName; // 家庭成员本人父亲是否存在
      let mName = this.conApplication.mName; // 家庭成员本人母亲是否存在
      // console.log(mName + '10');
      let lfName = this.conApplication.lfName; // 家庭成员配偶父亲是否存在
      let lmName = this.conApplication.lmName; // 家庭成员配偶母亲是否存在
      // console.log(paHold);
      if (paHold === 1) { // 通过判断父母是否入住，展示父母选择的入住社区
        this.pHold = true;
      } else {
        this.pHold = false;
      };
      if (maHold === 1) { // 通过判断配偶父母是否入住，展示配偶父母选择的入住社区
        this.mHold = true;
      } else {
        this.mHold = false;
      };
      if (paHold === 1 && maHold === 1) { // 通过判断配偶父母是否入住，展示入住社区前缀号
        this.number = 2;
        this.numberM = 3;
      };
      if (paHold !== 1 && maHold === 1) { // 通过判断配偶父母是否入住，展示入住社区前缀号
        this.pHold = false;
        this.numberM = 2;
      };
      if (fName !== '') { // 通过判断本人父亲是否存在，展示父亲信息
        this.faName = true;
      } else {
        this.faName = false;
      };
      if (mName !== '') { // 通过判断本人母亲是否存在，展示母亲信息
        this.moName = true;
      } else {
        this.moName = false;
      };
      if (lfName !== '') { // 通过判断配偶父亲是否存在，展示配偶父亲信息
        this.lfaName = true;
      } else {
        this.lfaName = false;
      };
      if (lmName !== '') { // 通过判断配偶母亲是否存在，展示配偶母亲信息
        this.lmoName = true;
      } else {
        this.lmoName = false;
      };
      // console.log(TMStatus);
      // console.log(typeof (TMStatus));
      if (TMStatus === '2') { // 通过判断本人是否已婚，展示配偶信息
        // console.log('1');
        this.tMStatus = true;
        this.num = 2;
        if (fName === '' && mName === '' && lfName === '' && lmName === '') { //
          this.relatives = false;
        } else {
          this.relatives = true;
          this.numB = 3;
        };
      } else {
        this.tMStatus = false;
        if (fName !== '' || mName !== '' || lfName !== '' || lmName !== '') {
          this.numB = 2;
          this.relatives = true;
        };
      };
    },
    configParams () {
      this.params = {
          policy: this.policy,
          conApplication: this.conApplication,
          signature: this.signature,
          faceImage: this.faceImage
        };
    },
    Submit () {

      this.configParams();
      // console.log('this.params======>>>>>>>>>>>>>');
      // console.log(this.params);
      // console.log(this.load);
      this.load = true;
      // console.log('this.api1:' + this.api1, 'this.preFixed:' + this.preFixed);
      axios.post(this.api1 + this.preFixed + '/dataServe', 'json=' + JSON.stringify(this.params)).then((response) => {
        var data = response.data;
        if (data && Number(data.mode) === 200) {
          if (!Number(data.status)) {
            this.load = false;
            // console.log('操作成功===》');
            // console.log(data, '成功');
            // console.log(data.message);
            sessionStorage.setItem('resultStatus', 'success');
            sessionStorage.setItem('resultMode', 'Unexist');
          } else {
            this.load = false;
            // console.log('操作失败===》');
            // console.log(data.message);
            // console.log(data, '失败');
            sessionStorage.setItem('resultStatus', 'fail');
            sessionStorage.setItem('resultMode', 'Unexist');
            // console.log(data.mode);
            // console.log(typeof (data.mode));
            // if (data.mode === '505') {
            //   sessionStorage.setItem('resultMode', 'exist');
            // };
          }
        } else {
          this.load = false;
          // console.log('操作失败===》》》');
          var info = data ? data.message : '没有错误提醒';
           console.log(info);
          sessionStorage.setItem('resultStatus', 'fail');
          // console.log(data, '失败');
          // console.log(data);
          // console.log(data.mode);
          // console.log(typeof (data.mode));
          if (data && Number(data.mode) === 505) {
            sessionStorage.setItem('resultMode', 'exist');
          };
        }
        this.getRouter();
      }).catch((error) => {
        // console.log('error========>');
        console.log(error);
        this.load = false;
        this.toast('系统繁忙，请稍后再试!');
      });
    },
    getRouter () {
      this.$router.push(this.routerFixed + '/getResult');
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  position: relative;
  width: 100vw;
}
.container .content{
  position: relative;
    width: 100%;

}
.printt{
    position: absolute;
    top: -7vw;
    margin-left: 9vw;
    width: 7vw;
    height: 23vw;
    -webkit-transform: rotate(-90deg);
    transform: rotate(-90deg);
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
}
.loading-bx{
    width: 100vw;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 666;
    background: rgb(19, 18, 18);
    opacity: 0.85;
}
.loading-bx>div{
  width: 100vw;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  margin: 0;
}
.loading-bx>div>h1{
  color: #fff;
  text-align: center;
  font-size: 4.4vw;
  margin-top: 5vw;
  line-height: 6vw;
  color: #fff;
}
.none{
  display: none;
}
.logo-bx{
  position: relative;
  width: 100%;
  height: 10vw;
}
.logo-bx .logo-img{
  position: relative;
  float: right;
  height: 10vw;
}
.logo-bx .logo-img>img{
  position: relative;
  height: 10vw;
}
.container .content .page-down{
  position: relative;
    width: 100%;
    background: #EEEEEE;
    padding-top: 2vh;
    padding-bottom: 2vh;
}

.container .content .page-down .c-Detaile{
    position: relative;
    width: 92vw;
    margin-left: 4vw;
    border: 0.6vw solid#C68748;
    background: url(../assets/images/y_h_bg.png) repeat-y center center;

}
.container .content .page-down .c-Detaile .c-content{
position: relative;
    /* width: 93.8vw; */
    text-align: center;
}
.container .content .page-down .c-Detaile .c-content .cont-bx{
    position: relative;
    width: 89vw;
    margin: 0 auto;
    /* margin-left: 1vw; */
    margin-top: 2vw;
    margin-bottom: 2vw;
}
.container .content .page-down .c-Detaile .c-content .cont-bx .tai-bx{
  position: relative;
    width: 94%;
    margin-left: 3%;
    margin-top: 2vh;
    margin-bottom: 0vh;
}
.container .content .page-down .c-Detaile .c-content .cont-bx .tai-bx .c-text{
  position: relative;
  width: 100%;
}
.title-bxx{
    position: relative;
    margin-top: 2vw;
    margin-bottom: 3vw;
}
.Title{
    position: relative;
    width: 100%;
    font-size: 4.4vw;
    line-height: 8vw;
    color: #623B1A;
}
.c-text>h3{
  position: relative;
    width: 100%;
        font-size: 4.2vw;
    line-height: 8vw;
    color: #623B1A;
}
.c-text .c-p-text{
    position: relative;
    width: 100%;
    font-size: 3.7vw;
    line-height: 7.5vw;
    margin-bottom: 2vw;
    color: #623B1A;
    text-align: left;

    text-align:justify
}
.c-text .c-p-text .size-o{
    position: relative;
    width: 100%;
    font-size: 3.2vw;
    line-height: 7.5vw;
    color: #623B1A;
}
.c-text .c-p-text .size-t{
  position: relative;
    width: 100%;
    font-size: 3.2vw;
    line-height: 7.5vw;
    color: #9F8A7D;
}
.container .content .page-down .c-Detaile .c-Check{
  position: relative;
    /* width: 94vw; */
    /* margin-left: 3vw; */
    height: 10vw;
    text-align: center;
}
.container .content .page-down .c-Detaile .c-Check .c-know{
    position: relative;
    width: 50vw;
    margin: 0 auto;
    font-size: 4vw;
    line-height: 5.5vw;
    color: #FD7B0F;
}
.knowbtn{
  position: relative;
    width: 5vw;
    margin-right: 2vw;
    height: 5vw;
    top: 1vw;
    background: url(../assets/images/y_h_notick.png) no-repeat center center;
    background-size: 5vw 5vw;
    border-radius: 50%;
    outline: none;
    border: none;
    -webkit-appearance: none;
}
.active{
  position: relative;
    width: 5vw;
    margin-right: 2vw;
    height: 5vw;
    top: 1vw;
  background: url(../assets/images/y_h_tick.png) no-repeat center center;
  background-size: 5vw 5vw;
    border-radius: 50%;
    outline: none;
    border: none;
    -webkit-appearance: none;
}
.container .content .page-down .c-Detaile .c-btn{
  position: relative;
  text-align: center;
}
.container .content .page-down .c-Detaile .c-btn .a{
  position: relative;
  width: 80vw;
  height: 17vw;
  text-align: center;
  margin: 0 auto;
}
.container .content .page-down .c-Detaile .c-btn .a .apply-btn{
    position: relative;
    background: #FD7B0F;
    text-align: center;
    color: #fff;
    border-radius: 1vw;
    font-size: 5vw;
    line-height: 12vw;    
    margin-bottom: 5vw;
}
.cp-rules{
    position: relative;
    width: 100%;
}
.cp-rules .rules-bx{
    position: relative;
    width: 100%;
    list-style: none;
}
.left{
    float: left;
}
.clear{
    clear: both;
}
.cp-rules .rules-bx .cp-icon{
    position: relative;
    width: 3%;
    margin-right: 1%; 
}
.cp-rules .rules-bx .cp-icon .no-icon{
    position: relative;
    width: 100%;
    width: 2vw;
    height: 2vw;
    top: 2.5vw;
    margin-bottom: 2vw;
    color: #623B1A;
    text-align: left;
}
.cp-rules .rules-bx .cp-icon .y-icon{
    position: relative;
    width: 100%;
    width: 2vw;
    height: 2vw;
    top: 2.5vw;
    margin-bottom: 2vw;
    color: #623B1A;
    text-align: left;
    background: url(../assets/images/y_cp_pot.png) no-repeat center center;
    background-size: 100% 100%;
}
.cp-rules .rules-bx .cp-text{
    position: relative;
    width: 96%;
}
.cp-rules .rules-bx .cp-text>p{
    position: relative;
    width: 100%;
    position: relative;
    width: 100%;
    font-size: 3.7vw;
    line-height: 7.5vw;
    margin-bottom: 2vw;
    color: #623B1A;
    text-align:justify
}
.special{
  font-weight: bold;
  position: relative;
    width: 100%;
    position: relative;
    width: 100%;
    font-size: 3.7vw;
    line-height: 7.5vw;
    margin-bottom: 2vw;
    color: #623B1A;
    text-align:justify
}
.Title{
      position: relative;
    width: 100%;
    font-size: 4.4vw;
    line-height: 8vw;
    color: #623B1A;
}
.j-center{
  text-align: left;
}
.j-part{
  position: relative;
  width: 100%;
}
.j-part .j-title{
    font-weight: bold;
    position: relative;
    width: 100%;
    position: relative;
    width: 100%;
    font-size: 4vw;
    line-height: 7.5vw;
    /* margin-bottom: 2vw; */
    color: #623B1A;
    text-align: justify;
}
.j-part .j-title .special{
  font-weight: bold;
  position: relative;
    width: 100%;
    position: relative;
    width: 100%;
    font-size: 3.7vw;
    line-height: 7.5vw;
    margin-bottom: 2vw;
    color: #623B1A;
    text-align:justify
}
.part-text{
    position: relative;
    width: 100%;
}
.part-text .j-p-t{
  position: relative;
    width: 100%;
    position: relative;
    width: 100%;
    font-size: 3.3vw;
    line-height: 7.5vw;
    /* margin-bottom: 2vw; */
    color: #623B1A;
    text-align: justify;
}
.part-text .j-p-tt{
  position: relative;
    width: 100%;
    position: relative;
    width: 100%;
    font-size: 3.6vw;
    line-height: 7.5vw;
    /* margin-bottom: 2vw; */
    color: #623B1A;
    text-align: justify;
}
.j-form{
    position: relative;
    width: 100%;
}
.border-bx{
    position: relative;
    border: 1px solid#623B1A;
    width: 100%;
}
.border-bx>tr{
    position: relative;
    width: 100%;
}
.border-bx>tr .term{
    position: relative;
    width: 23%;
    font-size: 3.4vw;
    line-height: 7.5vw;
    margin-bottom: 2vw;
    color: #623B1A;
    text-align: center;
    font-weight: bold;
}
.border-bx>tr .subitem{
  position: relative;
    width: 27%;
    font-size: 3vw;
    line-height: 7.5vw;
    margin-bottom: 2vw;
    text-align: center;
    color: #623B1A;
}
.j-blank{
  height: 3vw;
}
.dd-table{
  line-height: 5vw;
  padding-top: 1.2vw;
  padding-bottom: 1.2vw;
  position: relative;
  width: 23%;
  font-size: 3.4vw;
  color: #623B1A;
  text-align: center;
  font-weight: bold;
}
.j-p-tt{
    position: relative;
    width: 100%;
    font-size: 3.7vw;
    line-height: 7.5vw;
    /* margin-bottom: 2vw; */
    color: #623B1A;
    text-align: justify;
}
.sign-bxx{
    position: relative;
    width: 100%;
}
.j-sign-text{
    position: relative;
    float: left;
}
.j-sign-text .j-title{
    position: relative;
    width: 100%;
    position: relative;
    width: 100%;
    position: relative;
    width: 100%;
    font-size: 3.8vw;
    line-height: 7.5vw;
    margin-bottom: 2vw;
    color: #623B1A;
    text-align:justify
}
.j-sign-img{
    position: relative;
    float: left;
}
.j-photo-text{
    position: relative;
    float: left;
}
.j-photo-text .j-title{
    position: relative;
    width: 100%;
    font-size: 3.8vw;
    line-height: 7.5vw;
    margin-bottom: 2vw;
    color: #623B1A;
    text-align:justify
}
.j-photo-img{
    position: relative;
    /* width: 35vw; */
    float: left;
    margin-left: 1vw;
    width: 35vw;
    margin-top: 1.7vw;
}
.j-photo-img>img{
    max-width: 100%;
    max-height: 100%;
    display: table-cell;
    vertical-align: middle;
    position: relative;
    margin: 0;
    outline: 0.2vw solid#C68748;
}


.j-data-text{
    position: relative;
    float: left;
}
.j-data-text .j-title{
    position: relative;
    width: 100%;
    font-size: 3.8vw;
    line-height: 7.5vw;
    margin-bottom: 2vw;
    color: #623B1A;
    text-align:justify
}
.j_data{
    position: relative;
    font-size: 3.7vw;
    line-height: 7.5vw;
    margin-bottom: 2vw;
    color: #623B1A;
    text-align:justify
}
.j_data>p{
  position: relative;
    font-size: 3.7vw;
    line-height: 7.5vw;
    color: #623B1A;
    text-align:justify
}
.j-margin{
  margin-top: 2vw;
}
</style>
