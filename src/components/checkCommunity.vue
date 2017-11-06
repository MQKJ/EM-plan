<template>
  <div class="container">
    <div class="content">
      <div class="page-down">
        <div class="c-Detaile">
          <div class="cc-content">
            <div class="cc-text">
              <p class="cc-item">
                以下题目是您和其他权利人申请入住养老社区的关键信息，请您仔细考量并确认，审慎填写：
              </p>
            </div>
            <!-- 您和您的配偶计划选择入住哪个养老社区(单选) -->
            <div class="model-bx">
              <div class="choice" @click="toggleMe()">
                <ul class="">
                  <li class="left cc-t">
                    <div class="choice-text">
                      <p class="">
                        您和您的配偶计划选择入住哪个养老社区(单选)
                      </p>
                    </div>
                  </li>
                  <li class="left cc-i">
                    <div class="choice-img">
                      <div class="img-bx" :class="{active: cssdownMe}"></div>
                    </div>
                  </li>
                  <div class="clear"></div>
                </ul>
              </div>
              <div class="option" v-show="isShowMe">
                <div class="op-bx">
                   <div class="cc-option-bx">
                    <div class="left op-ll-c" >
                      <div class="C-Check-bx">
                        <label for="001" >
                          <input id="001" type="radio" class="rdo left"  value="001" v-model="conApplication.communityId" />
                          <p class="left chL-bx">北京昌平区养老社区</p>
                          <div class="clear"></div>
                        </label> 
                      </div>
                    </div>
                    <div class="left op-rr-c" >
                      <div class="C-Check-bx" >
                        <label for="003" >
                          <input id="003" type="radio" class="rdo left" value="003" v-model="conApplication.communityId" />
                          <p class="left chR-bx">上海松江区养老社区</p>
                          <div class="clear"></div>
                        </label> 
                      </div>
                    </div>
                    <div class="left op-ll-c" >
                      <div class="C-Check-bx">
                        <label for="004" >
                          <input id="004" type="radio" class="rdo left"  value="004" v-model="conApplication.communityId" />
                          <p class="left">广州萝岗区养老社区</p>
                          <div class="clear"></div>
                        </label> 
                      </div>
                    </div>
                    <div class="left op-rr-c" >
                      <div class="C-Check-bx" >
                        <label for="006" >
                          <input id="006" type="radio" class="rdo left" value="006" v-model="conApplication.communityId" />
                          <p class="left chR-bx">成都温江区养老社区</p>
                          <div class="clear"></div>
                        </label> 
                      </div>
                    </div>
                    <div class="left op-ll-c" >
                      <div class="C-Check-bx">
                        <label for="007" >
                          <input id="007" type="radio" class="rdo left"  value="007" v-model="conApplication.communityId" />
                          <p class="left">武汉东湖高新区养老社区</p>
                          <div class="clear"></div>
                        </label> 
                      </div>
                    </div>
                    <div class="left op-rr-c" >
                      <div class="C-Check-bx" >
                        <label for="008" >
                          <input id="008" type="radio" class="rdo left" value="008" v-model="conApplication.communityId" />
                          <p class="left chR-bx">杭州西湖区养老社区</p>
                          <div class="clear"></div>
                        </label> 
                      </div>
                    </div>
                    <div class="left op-ts-c" >
                      <div class="C-Check-bx">
                        <label for="005" >
                          <input id="005" type="radio" class="rdo left"  value="005" v-model="conApplication.communityId" />
                          <p class="left ts-c">苏州工业园(阳澄湖半岛)区养老社区</p>
                          <div class="clear"></div>
                        </label> 
                      </div>
                    </div>
                    <div class="clear"></div>
                  </div>
                </div>
              </div>
            </div>
            <!-- 您的父母计划选择入住哪个养老社区(单选) -->
            <div class="model-bx" v-if='parent>0'>
              <div class="choice"@click="toggleParent()">
                <ul class="">
                  <li class="left cc-t">
                    <div class="choice-text">
                      <p class="">
                        您的父母计划选择入住哪个养老社区(单选)
                      </p>
                    </div>
                  </li>
                  <li class="left cc-i">
                    <div class="choice-img">
                      <div class="img-bx" :class="{active: cssdownPar}"></div>
                    </div>
                  </li>
                  <div class="clear"></div>
                </ul>
              </div>
              <div class="option" v-show="isShowParent">
                <div class="op-bx">
                  <div class="cc-option-bx">
                    <div class="left op-ll-c" >
                      <div class="C-Check-bx">
                        <label for="Pbj" >
                          <input id="Pbj" type="radio" class="rdo left"  value="001" v-model="conApplication.parentCommunity" />
                          <p class="left">北京昌平区养老社区</p>
                          <div class="clear"></div>
                        </label> 
                      </div>
                    </div>
                    <div class="left op-rr-c" >
                      <div class="C-Check-bx" >
                        <label for="Psh" >
                          <input id="Psh" type="radio" class="rdo left" value="003" v-model="conApplication.parentCommunity" />
                          <p class="left chR-bx">上海松江区养老社区</p>
                          <div class="clear"></div>
                        </label> 
                      </div>
                    </div>
                    <div class="left op-ll-c" >
                      <div class="C-Check-bx">
                        <label for="Pgz" >
                          <input id="Pgz" type="radio" class="rdo left"  value="004" v-model="conApplication.parentCommunity" />
                          <p class="left">广州萝岗区养老社区</p>
                          <div class="clear"></div>
                        </label> 
                      </div>
                    </div>
                    <div class="left op-rr-c" >
                      <div class="C-Check-bx" >
                        <label for="Pcd" >
                          <input id="Pcd" type="radio" class="rdo left" value="006" v-model="conApplication.parentCommunity" />
                          <p class="left chR-bx">成都温江区养老社区</p>
                          <div class="clear"></div>
                        </label> 
                      </div>
                    </div>
                    <div class="left op-ll-c" >
                      <div class="C-Check-bx">
                        <label for="Pwh" >
                          <input id="Pwh" type="radio" class="rdo left"  value="007" v-model="conApplication.parentCommunity" />
                          <p class="left">武汉东湖高新区养老社区</p>
                          <div class="clear"></div>
                        </label> 
                      </div>
                    </div>
                    <div class="left op-rr-c" >
                      <div class="C-Check-bx" >
                        <label for="Phz" >
                          <input id="Phz" type="radio" class="rdo left" value="008" v-model="conApplication.parentCommunity" />
                          <p class="left chR-bx">杭州西湖区养老社区</p>
                          <div class="clear"></div>
                        </label> 
                      </div>
                    </div>
                    <div class="left op-ts-c" >
                      <div class="C-Check-bx">
                        <label for="Psz" >
                          <input id="Psz" type="radio" class="rdo left"  value="005" v-model="conApplication.parentCommunity" />
                          <p class="left ts-c">苏州工业园(阳澄湖半岛)区养老社区</p>
                          <div class="clear"></div>
                        </label> 
                      </div>
                    </div>
                    <div class="clear"></div>
                  </div>
                </div>
              </div>
            </div>
            <!-- 您配偶的父母计划选择入住哪个养老社区(单选) -->
            <div class="model-bx"  v-if='mateParent>0'>
             <div class="choice"@click="togglePartner()">
               <ul class="">
                 <li class="left cc-t">
                   <div class="choice-text">
                     <p class="">
                       您配偶的父母计划选择入住哪个养老社区(单选)
                     </p>
                   </div>
                 </li>
                 <li class="left cc-i">
                   <div class="choice-img">
                     <div class="img-bx" :class="{active: cssdownPte}"></div>
                   </div>
                 </li>
                 <div class="clear"></div>
               </ul>
             </div>
             <div class="option" v-show="isShowPartner">
               <div class="op-bx">
                 <div class="cc-option-bx">
                    <div class="left op-ll-c" >
                      <div class="C-Check-bx">
                        <label for="Ptbj" >
                          <input id="Ptbj" type="radio" class="rdo left"  value="001" v-model="conApplication.mateParentCommunity" />
                          <p class="left">北京昌平区养老社区</p>
                          <div class="clear"></div>
                        </label> 
                      </div>
                    </div>
                    <div class="left op-rr-c" >
                      <div class="C-Check-bx" >
                        <label for="Ptsh" >
                          <input id="Ptsh" type="radio" class="rdo left" value="003" v-model="conApplication.mateParentCommunity" />
                          <p class="left chR-bx">上海松江区养老社区</p>
                          <div class="clear"></div>
                        </label> 
                      </div>
                    </div>
                    <div class="left op-ll-c" >
                      <div class="C-Check-bx">
                        <label for="Ptgz" >
                          <input id="Ptgz" type="radio" class="rdo left"  value="004" v-model="conApplication.mateParentCommunity" />
                          <p class="left">广州萝岗区养老社区</p>
                          <div class="clear"></div>
                        </label> 
                      </div>
                    </div>
                    <div class="left op-rr-c" >
                      <div class="C-Check-bx" >
                        <label for="Ptcd" >
                          <input id="Ptcd" type="radio" class="rdo left" value="006" v-model="conApplication.mateParentCommunity" />
                          <p class="left chR-bx">成都温江区养老社区</p>
                          <div class="clear"></div>
                        </label> 
                      </div>
                    </div>
                    <div class="left op-ll-c" >
                      <div class="C-Check-bx">
                        <label for="Ptwh" >
                          <input id="Ptwh" type="radio" class="rdo left"  value="007" v-model="conApplication.mateParentCommunity" />
                          <p class="left">武汉东湖高新区养老社区</p>
                          <div class="clear"></div>
                        </label> 
                      </div>
                    </div>
                    <div class="left op-rr-c" >
                      <div class="C-Check-bx" >
                        <label for="Pthz" >
                          <input id="Pthz" type="radio" class="rdo left" value="008" v-model="conApplication.mateParentCommunity" />
                          <p class="left chR-bx">杭州西湖区养老社区</p>
                          <div class="clear"></div>
                        </label> 
                      </div>
                    </div>
                    <div class="left op-ts-c" >
                      <div class="C-Check-bx">
                        <label for="Ptsz" >
                          <input id="Ptsz" type="radio" class="rdo left"  value="005" v-model="conApplication.mateParentCommunity" />
                          <p class="left ts-c">苏州工业园(阳澄湖半岛)区养老社区</p>
                          <div class="clear"></div>
                        </label> 
                      </div>
                    </div>
                    <div class="clear"></div>
                  </div>
               </div>
             </div>
           </div>
          </div>
          <div class="cc-tips">
            <div to='' class='a'><p class="tips-text">保存所填写信息并认真阅读确认函关键事项提示</p></div>
          </div>
          <div class="cc-btn">
            <div to='' class='a'><p class="btn-keep" @click="submit()">保存</p></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CheckCommunity',
    data () {
      return {
        conApplication: '',
        cssdownMe: false,
        cssdownPar: false,
        cssdownPte: false,
        type: null,
        typeP: null,
        typePt: null,
        isShowMe: true,
        isShowParent: true,
        isShowPartner: true,
        parent: '', // 判断是否前面勾选了父母，进行显示
        mateParent: '' // 判断是否前面勾选了岳父母，进行显示
      };
    },
    created () {
      if (sessionStorage.getItem('conApplication')) {
        this.conApplication = JSON.parse(sessionStorage.getItem('conApplication'));
        // companyCode(this.conApplication);
      };
      this.parentShow();
    },
    methods: {
      toggleMe () {
        this.isShowMe = !this.isShowMe;
        this.cssdownMe = !this.cssdownMe;
      },
      toggleParent () {
        this.isShowParent = !this.isShowParent;
        this.cssdownPar = !this.cssdownPar;
      },
      togglePartner () {
        this.isShowPartner = !this.isShowPartner;
        this.cssdownPte = !this.cssdownPte;
      },
      parentShow () { // 存放从前面传过来父母是否考虑入住'1','0';和配偶父母是否考虑入住的值'1','0';
        this.parent = Number(this.conApplication.parentHold);
        this.mateParent = Number(this.conApplication.mateParentHold);
        // companyCode(this.parent + 'P');
        // companyCode(this.mateParent + 'M');
      },
      checkIsChoose (isShow, isChoose, info) {
        if (isShow) {
          if (!isChoose) {
            this.toast('请选择入住哪个社区（' + info + '）');
            return false;
          } else {
            return true;
          }
        } else {
          return true;
        }
      },
      submit () { // 存放从前面传过来父母是否考虑入住'1','0';和配偶父母是否考虑入住的值'1','0';

        // 自己的勾选？
        if (!this.checkIsChoose(1, this.conApplication.communityId, '您和您的配偶')) return;
        // 父母的勾选？
        if (!this.checkIsChoose(this.parent, this.conApplication.parentCommunity, '您的父母')) return;
        // 配偶父母的勾选？
        if (!this.checkIsChoose(this.mateParent, this.conApplication.mateParentCommunity, '配偶的父母')) return;

        if (!this.parent) this.conApplication.parentCommunity = '';
        if (!this.mateParent) this.conApplication.mateParentCommunity = '';

        sessionStorage.setItem('conApplication', JSON.stringify(this.conApplication));
        this.$router.push(this.routerFixed + '/confirmationPoint');
      }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cc-option-bx>div .C-Check-bx label>p.chL-bx{
  margin-left: 7.7vw;
  width: 100%;
}
.cc-option-bx>div .C-Check-bx label>p.chR-bx{
  margin-left: 0.7vw;
  width: 100%;
}
.rdo {
    width: 20px;
    height: 0px;
    background-color: #000;
    margin-right: 30px;
    border-radius: 50%;
    position: relative;
  }
  .rdo:before,.rdo:after {
    content: '';
    display: block;
    position: absolute;
    border-radius: 50%;
  }
  .rdo:before {
      width: 6vw;
      height: 8vw;
      background: url(../assets/images/y_h_notick.png) no-repeat center center;
      background-size: 4.23vw 4vw;
  }
  .rdo:after {
      width: 6px;
      height: 8px;
  }
  .rdo:checked:after {
      width: 6vw;
      height: 8vw;
      background: url(../assets/images/y_h_gtick.png) no-repeat center center;
      background-size: 4.23vw 4vw;
  }
  .rdo:checked:before {
      width: 6vw;
      height: 8vw;
      background: url(../assets/images/y_h_notick.png) no-repeat center center;
      background-size: 4.23vw 4vw;
  }
.container{
  position: relative;
  width: 100vw;
}
.container .content{
  position: relative;
  width: 100%;

}
.container .content .page-down{
  position: relative;
  width: 100%;
  background: #EEEEEE;
  padding-top: 4vw;
  padding-bottom: 4vw;
  min-height: 100vh;
}

.container .content .page-down .c-Detaile{
  position: relative;
  padding-bottom: 14vw;

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


.container .content .page-down .c-Detaile .c-btn{
  position: relative;
  width: 80%;
  margin-left: 10%;
  text-align: center;
}
.container .content .page-down .c-Detaile .c-btn .a{
  position: relative;
  width: 60vw;
  height: 10vw;
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

.left{
  float: left;
}
.clear{
  clear: both;
}
.cc-content{
  position: relative;
  width: 100vw;
  padding-bottom: 3vh;
  background: #EEEEEE;
}
.cc-content .cc-text{
  position: relative;
  width: 92vw;
  margin-left: 4vw;
}
.cc-content .cc-text .cc-item{
  position: relative;
  width: 100%;
  font-size: 3.7vw;
  line-height: 7.5vw;
  color: #FD7B0F;
  text-align: justify;
}
.cc-content .model-bx{
  position: relative;
  width: 100%;
}
.cc-content .model-bx .choice{
  position: relative;
  width: 100vw;
  padding-left: 4vw;
  padding-right: 4vw;
  border-bottom: 0.1vw solid#ccc;
}
.cc-content .model-bx .choice>ul{
  position: relative;
  width: 100%;
  list-style: none;
}
.cc-content .model-bx .choice>ul .cc-t{
  position: relative;
  float: left;
}
.cc-content .model-bx .choice>ul .cc-t .choice-text{
  position: relative;
}
.cc-content .model-bx .choice>ul .cc-t .choice-text>p{
  font-size: 3.7vw;
  line-height: 7.5vw;
  margin-bottom: 1vw;
  margin-top: 1vw;
  color: #333333;
  letter-spacing: 0.3vw;
  text-align: justify;
}
.cc-content .model-bx .choice>ul .cc-i{
  position: relative;
  float: right;
}
.cc-content .model-bx .choice>ul .cc-i .choice-img{
  position: relative;
  width: 4vw;
  height: 6vw;
}
.cc-content .model-bx .choice>ul .cc-i .choice-img div{
  position: relative;
  width: 100%;
  width: 4vw;
  height: 6vw;
  background: url(../assets/images/y_cc_down.png) no-repeat center center;
  background-size: 4vw 4vw;
  margin-top: 2vw;
}
.cc-content .model-bx .choice>ul .cc-i .choice-img div.active{
  position: relative;
  width: 100%;
  width: 4vw;
  height: 6vw;
  background: url(../assets/images/y_cc_drop.png) no-repeat center center;
  background-size: 4vw 4vw;
  margin-top: 2vw;
}
.option{
  position: relative;
  width: 100%;
  background: #FFFFFF;
  border-bottom: 0.1vw solid#ccc;
}
.option .op-bx{
  position: relative;
  width: 92vw;
  margin-left: 4vw;
  padding-top: 2vw;
  padding-bottom: 2vw;
}







.cc-option-bx{
  position: relative;
  width: 100%;
}
.cc-option-bx>div{
  position: relative;
  text-align: left;
}
.cc-option-bx>div.op-ll-c{
  position: relative;
  width: 57%;
  text-align: left;
}
.cc-option-bx>div.op-rr-c{
  position: relative;
  width: 42%;
  text-align: right;
}
.cc-option-bx>div.op-ts-c{
  position: relative;
  text-align: left;
}
.ts-c{
      margin-left: 10%;
}
.cc-option-bx>div .C-Check-bx{
  position: relative;
  width: 100%;
}
.cc-option-bx>div .C-Check-bx label{
  position: relative;
  width: 100%;
  left: 0vw;
  margin-top: 2vw;
  background-size: 4.23vw 4vw;
}
.cc-option-bx>div .C-Check-bx label .rdo{
  position: relative;
}
.cc-option-bx>div .C-Check-bx label>p{
  position: relative;
  width: 100%;
      width: 82%;   
       margin-left: 7.7vw;
    font-size: 3.466vw;
    line-height: 8.5vw;
    margin-bottom: 2vw;
    color: #623B1A;
  }
  .cc-option-bx>div .C-Check-bx label>p.ts-c{
    
}

.cc-tips{
  position: relative;
  width: 100%;
}
.cc-tips>a{
  position: relative;
  width: 100%;
}
.tips-text{
  position: relative;
  width: 100%;
  text-align: center;
  font-size: 3.46vw;
  color: #FD7B0F;
  line-height: 6vw;
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
</style>
