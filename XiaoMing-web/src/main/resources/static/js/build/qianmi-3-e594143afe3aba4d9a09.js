webpackJsonp([3],{

/***/ 587:
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(161);

var _iflux = __webpack_require__(242);

var _store = __webpack_require__(726);

var _store2 = _interopRequireDefault(_store);

var _utilCommonInfo = __webpack_require__(591);

var _utilCommonInfo2 = _interopRequireDefault(_utilCommonInfo);

var SubmitOrder = (function (_Component) {
    _inherits(SubmitOrder, _Component);

    function SubmitOrder(props) {
        var _this = this;

        _classCallCheck(this, SubmitOrder);

        _get(Object.getPrototypeOf(SubmitOrder.prototype), 'constructor', this).call(this, props);

        this.payMoney = function () {
            var that = _this;
            return function () {
                _iflux.msg.emit('SubmitOrder_payMoneny', function (payId) {
                    that.props.router.push('/payResult/' + payId);
                });
            };
        };

        this.state = {
            buyerId: ''
        };
    }

    _createClass(SubmitOrder, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            // //TODO 检查是否登录
            // CommonInfo.checkLogin();
            var userInfo = _utilCommonInfo2['default'].getUserInfo();
            var goodsId = this.props.params.goodsId;
            _iflux.msg.emit('SubmitOrder_initUserData', userInfo);
            _iflux.msg.emit('SubmitOrder_changeData', "goodsId", goodsId);
            _iflux.msg.emit('SubmitOrder_getGoodsInfo', goodsId);
            var that = this;
            (function ($, doc) {
                $.init({
                    // swipeBack: true //启用右滑关闭功能
                });
                $('.mui-scroll-wrapper').scroll();
            })(mui, document);
            mui('.jzc-btn-item').on('tap', '#submitOrder', this.gotoPay(this));

            mui('.mui-fullscreen').on('tap', '.mui-backdrop', function () {
                _store2['default'].cursor().set('isOrderSuccess', false);
                _store2['default'].cursor().set('isShowDialogCss', false);
            });
            mui('.mui-fullscreen').on('tap', '#toOrderDetail', this.payMoney(this));
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            //此处主要用于弹框时，有逐渐放大的效果
            var isOrderSuccess = _store2['default'].data().get('isOrderSuccess');
            var isShowDialogCss = _store2['default'].data().get('isShowDialogCss');

            if (isOrderSuccess && !isShowDialogCss) {
                setTimeout(function () {
                    _store2['default'].cursor().set('isShowDialogCss', true);
                }, 10);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var data = _store2['default'].data();
            var name = data.getIn(["userInfo", "name"]);
            var phone = data.getIn(["userInfo", "phone"]);
            var classNum = data.get("classNum");
            var goodsPrice = data.get("goodsPrice");
            var totalCash = classNum * goodsPrice;
            return _react2['default'].createElement(
                'div',
                { className: 'animated fadeIn mui-fullscreen' },
                _react2['default'].createElement(
                    'header',
                    { className: 'mui-bar mui-bar-nav jzc-bar-nav linear-background' },
                    _react2['default'].createElement('a', { href: 'javascript:void(0)',
                        className: 'mui-pull-left mui-icon mui-icon-arrowleft mui-action-back' }),
                    _react2['default'].createElement(
                        'h1',
                        { className: 'mui-title' },
                        '下单'
                    )
                ),
                _react2['default'].createElement(
                    'div',
                    { className: 'mui-content' },
                    _react2['default'].createElement(
                        'div',
                        { className: 'mui-scroll-wrapper jzc-scroll-top' },
                        _react2['default'].createElement(
                            'div',
                            { className: 'mui-scroll' },
                            _react2['default'].createElement(
                                'ul',
                                { className: 'mui-table-view jzc-ordmsg-lists' },
                                _react2['default'].createElement(
                                    'li',
                                    { className: 'mui-table-view-cell mui-media' },
                                    _react2['default'].createElement(
                                        'a',
                                        { href: 'javascript:void(0)', className: 'mui-navigate-right', id: 'showAddressArea' },
                                        _react2['default'].createElement(
                                            'div',
                                            { className: 'mui-media-body' },
                                            _react2['default'].createElement(
                                                'p',
                                                { className: 'name' },
                                                '姓名:',
                                                name,
                                                ' ',
                                                _react2['default'].createElement(
                                                    'span',
                                                    null,
                                                    '电话:',
                                                    phone
                                                )
                                            )
                                        )
                                    )
                                )
                            ),
                            _react2['default'].createElement(
                                'form',
                                { action: '', className: 'mui-input-group jzc-input-group jzc-address-cont' },
                                _react2['default'].createElement(
                                    'div',
                                    { className: 'mui-input-row jzc-input-row' },
                                    _react2['default'].createElement(
                                        'label',
                                        null,
                                        '课时数'
                                    ),
                                    _react2['default'].createElement('input', { type: 'text', placeholder: '请输入课时数', className: 'name', value: classNum,
                                        name: 'classNum', maxLength: '15', onChange: this._commonChange.bind(this) })
                                ),
                                _react2['default'].createElement(
                                    'div',
                                    { className: 'mui-input-row jzc-input-row' },
                                    _react2['default'].createElement(
                                        'label',
                                        null,
                                        '单价'
                                    ),
                                    _react2['default'].createElement(
                                        'label',
                                        { style: { textAlign: 'right', width: '70%', padding: '.3rem .2rem' } },
                                        goodsPrice
                                    )
                                ),
                                _react2['default'].createElement(
                                    'div',
                                    { className: 'mui-input-row jzc-input-row' },
                                    _react2['default'].createElement(
                                        'label',
                                        null,
                                        '总价'
                                    ),
                                    _react2['default'].createElement(
                                        'label',
                                        { style: { textAlign: 'right', width: '70%', padding: '.3rem .2rem' } },
                                        classNum ? totalCash : 0
                                    )
                                )
                            ),
                            _react2['default'].createElement(
                                'p',
                                { className: 'jzc-btn-item' },
                                _react2['default'].createElement(
                                    'a',
                                    { href: 'javascript:void(0)', className: 'jzc-btn-com jzc-bjbtn-block',
                                        id: 'submitOrder' },
                                    '提交订单'
                                )
                            )
                        )
                    )
                ),
                this._renderDialog(),
                this._renderCanvas()
            );
        }
    }, {
        key: '_renderDialog',
        value: function _renderDialog() {
            var isOrderSuccess = _store2['default'].data().get('isOrderSuccess');

            var isShowDialogCss = _store2['default'].data().get('isShowDialogCss');

            var classStyle = isShowDialogCss ? "jzc-tip-modal medium-height js-dialog-content active" : "jzc-tip-modal medium-height js-dialog-content";

            var isBlock = isOrderSuccess ? { display: 'block' } : {};

            var totalCash = _store2['default'].data().get("classNum") * _store2['default'].data().get("goodsPrice");

            var payPassword = _store2['default'].data().get("payPassword");

            var name = _store2['default'].data().getIn(["userInfo", "name"]);

            return _react2['default'].createElement(
                'div',
                { className: classStyle, style: isBlock },
                _react2['default'].createElement(
                    'div',
                    { className: 'header' },
                    _react2['default'].createElement('i', { className: 'iconfont icon-xuanzhong' }),
                    '确认付款'
                ),
                _react2['default'].createElement(
                    'div',
                    { className: 'content' },
                    _react2['default'].createElement(
                        'div',
                        { className: 'details' },
                        _react2['default'].createElement(
                            'p',
                            { style: { fontSize: "0.6rem" } },
                            '￥',
                            totalCash
                        ),
                        _react2['default'].createElement(
                            'p',
                            null,
                            '付款账号：',
                            name
                        ),
                        _react2['default'].createElement(
                            'p',
                            null,
                            '支付方式:余额'
                        ),
                        _react2['default'].createElement('input', { type: 'password', placeholder: '请输入支付密码', className: 'name', value: payPassword,
                            name: 'payPassword', maxLength: '15', onChange: this._commonChange.bind(this), style: { width: "4rem", marginBottom: '0', height: '0.5rem', marginTop: '0.15rem' } })
                    ),
                    _react2['default'].createElement(
                        'p',
                        { className: 'btn-item' },
                        _react2['default'].createElement(
                            'a',
                            { href: 'javascript:void(0)', className: 'jzc-btn-com jzc-bjbtn-block', id: 'toIndex' },
                            '取消'
                        ),
                        _react2['default'].createElement(
                            'a',
                            { href: 'javascript:void(0)', className: 'jzc-btn-com jzc-bjbtn-block', id: 'toOrderDetail' },
                            '立即付款'
                        )
                    )
                )
            );
        }
    }, {
        key: '_renderCanvas',
        value: function _renderCanvas() {

            var isOrderSuccess = _store2['default'].data().get('isOrderSuccess');

            var classStyle = isOrderSuccess ? "mui-backdrop jzc-backdrop js-backdrop active" : "mui-backdrop jzc-backdrop js-backdrop";

            return _react2['default'].createElement('div', { className: classStyle });
        }
    }, {
        key: '_commonChange',
        value: function _commonChange(e) {
            var name = e.target.name;
            var value = e.target.value;
            _iflux.msg.emit('SubmitOrder_changeData', name, value);
        }
    }, {
        key: 'gotoPay',
        value: function gotoPay() {
            return function () {
                _iflux.msg.emit('SubmitOrder_submit');
            };
        }
    }]);

    return SubmitOrder;
})(_react.Component);

