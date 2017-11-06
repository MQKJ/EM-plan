<template> 
  <div class="contentBx"> 
      <div class="blank"></div>
      <div class="sign-bx">
        <div class="title">
          <ul class="">
            <li class="left s-l">
              <div class="left s-title">
                <p class="">
                  电子签名
                </p>
              </div>
            </li>
            <li class="left s-r">
              <div class="left s-line">
                <div class="">
                  <img src="../assets/images/y_sign_line.png" alt="" class="">
                </div> 
              </div>
            </li>
            <div class="clear"></div>
          </ul>
        </div>
        <div class="applicant">
          <p class="">
            投保人签名
          </p>
        </div>
        <div class="sign-imgbx" v-if='sign'>
          <div class="img-bg">
            <div class="sn-img">
              <div id="images">
                  <img  :src="signurl" class="printt"> 
              </div>
            </div>
          </div>
          <div class="sign-time">
           <div class="left time-bx">
             <div class="timer">
               <p class="">
                 签名日期：
                 <span class="time-data">{{timer}}</span>
               </p>
             </div>
           </div>
           <div class="left time-reset">
             <div class="reset-bx">
               <div class="reset-sign">
                   <p class="btn-reset btn-back " @click='reSign()' id="#clear">重签</p>
                 </div>
             </div>
           </div>
           <div class="clear"></div>
         </div>
        </div>
        <div class="sign-imgbx-str"v-else>
          <div class="img-bg-sign">
            <div class="sn-img" @click='getSign()'>
              <p class="">暂无签名</p>
            </div>
          </div>
        </div>
        <div class="title">
          <ul class="">
            <li class="left s-l-i">
              <div class="left s-title">
                <p class="">
                  现场采集照片
                </p>
              </div>
            </li>
            <li class="left s-r-i">
              <div class="left s-line">
                <div class="">
                  <img src="../assets/images/y_sign_line.png" alt="" class="">
                </div>
              </div>
            </li>
            <div class="clear"></div>
          </ul>
        </div>
        <div class="scence-photo">
          <div class="se-photo">
            <p class="">
              为确保是您本人申请，需对您的身份进行公安联网验证
            </p>
          </div>
          <div class="se-pto-bx">
            <div class="bx-bg">
            </div>
            <div class="se-photo-img" >
              <div class="show-bx">  
                <!-- <div class="picture" :style="'backgroundImage:url('+headerImage+')'">  
                </div> --> 
                <div class="picture" id="headerBX">
                  <img id="header" :src='hImages' alt="" class="">
                </div> 
              </div>
            </div>
            <div class="se-mask">
              <input v-if="yesupload" type="file" id="change" accept="image/*" capture="camera" @change="change">
              <div v-else class="loading-bx">
                <vue-loading  type="spiningDubbles" color="#FD7B0F" :size="{ width: '50px', height: '50px'}"></vue-loading> 
                <h1 class="">上传中···</h1>
              </div>
            </div>
            <div class="se-clickNum" v-if='clickNum'>
              <div class="clickNumBx" @click='clickNumB()'></div>
            </div>
          </div>
          <div class="se-Prompt">
            <p class="">
              请您在光线明亮环境下，拍摄清晰正面图像！
            </p>
          </div>
        </div>
      </div>
      <div class="sign-law">
          <div class="law-bx">
            <p class="">
              该申请流程与线下纸质申请流程具有同等法律效力
            </p>
          </div>
      </div>
      <div class="sign-btn" v-if='button'>
        <div class='a'><p class="btn-keep" @click='Submit()'>提交</p></div>
      </div>
      <div class="sign-btn-sign" v-else>
        <div class='a'><p class="btn-keep">提交</p></div>
      </div>
    <!-- 上传遮罩层 -->  
    <div class="containerbx" v-show="panel">  
      <div class="caiqie">  
        <img id="image" :src="url" alt="Picture">
      </div>
      <div class="buttonbx">
        <div type="text" class="buttonbx-b" @click="croppImg" >确定</div> 
      </div>
    </div>
    <!-- 裁切遮罩层 --> 
    <div class=" loading-bx-b" v-show='load'>
      <div class="lod">
        <vue-loading  type="spiningDubbles" color="#FD7B0F" :size="{width: '50px', height: '50px'}"></vue-loading> 
        <h1 class="">正在裁切图片，请稍等！</h1>
      </div>
    </div>
  </div>
