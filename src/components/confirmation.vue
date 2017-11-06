<template>
  <div class="container">
    <div class="content">
      <div class="page-up">
        <div class="c-page-cont">
          <div class="c-logo">
            <div class="logo">
              <img src="../assets/images/y_tkzj_logo.png" alt="" class="">
            </div>
          </div>
          <div class="c-confirm-img">
            <div class="confirm-img">
              <div class="c-down">
                <img src="../assets/images/y_h_down.png" alt="" class="">
              </div>
            </div>
          </div>
          <div class="c-Rights">
            <div class="rights">
              <p class="rights-up">
                泰康之家 (北京) 投资有限公司 版权所有
              </p>
              <p class="rights-down">
                Copyright  <span class="c-icon"><img src="../assets/images/y_h_icon.png" alt="" class=""></span>Taikang Commuinty. All Rights Reserved
              </p>
              
            </div>
          </div>
        </div>
      </div>
      <div class="page-down">
        <div class="c-house-bx">
          <div class="house">
          </div>
        </div>
        <div class="c-Detaile">
          <div class="c-content">
            <div class="cont-bx">
              <div class="tai-bx">
                <div class="c-text">
                  <h1 class="">尊敬的泰康伙伴</h1>
                  <h3 class=""> 您好！</h3>
                  <p class="c-p-text">
                    感谢您<span class="size-o">(&nbsp&nbsp“您”&nbsp&nbsp指投保人及被保险人本人&nbsp)</span>选择“泰康员工（专属）养老社区入住计划”，&nbsp选择申请泰康之家（北京）投资有限公司<span class="size-o">(以下简称&nbsp“泰康人寿”&nbsp)</span>提供的养老社区相关服务，与泰康共享幸福生活！
                  </p>
                  <p class="c-p-text">
                    为了维护您和被保险人的合法权益，我们将就您未来入住养老社区的相关意向，向您进行征询及确认，请您认真阅读并填写本申请书，并在填写完毕后亲笔签署您和被保险人的尊名。本申请书将作为您向泰康之家申请《泰康员工(专属)养老社区入住计划确认函》<span class="size-t">(集团元年2017版)&nbsp</span><span class="size-o">(&nbsp以下简称“确认函”&nbsp )&nbsp</span>的资料之一，且作为通过评估后您和被保险人未来签署确认函的重要依据之一。<!-- <span class="size-o">(&nbsp除跳选题外，其它题目均为必选项)</span> -->
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="c-Check">
            <label class="c-know" for="check"><input id="check" v-bind:class="{ knowbtn: !checkknow, 'active': checkknow }" name="" type="checkbox"  @click='checkKnow()' />本人已知晓</label> 
          </div>
          <div class="c-btn"  >
            <div class="a"><p v-bind:class="{ applyno: !checkknow , 'apply-btn': checkknow }" @click='applyFor()'>立即申请确认函</p ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Confirmation',
  data () {
    return {
      checkknow: false
    };
  },
  methods: {
    checkKnow () {
      this.checkknow = !this.checkknow;
    },
    applyFor () {
      if (this.checkknow) {
        this.$router.push(this.routerFixed + '/inputCon');
      };
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
    height: 196vh;

}
.container .content .page-up{
  position: relative;
  width: 100%;
  height:100vh;
  background: url(../assets/images/y_h_bg.png) repeat-y center center;  
}
.container .content .page-up .c-page-cont{
  position: relative;
  width: 92vw;
  margin-left: 4vw;
}
.container .content .page-up .c-page-cont .c-logo{
    position: relative;
    /* width: 100vw; */
    height: 11vh;
}
.container .content .page-up .c-page-cont .c-logo .logo{
    position: relative;
    float: left;
    /* width: 20vw; */
    padding-top: 3vh;
    padding-bottom: 1vh;
}
.container .content .page-up .c-page-cont .c-logo .logo>img{
    position: relative;
    height: 6vh;
}
.container .content .page-up .c-page-cont .c-confirm-img{
  position: relative;
    width: 100%;
    height: 78vh;
}
.container .content .page-up .c-page-cont .c-confirm-img .confirm-img{
  position: relative;
  width: 100%;
  height: 100%;
  background: url(../assets/images/y_h_confirm.png) no-repeat center center;
  background-size: 100% 100%;
}
.container .content .page-up .c-page-cont .c-confirm-img .confirm-img .c-down{
  position: relative;
    width: 6.5vw;
    height: 6.5vw;
    top: 71.5vh;
    /* bottom: -71vh; */
    margin: 0 auto;
    animation: moreimg 1s infinite linear;
    -webkit-animation: moreimg 1s infinite linear;
}
@keyframes moreimg{
  0%{
    transform: translateY(-0.3vh);
    opacity: 0.5
  }
  25%{
    transform: translateY(0vh);
    opacity: 1
  }
  50%{
    transform: translateY(0.3vh);
    opacity: 0.5
  }
  100%{
    transform: translateY(0vh);
    opacity: 1
  }
}
@-webkit-keyframes moreimg{
  0%{
    transform: translateY(-0.3vh);
    opacity: 0.5
  }
  25%{
    transform: translateY(0vh);
    opacity: 1
  }
  50%{
    transform: translateY(0.3vh);
    opacity: 0.5
  }
  100%{
    transform: translateY(0vh);
    opacity: 1
  }
}
.container .content .page-up .c-page-cont .c-confirm-img .confirm-img .c-down>img{
  position: relative;
  width: 100%;
}
.container .content .page-up .c-page-cont .c-Rights{
    position: relative;
    width: 100%;
    height: 11vh;
}
.container .content .page-up .c-page-cont .c-Rights .rights{
    position: relative;
    width: 100%;
}
.container .content .page-up .c-page-cont .c-Rights .rights .rights-up{
  position: relative;
    width: 100%;
    font-size: 3.2vw;
    line-height: 5.5vw;
    margin-top: 2vw;
    margin-bottom: 2vw;
    color: #570902;
}
.container .content .page-up .c-page-cont .c-Rights .rights .rights-down{
    position: relative;
    width: 100%;
    font-size: 3.2vw;
    line-height: 3.5vw;
    margin-bottom: 2vw;
    color: #570902;
}
.c-icon{
  position: relative;
  width: 2.4vw;
    height: 2.4vw;
}
.c-icon>img{
  position: relative;
  width: 2.4vw;
  height: 2.4vw;
}
.container .content .page-down{
    position: relative;
    width: 100%;
    height: 96vh;
}
.container .content .page-down .c-house-bx{
    position: absolute;
    width: 100%;
    z-index: 666;
}
.container .content .page-down .c-house-bx .house{
  position: relative;
    width: 55vw;
    /* margin-left: 25vw; */
    top: 36vh;
    height: 24vh;
    background: url(../assets/images/y_h_House.png) no-repeat center center;
    background-size: 100% 100%;
}
.container .content .page-down .c-Detaile{
  position: relative;
    width: 100%;
    z-index: 999;
    background: url(../assets/images/y_h_bg.png) repeat-y center center;
    padding-bottom: 6vh;
    text-align: left;

}
.container .content .page-down .c-Detaile .c-content{
    position: relative;
    width: 92.6vw;
    margin-left: 3.7vw;
    border: 0.53vw solid#C68748; 
}
.container .content .page-down .c-Detaile .c-content .cont-bx{
    position: relative;
    width: 89vw;
    margin: 0 auto;
    /* margin-left: 1vw; */
    border: 0.013vw solid#C68748;
    margin-top: 2vw;
    margin-bottom: 2vw;
}
.container .content .page-down .c-Detaile .c-content .cont-bx .tai-bx{
    position: relative;
    width: 90%;
    margin-left: 5%;
    margin-top: 5vh;
    margin-bottom: 6vh;
}
.container .content .page-down .c-Detaile .c-content .cont-bx .tai-bx .c-text{
  position: relative;
  width: 100%;
}
.c-text>h1{
    position: relative;
    width: 100%;
    font-size: 5vw;
    line-height: 9vw;
    color: #623B1A;
}
.c-text>h3{
  position: relative;
    width: 100%;
    font-size: 5vw;
    line-height: 11vw;
    color: #623B1A;
}
.c-text .c-p-text{
  position: relative;
    width: 100%;
    font-size: 3.7vw;
    line-height: 7.5vw;
    margin-bottom: 2vw;
    color: #623B1A;
    text-align: justify;
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
    width: 94vw;
    margin-left: 3vw;
    height: 10vw;
    margin-top: 3vw;
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
    width: 9vw;
    margin-right: 2vw;
    height: 5vw;
    top: 1vw;
    background: url(../assets/images/y_h_notick.png) no-repeat center center;
    background-size: 5.3vw 5vw;
    border-radius: 50%;
    outline: none;
    border: none;
    -webkit-appearance: none;
}
.active{
  position: relative;
    width: 9vw;
    margin-right: 2vw;
    height: 5vw;
    top: 1vw;
  background: url(../assets/images/y_h_tick.png) no-repeat center center;
  background-size: 5.3vw 5vw;
    border-radius: 50%;
    outline: none;
    border: none;
    -webkit-appearance: none;
}
.container .content .page-down .c-Detaile .c-btn{
    position: relative;
    width: 80vw;
    margin-left: 10vw;
    text-align: center;
}
.container .content .page-down .c-Detaile .c-btn .a{
    position: relative;
    width: 80vw;
    height: 10vw;
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
}
.container .content .page-down .c-Detaile .c-btn .a .applyno{
    position: relative;
    background: #9E9E9E;
    text-align: center;
    color: #fff;
    border-radius: 1vw;
    font-size: 5vw;
    line-height: 12vw;
}
</style>
