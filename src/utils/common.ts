/**
 * 全屏
 */
export function fullScreen() {
    var el: any = document.documentElement;
    var rfs =
        el.requestFullScreen ||
        el.webkitRequestFullScreen ||
        el.mozRequestFullScreen ||
        el.msRequestFullScreen;

    //typeof rfs != "undefined" && rfs
    if (rfs) {
        rfs.call(el);
    } else if (typeof window.ActiveXObject !== "undefined") {
        //for IE，这里其实就是模拟了按下键盘的F11，使浏览器全屏
        var wscript = new ActiveXObject("WScript.Shell");
        if (wscript != null) {
            wscript.SendKeys("{F11}");
        }
    }
}

/**
 * 退出全屏
 */
export function exitFullScreen() {
    const el: any = document;
    const cfs =
        el.cancelFullScreen ||
        el.webkitCancelFullScreen ||
        el.mozCancelFullScreen ||
        el.exitFullScreen;

    //typeof cfs != "undefined" && cfs
    if (cfs) {
        cfs.call(el);
    } else if (typeof window.ActiveXObject !== "undefined") {
        //for IE，这里和fullScreen相同，模拟按下F11键退出全屏
        const wscript = new ActiveXObject("WScript.Shell");
        if (wscript != null) {
            wscript.SendKeys("{F11}");
        }
    }
}

/**
 * 判断是否全屏
 * @returns
 */
export function isFullscreenEnabled() {
    // const explorer = window.navigator.userAgent.toLowerCase();
    // if (explorer.indexOf("chrome") > 0) {
    //   //webkit
    //   if (
    //     document.body.scrollHeight === window.screen.height &&
    //     document.body.scrollWidth === window.screen.width
    //   ) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // } else {
    //   //IE 9+  fireFox
    //   if (
    //     window.outerHeight === window.screen.height &&
    //     window.outerWidth === window.screen.width
    //   ) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // }
    const _document: any = window.document;
    return (
        _document.fullscreenElement ||
        _document.msFullscreenElement ||
        _document.mozFullScreenElement ||
        _document.webkitFullscreenElement ||
        false
    );
}

/**
 * 获取url参数
 * @param variable
 * @returns
 */
export function getQueryVariable(variable: string) {
    const query = location.href.split("?")[1] || "";
    const vars = query.split("&");
    for (let i = 0; i < vars.length; i++) {
        const pair = vars[i].split("=");
        if (pair[0] == variable) {
            return pair[1];
        }
    }
    return false;
}
