import { isWeiXinAndIos, isIos } from "./util";

export function watchInput(): void {
	var myFunction: any;
	var isWXAndIos: boolean = isWeiXinAndIos();
	if (isWXAndIos) { // 既是微信浏览器 又是ios============（因为查到只有在微信环境下，ios手机上才会出现input失去焦点的时候页面被顶起）
		document.body.addEventListener('focusin', () => { // 软键盘弹起事件 （focusin：在元素获得焦点时触发，与 HTML 事件 focus 等价，但它冒泡。）
			clearTimeout(myFunction);
		})
		document.body.addEventListener('focusout', () => { // 软键盘关闭事件 （focusout：在元素失去焦点时触发。与 HTML 事件 blur 等价，冒泡）
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


export function fixScroll (): void {
	if (isIos()) {
		window.scrollTo(0, 0);
	}
}

export { initFontSize } from "./wx-fontsize";

import { initFontSize } from "./wx-fontsize";

export interface Hwxjs {
	watchInput(): void;
	fixScroll(): void;
	initFontSize(): void;
}

const hwxjs: Hwxjs = {
	watchInput,
	fixScroll,
	initFontSize
}

export default hwxjs;
