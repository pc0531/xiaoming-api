webpackJsonp([4],{

/***/ 585:
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

var _utilCommonInfo = __webpack_require__(591);

var _utilCommonInfo2 = _interopRequireDefault(_utilCommonInfo);

var _store = __webpack_require__(724);

var _store2 = _interopRequireDefault(_store);

var _commonComponentsCommonNavigationBar = __webpack_require__(594);

var _commonComponentsCommonNavigationBar2 = _interopRequireDefault(_commonComponentsCommonNavigationBar);

var Product = (function (_Component) {
    _inherits(Product, _Component);

    function Product(props) {
        _classCallCheck(this, Product);

        _get(Object.getPrototypeOf(Product.prototype), 'constructor', this).call(this, props);
        this.onProductTap = this.onProductTap.bind(this);
    }

    _createClass(Product, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var value = this.props.params.value;
            _iflux.msg.emit("Product_queryGoodsByType", value);
            mui('#productRefresh').pullRefresh({
                down: {
                    height: 80, //可选,默认50.触发下拉刷新拖动距离,
                    auto: false, //可选,默认false.自动下拉刷新一次
                    contentdown: "下拉可以刷新", //可选，在下拉可刷新状态时，下拉刷新控件上显示的标题内容
                    contentover: "释放立即刷新", //可选，在释放可刷新状态时，下拉刷新控件上显示的标题内容
                    contentrefresh: "正在刷新...", //可选，正在刷新状态时，下拉刷新控件上显示的标题内容
                    callback: this.onPullRefresh //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
                }
            });
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            mui('.jzc-mrl0').on('tap', 'a', this.onProductTap());
        }
    }, {
        key: 'render',
        value: function render() {
            var goodsList = _store2['default'].data().get("goodsList");
            var list = [];
            goodsList.map(function (param, index) {
                console.error("param:" + param + "_index:" + index);
                list.push(_react2['default'].createElement(
                    'li',
                    { key: param.get("goodsName") + index },
                    _react2['default'].createElement(
                        'a',
                        { className: 'jzc-btn-block', 'data-goodsId': param.get('goodsId') },
                        _react2['default'].createElement(
                            'div',
                            { className: 'mui-sd-handle' },
                            _react2['default'].createElement(
                                'h2',
                                null,
                                param.get("goodsName")
                            ),
                            _react2['default'].createElement(
                                'p',
                                null,
                                param.get("goodsName")
                            )
                        )
                    )
                ));
            });
            return _react2['default'].createElement(
                'div',
                null,
                _react2['default'].createElement(
                    'div',
                    { className: 'animated fadeIn mui-fullscreen' },
                    _react2['default'].createElement(
                        'div',
                        { className: 'mui-content jzc-index-item' },
                        _react2['default'].createElement(
                            'div',
                            { className: 'xm-productType-top' },
                            _react2['default'].createElement('a', { href: 'javascript:void(0)', className: 'mui-icon mui-icon-arrowleft mui-action-back' }),
                            _react2['default'].createElement(
                                'h4',
                                { className: 'jzc-title' },
                                '热门服务'
                            )
                        ),
                        _react2['default'].createElement(
                            'div',
                            { className: 'xm-productType-choose' },
                            _react2['default'].createElement(
                                'p',
                                null,
                                '筛选'
                            )
                        ),
                        _react2['default'].createElement(
                            'div',
                            { className: 'mui-scroll-wrapper xm-scroll-bottom', id: 'productRefresh' },
                            _react2['default'].createElement(
                                'div',
                                { className: 'mui-scroll' },
                                _react2['default'].createElement(
                                    'div',
                                    { className: 'xm-productType-content' },
                                    _react2['default'].createElement(
                                        'ul',
                                        { className: 'jzc-ks-lists js-slide-right jzc-mrl0' },
                                        list
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }, {
        key: 'onProductTap',
        value: function onProductTap() {
            var that = this;
            return function () {
                if (this.dataset.goodsid) {
                    var goodsId = this.dataset.goodsid;
                    that.props.router.push('/productDetail/' + goodsId);
                }
            };
        }
    }]);

    return Product;
})(_react.Component);

exports['default'] = (0, _reactRouter.withRouter)((0, _iflux.connectToStore)(_store2['default'], true)(Product));
module.exports = exports['default'];

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

/***/ 594:
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

var CommonNavigationBar = (function (_React$Component) {
    _inherits(CommonNavigationBar, _React$Component);

    function CommonNavigationBar(props) {
        _classCallCheck(this, CommonNavigationBar);

        _get(Object.getPrototypeOf(CommonNavigationBar.prototype), 'constructor', this).call(this, props);

        this.state = {
            icon: '',
            tabName: '',
            tabRouter: ''
        };
    }

    _createClass(CommonNavigationBar, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _self = this;
            mui('#_tabBar').on('tap', '#_indexTab', function () {
                _self.props.router.push('/');
            });
            mui('#_tabBar').on('tap', '#_myTab', function () {
                _self.props.router.push('/my');
            });
            mui('#_tabBar').on('tap', '#_orderTab', function () {
                _self.props.router.push('/shopping/goods-order-list');
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _curTab = this.props.curTab;
            return _react2['default'].createElement(
                'div',
                null,
                _react2['default'].createElement(
                    'nav',
                    { className: 'mui-bar mui-bar-tab jzc-nav-tab', id: '_tabBar' },
                    _react2['default'].createElement(
                        'a',
                        { className: '_indexTab' == _curTab ? "mui-tab-item mui-active" : "mui-tab-item",
                            id: '_indexTab' },
                        _react2['default'].createElement('i', { className: 'icon iconfont icon-shouye' }),
                        '首页'
                    ),
                    _react2['default'].createElement(
                        'a',
                        { className: '_orderTab' == _curTab ? "mui-tab-item mui-active" : "mui-tab-item",
                            id: '_orderTab' },
                        _react2['default'].createElement('i', { className: 'icon iconfont icon-jiaoyu' }),
                        '订单'
                    ),
                    _react2['default'].createElement(
                        'a',
                        { className: '_goodsTab' == _curTab ? "mui-tab-item mui-active" : "mui-tab-item",
                            id: '_goodsTab' },
                        _react2['default'].createElement('i', { className: 'icon iconfont icon-faxian' }),
                        '发现'
                    ),
                    _react2['default'].createElement(
                        'a',
                        { className: '_serviceTab' == _curTab ? "mui-tab-item mui-active" : "mui-tab-item",
                            id: '_serviceTab' },
                        _react2['default'].createElement('i', { className: 'icon iconfont icon-pinglun' }),
                        '消息'
                    ),
                    _react2['default'].createElement(
                        'a',
                        { className: '_myTab' == _curTab ? "mui-tab-item mui-active" : "mui-tab-item",
                            id: '_myTab' },
                        _react2['default'].createElement('i', { className: 'icon iconfont icon-wo' }),
                        '我的'
                    )
                )
            );
        }
    }]);

    return CommonNavigationBar;
})(_react2['default'].Component);

exports['default'] = (0, _reactRouter.withRouter)(CommonNavigationBar);
module.exports = exports['default'];

/***/ }),

/***/ 724:
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

var appStore = (0, _iflux.Store)({
    goodsList: []
});

_iflux.msg.on("Product_queryGoodsByType", function (value) {
    var param = {};
    param.goodsType = value;
    _utilRequest2['default'].get(_constants2['default'].Host + '/goods/findAllGoodsByType', param).then(function (res) {
        if (res) {
            appStore.cursor().set("goodsList", _immutable2['default'].fromJS(res));
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