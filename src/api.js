const EVN = require('../config/evn');

var api1 = '/api1';
var api2 = '/api2';
var preFixed = '';
var routerFixed = '';

if (EVN !== 'localTest') {
  preFixed = '/confirmation';
  api1 = '';
  api2 = '';
  routerFixed = '/emplan';
}
export {api1, api2, preFixed, routerFixed};
