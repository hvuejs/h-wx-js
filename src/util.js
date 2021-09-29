
// window.navigator.userAgent属性包含了浏览器类型、版本、操作系统类型、浏览器引擎类型等信息，这个属性可以用来判断浏览器类型
var u = window.navigator.userAgent;
var ua = '' + u.toLowerCase();

/**
 * 判断 ios 设备
 */
export function isIos () {
	let bool = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
	return bool;
}

export function isWeiXinAndIos() {
	// 通过正则表达式匹配ua中是否含有MicroMessenger字符串且是IOS系统
	var isWeixin = /MicroMessenger/i.test(ua) // 是在微信浏览器
	// var isIos = /\(i[^;]+;( U;)? CPU.+Mac OS X/i.test(ua) // 是IOS系统
	return isWeixin && isIos()
}
