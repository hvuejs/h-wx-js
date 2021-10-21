// window.navigator.userAgent属性包含了浏览器类型、版本、操作系统类型、浏览器引擎类型等信息，这个属性可以用来判断浏览器类型
var u = window.navigator.userAgent;
var ua = '' + u.toLowerCase();
/**
 * 判断 ios 设备
 */

function isIos() {
  var bool = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
  return bool;
}
function isWeiXinAndIos() {
  // 通过正则表达式匹配ua中是否含有MicroMessenger字符串且是IOS系统
  var isWeixin = /MicroMessenger/i.test(ua); // 是在微信浏览器
  // var isIos = /\(i[^;]+;( U;)? CPU.+Mac OS X/i.test(ua) // 是IOS系统

  return isWeixin && isIos();
}

function watchInput() {
  var myFunction;
  var isWXAndIos = isWeiXinAndIos();

  if (isWXAndIos) {
    // 既是微信浏览器 又是ios============（因为查到只有在微信环境下，ios手机上才会出现input失去焦点的时候页面被顶起）
    document.body.addEventListener('focusin', function () {
      // 软键盘弹起事件 （focusin：在元素获得焦点时触发，与 HTML 事件 focus 等价，但它冒泡。）
      clearTimeout(myFunction);
    });
    document.body.addEventListener('focusout', function () {
      // 软键盘关闭事件 （focusout：在元素失去焦点时触发。与 HTML 事件 blur 等价，冒泡）
      clearTimeout(myFunction);
      myFunction = setTimeout(function () {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        }); // 重点  =======当键盘收起的时候让页面回到原始位置
      }, 200);
    });
  }
}
function fixScroll() {
  if (isIos) {
    window.scrollTo(0, 0);
  }
}
var hwx = {
  watchInput: watchInput,
  fixScroll: fixScroll
};

export { hwx as default, fixScroll, watchInput };
