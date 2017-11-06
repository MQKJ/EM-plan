// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import VueTouch from 'vue-touch';
import {api1, api2, preFixed, routerFixed} from './api';
import {Picker, DatetimePicker, Popup, Toast} from 'mint-ui';
import wxConfig from './utils/wxConfig.js';
import wxShare from './utils/wxShare.js';
import 'mint-ui/lib/style.css';

Vue.component(Popup.name, Popup);
Vue.component(DatetimePicker.name, DatetimePicker);
Vue.component(Picker.name, Picker);

Vue.prototype.toast = Toast;
Vue.prototype.api1 = api1;
Vue.prototype.api2 = api2;
Vue.prototype.routerFixed = routerFixed;
Vue.prototype.preFixed = preFixed;

router.beforeEach((to, from, next) => {
  document.body.scrollTop = 0;
  next();
});

router.afterEach((to) => {
  if (to.meta.title) document.title = to.meta.title;
  wxShare(to);
  // console.log(to.fullPath);
});

Vue.use(VueTouch, {name: 'v-touch'});

Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  mixins: [wxConfig],
  render: h => h(App)
  // template: '<App/>',
  // components: { App }
});