</template>  
  
<script>
import $ from 'jquery';
import Cropper from 'cropperjs';
import axios from 'axios';
import md5 from 'js-md5';
import vueLoading from 'vue-loading-template';
import evn from '../../config/evn.js';
var querystring = require('querystring');
export default {
  name: 'SignPhoto',
  components: {
    vueLoading
  },
  data () {
    return {
      List: [], // 成功回调函数返回数据
      signurl: '', // 签名
      timer: '', // 时间
      hImages: '',
      headerImage: '', // 采集到的头像
      yesupload: true, // 判断是上传图片时，不可点击，显示loding图标
      picValue: '',
      cropper: '',
      croppable: false,
      panel: false,
      load: false,
      sign: false, // 签名
      button: false, // 提交按钮
      result: '', // 人脸识别返回结果
      num: '', // 记录成功调取接口次数
      IDCardNum: '', // 身份证为key缓存
      clickNum: false, // 当请求接口超过10次的显示，禁止用户点击
      url: '',
      businessCode: '2248f699-92df-45a5-b2d1-87995c47cabb', // 场景码businessCode
      secretkey: 'AOJUYmYkxjVy95q2dFlbnO_HgVpzL4iIi1FXQXRGPpi44Jes_FPqB1z8LRbt4i4tQ318d7TGO_RvHhq8O5LbUQ' // 密钥secretKey
    };
  },
  created () {
    this.showImg();
    this.result = sessionStorage['result']; // 缓存返回结果
    if (evn === 'production') {
      this.businessCode = '87995c48-47bf-bf8d-2f9a-406598c456cb';
      this.secretkey = 'tVRISbi3neqIDsvpmWZQH3YJIbmtYrikRPBeSdNUELh3bYB9j8BniKqXonSb7sltBvOMGOWdC2CZZA3OdgQbCs';
    }
    this.getFace();
  },
  mounted () {
    this.getTime();
    this.getSignImg();
    // 初始化这个裁剪框
    var self = this;
    var image = document.getElementById('image');
    this.cropper = new Cropper(image, {
      aspectRatio: NaN,
      viewMode: 1,
      background: false,
      zoomable: false,
      ready: function () {
        self.croppable = true;
      },
      dragMode: 'move',
      movable: true, // 是否能移动图片
      cropBoxMovable: true, // 是否允许拖动裁剪框
      cropBoxResizable: true // 是否允许拖动改变裁剪框大小
    });
    this.conApplication = JSON.parse(sessionStorage.getItem('conApplication'));
    this.policy = JSON.parse(sessionStorage.getItem('policy'));
    this.IDCardNum = this.conApplication.holderCertNum; // 身份证号
    this.getFace();
  },
  methods: {
    getSign () {
      window.location.href = 'sign';
    },
    getTime () {
      var mydate = new Date();
      var str = '' + mydate.getFullYear() + '年';
      str += (mydate.getMonth() + 1) + '月';
      str += mydate.getDate() + '日';
      this.timer = str;
      return str;
    },
    getSignImg () {
      var m = sessionStorage['signImg'];
      // console.log(m, 'sd');
      // console.log(typeof (m));
      if (m !== undefined) {
        this.sign = true;
        this.button = true;
        var img = 'data:' + m;
        this.signurl = img;
        $('.btn-back').click(function () {
             window.location.href = 'sign';
            this.sign = false;
        });
      }
    },
    reSign () {
      window.location.href = 'sign';
    },
    getFace () {
      this.hImages = sessionStorage['hImages']; // 缓存人脸图像
      this.headerimg = sessionStorage['headerimg']; // 缓存人脸图像
      // console.log(this.IDCardNum);
      // console.log(localStorage.getItem(this.IDCardNum), 'ff');
      if (localStorage.getItem(this.IDCardNum) !== null) {
        this.num = Number(localStorage.getItem(this.IDCardNum));
        if (this.num >= 10) {
          this.clickNum = true;
        };
        // console.log(this.num + 'we');
      } else {
        this.num = 0;
        // console.log(this.num);
      };
    },
    getObjectURL (file) {
      var url = null;
      if (window.createObjectURL !== undefined) { // basic
      url = window.createObjectURL(file);
      } else if (window.URL !== undefined) { // mozilla(firefox)
      url = window.URL.createObjectURL(file);
      } else if (window.webkitURL !== undefined) { // webkit or chrome
      url = window.webkitURL.createObjectURL(file);
      }
      return url;
    },
    change (e) {
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.panel = true;
      this.picValue = files[0];
      this.url = this.getObjectURL(this.picValue);
      // 每次替换图片要重新得到新的url
      if (this.cropper) {
        this.cropper.replace(this.url);
      };
      this.panel = true;
    },
    croppImg () {
      this.load = true;
      setTimeout(() => {
        this.cropp();
        this.load = false;
      }, 800);
    },
    cropp () {
        this.panel = false;
        var croppedCanvas;
        var roundedCanvas;
        // console.log('2');
        // console.log(this.croppable);
        // console.log('2');
        // this.load = this.croppable;
        // console.log(this.load);
        if (!this.croppable) {
          return;
        };
        // Crop
        croppedCanvas = this.cropper.getCroppedCanvas();
        // console.log(this.cropper);
        // Round
        roundedCanvas = this.getRoundedCanvas(croppedCanvas);
        var headerimg = roundedCanvas.toDataURL();
        console.log(headerimg.length + 'window');
        var img = new Image();
        sessionStorage['hImages'] = roundedCanvas.toDataURL('image/jpeg', 0.75);
        this.hImages = sessionStorage['hImages'];
        this.load = false;
        img.onload = function () {
          var canvas;
          var ctx;
          var img64;
          var sW = $('#header').width();
          var sH = $('#header').height();
          var rate = sW / sH;
          alert(rate);
          canvas = document.createElement('canvas');
          canvas.width = 200;
          canvas.height = 200 / rate;
          ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, 200, 200 / rate);
          img64 = canvas.toDataURL('image/jpeg', 1);
          console.log(img64);
          console.log(img64.length);
          sessionStorage['faceImage'] = img64;
        };
        img.src = headerimg;
        this.headerImage = sessionStorage['faceImage'];
        this.postImg();
        this.panel = false;
    },
    // yaSuoImg (e, w) {
    //   sessionStorage['faceImage'] = w.toDataURL('image/jpeg', e);
    //   this.headerImage = sessionStorage['faceImage'];
    //   console.log(this.headerImage.length + 'b');
    //   this.load = false;
    // },
    showImg () {
      var numW = $('#headerBX').width();
      var numH = $('#headerBX').height();
      var width = $('#header').width();
      // console.log(width);
      var height = $('#header').height();
      // console.log(height);
      if (width >= height) $('#header').width(numW);
      // console.log(width);
      if (width < height) $('#header').height(numH);
      // console.log(height);
    },
    getRoundedCanvas (sourceCanvas) {
      var canvas = document.createElement('canvas');
      var context = canvas.getContext('2d');
      var width = sourceCanvas.width;
      var height = sourceCanvas.height;
      canvas.width = width;
      canvas.height = height;
      context.imageSmoothingEnabled = true;
      context.drawImage(sourceCanvas, 0, 0, width, height);
      context.globalCompositeOperation = 'destination-in';
      context.beginPath();
      context.fill();
      return canvas;
    },
    postImg () {
      // 这边写图片的上传
      this.yesupload = false;
      this.button = true; // 这事是图片裁切成功时，提交按钮显示
      // this.getNum(); // 本地测试  限制接口调取次数
      sessionStorage['faceImage'] = this.headerImage; // 缓存脸部识别照片用于测试
      var headerImageAfterCut = this.headerImage.replace('data:image/jpeg;base64,', '');
      var param = {
          userId: this.conApplication.holderCertNum, // 用户Id，目前使用身份证号码
          userName: this.conApplication.tName, // 用户姓名
          userIDcardNum: this.conApplication.holderCertNum, // 用户身份证号码
          faceImage: headerImageAfterCut, // 图片文件内容，base64编码的字符串，图片大小200k以内
          businessCode: this.businessCode, // 业务场景码（大数据部提供）
          encryption: md5(this.businessCode + this.secretkey + this.conApplication.holderCertNum), // 对businessCode+secretkey+身份证作MD5加密后的字符串，其中businessCode和secretkey（密钥）由大数据部分配
          isLiveCheck: 'false' // true: 需要做活体检测 false: 不做活体检测
        };
        // console.log('beforeParam:', param);
        param = querystring.stringify(param);
        // console.log('afterParam:', param);
        axios.post(this.api2 + '/faceIdentify/withUserInfo', param).then((response) => {
          // let textNode = document.createTextNode(response.data[0].content)
          let list = response.data;
          this.List = list;
          // console.log(list);
          // console.log(list.result);
          // console.log(this.List);
          // console.log(this.List.result);
          this.yesupload = true;
          // console.log(response); // 打印成功返回的数据
          this.abnormal(); // 异常情况描述
           this.getNum(); // 限制接口调取次数
          sessionStorage['result'] = list.result; // 缓存成功调取接口结果
          // sessionStorage['faceImage'] = this.headerImage;
          if (list.result === 'true') this.toast('图像验证通过！');
          if (list.result === 'false') this.toast('图像验证没有通过,请重新上传！');
          // console.log('接口请求成功');
        }).catch((error) => {
          console.log(error);
          this.yesupload = true;
           // this.abnormal();
          // this.getNum(); // 限制接口调取次数
           this.toast('上传失败,请重新上传！');
          // console.log(this.yesupload);
        });
    },
    getNum () { // 限制接口调取次数
      if (this.num < 11) {
        this.num = this.num + 1;
        localStorage.setItem(this.IDCardNum, this.num);
        // console.log(this.num + 'm');
      };
      if (this.num >= 10) {
        this.clickNum = true;
        return;
      };
    },
    clickNumB () { // 超过10次接口提示
      this.toast('多次身份验证未通过,请使用纸质申请书申请!');
    },
    Ergodic (e) { // 打印result返回为error的错误提醒
      var json = [{ '10001': '处理失败，系统异常', '10002': '处理失败，应用服务异常', '10003': '处理失败，百度云比对服务超时或异常', '10004': '处理失败，本地比对服务超时或异常', '10005': '处理失败，比对接口返回未知异常', '10006': '处理失败，百度云比对服务QPS超限制', '10101': '非法参数，userId不能为空', '10102': '非法参数，图片不能为空', '10103': '非法参数，图片格式不正确或比例异常', '10104': '非法参数，图片大小超过200k', '10105': '非法参数，业务场景Code不能为空', '10106': '非法参数，业务场景Code不正确', '10107': '非法参数，姓名不能为空', '10108': '非法参数，身份证号码不能为空', '10109': '非法参数，身份证号码格式不正确', '10110': '异常参数，根据userId找不到用户信息', '10111': '异常参数，业务场景密钥校验不通过', '10201': '身份验证失败，公安库ID不存在', '10202': '身份验证失败，身份证号格式错误，身份证不存在或身份证信息不匹配', '10301': '人脸比对失败，图片中不存在人脸', '10302': '人脸比对失败，图片中人脸被遮挡', '10303': '人脸比对失败，图片中人脸不清晰', '10304': '人脸比对失败，图片中人脸采光不够', '10305': '人脸比对失败，图片中人脸不完整', '10306': '人脸比对失败，图片中人脸置信度低', '10307': '人脸比对失败，活体校验不通过' }];
      for (var i = 0, l = json.length; i < l; i++) {
          // console.log(e);
          var errorMessage = json[i][e];
          console.log(errorMessage);
      };
    },
    abnormal () { // 异常情况描述
        // console.log(this.List.error_code);
        var errorCode = Number(this.List.error_code);
        // var errorCode = 10304;
        this.Ergodic(errorCode);
        if (errorCode >= 10001 && errorCode <= 10006) this.toast('系统异常或系统繁忙,请稍后上传！');
        if (errorCode >= 10101 && errorCode <= 10111) this.toast('前端业务参数有误或校验不通过！');
        if (errorCode === 10201 || errorCode === 10202) this.toast('身份信息公安库校验未通过,请重新上传！');
        if (errorCode >= 10301 && errorCode <= 10307) this.toast('图像质量缺陷,请重新上传！');
    },
    Submit () {
      // console.log(this.List.result, '1');
      // console.log(typeof (this.List.result));
      // console.log(this.result, '2');
      // console.log(typeof (this.result));
      // console.log(this.headerImage);
      if (this.signurl === '') {
        this.toast('签名不能为空!');
        return;
      };
      if (this.hImages === undefined) {
        this.toast('请上传图片!');
        return;
      };
      if (this.List.result === 'true' || this.result === 'true') {
        window.location.href = 'mirror';
      } else {
         this.toast('图片采集失败,请重新上传图片!');
      };
      // if (this.signurl !== '' && this.timer !== '' && this.headerImage !== '') {
      //   window.location.href = 'mirror';
      // };
    }
  }
};
</script>
  
