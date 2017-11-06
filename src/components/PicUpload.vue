<template>
    <div class ="pic-up">
        <input type="file"  class="input-file" @change="uploadImg($event)" accept="image/*" :a="cwid" :value="fileval" :id="dataname">
        <div class="mark" v-show="cutting"  @touchmove="fixmove($event)" @click="dataInit()">
          <div class="center-center" @click="prevent($event)">
            <div class="canvas" :style="wrapstyle">
              <v-touch tag="img" :src="norsrc" :style="picstyle" @panpanstart="dragstart($event)" @panstart = "dragstart($event)" @pan = "drag($event)" @pinchstart = "scalestart($event)" @pinch = "scale($event)"></v-touch>
            </div>
            <div class="icon-wrap">
              <a class="icon icon-bigger" @click = "tapscale(1)"></a>
              <a class="icon icon-smaller" @click = "tapscale(-1)"></a>
              <a class="icon icon-left" @click = "taprot(-1)"></a>
              <a class="icon icon-right" @click = "taprot(1)"></a>
              <a class="icon icon-confirm"  @click = "confirm()"></a>
            </div>
          </div>
        </div>
    </div>
</template>
<script>
    export default{
      name: 'picup-div',
      props: {
        usrc: {
          type: String,
          default: ''
        },
        limit: {
          type: Number,
          default: 4096
        },
        picrate: {
          type: Number,
          default: 1
        },
        limitw: {
          type: Number,
          default: 1280
        },
        dataname: {
          type: String,
          default: ''
        }
      },
      data: function () {
        return {
          fileval: '',
          nsrc: this.usrc, //  待输出的url
          cwid: 0.9 * window.innerWidth,  // canvas 容器宽度
          chei: 0.9 * window.innerWidth / this.picrate,
          respeed: 0.1, //  canvas 缩放速度
          cutting: false, //  是否正在裁切
          norImg: null,
          norsrc: '',
          picstate: {
            pwidth: 0,
            pheight: 0,
            width: 0,
            height: 0,
            top: 0,
            left: 0,
            scale: 1,
            rotate: 0,
            stx: 0,
            sty: 0,
            stl: 0,
            stt: 0,
            stw: 0,
            sth: 0
          }
        };
      },
      computed: {
        wrapstyle: function () {
          let stylestr = 'width:' + this.cwid + 'px; height:' + this.chei + 'px';
          return stylestr;
        },
        picstyle: function () {
          let stylestr = '';
          stylestr += 'width:' + this.picstate.width + 'px;';
          stylestr += 'height:' + this.picstate.height + 'px;';
          stylestr += 'top:' + this.picstate.top + 'px;';
          stylestr += 'left:' + this.picstate.left + 'px;';
          stylestr += 'transform:rotate(' + (this.picstate.rotate * 90) + 'deg);';
          stylestr += '-webkit-transform:rotate(' + (this.picstate.rotate * 90) + 'deg);';
          return stylestr;
        }
      },
      methods: {
        uploadImg: function (e) {
          let fileList = e.target.files;
          let _this = this;
          //  验证文件是否存在且为图片，如果不是，返回
          if (!fileList || !fileList.length) {
            return;
          }
          let file = fileList[0];
          // 通过filereader api获取文件base64编码
          let reader = new FileReader();
          // console.log(file);
          reader.readAsDataURL(file);
          reader.onload = function () {
            //  创建图片对象，对图片进行长宽和方向的初始化
            let img = new Image();
            img.src = this.result;
            img.onload = function () {
              _this.normImg(this);
            };
          };
        },
        normImg: function (img) {
          // img为最初的图片对象,通过img创建出标准的canvas和新的img对象
          var canvas = document.createElement('canvas');
          var ctx = canvas.getContext('2d');
          var preWidth = img.width;
          var preHeight = img.height;
          // 确定调整后的图像宽高
          var imgWidth = preWidth;
          var imgHeight = preHeight;
          if (preWidth >= preHeight) {
            if (preWidth > this.limitw) {
              imgWidth = this.limitw;
              imgHeight = preHeight * imgWidth / preWidth;
            }
          } else {
            if (preHeight > this.limitw) {
              imgHeight = this.limitw;
              imgWidth = preWidth * imgHeight / preHeight;
            }
            [imgWidth, imgHeight] = [imgHeight, imgWidth];
          }
          if (imgWidth / imgHeight >= this.picrate) {
            this.picstate.height = this.chei;
            this.picstate.width = imgWidth * this.chei / imgHeight;
          } else {
            this.picstate.width = this.cwid;
            this.picstate.height = imgHeight * this.cwid / imgWidth;
          }
          this.picstate.pwidth = this.picstate.width;
          this.picstate.pheight = this.picstate.height;
          // window.location = img.src;
          // 绘制图片canvas
          canvas.width = imgWidth;
          canvas.height = imgHeight;
          if (preWidth >= preHeight) {
            ctx.drawImage(img, 0, 0, imgWidth, imgHeight);
          } else {
            ctx.rotate(270 * Math.PI / 180);
            ctx.drawImage(img, -imgHeight, 0, imgHeight, imgWidth);
          }
          // 获取图片url
          var _this = this;
          let base = canvas.toDataURL('image/jpeg', 1);
          let norImg = new Image();
          norImg.src = base;
          // window.location = base;
          norImg.onload = function () {
            _this.cutting = true;
            //  保存标准图片对象
            _this.norImg = this;
            _this.norsrc = this.src;
          };
        },
        dragstart: function (e) {
          this.picstate.stl = this.picstate.left;
          this.picstate.stt = this.picstate.top;
          this.picstate.stx = e.deltaX;
          this.picstate.sty = e.deltaY;
        },
        drag: function (e) {
          var tarleft = this.picstate.stl + (e.deltaX - this.picstate.stx);
          var tartop = this.picstate.stt + (e.deltaY - this.picstate.sty);
          this.picstate.left = tarleft;
          this.picstate.top = tartop;
        },
        scalestart: function (e) {
          this.picstate.stw = this.picstate.width;
          this.picstate.sth = this.picstate.height;
        },
        scale: function (e) {
          this.picstate.width = this.picstate.stw * ((e.scale - 1) * 0.5 + 1);
          this.picstate.height = this.picstate.sth * ((e.scale - 1) * 0.5 + 1);
        },
        tapscale: function (o) {
          var scale;
          if (o > 0) {
            scale = 1 + this.respeed;
          } else {
            scale = 1 - this.respeed;
          }
          this.picstate.width *= scale;
          this.picstate.height *= scale;
        },
        taprot: function (o) {
          if (o > 0) {
            this.picstate.rotate = (this.picstate.rotate + 1) % 4;
          }
          if (o < 0) {
            this.picstate.rotate = (this.picstate.rotate - 1) % 4;
          }
          if (this.picstate.rotate < 0) {
            this.picstate.rotate += 4;
          }
          if (this.picstate.rotate % 2 === 0) {
            this.picstate.left = 0;
            this.picstate.top = 0;
          } else {
            this.picstate.left = (this.picstate.height - this.picstate.width) / 2;
            this.picstate.top = (this.picstate.width - this.picstate.height) / 2;
          }
        },
        confirm: function () {
          // 画图(旋转前)
          var canvas = document.createElement('canvas');
          var ctx = canvas.getContext('2d');
          var img = this.norImg;
          var imgWidth = img.width;
          var imgHeight = img.height;
          var scale = imgWidth / this.picstate.width;
          var canvasWidth = this.cwid * scale;
          var canvasHeight = this.chei * scale;
          var left = scale * this.picstate.left;
          var top = scale * this.picstate.top;
          canvas.width = canvasWidth;
          canvas.height = canvasHeight;
          //  旋转指定角度
          var ro = this.picstate.rotate;
          var degree = ro * 90 * Math.PI / 180;
          var xo = left + imgWidth / 2;
          var yo = top + imgHeight / 2;
          ctx.translate(xo, yo);
          ctx.rotate(degree);
          ctx.translate(-xo, -yo);
          ctx.drawImage(img, left, top);
          // 得到最终的url;
          var _this = this;
          let zipurl = _this.zip(canvas);
          if (!zipurl) {
            this.dataInit();
            return;
          }
          let finalImg = new Image();
          finalImg.src = zipurl;
          finalImg.onload = function () {
            let src = this.src;
            _this.nsrc = src;
            let data = {
              name: _this.dataname,
              src: _this.nsrc
            };
            _this.$emit('img', data);
            _this.dataInit();
          };
        },
        zip: function (canvas) {
          for (var i = 100; i > 0; i--) {
            let src = canvas.toDataURL('image/jpeg', i / 100);
            if (src.length <= this.limit * 1024) {
              return src;
            }
          };
        },
        fixmove: function (e) {
          e.preventDefault();
        },
        prevent: function (e) {
          e.stopPropagation();
        },
        dataInit: function () {
            this.cutting = false;
            this.fileval = '';
            this.norImg = null;
            this.norsrc = '';
            this.picstate = {
              pwidth: 0,
              pheight: 0,
              width: 0,
              height: 0,
              top: 0,
              left: 0,
              scale: 1,
              rotate: 0,
              stx: 0,
              sty: 0,
              stl: 0,
              stt: 0,
              stw: 0,
              sth: 0
            };
        }
      },
      watch: {
        nsrc (val) {
          this.nsrc = val;
        }
      }
    };
