/*
 * @Date: 2021-09-29 22:41:06
 * @Author: 清风浩明月
 * @Version:
 * @LastEditTime: 2021-09-29 23:10:41
 * @Description:
 */
import { isWeiXinAndIos, isIos } from "./util";

export function watchInput() {
	var myFunction;
	var isWXAndIos = isWeiXinAndIos()
	if (isWXAndIos) { // 既是微信浏览器 又是ios============（因为查到只有在微信环境下，ios手机上才会出现input失去焦点的时候页面被顶起）
		document.body.addEventListener('focusin', () => { // 软键盘弹起事件
			clearTimeout(myFunction);
		})
		document.body.addEventListener('focusout', () => { // 软键盘关闭事件
			clearTimeout(myFunction)
			myFunction = setTimeout(function () {
				window.scrollTo({
					top: 0,
					left: 0,
					behavior: 'smooth'
				}) // 重点  =======当键盘收起的时候让页面回到原始位置
			}, 200)
		})
	}
}


export function fixScroll () {
	if (isIos) {
		window.scrollTo(0, 0);
	}
}

const h = {
	watchInput,
	fixScroll
}

export default h;
