import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Guide from '@/components/Guide';
import Confirmation from '@/components/Confirmation';
import ConfirmationPoint from '@/components/ConfirmationPoint';
import Mirror from '@/components/Mirror';
import CheckCommunity from '@/components/CheckCommunity';
import getResult from '@/components/getResult';
import inputCon from '@/components/inputCon';
import inputCon2 from '@/components/inputCon2';
import Sign from '@/components/Sign';
import SignPhoto from '@/components/SignPhoto';
import SignCeshi from '@/components/SignCeshi';
import signPhonePage from '@/components/signPhonePage';
import SignCeshiBx from '@/components/SignCeshiBx';

import EVN from '../../config/evn';
import {routerFixed} from '@/api';
// console.log(routerFixed);

var routeArrTest = [
    {
      path: routerFixed + '/guide',
      name: 'Guide',
      component: Guide
    },
    {
      path: routerFixed + '/Hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: routerFixed + '/SignCeshi',
      name: 'SignCeshi',
      component: SignCeshi
    },
    {
      path: routerFixed + '/SignCeshiBx',
      name: 'SignCeshiBx',
      component: SignCeshiBx
    }
];
var routeArr = [
    {
      path: routerFixed + '/',
      name: 'Confirmation',
      meta: {title: '确认函申请'},
      component: Confirmation
    },
    {
      path: routerFixed + '/ConfirmationPoint',
      name: 'ConfirmationPoint',
      meta: {title: '填写申请信息'},
      component: ConfirmationPoint
    },
    {
      path: routerFixed + '/Mirror',
      name: 'Mirror',
      meta: {title: '镜像确认'},
      component: Mirror
    },
    {
      path: routerFixed + '/checkCommunity',
      name: 'CheckCommunity',
      meta: {title: '填写申请信息'},
      component: CheckCommunity
    },
    {
      path: routerFixed + '/getResult',
      name: 'getResult',
      meta: {title: '申请结果'},
      component: getResult
    },
    {
      path: routerFixed + '/inputCon',
      name: 'inputCon',
      meta: {title: '填写申请信息'},
      component: inputCon
    },
    {
      path: routerFixed + '/inputCon2',
      name: 'inputCon2',
      meta: {title: '填写申请信息'},
      component: inputCon2
    },
    {
      path: routerFixed + '/Sign',
      name: 'Sign',
      meta: {title: '身份验证'},
      component: Sign
    },
    {
      path: routerFixed + '/SignPhoto',
      name: 'SignPhoto',
      meta: {title: '身份验证'},
      component: SignPhoto
    },
    {
      path: routerFixed + '/signPhonePage',
      name: 'signPhonePage',
      meta: {title: '身份验证'},
      component: signPhonePage
    }
  ];
  if (EVN !== 'production') routeArr = routeArr.concat(routeArrTest);
Vue.use(Router);
export default new Router({
  mode: 'history',
  routes: routeArr
});
