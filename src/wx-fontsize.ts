declare let WeixinJSBridge: any  // 解决 WeixinJSBridge 在TS编译会报错
declare const document: Document & { attachEvent: any };

function handleFontSize(): void {
	try {
		WeixinJSBridge.invoke("setFontSizeCallback", { fontSize: 0 });
		WeixinJSBridge.on("menu:setfont", function() {
			WeixinJSBridge.invoke("setFontSizeCallback", { fontSize: 0 });
		});
	} catch (e) {
		console.warn(e)
	}

}

export function initFontSize (): void {
	if (typeof WeixinJSBridge == "object" && typeof WeixinJSBridge.invoke == "function") {
		handleFontSize();
	} else {
		const doc = document;
		if (doc.addEventListener) {
			doc.addEventListener("WeixinJSBridgeReady", handleFontSize, false);
		} else if (doc.attachEvent) {
			doc.attachEvent("WeixinJSBridgeReady", handleFontSize);
			doc.attachEvent("onWeixinJSBridgeReady", handleFontSize);
		}
	}
}