<style>
.printt {
    position: absolute;
    top: -8vw;
    /* left: 0; */
    margin-left: -8vw;
    width: 12vw;
    height: 34vw;
    transform: rotate(-90deg);
    transform-origin:50% 50%;
}
.mint-toast{
  z-index: 11111111111;
}
.contentBx{
    position: relative;
    width: 100%;
    height: 100vh;
    background: #EEEEEE;
}
.containerbx{
    position: absolute;
    z-index: 9999;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(39, 38, 38, 0.87);
}
.containerbx .caiqie{
    width: 100vw;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%)
}
.loading-bx-b{
    width: 100vw;
    height: 100vh;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 11111111111;
}
.load-bx{
  position: absolute;
    text-align: center;
    width: 100%;
    bottom: 0;
    top: 80.2vh;
    background: #fd0fa7;
    border: none;
}
.loading-bx-b>div{
  width: 100vw;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  margin: 0;
}

.loading-bx-b>div>h1{
  color: #fff;
  text-align: center;
  font-size: 4.4vw;
  margin-top: 5vw;
  line-height: 6vw;
  color: #fff;
}
.loading-bx{
    position: relative;
    width: 100%;
    height: 30vh;
    background: #403131;
    opacity: 0.75;
    padding-top: 9vh;
}
.loading-bx>div{
  position: relative;
  margin-top: 22%;
}
.loading-bx>h1{
  position: relative;
  text-align: center;
  font-size: 4.4vw;
  line-height: 5vw;
  color: #fff;
}
.containerbx .content{
  position: relative;
  width: 100%;
  height: 100vh;
  background: #EEEEEE;

}