</script>
<style scoped>
.pic-up {
  width:0;
  height:0;
}
.input-file{
  width:0;
  height:0;
}
.mark{
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 10000;
  background: rgba(0,0,0,0.8);
}
.center-center{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
}
.canvas{
  border:1px solid #d3d3d3;
  background:#fff;
  position:relative;
  overflow:hidden;
}
.canvas img{
  position:absolute;
  left:0;
  top:0;
}
.img-h{
  height:100%;
}
.img-w{
  width:100%;
}
.icon-wrap{
  padding-top:2vw;
}
.icon{
  width: 8vw;
  height: 8vw;
  display: inline-block;
}
.icon-bigger{
  width: 8vw;
  height: 8vw;
  background: url('../assets/images/bigger.png') no-repeat;
  background-size: 100% 100%;
  margin:0 2vw
}
.icon-smaller{
  width: 8vw;
  height: 8vw;
  background: url('../assets/images/smaller.png') no-repeat;
  background-size: 100% 100%;
  margin:0 2vw
}
.icon-left{
  width: 8vw;
  height: 8vw;
  background: url('../assets/images/toleft.png') no-repeat;
  background-size: 100% 100%;
  margin:0 2vw
}
.icon-right{
  width: 8vw;
  height: 8vw;
  background: url('../assets/images/toright.png') no-repeat;
  background-size: 100% 100%;
  margin:0 2vw
}
.icon-confirm{
  width: 8vw;
  height: 8vw;
  background: url('../assets/images/confirm.png') no-repeat;
  background-size: 100% 100%;
  float:right
}
</style>
