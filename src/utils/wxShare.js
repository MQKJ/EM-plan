import wx from 'weixin-js-sdk';
import axios from 'axios';
const queryString = require('querystring');

function getSign (to) {
    var param = {
        fullWXUrl: location.origin + to.fullPath
      };
      // alert(param.fullWXUrl);
    axios.post('/confirmation/wxsign', queryString.stringify(param)).then(res => {
      if (res && res.data) {
        var data = res.data.wxbrgeMap;
        wx.config({
          debug: false,
          // debug: true,
          appId: data.appId,
          timestamp: data.timestamp,
          nonceStr: data.nonceStr,
          signature: data.signature,
          jsApiList: ['hideAllNonBaseMenuItem', 'previewImage', 'chooseImage', 'showMenuItems', 'onMenuShareTimeline', 'onMenuShareAppMessage', 'hideMenuItems']
        });
        shareAction();
      } else {
        // console.log('微信签名响应数据有误');
      }
    }).catch(res => {
      // console.log('微信签名接口失败');
    });
  };
function shareAction () {
    var origin = location.origin;
    var title = '泰康员工专属养老社区入住计划确认函申请';
    var link = origin + '/emplan';
    var imgUrl = origin + '/emplan/static/img/wxshare.png';
    var desc = '传承泰康大健康四位一体养老理念，为员工提供专享养老福利，体验全方位健康养老生活，与泰康共享幸福人生，快来申请入住吧！';
    wx.ready(function () {
      wx.hideMenuItems({
          menuList: ['menuItem:openWithSafari', 'menuItem:openWithQQBrowser',
              'menuItem:share:qq', 'menuItem:share:weiboApp', 'menuItem:share:QZone',
              'menuItem:share:email', 'menuItem:copyUrl'] // 要隐藏的菜单项，所有menu项见附录3
      });
      // share to 朋友圈
      wx.onMenuShareTimeline({
        title: title,
        link: link,
        imgUrl: imgUrl,
        success: function () {},
        cancel: function () {}
      });
      // share to 朋友
      wx.onMenuShareAppMessage({
        title: title,
        link: link,
        desc: desc,
        imgUrl: imgUrl,
        success: function () {},
        cancel: function () {}
      });
    });
  }
function isIOS () {
  var u = navigator.userAgent;
  var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // ios终端
  return isiOS;
};
export default function (to) {
  if (!isIOS()) {
    getSign(to);
  } else {
    shareAction();
  }
};