.blank{
  position: relative;
  width: 100%;
  background: #EEEEEE;
  height: 2.5vh;
}
.left{
  float: left;
}
.clear{
  clear: both;
}
.sign-bx{
    position: relative;
    padding-left: 4vw;
    padding-right: 4vw;
    max-height: 81.8vh;
    min-height: 72vh;
    background: #fff;
}
.title{
  position: relative;
  width: 100%;
  height: 6.2vh;
}
.title ul{
position: relative;
    list-style: none;
    height: 4vh;
    padding-top: 1.6vh;
}
.title ul .s-l{
  position: relative;
  width: 30%;
  float: left;
}
.title ul .s-r{
  position: relative;
  width: 70%;
  float: left;
}
.title ul .s-l .s-title{
  position: relative;
  float: left;
}
.title ul .s-l .s-title>p{
  position: relative;
  width: 100%;
  float: left;
  font-size: 4vw;
  line-height: 5.5vw;
  color: #FD7B0F;
  text-align: justify;
}
.title ul .s-r .s-line{
  position: relative;
  width: 100%;
  float: right;
}
.title ul .s-r .s-line>div{
  position: relative;
  width: 100%;
}
.title ul .s-r .s-line>div>img{
  position: relative;
  width: 100%;
  margin:0 auto;
  vertical-align:middle;
}