exports['default'] = (0, _reactRouter.withRouter)((0, _iflux.connectToStore)(_store2['default'], true)(SubmitOrder));
module.exports = exports['default'];
/*联系人*/ /*<ViewContact cuserInfo={cuserInfo} serviceType={choosedProduct.serviceForm.serviceType}*/ /*callback={this._setUserInfo}/>*/ /*推荐门店*/ /*<ViewRecommend recommendPuser={recommendPuser}*/ /*serviceType={choosedProduct.serviceForm.serviceType}/>*/ /*{this._renderChoosedProduct()}*/ /*{this._renderTpl2AndNomal(serviceStartTime, cateId)}*/

/***/ }),

/***/ 591:
/***/ (function(module, exports) {

var CommonInfo = function CommonInfo() {};

/**
 * 统一设置缓存
 * @type {{setItem: localStorageWarp.setItem, getItem: localStorageWarp.getItem, removeItem: localStorageWarp.removeItem, clear: localStorageWarp.clear}}
 */
CommonInfo.localStorage = localStorageWarp;
var localStorageWarp = {
    setItem: function setItem(key, value) {
        localStorage.setItem(key, value);
    },
    getItem: function getItem(key, value) {
        return localStorage.getItem(key, value);
    },
    removeItem: function removeItem(key, value) {
        localStorage.removeItem(key, value);
    },
    clear: function clear() {
        localStorage.clear();
    }
};

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
    var lastWeixinHref = localStorageWarp.getItem("lastWeixinHref") || '#/';
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
    var token = localStorageWarp.getItem('token');
    if (token && token !== 'null' && token !== 'undefined') {
        return token;
    }
    return '';
};

/**
 * 获取位置信息
 * @returns {*|jQuery}
 */
CommonInfo.getPosition = function (callback) {
    var positionResult = {};
    CommonInfo.getPositionByGaode(callback);
};

CommonInfo.getPositionByGaode = function (callback) {
    AMap.plugin(['AMap.Geolocation'], function () {
        var geolocation = new AMap.Geolocation({
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
                    } else {}
                        // showTip('无法获取精确位置,将定位您所在的城市。');

                        // onLocateFailed();
                    mui.toast(result.message);
                }
        });
    });

    //定位成功
    var onLocateSuccess = function onLocateSuccess(result) {
        var positionObj = {};
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
};

