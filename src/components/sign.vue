<template>
  <div class="container">
    <div class="content main"id="print" style="overflow:hidden">
      <div class="blank"></div>
      <div class="sign-bx">
        <div class="title" style="height：6.2vh">
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
      </div>
      <div class="sign-btn">
        <a><p class="btn-keep" id="signOk">保存</p></a>
      </div>
    </div>
    <div class="contentTo">
      <div class="signature" id="sign-box">
        <div class="signature-bx">
          <div class="esign-bx">
            <div class="esign-sign" id="signature">
              
            </div>
          </div>
          <!-- <div class="sign-name">
            <div class="sign-name-bx">
              <img src="../assets/images/y_sign_name.png" alt="" class="">
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
 import $ from 'jquery';
export default {
  name: 'Sign',
  data () {
    return {};
  },
  mounted () {
    this.getWH();
  },
  beforeUpdate () {},
  methods: {
    getWH () {
      var width = $(window).width();
      var height = $(window).height();
      $('.js-signature').attr('data-width', width * 0.6);
      $('.js-signature').attr('data-height', height - 10);
      // console.log(width);
      if (width < height) {
          //    console.log(width + " " + height);
          var $print = $('#print');
          $print.width(height);
          $print.height(width);
          $print.css('top', (height - width) / 2);
          $print.css('left', 0 - (height - width) / 2);
          $print.css('transform', 'rotate(90deg)');
          $print.css('transform-origin', '50% 50%');
      };
      var evt = 'onorientationchange' in window ? 'orientationchange' : 'resize';
      window.addEventListener(evt,
      function () {
          console.log(evt);
      },
      false);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media screen and (orientation: portrait) {
  #print {
    position: absolute;
  }
}

@media screen and (orientation: landscape) {

  #print {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
body{
  overflow:hidden;
}
.container{

  position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
}
.container .content{
    position: relative;
}
.contentTo{
  position: absolute;
  z-index: 99999999;
  top: 0;
  left: 0;
}
.blank{
    position: relative;
    width: 100%;
    background: #EEEEEE;
    height: 1.5vh;
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
}
.title{
    position: relative;
    width: 100%;
    height: 3.5vh;
}
.title ul{
  position: relative;
  list-style: none;
  height: 4.6vh;
  margin-top: 1.6vh;
}
.title ul .s-l{
  position: relative;
  width: 15%;
  float: left;
}
.title ul .s-r{
  position: relative;
  width: 85%;
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
position: absolute;
    width: 60vw;
    left: 19vw;
    margin: 0 auto;
    height: 100vh;
    background: #FFF9F2;
    z-index: 999;
}
.signature .signature-bx .esign-bx{
    position: relative;
    width: 60vw;
    height: 100vh;
    z-index: 1000;
}
.esign-bx .esign-sign{
    position: relative;
    width: 60vw;
    height: 100vh;
}
.esign-bx .esign-sign #canvasEdi{
  width: 60vw;
    height: 100vh;
}
.signature-bx{
  position: relative;
  width: 100%;
}
.signature-bx .sign-name{
    position: absolute;
    top: 0%;
    width: 60vw;
    height: 100vh;
    /* text-align: center; */
    z-index: 1001;
}
.signature-bx .sign-name .sign-name-bx{
  position: relative;
  width: 100%;
  text-align: center;
  top: 50%;
}
.signature-bx .sign-name .sign-name-bx>img{
    position: relative;
    width: 40vw;
    height: 10vw;
    text-align: center;
    vertical-align: middle;
}
.sign-btn{
position: fixed;
    width: 30%;
    margin: 0 auto;
    margin-left: 35%;
    bottom: 3vw;
    height: 8.28vh;
    background: #FD7B0F;
    z-index: 999;
    border-radius: 5px;
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

</style>