.title ul .s-l-i{
  position: relative;
  width: 30%;
  float: left;
  margin-top: 0.5vh;
}
.title ul .s-r-i{
  position: relative;
  width: 70%;
  float: left;
  margin-top: 0.5vh;
}
.title ul .s-l-i .s-title{
  position: relative;
  float: left;
}
.title ul .s-l-i .s-title>p{
  position: relative;
  width: 100%;
  float: left;
  font-size: 4vw;
  line-height: 5.5vw;
  color: #FD7B0F;
  text-align: justify;
}
.title ul .s-r-i .s-line{
  position: relative;
  width: 100%;
  float: right;
}
.title ul .s-r-i .s-line>div{
  position: relative;
  width: 100%;
}
.title ul .s-r-i .s-line>div>img{
  position: relative;
  width: 100%;
  margin:0 auto;
  vertical-align:middle;
}
.applicant{
  position: relative;
  width: 100%;
  height: 6.2vh;
}
.applicant>p{
    position: relative;
    width: 100%;
    float: left;
    font-size: 3.8vw;
    line-height: 4.2vh;
    color: #000;
    text-align: justify;
}
.signature{
    position: relative;
    width: 100%;
    height: 74vh;
    background: #FFF9F2;
}
.signature-bx{
  position: relative;
  width: 100%;
}
.signature-bx .sign-name{
  position: relative;
  width: 100%;
  text-align: center;
}
.signature-bx .sign-name>img{
    position: relative;
    width: 40vw;
    height: 10vw;
    margin-top: 37vh;
    text-align: center;
    vertical-align: middle;
}
.sign-btn{
  position: absolute;
  width: 100%;
  bottom: 0;
  height: 8.28vh;
  background:#FD7B0F;
  z-index: 999;
}
.sign-btn>a{
  position: relative;
  width: 100%;
}
.btn-keep{
  position: relative;
  text-align: center;
  width: 100%;
  font-size: 4.8vw;
  color: #fff;
  line-height: 8.28vh;
}
.sign-btn-sign{
  position: absolute;
  width: 100%;
  bottom: 0;
  height: 8.28vh;
  background:#C6C6C6;
  z-index: 999; 
}
.sign-btn-sign>a{
  position: relative;
  width: 100%;
}
.btn-keep{
  position: relative;
  text-align: center;
  width: 100%;
  font-size: 4.8vw;
  color: #fff;
  line-height: 8.28vh;
}
.sign-imgbx-str{
  position: relative;
  width: 100%;
}
.sign-imgbx-str .img-bg-sign{
  position: relative;
  width: 100%;
}
.sign-imgbx-str .img-bg-sign .sn-img{
  position: relative;
  width: 100%;
  height: 10vh;
  background:  url(../assets/images/y_signp_sign.png) no-repeat center center;
  background-size: 100% 100%;
}
.sign-imgbx-str .img-bg-sign .sn-img>p{
    position: relative;
    /* width: 36vw; */
    text-align: center;
    line-height: 10vh;
}
.sign-imgbx{
  position: relative;
  width: 100%;
}
.sign-imgbx .img-bg{
  position: relative;
  width: 100%;
}
.sign-imgbx .img-bg .sn-img{
  position: relative;
  width: 100%;
  height: 10vh;
  background:  url(../assets/images/y_signp_sign.png) no-repeat center center;
  background-size: 100% 100%;
}
.sign-imgbx .img-bg .sn-img>div{
  position: relative;
}
.img-name{
  position: relative;
  height: 8vh;
  width: 20vw;
  margin-top: 1vh;
}
.sign-time{
  position: relative;
  width: 10vh;
  width: 100%;
}
.sign-time .time-bx{
  position: relative;
  width: 60%;
}
.sign-time .time-bx .timer{
  position: relative;
  float: left;
}
.sign-time .time-bx .timer>p{
position: relative;
    width: 100%;
    float: left;
    font-size: 3.7vw;
    margin-top: 3.5vw;
    line-height: 7.5vw;
    color: #080808;
    text-align: justify;
}
.time-reset{
  position: relative;
  width: 40%;
}
.reset-bx{
  position: relative;
  width: 100%;
}
.reset-bx .reset-sign{
position: relative;
    float: right;
    width: 21vw;
    border: 0.2vw solid#FD7B0F;
    border-radius: 0.2vw;
    height: 5.1vh;
    margin-top: 2.5vw;
}
.btn-reset{
    position: relative;
    text-align: center;
    width: 100%;
    font-size: 3.8vw;
    color: #FF5722;
    line-height: 5vh;
    border: 0;
  }