CommonInfo.checkLogin = function (arg) {
    var token = localStorageWarp.getItem('token');
    token = token === 'null' || token === 'undefined' ? '' : token;
    if (!token) {
        console.error("没有token!");
        if (arg && arg.type === 0) {
            // 只检查登录状态
            return false;
        } else {
            //其他状态 弹出登录确认框
            console.error("过来");
            reLoginWithNoConfirm();
        }
    } else {
        return true;
    }
    return !!token;
};

CommonInfo.reLoginWithNoConfirm = reLoginWithNoConfirm;
function reLoginWithNoConfirm() {
    beforeReLogin();
    window.location.href = "/" + "#/login";
};

CommonInfo.getUserInfo = function () {
    var userInfo = localStorageWarp.getItem('userInfo');
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

/***/ }),

/***/ 592:
/***/ (function(module, exports, __webpack_require__) {

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

var Immutable = __webpack_require__(84);

var constants = function constants() {};

constants.productTypes = Immutable.fromJS([{ value: 0, text: "烹饪", iconClass: "icon-meishi" }, { value: 1, text: "健身", iconClass: "icon-tiyu" }, { value: 2, text: "金融", iconClass: "icon-caijing" }, { value: 3, text: "初等教育", iconClass: "icon-yuwen" }, { value: 4, text: "高等教育", iconClass: "icon-boshi" }, { value: 5, text: "驾驶", iconClass: "icon-qiche" }, { value: 6, text: "技工", iconClass: "icon-weixiu" }, { value: 7, text: "摄影", iconClass: "icon-zhaoxiangji" }, { value: 8, text: "乐器", iconClass: "icon-lm-101" }]);

/**
 * 根据标准商品的id，找对应的订单Icon样式
 * @param itemId
 * @returns {*}
 */
constants.chooseOrderIconClass = function (itemId) {
    switch (itemId) {
        case 1:
            //临时保洁
            return 'lm-iconfont icon-lm-001 jzc-icon-left';
            break;
        case 2:
            //育儿嫂
            return 'lm-iconfont icon-lm-002 jzc-icon-left';
            break;
        case 3:
            //长期钟点工
            return 'lm-iconfont icon-lm-003 jzc-icon-left';
            break;
        case 4:
            //住家保姆
            return 'lm-iconfont icon-lm-004 jzc-icon-left';
            break;
        case 5:
            //月嫂
            return 'lm-iconfont icon-lm-005 jzc-icon-left';
            break;
        case 6:
            //看护老人
            return 'lm-iconfont icon-lm-006 jzc-icon-left';
            break;
        case 10:
            //新房开荒
            return 'lm-iconfont icon-lm-010 jzc-icon-left';
            break;
        case 11:
            //公司保洁
            return 'lm-iconfont icon-lm-011 jzc-icon-left';
            break;
        case 12:
            //病人陪护
            return 'lm-iconfont icon-lm-012 jzc-icon-left';
            break;
        case 13:
            //深度保洁
            return 'lm-iconfont icon-lm-013 jzc-icon-left';
            break;
        case 14:
            //玻璃清洗
            return 'lm-iconfont icon-lm-014 jzc-icon-left';
            break;
        case 15:
            //其他
            return 'lm-iconfont icon-lm-015 jzc-icon-left';
            break;

        //万家定制类目 -- begin
        case 61:
            //开荒保洁
            return 'lm-iconfont icon-lm-010 jzc-icon-left';
            break;
        case 62:
            //全面保洁
            return 'lm-iconfont icon-lm-001 jzc-icon-left';
            break;
        case 63:
            //钟点保洁
            return 'lm-iconfont icon-lm-003 jzc-icon-left';
            break;
        case 64:
            //玻璃保洁
            return 'lm-iconfont icon-lm-014 jzc-icon-left';
            break;
        case 65:
            //地板打蜡
            return 'lm-iconfont icon-lm-065 jzc-icon-left';
            break;
        case 66:
            //沙发洗护
            return 'lm-iconfont icon-lm-015 jzc-icon-left';
            break;
        case 67:
            //油烟机拆洗杀菌
            return 'lm-iconfont icon-lm-067 jzc-icon-left';
            break;
        case 68:
            //空调拆洗杀菌消毒
            return 'lm-iconfont icon-lm-068 jzc-icon-left';
            break;
        case 69:
            //冰箱除菌消除
            return 'lm-iconfont icon-lm-069 jzc-icon-left';
            break;
        case 70:
            //布艺除螨
            return 'lm-iconfont icon-lm-070 jzc-icon-left';
            break;
        case 71:
            //美缝
            return 'lm-iconfont icon-lm-071 jzc-icon-left';
            break;
        case 72:
            //管道疏通
            return 'lm-iconfont icon-lm-072 jzc-icon-left';
            break;
        case 73:
            //地毯深层杀菌消毒
            return 'lm-iconfont icon-lm-073 jzc-icon-left';
            break;
        case 74:
            //卫生间深层杀菌消毒
            return 'lm-iconfont icon-lm-074 jzc-icon-left';
            break;
        case 75:
            //厨房深层杀菌消毒
            return 'lm-iconfont icon-lm-075 jzc-icon-left';
            break;
        //万家定制类目 -- end

        default:
            return 'lm-iconfont icon-lm-000 jzc-icon-left';
    }
};

module.exports = constants;

constants.Host = 'http://localhost:8081';

//home-wifi
// constants.Host='http://192.168.0.101:8081';

/***/ }),

