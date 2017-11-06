<template>
  <div class="mName">
    <div class="itemCon">
      <h4 class="sTit">您配偶母亲</h4>
      <div class="doubleItem dif clearFix">
        <p class="item long">
          <label for="" class="t">姓　　名</label>
          <input type="text" :placeholder="{propsData.pName}" class="ipt" v-model.trim="parentData.pName">
        </p>
        <p class="item short pr">
          <label for="" class="t">年　　龄</label>
          <input type="text" placeholder="填写年龄" class="ipt" v-model.trim="parentData.age">
        </p>
      </div>
      <div class="singleItem clearFix">
        <p class="item pr">
          <label for="" class="t">证件类型</label>
          <input type="text" placeholder="身份证" class="ipt rightArrow" v-model="parentData.idType">
          <select name="" class="select">
            <option value="">身份证</option>
            <option value="">护照</option>
          </select>
        </p>
      </div>
      <div class="singleItem clearFix">
        <p class="item full">
          <label for="" class="t">证件号码</label>
          <input type="text" placeholder="请填写您配偶母亲的证件号码" class="ipt" v-model.trim="parentData.cert">
        </p>
      </div>
      <div class="singleItem clearFix">
        <p class="item full">
          <label for="" class="t">联系电话</label>
          <input type="text" placeholder="请填写您配偶母亲的联系电话" class="ipt" v-model.trim="parentData.phone">
        </p>
      </div>
      <div class="singleItem clearFix">
        <p class="item pr">
          <label for="" class="t">现居城市</label>
          <input type="text" placeholder="请选择" class="ipt rightArrow" v-model="parentData.liveCity">
          <select name="" class="select">
            <option value="">上海</option>
          </select>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'parentInfo',
    data () {
      return {
        parentData: {
          pName: '', // 父母姓名
          age: '', // 年龄
          idType: '', // 证件类型
          cert: '', // 证件号码
          phone: '', // 电话号码
          liveCity: '' // 居住城市
        }
      }
    },
    props: {
      propsData: propsData,
      type: Object,
      default: {}
    },

  }
</script>

<style scoped>
  .inputCon2{
    width: 100%;
    overflow: hidden;
    background: #eee;
  }
  .itemTit{
    width: 100%;
    height: 7.6vh;
    line-height: 7.6vh;
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
    margin: 2vh 1vw 0 0;
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
    padding-bottom: 3.5vh;
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
    line-height: 7vh;
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
    line-height: 7vh;
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
    height: 7vh;
    position: absolute;
    left:20vw;
    top:0;
    opacity: 0;
  }
  .singleItem .item .rightArrow,.doubleItem .item .rightArrow{
    line-height: 7vh;
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
    width: 60vw;
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