.scence-photo{
  position: relative;
  width: 100%;
  height: 42vh;
}
.scence-photo .se-photo{
    position: relative;
    width: 100%;
    background: #fff;
    height: 6vh;
    margin-top: 1vh;
}

.scence-photo .se-photo>p{
  position: relative;
  width: 100%;
  float: left;
  font-size: 3.49vw;
  line-height: 7.5vw;
  color: #000;
  text-align: left;

}
.se-pto-bx{
  position: relative;
  width: 75.5vw;
  margin:0 auto;

}
.se-pto-bx .bx-bg{
  position: relative;
  width: 100%;
  background:#fff; 
  z-index: 555;
}
.se-pto-bx .se-photo-img{
  position: relative;
  width: 100%;
  z-index: 666;
}
.se-pto-bx .se-photo-img .canvas{
    width: 75.5vw;
    margin: 0 auto;
}
.se-pto-bx .se-photo-img .canvas .v-touch{
  position: relative;
  width: 100%;
  height: 30vh;
}
.se-pto-bx .se-mask{
      position: absolute;
    width: 100%;
    z-index: 777;
    height: 30vh;
    top: 0;
  background:  url(../assets/images/y_signp_photoline.png) no-repeat center center;
  background-size: 100% 100%;
}
.se-pto-bx .se-clickNum{
  position: absolute;
  width: 100%;
  z-index: 888;
  height: 30vh;
  top: 0;
  opacity: 0;
}
.se-pto-bx .se-clickNum .clickNumBx{
  position: relative;
  width: 100%;
  height: 100%;
}
.se-pto-bx .se-mask>input{
  position: relative;
  width: 100%;
  height: 30vh;
  opacity: 0;
}
.se-Prompt{
position: absolute;
    width: 100%;
    z-index: 1002;
    top: 36vh;
}
.se-Prompt>p{
  position: relative;
  width: 100%;
  float: left;
  font-size: 3.1vw;
  line-height: 6vh;
  color: #FD7B0F;
  text-align: center;
}
.sign-law{
  position: absolute;
  width: 100%;
  bottom: 8.2vh;
  height: 10vh;
  background: #EEEEEE;
}
.sign-law .law-bx{
  position: relative;
  width: 100%;
}
.sign-law .law-bx>p{
position: relative;
    width: 100%;
    float: left;
    font-size: 3.5vw;
    /* line-height: 7.5vw; */
    color: #9E9E9E;
    text-align: center;
    bottom: -5vh;
}






