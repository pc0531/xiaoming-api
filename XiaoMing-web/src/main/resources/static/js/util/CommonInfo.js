let CommonInfo = function () {
};

/**
 * 统一设置缓存
 * @type {{setItem: localStorageWarp.setItem, getItem: localStorageWarp.getItem, removeItem: localStorageWarp.removeItem, clear: localStorageWarp.clear}}
 */
CommonInfo.localStorage = localStorageWarp;
let localStorageWarp = {
    setItem: function (key, value) {
        localStorage.setItem(key, value);
    },
    getItem: function (key, value) {
        return localStorage.getItem(key, value);

    },
    removeItem: function (key, value) {
        localStorage.removeItem(key, value);

    },
    clear: function () {
        localStorage.clear();
    }
}

/**
 * 登录后缓存设置
 * @param res
 */
CommonInfo.setLoginInfo = function (res) {
    localStorageWarp.setItem('token', res.token);
    localStorageWarp.setItem('userInfo', JSON.stringify(res.user));
    goToLastHref();
};

function goToLastHref() {
    // let lastWeixinHref = localStorageWrap.getItem("lastWeixinHref") || '#/';
    // window.location.href = lastWeixinHref;
    // localStorageWarp.removeItem("lastWeixinHref");
    // lastWeixinHref == '#/' ? window.location.reload() : '';
    let lastWeixinHref = localStorageWarp.getItem("lastWeixinHref") || '#/';
    window.location.href = lastWeixinHref;
    localStorageWarp.removeItem("lastWeixinHref");
    lastWeixinHref == '#/' ? window.location.reload() : '';
    // let lastWeixinHref = localStorageWarp.getItem("lastWeixinHref") || '#/';
    // window.location.href = '#/my';
}

function beforeReLogin() {

    // let now = new Date().getTime();
    // let last = localStorageWarp.getItem("loginMillTime") || 0;
    // if (now - last < 5000) {
    //     localStorageWrap.setItem("loginMillTime", now);
    //     return;
    // }

    // //取出从app来的标志位
    // let fromElifeApp = CommonInfo.fromElifeApp();
    // //塞入从app来的标志位
    // localStorage.setItem("fromElifeApp", fromElifeApp);

    //存储当前的url
    console.error(window.location.href);
    // localStorageWarp.setItem("lastWeixinHref", window.location.href);
    localStorageWarp.setItem("lastWeixinHref", window.location.href);

}


CommonInfo.getToken = function () {
    let token = localStorageWarp.getItem('token');
    if(token && (token !== 'null') && (token !== 'undefined')){
        return token;
    }
    return '';
}


/**
 * 获取位置信息
 * @returns {*|jQuery}
 */
CommonInfo.getPosition = function (callback) {
    let positionResult = {};
    CommonInfo.getPositionByGaode(callback);
}

CommonInfo.getPositionByGaode = function (callback) {
    AMap.plugin(['AMap.Geolocation'], function () {
        let geolocation = new AMap.Geolocation({
            showCircle: false, //不显示定位结果的圆
            showMarker: false, //不显示定位结果的标记
            showButton: false, //不显示组件的定位按钮
            timeout: 5000 //浏览器定位超时时间5s
        });
        geolocation.getCurrentPosition(function (status, result) {
            if (status == 'complete') {
                onLocateSuccess(result); //定位成功
            } else if (status == 'error') {
                //定位失败
                if (result.message.indexOf('Geolocation permission denied.') !== -1) {
                    //Geolocation permission denied.表示用户禁用了浏览器或者APP的定位权限或者关闭了手机的定位服务
                    //或者当前页面为非安全页面,Chrome或者IOS10等系统会禁用非安全页面的定位请求
                    //如果您的页面还没有支持HTTPS请尽快升级
                    //安全页面指的是支持HTTPS的Web站点，而且是通过https协议打开的页面。安全页面也包括本地页面
                    // showTip('您好，请在系统的隐私设置中打开当前应用的定位权限。');
                } else {
                    // showTip('无法获取精确位置,将定位您所在的城市。');
                }
                // onLocateFailed();
                mui.toast(result.message);
            }
        });
    });

    //定位成功
    let onLocateSuccess = function (result) {
        let positionObj = {};
        positionObj.longitude = result.position.lng;
        positionObj.latitude = result.position.lat;
        positionObj.time = new Date().getTime();
        positionObj.city = result.addressComponent.city;
        positionObj.adcode = result.addressComponent.adcode;

        //在手机微信上用这段代码,将地址信息放入到localStorage中,缓存时间为1分钟
        //localStorageWrap.setItem("cwechat-index:setPosition", JSON.stringify(positionObj));
        if (callback) {
            callback(positionObj);
        }

    };


}

CommonInfo.checkLogin = function (arg) {
    let token = localStorageWarp.getItem('token');
    token = (token ==='null' || token ==='undefined'? '' :token);
    if(!token){
        console.error("没有token!");
        if (arg && arg.type === 0) {// 只检查登录状态
            return false;
        } else {//其他状态 弹出登录确认框
            console.error("过来")
            reLoginWithNoConfirm();
        }
    }
    else {
        return true;
    }
    return !!token;
};

CommonInfo.reLoginWithNoConfirm = reLoginWithNoConfirm;
function reLoginWithNoConfirm() {
    beforeReLogin();
    window.location.href = "/" +"#/login";
};

CommonInfo.getUserInfo = function () {
    let userInfo = localStorageWarp.getItem('userInfo');
    if (!userInfo) {
        return {};
    }
    try {
        userInfo = eval(userInfo);
        userInfo = JSON.parse(userInfo);
    } catch (e) {
        userInfo = JSON.parse(userInfo);
    }

    return userInfo;
};

module.exports = CommonInfo;