/***/ 593:
/***/ (function(module, exports, __webpack_require__) {

var immutable = __webpack_require__(84);
var CommonInfo = __webpack_require__(591);

var request = function request() {};
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
    var takenFlag = needToken === undefined ? true : needToken;
    if (takenFlag) {
        headers = { Authorization: CommonInfo.getToken() };
    }

    $.ajax({
        url: url,
        type: "GET",
        data: params,
        headers: headers,
        success: function success(resp) {
            if (resp.rescode == '202' || resp.rescode == '201' && resp.msg == '未登录') {
                alert("get错误");
            } else {
                resp.result === "ok" ? deferred.resolveWith(ctx, [resp.data]) : deferred.rejectWith(ctx, [resp]);
            }
        },
        error: function error(resp) {
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
        deferred.rejectWith(ctx, [{ result: 'fail', msg: '请求太快！' }]);
        return deferred.promise();
    }
    var ctx = context || this;
    var params = data || {};
    $.ajax({
        url: url,
        type: "POST",
        data: params,
        success: function success(resp) {
            if (resp.rescode == '202' || resp.rescode == '201' && resp.msg == '未登录') {
                // CommonInfo.reLoginWithNoConfirm();
                alert("post出错");
            } else {
                resp.result === "ok" ? deferred.resolveWith(ctx, [resp.data]) : deferred.rejectWith(ctx, [resp]);
            }
        },
        error: function error(resq) {
            deferred.rejectWith(ctx, [resq]);
        }
    });
    return deferred.promise();
};
/**
 * 请求处理器，1秒内仅允许一次请求*/
var arr = new Array();
var t = 1000; //同一请求1秒内只允许一次
function requestControl(params, url) {
    var obj = immutable.fromJS({ params: params, url: url });

    var _index = arr.length;
    for (var _i in arr) {
        if (immutable.is(arr[_i].target, obj)) {

            var times = arr[_i].times;

            if (new Date().getTime() - times >= t) {

                _index = _i;
                break;
            } else {
                arr = arr.splice(_i, _index - _i);
                return false; //停止此次请求
            }
        }
    }
    arr[_index] = { times: new Date().getTime(), target: obj };
    return true;
}

/***/ }),

/***/ 595:
/***/ (function(module, exports) {

// RSA, a suite of routines for performing RSA public-key computations in
// JavaScript.
//
// Requires BigInt.js and Barrett.js.
//
// Copyright 1998-2005 David Shapiro.
//
// You may use, re-use, abuse, copy, and modify this code to your liking, but
// please keep this header.
//
// Thanks!
//
// Dave Shapiro
// dave@ohdave.com

//向外面暴露一个方法
exports.encryptedString = function (s) {
	setMaxDigits(67);
	var key = new RSAKeyPair("22c29d5bda305e5daa0920b86cd410844a7aead043cfc3f78af2166e86e26eb", "", "102e05ea9849d82b2630523751c1cd1984e92d3b45bf8d1ba0d67b55b0119eb9");
	return encryptedString(key, s);
};

function RSAKeyPair(encryptionExponent, decryptionExponent, modulus) {
	this.e = biFromHex(encryptionExponent);
	this.d = biFromHex(decryptionExponent);
	this.m = biFromHex(modulus);
	// We can do two bytes per digit, so
	// chunkSize = 2 * (number of digits in modulus - 1).
	// Since biHighIndex returns the high index, not the number of digits, 1 has
	// already been subtracted.
	this.chunkSize = 2 * biHighIndex(this.m);
	this.radix = 16;
	this.barrett = new BarrettMu(this.m);
}

function twoDigit(n) {
	return (n < 10 ? "0" : "") + String(n);
}

function encryptedString(key, s)
// Altered by Rob Saunders (rob@robsaunders.net). New routine pads the
// string after it has been converted to an array. This fixes an
// incompatibility with Flash MX's ActionScript.
{
	var a = new Array();
	var sl = s.length;
	var i = 0;
	while (i < sl) {
		a[i] = s.charCodeAt(i);
		i++;
	}

	while (a.length % key.chunkSize != 0) {
		a[i++] = 0;
	}

	var al = a.length;
	var result = "";
	var j, k, block;
	for (i = 0; i < al; i += key.chunkSize) {
		block = new BigInt();
		j = 0;
		for (k = i; k < i + key.chunkSize; ++j) {
			block.digits[j] = a[k++];
			block.digits[j] += a[k++] << 8;
		}
		var crypt = key.barrett.powMod(block, key.e);
		var text = key.radix == 16 ? biToHex(crypt) : biToString(crypt, key.radix);
		result += text + " ";
	}
	return result.substring(0, result.length - 1); // Remove last space.
}

function decryptedString(key, s) {
	var blocks = s.split(" ");
	var result = "";
	var i, j, block;
	for (i = 0; i < blocks.length; ++i) {
		var bi;
		if (key.radix == 16) {
			bi = biFromHex(blocks[i]);
		} else {
			bi = biFromString(blocks[i], key.radix);
		}
		block = key.barrett.powMod(bi, key.d);
		for (j = 0; j <= biHighIndex(block); ++j) {
			result += String.fromCharCode(block.digits[j] & 255, block.digits[j] >> 8);
		}
	}
	// Remove trailing null, if any.
	if (result.charCodeAt(result.length - 1) == 0) {
		result = result.substring(0, result.length - 1);
	}
	return result;
}

// BarrettMu, a class for performing Barrett modular reduction computations in
// JavaScript.
//
// Requires BigInt.js.
//
// Copyright 2004-2005 David Shapiro.
//
// You may use, re-use, abuse, copy, and modify this code to your liking, but
// please keep this header.
//
// Thanks!
//
// Dave Shapiro
// dave@ohdave.com

function BarrettMu(m) {
	this.modulus = biCopy(m);
	this.k = biHighIndex(this.modulus) + 1;
	var b2k = new BigInt();
	b2k.digits[2 * this.k] = 1; // b2k = b^(2k)
	this.mu = biDivide(b2k, this.modulus);
	this.bkplus1 = new BigInt();
	this.bkplus1.digits[this.k + 1] = 1; // bkplus1 = b^(k+1)
	this.modulo = BarrettMu_modulo;
	this.multiplyMod = BarrettMu_multiplyMod;
	this.powMod = BarrettMu_powMod;
}

function BarrettMu_modulo(x) {
	var q1 = biDivideByRadixPower(x, this.k - 1);
	var q2 = biMultiply(q1, this.mu);
	var q3 = biDivideByRadixPower(q2, this.k + 1);
	var r1 = biModuloByRadixPower(x, this.k + 1);
	var r2term = biMultiply(q3, this.modulus);
	var r2 = biModuloByRadixPower(r2term, this.k + 1);
	var r = biSubtract(r1, r2);
	if (r.isNeg) {
		r = biAdd(r, this.bkplus1);
	}
	var rgtem = biCompare(r, this.modulus) >= 0;
	while (rgtem) {
		r = biSubtract(r, this.modulus);
		rgtem = biCompare(r, this.modulus) >= 0;
	}
	return r;
}

function BarrettMu_multiplyMod(x, y) {
	/*
  x = this.modulo(x);
  y = this.modulo(y);
  */
	var xy = biMultiply(x, y);
	return this.modulo(xy);
}

function BarrettMu_powMod(x, y) {
	var result = new BigInt();
	result.digits[0] = 1;
	var a = x;
	var k = y;
	while (true) {
		if ((k.digits[0] & 1) != 0) result = this.multiplyMod(result, a);
		k = biShiftRight(k, 1);
		if (k.digits[0] == 0 && biHighIndex(k) == 0) break;
		a = this.multiplyMod(a, a);
	}
	return result;
}

// BigInt, a suite of routines for performing multiple-precision arithmetic in
// JavaScript.
//
// Copyright 1998-2005 David Shapiro.
//
// You may use, re-use, abuse,
// copy, and modify this code to your liking, but please keep this header.
// Thanks!
//
// Dave Shapiro
// dave@ohdave.com

// IMPORTANT THING: Be sure to set maxDigits according to your precision
// needs. Use the setMaxDigits() function to do this. See comments below.
//
// Tweaked by Ian Bunning
// Alterations:
// Fix bug in function biFromHex(s) to allow
// parsing of strings of length != 0 (mod 4)

// Changes made by Dave Shapiro as of 12/30/2004:
//
// The BigInt() constructor doesn't take a string anymore. If you want to
// create a BigInt from a string, use biFromDecimal() for base-10
// representations, biFromHex() for base-16 representations, or
// biFromString() for base-2-to-36 representations.
//
// biFromArray() has been removed. Use biCopy() instead, passing a BigInt
// instead of an array.
//
// The BigInt() constructor now only constructs a zeroed-out array.
// Alternatively, if you pass <true>, it won't construct any array. See the
// biCopy() method for an example of this.
//
// Be sure to set maxDigits depending on your precision needs. The default
// zeroed-out array ZERO_ARRAY is constructed inside the setMaxDigits()
// function. So use this function to set the variable. DON'T JUST SET THE
// VALUE. USE THE FUNCTION.
//
// ZERO_ARRAY exists to hopefully speed up construction of BigInts(). By
// precalculating the zero array, we can just use slice(0) to make copies of
// it. Presumably this calls faster native code, as opposed to setting the
// elements one at a time. I have not done any timing tests to verify this
// claim.

// Max number = 10^16 - 2 = 9999999999999998;
//               2^53     = 9007199254740992;

var biRadixBase = 2;
var biRadixBits = 16;
var bitsPerDigit = biRadixBits;
var biRadix = 1 << 16; // = 2^16 = 65536
var biHalfRadix = biRadix >>> 1;
var biRadixSquared = biRadix * biRadix;
var maxDigitVal = biRadix - 1;
var maxInteger = 9999999999999998;

// maxDigits:
// Change this to accommodate your largest number size. Use setMaxDigits()
// to change it!
//
// In general, if you're working with numbers of size N bits, you'll need 2*N
// bits of storage. Each digit holds 16 bits. So, a 1024-bit key will need
//
// 1024 * 2 / 16 = 128 digits of storage.
//

var maxDigits;
var ZERO_ARRAY;
var bigZero, bigOne;

function setMaxDigits(value) {
	maxDigits = value;
	ZERO_ARRAY = new Array(maxDigits);
	for (var iza = 0; iza < ZERO_ARRAY.length; iza++) ZERO_ARRAY[iza] = 0;
	bigZero = new BigInt();
	bigOne = new BigInt();
	bigOne.digits[0] = 1;
}

setMaxDigits(20);

// The maximum number of digits in base 10 you can convert to an
// integer without JavaScript throwing up on you.
var dpl10 = 15;
// lr10 = 10 ^ dpl10
var lr10 = biFromNumber(1000000000000000);

function BigInt(flag) {
	if (typeof flag == "boolean" && flag == true) {
		this.digits = null;
	} else {
		this.digits = ZERO_ARRAY.slice(0);
	}
	this.isNeg = false;
}

function biFromDecimal(s) {
	var isNeg = s.charAt(0) == '-';
	var i = isNeg ? 1 : 0;
	var result;
	// Skip leading zeros.
	while (i < s.length && s.charAt(i) == '0') ++i;
	if (i == s.length) {
		result = new BigInt();
	} else {
		var digitCount = s.length - i;
		var fgl = digitCount % dpl10;
		if (fgl == 0) fgl = dpl10;
		result = biFromNumber(Number(s.substr(i, fgl)));
		i += fgl;
		while (i < s.length) {
			result = biAdd(biMultiply(result, lr10), biFromNumber(Number(s.substr(i, dpl10))));
			i += dpl10;
		}
		result.isNeg = isNeg;
	}
	return result;
}

function biCopy(bi) {
	var result = new BigInt(true);
	result.digits = bi.digits.slice(0);
	result.isNeg = bi.isNeg;
	return result;
}

function biFromNumber(i) {
	var result = new BigInt();
	result.isNeg = i < 0;
	i = Math.abs(i);
	var j = 0;
	while (i > 0) {
		result.digits[j++] = i & maxDigitVal;
		i >>= biRadixBits;
	}
	return result;
}

function reverseStr(s) {
	var result = "";
	for (var i = s.length - 1; i > -1; --i) {
		result += s.charAt(i);
	}
	return result;
}

var hexatrigesimalToChar = new Array('0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z');

function biToString(x, radix)
// 2 <= radix <= 36
{
	var b = new BigInt();
	b.digits[0] = radix;
	var qr = biDivideModulo(x, b);
	var result = hexatrigesimalToChar[qr[1].digits[0]];
	while (biCompare(qr[0], bigZero) == 1) {
		qr = biDivideModulo(qr[0], b);
		digit = qr[1].digits[0];
		result += hexatrigesimalToChar[qr[1].digits[0]];
	}
	return (x.isNeg ? "-" : "") + reverseStr(result);
}

function biToDecimal(x) {
	var b = new BigInt();
	b.digits[0] = 10;
	var qr = biDivideModulo(x, b);
	var result = String(qr[1].digits[0]);
	while (biCompare(qr[0], bigZero) == 1) {
		qr = biDivideModulo(qr[0], b);
		result += String(qr[1].digits[0]);
	}
	return (x.isNeg ? "-" : "") + reverseStr(result);
}

var hexToChar = new Array('0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f');

function digitToHex(n) {
	var mask = 0xf;
	var result = "";
	for (i = 0; i < 4; ++i) {
		result += hexToChar[n & mask];
		n >>>= 4;
	}
	return reverseStr(result);
}

function biToHex(x) {
	var result = "";
	var n = biHighIndex(x);
	for (var i = biHighIndex(x); i > -1; --i) {
		result += digitToHex(x.digits[i]);
	}
	return result;
}

function charToHex(c) {
	var ZERO = 48;
	var NINE = ZERO + 9;
	var littleA = 97;
	var littleZ = littleA + 25;
	var bigA = 65;
	var bigZ = 65 + 25;
	var result;

	if (c >= ZERO && c <= NINE) {
		result = c - ZERO;
	} else if (c >= bigA && c <= bigZ) {
		result = 10 + c - bigA;
	} else if (c >= littleA && c <= littleZ) {
		result = 10 + c - littleA;
	} else {
		result = 0;
	}
	return result;
}

function hexToDigit(s) {
	var result = 0;
	var sl = Math.min(s.length, 4);
	for (var i = 0; i < sl; ++i) {
		result <<= 4;
		result |= charToHex(s.charCodeAt(i));
	}
	return result;
}

function biFromHex(s) {
	var result = new BigInt();
	var sl = s.length;
	for (var i = sl, j = 0; i > 0; i -= 4, ++j) {
		result.digits[j] = hexToDigit(s.substr(Math.max(i - 4, 0), Math.min(i, 4)));
	}
	return result;
}

function biFromString(s, radix) {
	var isNeg = s.charAt(0) == '-';
	var istop = isNeg ? 1 : 0;
	var result = new BigInt();
	var place = new BigInt();
	place.digits[0] = 1; // radix^0
	for (var i = s.length - 1; i >= istop; i--) {
		var c = s.charCodeAt(i);
		var digit = charToHex(c);
		var biDigit = biMultiplyDigit(place, digit);
		result = biAdd(result, biDigit);
		place = biMultiplyDigit(place, radix);
	}
	result.isNeg = isNeg;
	return result;
}

function biDump(b) {
	return (b.isNeg ? "-" : "") + b.digits.join(" ");
}

function biAdd(x, y) {
	var result;

	if (x.isNeg != y.isNeg) {
		y.isNeg = !y.isNeg;
		result = biSubtract(x, y);
		y.isNeg = !y.isNeg;
	} else {
		result = new BigInt();
		var c = 0;
		var n;
		for (var i = 0; i < x.digits.length; ++i) {
			n = x.digits[i] + y.digits[i] + c;
			result.digits[i] = n & 0xffff;
			c = Number(n >= biRadix);
		}
		result.isNeg = x.isNeg;
	}
	return result;
}

function biSubtract(x, y) {
	var result;
	if (x.isNeg != y.isNeg) {
		y.isNeg = !y.isNeg;
		result = biAdd(x, y);
		y.isNeg = !y.isNeg;
	} else {
		result = new BigInt();
		var n, c;
		c = 0;
		for (var i = 0; i < x.digits.length; ++i) {
			n = x.digits[i] - y.digits[i] + c;
			result.digits[i] = n & 0xffff;
			// Stupid non-conforming modulus operation.
			if (result.digits[i] < 0) result.digits[i] += biRadix;
			c = 0 - Number(n < 0);
		}
		// Fix up the negative sign, if any.
		if (c == -1) {
			c = 0;
			for (var i = 0; i < x.digits.length; ++i) {
				n = 0 - result.digits[i] + c;
				result.digits[i] = n & 0xffff;
				// Stupid non-conforming modulus operation.
				if (result.digits[i] < 0) result.digits[i] += biRadix;
				c = 0 - Number(n < 0);
			}
			// Result is opposite sign of arguments.
			result.isNeg = !x.isNeg;
		} else {
			// Result is same sign.
			result.isNeg = x.isNeg;
		}
	}
	return result;
}

function biHighIndex(x) {
	var result = x.digits.length - 1;
	while (result > 0 && x.digits[result] == 0) --result;
	return result;
}

function biNumBits(x) {
	var n = biHighIndex(x);
	var d = x.digits[n];
	var m = (n + 1) * bitsPerDigit;
	var result;
	for (result = m; result > m - bitsPerDigit; --result) {
		if ((d & 0x8000) != 0) break;
		d <<= 1;
	}
	return result;
}

function biMultiply(x, y) {
	var result = new BigInt();
	var c;
	var n = biHighIndex(x);
	var t = biHighIndex(y);
	var u, uv, k;

	for (var i = 0; i <= t; ++i) {
		c = 0;
		k = i;
		for (j = 0; j <= n; ++j, ++k) {
			uv = result.digits[k] + x.digits[j] * y.digits[i] + c;
			result.digits[k] = uv & maxDigitVal;
			c = uv >>> biRadixBits;
		}
		result.digits[i + n + 1] = c;
	}
	// Someone give me a logical xor, please.
	result.isNeg = x.isNeg != y.isNeg;
	return result;
}

function biMultiplyDigit(x, y) {
	var n, c, uv;

	result = new BigInt();
	n = biHighIndex(x);
	c = 0;
	for (var j = 0; j <= n; ++j) {
		uv = result.digits[j] + x.digits[j] * y + c;
		result.digits[j] = uv & maxDigitVal;
		c = uv >>> biRadixBits;
	}
	result.digits[1 + n] = c;
	return result;
}

function arrayCopy(src, srcStart, dest, destStart, n) {
	var m = Math.min(srcStart + n, src.length);
	for (var i = srcStart, j = destStart; i < m; ++i, ++j) {
		dest[j] = src[i];
	}
}

var highBitMasks = new Array(0x0000, 0x8000, 0xC000, 0xE000, 0xF000, 0xF800, 0xFC00, 0xFE00, 0xFF00, 0xFF80, 0xFFC0, 0xFFE0, 0xFFF0, 0xFFF8, 0xFFFC, 0xFFFE, 0xFFFF);

function biShiftLeft(x, n) {
	var digitCount = Math.floor(n / bitsPerDigit);
	var result = new BigInt();
	arrayCopy(x.digits, 0, result.digits, digitCount, result.digits.length - digitCount);
	var bits = n % bitsPerDigit;
	var rightBits = bitsPerDigit - bits;
	for (var i = result.digits.length - 1, i1 = i - 1; i > 0; --i, --i1) {
		result.digits[i] = result.digits[i] << bits & maxDigitVal | (result.digits[i1] & highBitMasks[bits]) >>> rightBits;
	}
	result.digits[0] = result.digits[i] << bits & maxDigitVal;
	result.isNeg = x.isNeg;
	return result;
}

var lowBitMasks = new Array(0x0000, 0x0001, 0x0003, 0x0007, 0x000F, 0x001F, 0x003F, 0x007F, 0x00FF, 0x01FF, 0x03FF, 0x07FF, 0x0FFF, 0x1FFF, 0x3FFF, 0x7FFF, 0xFFFF);

function biShiftRight(x, n) {
	var digitCount = Math.floor(n / bitsPerDigit);
	var result = new BigInt();
	arrayCopy(x.digits, digitCount, result.digits, 0, x.digits.length - digitCount);
	var bits = n % bitsPerDigit;
	var leftBits = bitsPerDigit - bits;
	for (var i = 0, i1 = i + 1; i < result.digits.length - 1; ++i, ++i1) {
		result.digits[i] = result.digits[i] >>> bits | (result.digits[i1] & lowBitMasks[bits]) << leftBits;
	}
	result.digits[result.digits.length - 1] >>>= bits;
	result.isNeg = x.isNeg;
	return result;
}

function biMultiplyByRadixPower(x, n) {
	var result = new BigInt();
	arrayCopy(x.digits, 0, result.digits, n, result.digits.length - n);
	return result;
}

function biDivideByRadixPower(x, n) {
	var result = new BigInt();
	arrayCopy(x.digits, n, result.digits, 0, result.digits.length - n);
	return result;
}

function biModuloByRadixPower(x, n) {
	var result = new BigInt();
	arrayCopy(x.digits, 0, result.digits, 0, n);
	return result;
}

function biCompare(x, y) {
	if (x.isNeg != y.isNeg) {
		return 1 - 2 * Number(x.isNeg);
	}
	for (var i = x.digits.length - 1; i >= 0; --i) {
		if (x.digits[i] != y.digits[i]) {
			if (x.isNeg) {
				return 1 - 2 * Number(x.digits[i] > y.digits[i]);
			} else {
				return 1 - 2 * Number(x.digits[i] < y.digits[i]);
			}
		}
	}
	return 0;
}

function biDivideModulo(x, y) {
	var nb = biNumBits(x);
	var tb = biNumBits(y);
	var origYIsNeg = y.isNeg;
	var q, r;
	if (nb < tb) {
		// |x| < |y|
		if (x.isNeg) {
			q = biCopy(bigOne);
			q.isNeg = !y.isNeg;
			x.isNeg = false;
			y.isNeg = false;
			r = biSubtract(y, x);
			// Restore signs, 'cause they're references.
			x.isNeg = true;
			y.isNeg = origYIsNeg;
		} else {
			q = new BigInt();
			r = biCopy(x);
		}
		return new Array(q, r);
	}

	q = new BigInt();
	r = x;

	// Normalize Y.
	var t = Math.ceil(tb / bitsPerDigit) - 1;
	var lambda = 0;
	while (y.digits[t] < biHalfRadix) {
		y = biShiftLeft(y, 1);
		++lambda;
		++tb;
		t = Math.ceil(tb / bitsPerDigit) - 1;
	}
	// Shift r over to keep the quotient constant. We'll shift the
	// remainder back at the end.
	r = biShiftLeft(r, lambda);
	nb += lambda; // Update the bit count for x.
	var n = Math.ceil(nb / bitsPerDigit) - 1;

	var b = biMultiplyByRadixPower(y, n - t);
	while (biCompare(r, b) != -1) {
		++q.digits[n - t];
		r = biSubtract(r, b);
	}
	for (var i = n; i > t; --i) {
		var ri = i >= r.digits.length ? 0 : r.digits[i];
		var ri1 = i - 1 >= r.digits.length ? 0 : r.digits[i - 1];
		var ri2 = i - 2 >= r.digits.length ? 0 : r.digits[i - 2];
		var yt = t >= y.digits.length ? 0 : y.digits[t];
		var yt1 = t - 1 >= y.digits.length ? 0 : y.digits[t - 1];
		if (ri == yt) {
			q.digits[i - t - 1] = maxDigitVal;
		} else {
			q.digits[i - t - 1] = Math.floor((ri * biRadix + ri1) / yt);
		}

		var c1 = q.digits[i - t - 1] * (yt * biRadix + yt1);
		var c2 = ri * biRadixSquared + (ri1 * biRadix + ri2);
		while (c1 > c2) {
			--q.digits[i - t - 1];
			c1 = q.digits[i - t - 1] * (yt * biRadix | yt1);
			c2 = ri * biRadix * biRadix + (ri1 * biRadix + ri2);
		}

		b = biMultiplyByRadixPower(y, i - t - 1);
		r = biSubtract(r, biMultiplyDigit(b, q.digits[i - t - 1]));
		if (r.isNeg) {
			r = biAdd(r, b);
			--q.digits[i - t - 1];
		}
	}
	r = biShiftRight(r, lambda);
	// Fiddle with the signs and stuff to make sure that 0 <= r < y.
	q.isNeg = x.isNeg != origYIsNeg;
	if (x.isNeg) {
		if (origYIsNeg) {
			q = biAdd(q, bigOne);
		} else {
			q = biSubtract(q, bigOne);
		}
		y = biShiftRight(y, lambda);
		r = biSubtract(y, r);
	}
	// Check for the unbelievably stupid degenerate case of r == -0.
	if (r.digits[0] == 0 && biHighIndex(r) == 0) r.isNeg = false;

	return new Array(q, r);
}

function biDivide(x, y) {
	return biDivideModulo(x, y)[0];
}

function biModulo(x, y) {
	return biDivideModulo(x, y)[1];
}

function biMultiplyMod(x, y, m) {
	return biModulo(biMultiply(x, y), m);
}

function biPow(x, y) {
	var result = bigOne;
	var a = x;
	while (true) {
		if ((y & 1) != 0) result = biMultiply(result, a);
		y >>= 1;
		if (y == 0) break;
		a = biMultiply(a, a);
	}
	return result;
}

function biPowMod(x, y, m) {
	var result = bigOne;
	var a = x;
	var k = y;
	while (true) {
		if ((k.digits[0] & 1) != 0) result = biMultiplyMod(result, a, m);
		k = biShiftRight(k, 1);
		if (k.digits[0] == 0 && biHighIndex(k) == 0) break;
		a = biMultiplyMod(a, a, m);
	}
	return result;
}

/***/ }),

/***/ 726:
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

var _iflux = __webpack_require__(242);

var _constants = __webpack_require__(592);

var _constants2 = _interopRequireDefault(_constants);

var _utilRequest = __webpack_require__(593);

var _utilRequest2 = _interopRequireDefault(_utilRequest);

var _immutable = __webpack_require__(84);

var _immutable2 = _interopRequireDefault(_immutable);

var _utilRSA = __webpack_require__(595);

var _utilRSA2 = _interopRequireDefault(_utilRSA);

var appStore = (0, _iflux.Store)({
    submitReturn: {},
    buyId: '',
    goodsId: '',
    totalCash: '',
    classNum: '',
    goodsPrice: 0,
    goodsName: '',
    goodsDetail: {},
    userInfo: {
        name: '',
        phone: ''
    },
    isOrderSuccess: false,
    isShowDialogCss: false,
    orderId: '',
    payPassword: '', //支付密码
    payStatus: '',
    payId: ''
});

_iflux.msg.on('SubmitOrder_submit', function () {
    var param = {};
    var data = appStore.data();
    param.buyId = data.get("buyId");
    param.goodsId = data.get("goodsId");
    param.totalCash = data.get("classNum") * data.get("goodsPrice");
    param.goodsNum = data.get("classNum");
    param.goodsName = data.get("goodsName");
    _utilRequest2['default'].post(_constants2['default'].Host + '/order/addOrder', param).then(function (res) {
        if (res && res.orderId) {
            appStore.cursor().set("submitReturn", _immutable2['default'].fromJS(res));
            appStore.cursor().set("isOrderSuccess", true);
            appStore.cursor().set("orderId", res.orderId);
        }
    }).fail(function (res) {
        if (res.result == 'fail') {
            mui.toast(res.msg);
        } else {
            mui.toast("系统异常请稍后再试！");
        }
    });
});

_iflux.msg.on('SubmitOrder_getGoodsInfo', function (goodsId) {
    _utilRequest2['default'].get(_constants2['default'].Host + '/goods/findByGoodsId', { goodsId: goodsId }).then(function (res) {
        if (res) {
            appStore.cursor().set("goodsName", res.goodsName);
            appStore.cursor().set("goodsPrice", res.goodsPrice);
        }
    }).fail(function (res) {
        if (res.result == 'fail') {
            mui.toast(res.msg);
        } else {
            mui.toast("系统异常请稍后再试！");
        }
    });
});

_iflux.msg.on('SubmitOrder_changeData', function (mark, data) {
    appStore.cursor().set(mark, data);
});

_iflux.msg.on('SubmitOrder_initUserData', function (userInfo) {
    appStore.cursor().setIn(["userInfo", "name"], userInfo.name);
    appStore.cursor().setIn(["userInfo", "phone"], userInfo.phone);
    appStore.cursor().set("buyId", userInfo.userCode);
});

_iflux.msg.on('SubmitOrder_payMoneny', function (that) {
    var payPassword = appStore.data().get("payPassword");
    if (!payPassword) {
        mui.toast("请输入支付密码!");
        return;
    }
    var param = {};
    var data = appStore.data();
    param.payType = "余额";
    param.payerCode = data.get("buyId");
    param.orderId = data.get("orderId");
    param.payPassword = _utilRSA2['default'].encryptedString(data.get("payPassword"));
    _utilRequest2['default'].post(_constants2['default'].Host + '/pay/addPay', param).then(function (res) {
        if (res) {
            that(res.payId);
        }
    }).fail(function (res) {
        if (res.result == 'fail') {
            mui.toast(res.msg);
        } else {
            mui.toast("系统异常请稍后再试！");
        }
    });
});

exports['default'] = appStore;
module.exports = exports['default'];

/***/ })

});