*{  
  margin: 0;
  padding: 0;
}  
.contentBx .buttonbx { 
    position: absolute;
    text-align: center;
    width: 100%;
    bottom: 0;
    /* top: 91.2vh; */
    background: #FD7B0F;
    border: none;
}
.contentBx .buttonbx .buttonbx-b {
  position: relative;
  text-align: center;
  width: 100%;
  font-size: 4.8vw;
  color: #fff;
  line-height: 8.38vh;
  border: none;
}
.contentBx .show-bx {  
  width: 100%;
  height: 30vh;
  overflow: hidden;
  position: relative;
}  
.contentBx .picture {  
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 100%;
    outline: 0
}  
.contentBx .picture>img{
  position: relative;
  max-width: 100%;
  max-height: 100%;
  display: table-cell;
  vertical-align: middle;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  margin: 0;
}
.contentBx .container {  
    z-index: 999999;
    position: fixed;
    padding-top: 60px;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background:rgba(0,0,0,1);
}  
  
.contentBx #image {  
  max-width: 100%;
}  
   
/*!  
 * Cropper.js v1.0.0-rc  
 * https://github.com/fengyuanchen/cropperjs  
 *  
 * Copyright (c) 2017 Fengyuan Chen  
 * Released under the MIT license  
 *  
 * Date: 2017-03-25T12:02:21.062Z  
 */  
  
.cropper-container {  
  font-size: 0;
  line-height: 0;
  
  position: relative;
  
  -webkit-user-select: none;
  
     -moz-user-select: none;
  
      -ms-user-select: none;
  
          user-select: none;
  
  direction: ltr;
  -ms-touch-action: none;
      touch-action: none  
}  
  
.cropper-container img {  
  /* Avoid margin top issue (Occur only when margin-top <= -height) */  
  display: block;
  min-width: 0 !important;
  max-width: none !important;
  min-height: 0 !important;
  max-height: none !important;
  width: 100%;
  height: 100%;
  image-orientation: 0deg  
}  
  
.cropper-wrap-box,  
.cropper-canvas,  
.cropper-drag-box,  
.cropper-crop-box,  
.cropper-modal {  
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}  
  
.cropper-wrap-box {  
  overflow: hidden;
}  
  
.cropper-drag-box {  
  opacity: 0;
  background-color: #fff;
}  
  
.cropper-modal {  
  opacity: .5;
  background-color: #000;
}  
  
.cropper-view-box {  
  display: block;
  overflow: hidden;
  
  width: 100%;
  height: 100%;
  
  outline: 1px solid #39f;
  outline-color: rgba(51, 153, 255, 0.75);
}  
  
.cropper-dashed {  
  position: absolute;
  
  display: block;
  
  opacity: .5;
  border: 0 dashed #eee  
}  
  
