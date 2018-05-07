var immutable = require('immutable');
var CommonInfo = require('../util/CommonInfo');


var request = function () {
};
module.exports = request;
/**
 * get请求
 * @param url
 * @param data
 * @param context
 * @returns {*}
 */
request.get = function (url, data, context, needToken) {
    var deferred = $.Deferred();
    if (!requestControl(data, url)) {
        return deferred.promise();
    }
    var ctx = context || this;
    var headers = {};
    var params = data || {};
    var takenFlag = needToken ===undefined ? true : needToken;
    if(takenFlag){
        headers = {Authorization: CommonInfo.getToken()}
    }

    $.ajax({
        url: url,
        type: "GET",
        data: params,
        headers: headers,
        success: function (resp) {
            if (resp.rescode == '202' || (resp.rescode == '201' && resp.msg == '未登录')) {
                alert("get错误");
            }
            else {
                (resp.result === "ok") ? deferred.resolveWith(ctx, [resp.data]) : deferred.rejectWith(ctx, [resp]);
            }
        },
        error: function (resp) {
            deferred.rejectWith(ctx, [resp]);
        }
    });
    return deferred.promise();
};

/**
 * post请求
 * @param url
 * @param data
 * @param context
 * @returns {*}
 */
request.post = function (url, data, context) {
    var deferred = $.Deferred();
    if (!requestControl(data, url)) {
        deferred.rejectWith(ctx, [{result: 'fail', msg: '请求太快！'}])
        return deferred.promise();
    }
    var ctx = context || this;
    var params = data || {};
    $.ajax({
        url: url,
        type: "POST",
        data: params,
        success: function (resp) {
            if (resp.rescode == '202' || (resp.rescode == '201' && resp.msg == '未登录')) {
                // CommonInfo.reLoginWithNoConfirm();
                alert("post出错")
            } else {
                (resp.result === "ok") ? deferred.resolveWith(ctx, [resp.data]) : deferred.rejectWith(ctx, [resp]);
            }
        },
        error: function (resq) {
            deferred.rejectWith(ctx, [resq]);
        }}
    });
    return deferred.promise();
};
/**
 * 请求处理器，1秒内仅允许一次请求*/
var arr = new Array();
var t = 1000;//同一请求1秒内只允许一次
function requestControl(params, url) {
    var obj = immutable.fromJS({params: params, url: url});


    var _index = arr.length;
    for (var _i in arr) {
        if (immutable.is(arr[_i].target, obj)) {

            var times = arr[_i].times;

            if (new Date().getTime() - times >= t) {

                _index = _i;
                break;
            } else {
                arr = arr.splice(_i, _index - _i);
                return false;//停止此次请求

            }
        }
    }
    arr[_index] = {times: new Date().getTime(), target: obj};
    return true;
}