.cropper-dashed.dashed-h {  
  top: 33.33333%;
  left: 0;
  width: 100%;
  height: 33.33333%;
  border-top-width: 1px;
  border-bottom-width: 1px  
}  
  
.cropper-dashed.dashed-v {  
  top: 0;
  left: 33.33333%;
  width: 33.33333%;
  height: 100%;
  border-right-width: 1px;
  border-left-width: 1px  
}  
  
.cropper-center {  
  position: absolute;
  top: 50%;
  left: 50%;
  
  display: block;
  
  width: 0;
  height: 0;
  
  opacity: .75  
}  
  
.cropper-center:before,  
  .cropper-center:after {  
  position: absolute;
  display: block;
  content: ' ';
  background-color: #eee  
}  
  
.cropper-center:before {  
  top: 0;
  left: -3px;
  width: 7px;
  height: 1px  
}  
  
.cropper-center:after {  
  top: -3px;
  left: 0;
  width: 1px;
  height: 7px  
}  
  
.cropper-face,  
.cropper-line,  
.cropper-point {  
  position: absolute;
  
  display: block;
  
  width: 100%;
  height: 100%;
  
  opacity: .1;
}  
  
.cropper-face {  
  top: 0;
  left: 0;
  
  background-color: #fff;
}  
  
.cropper-line {  
  background-color: #39f  
}  
  
.cropper-line.line-e {  
  top: 0;
  right: -3px;
  width: 5px;
  cursor: e-resize  
}  
  
.cropper-line.line-n {  
  top: -3px;
  left: 0;
  height: 5px;
  cursor: n-resize  
}  
  
.cropper-line.line-w {  
  top: 0;
  left: -3px;
  width: 5px;
  cursor: w-resize  
}  
  
.cropper-line.line-s {  
  bottom: -3px;
  left: 0;
  height: 5px;
  cursor: s-resize  
}  
  
.cropper-point {  
  width: 5px;
  height: 5px;
  
  opacity: .75;
  background-color: #39f  
}  
  
.cropper-point.point-e {  
  top: 50%;
  right: -3px;
  margin-top: -3px;
  cursor: e-resize  
}  
  
.cropper-point.point-n {  
  top: -3px;
  left: 50%;
  margin-left: -3px;
  cursor: n-resize  
}  
  
.cropper-point.point-w {  
  top: 50%;
  left: -3px;
  margin-top: -3px;
  cursor: w-resize  
}  
  
.cropper-point.point-s {  
  bottom: -3px;
  left: 50%;
  margin-left: -3px;
  cursor: s-resize  
}  
  
.cropper-point.point-ne {  
  top: -3px;
  right: -3px;
  cursor: ne-resize  
}  
  
.cropper-point.point-nw {  
  top: -3px;
  left: -3px;
  cursor: nw-resize  
}  
  
.cropper-point.point-sw {  
  bottom: -3px;
  left: -3px;
  cursor: sw-resize  
}  
  
.cropper-point.point-se {  
  right: -3px;
  bottom: -3px;
  width: 20px;
  height: 20px;
  cursor: se-resize;
  opacity: 1  
}  
  
@media (min-width: 768px) {  
  
  .cropper-point.point-se {  
    width: 15px;
    height: 15px  
  }  
}  
  
@media (min-width: 992px) {  
  
  .cropper-point.point-se {  
    width: 10px;
    height: 10px  
  }  
}  
  
@media (min-width: 1200px) {  
  
  .cropper-point.point-se {  
    width: 5px;
    height: 5px;
    opacity: .75  
  }  
}  
  
.cropper-point.point-se:before {  
  position: absolute;
  right: -50%;
  bottom: -50%;
  display: block;
  width: 200%;
  height: 200%;
  content: ' ';
  opacity: 0;
  background-color: #39f  
}  
  
.cropper-invisible {  
  opacity: 0;
}  
  
.cropper-bg {  
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC');
}  
  
.cropper-hide {  
  position: absolute;
  
  display: block;
  
  width: 0;
  height: 0;
}  
  
.cropper-hidden {  
  display: none !important;
}  
  
.cropper-move {  
  cursor: move;
}  
  
.cropper-crop {  
  cursor: crosshair;
}  
  
.cropper-disabled .cropper-drag-box,  
.cropper-disabled .cropper-face,  
.cropper-disabled .cropper-line,  
.cropper-disabled .cropper-point {  
  cursor: not-allowed;
}  
  
  
</style> 