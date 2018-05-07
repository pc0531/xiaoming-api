webpackJsonp([2],{

/***/ 581:
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

var _iflux = __webpack_require__(242);

var _reactRouter = __webpack_require__(161);

var _immutable = __webpack_require__(84);

var _immutable2 = _interopRequireDefault(_immutable);

var _store = __webpack_require__(717);

var _store2 = _interopRequireDefault(_store);

var _commonComponentsCommonNavigationBar = __webpack_require__(594);

var _commonComponentsCommonNavigationBar2 = _interopRequireDefault(_commonComponentsCommonNavigationBar);

var _utilCommonInfo = __webpack_require__(591);

var _utilCommonInfo2 = _interopRequireDefault(_utilCommonInfo);

var _commonConstants = __webpack_require__(592);

var _commonConstants2 = _interopRequireDefault(_commonConstants);

//热门商品

var _componentsHotProductList = __webpack_require__(718);

var _componentsHotProductList2 = _interopRequireDefault(_componentsHotProductList);

//轮播图片

var _componentsBanner = __webpack_require__(720);

var _componentsBanner2 = _interopRequireDefault(_componentsBanner);

//商品类型列表

var _componentsProductTypes = __webpack_require__(721);

var _componentsProductTypes2 = _interopRequireDefault(_componentsProductTypes);

//顶部搜索

var _componentsTopSearch = __webpack_require__(722);

var _componentsTopSearch2 = _interopRequireDefault(_componentsTopSearch);

var Index = (function (_React$Component) {
    _inherits(Index, _React$Component);

    function Index(props) {
        var _this = this;

        _classCallCheck(this, Index);

        _get(Object.getPrototypeOf(Index.prototype), 'constructor', this).call(this, props);

        this.onPullRefresh = function () {
            _this.refreshIndex();
            //结束下拉
            mui('#indexRefresh').pullRefresh().endPulldownToRefresh();
        };

        this.refreshIndex = function () {
            _iflux.msg.emit('index:queryHotProduct');
        };

        this._onChangeProps = function (name, value) {
            _iflux.msg.emit('index:changeParams', name, value);
        };

        this.onProductTap = this.onProductTap.bind(this);
    }

    _createClass(Index, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            _iflux.msg.emit('index:queryHotProduct');
            _iflux.msg.emit('index:queryPicList');
            // CommonInfo.getPosition((position) => {
            //     console.error("city:" + position.city);
            //     console.error("adcode:" + position.adcode);
            //     console.error("longitude:" + position.longitude);
            //     console.error("latitude:" + position.latitude);
            //     let form = {};
            //     form.longitude = position.longitude;
            //     form.city = position.city;
            //     form.latitude = position.latitude;
            //     msg.emit('index:addActionLog', form);
            // });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var that = this;
            mui('#indexRefresh').pullRefresh({
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
            (function ($, doc) {
                $.init({
                    // swipeBack: true //启用右滑关闭功能
                });
                $('.mui-scroll-wrapper').scroll();
                $("#js-banner-slider").slider({ //图片轮播；
                    interval: 5000
                });
                $("#js-slider-menus").slider({ //商品类目；
                    interval: 0
                });
            })(mui, document);
        }
    }, {
        key: 'render',
        value: function render() {
            var data = _store2['default'].data();
            var hotProductList = data.getIn(["productList", "dataList"]);
            var bannerList = data.get("bannerList");
            var productTypes = _commonConstants2['default'].productTypes;
            var searchText = data.get("searchText");

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
                            { className: 'mui-scroll-wrapper jzc-scroll-bottom', id: 'indexRefresh' },
                            _react2['default'].createElement(
                                'div',
                                { className: 'mui-scroll' },
                                _react2['default'].createElement(_componentsBanner2['default'], { bannerList: bannerList }),
                                _react2['default'].createElement(_componentsProductTypes2['default'], { productTypes: productTypes,
                                    onProductTap: this.onProductTap
                                }),
                                _react2['default'].createElement(
                                    'div',
                                    { className: 'xm-index-4' },
                                    _react2['default'].createElement(
                                        'div',
                                        { className: 'xm-index-4 content' },
                                        _react2['default'].createElement(
                                            'div',
                                            { className: 'xm-index-4 up' },
                                            _react2['default'].createElement(
                                                'div',
                                                { className: 'xm-index-4 upcontent', style: { paddingRight: '0.1rem' } },
                                                _react2['default'].createElement(
                                                    'p',
                                                    null,
                                                    '11'
                                                )
                                            ),
                                            _react2['default'].createElement(
                                                'div',
                                                { className: 'xm-index-4 upcontent', style: { paddingLeft: '0.1rem' } },
                                                _react2['default'].createElement(
                                                    'p',
                                                    null,
                                                    '22'
                                                )
                                            )
                                        ),
                                        _react2['default'].createElement(
                                            'div',
                                            { className: 'xm-index-4 down' },
                                            _react2['default'].createElement(
                                                'div',
                                                { className: 'xm-index-4 downcontent', style: { paddingRight: '0.1rem' } },
                                                _react2['default'].createElement(
                                                    'p',
                                                    null,
                                                    '33'
                                                )
                                            ),
                                            _react2['default'].createElement(
                                                'div',
                                                { className: 'xm-index-4 downcontent', style: { paddingLeft: '0.1rem' } },
                                                _react2['default'].createElement(
                                                    'p',
                                                    null,
                                                    '44'
                                                )
                                            )
                                        )
                                    )
                                ),
                                _react2['default'].createElement(_componentsHotProductList2['default'], { productList: hotProductList })
                            )
                        )
                    ),
                    _react2['default'].createElement(_commonComponentsCommonNavigationBar2['default'], { curTab: '_indexTab' })
                )
            );
        }

        //需要下拉刷新数据时调用
    }, {
        key: 'onProductTap',
        value: function onProductTap(value) {
            this.props.router.push('/product/' + value);
        }
    }]);

    return Index;
})(_react2['default'].Component);

exports['default'] = (0, _reactRouter.withRouter)((0, _iflux.connectToStore)(_store2['default'], true)(Index));
module.exports = exports['default'];
/*<TopSearch searchText={searchText}*/ /*onChange={this._onChangeProps}/>*/ /*轮播图片*/ /*<a className="jzc-btn-block jzc-index-ksxd" id="quickOrder">*/ /*<img src="https://pic.qianmi.com/ejz/ejzc_app2.0/img/ksxd.png" alt="快速下单"*/ /*className="jzc-disb"/>*/ /*</a>*/ /*<a className="jzc-btn-block jzc-index-ksxd" style={{marginTop:10}} id="beginEvaluate">*/ /*<img src="https://pic.qianmi.com/ejz/ejzc_app2.0/img/banner/index-banner02.png" alt="测评"*/ /*className="jzc-disb"/>*/ /*</a>*/ /*热门商品*/

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

/***/ 717:
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

var _immutable = __webpack_require__(84);

var _immutable2 = _interopRequireDefault(_immutable);

var _iflux = __webpack_require__(242);

var _utilRequest = __webpack_require__(593);

var _utilRequest2 = _interopRequireDefault(_utilRequest);

var _constants = __webpack_require__(592);

var _constants2 = _interopRequireDefault(_constants);

var appStore = (0, _iflux.Store)({
    productList: {
        dataList: [],
        pageNum: 0,
        pageSize: 20,
        totalCount: 0
    },
    bannerList: {}, //轮播图片
    searchText: "" //搜索内容

});
exports['default'] = appStore;

_iflux.msg.on('index:queryHotProduct', function () {
    _utilRequest2['default'].get(_constants2['default'].Host + '/goods/findAllGoods').then(function (res) {
        if (res) {
            appStore.cursor().setIn(["productList", "dataList"], _immutable2['default'].fromJS(res.dataList));
        }
    }).fail(function (res) {
        if (res.result == 'fail') {
            mui.toast(res.msg);
        } else {
            mui.toast("系统异常请稍后再试！");
        }
    });
});

_iflux.msg.on('index:addActionLog', function (form) {
    _utilRequest2['default'].post(_constants2['default'].Host + '/actionLog/add', form).then(function (res) {
        if (res) {
            mui.toast("调用成功！");
        }
    }).fail(function (res) {
        if (res.result == 'fail') {
            mui.toast(res.msg);
        } else {
            mui.toast("系统异常请稍后再试！");
        }
    });
});

_iflux.msg.on('index:queryPicList', function () {
    _utilRequest2['default'].get(_constants2['default'].Host + '/pic/findAllPic').then(function (res) {
        if (res) {
            appStore.cursor().set("bannerList", res);
            console.error(_immutable2['default'].fromJS(res));
        }
    }).fail(function (res) {
        if (res.result == 'fail') {
            mui.toast(res.msg);
        } else {
            mui.toast("系统异常请稍后再试！");
        }
    });
});

_iflux.msg.on('index:changeParams', function (name, value) {
    appStore.cursor().set(name, value);
});
module.exports = exports['default'];

/***/ }),

/***/ 718:
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

var _utilDateUtil = __webpack_require__(719);

var _utilDateUtil2 = _interopRequireDefault(_utilDateUtil);

var HotProductList = (function (_Component) {
    _inherits(HotProductList, _Component);

    function HotProductList(props) {
        _classCallCheck(this, HotProductList);

        _get(Object.getPrototypeOf(HotProductList.prototype), 'constructor', this).call(this, props);
    }

    _createClass(HotProductList, [{
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            mui('.jzc-mrl0').on('tap', 'a', this.onProductTap(this));
        }
    }, {
        key: 'render',
        value: function render() {
            var _this = this;
            var _randomProductArray = [{ name: "111", description: "测试111" }, { name: "222", description: "测试222" }];
            var hotProductList = this.props.productList;
            var list = [];
            hotProductList.map(function (value, index) {
                list.push(_react2['default'].createElement(
                    'div',
                    { className: 'ex-index-item', key: index },
                    _react2['default'].createElement('img', { src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524308564345&di=4bdae8deeec75498b8f3bf8ba66da675&imgtype=0&src=http%3A%2F%2Fphoto.5imx.com%2Fforum%2F201511%2F17%2F110954ftqf6kwfwkft3krk.jpg' }),
                    _react2['default'].createElement(
                        'div',
                        { className: 'ex-item-li-right' },
                        _react2['default'].createElement(
                            'p',
                            { className: 'ex-item-li-right-title' },
                            '早早家教'
                        ),
                        _react2['default'].createElement(
                            'p',
                            { className: 'ex-item-li-right-description' },
                            '早件课堂一课时'
                        ),
                        _react2['default'].createElement(
                            'p',
                            { className: 'ex-item-li-right-price' },
                            _react2['default'].createElement(
                                'span',
                                null,
                                '￥122'
                            ),
                            _react2['default'].createElement(
                                'span',
                                null,
                                '门店价:￥12'
                            )
                        )
                    )
                ));
            });
            return _react2['default'].createElement(
                'div',
                { className: 'ex-index-item-show-list' },
                _react2['default'].createElement(
                    'div',
                    { className: 'ex-index-list-top' },
                    _react2['default'].createElement(
                        'p',
                        null,
                        '- 猜你喜欢 -'
                    )
                ),
                _react2['default'].createElement(
                    'div',
                    { className: 'ex-index-item-show ex-index-mrl0' },
                    list
                )
            );
        }
    }, {
        key: 'onProductTap',
        value: function onProductTap(_this) {
            return function () {
                if (this.dataset.productid && _this.props.onProductTap) {
                    _this.props.onProductTap(this.dataset.productid);
                }
            };
        }
    }]);

    return HotProductList;
})(_react.Component);

exports['default'] = HotProductList;
module.exports = exports['default'];
/*<a className="ex-index-item-btn-block" data-productId={value.id}>*/ /*<div className="mui-sd-handle">*/ /*<div className="ex-item-li">*/ /**/ /*</div>*/ /*</div>*/ /*</a>*/

/***/ }),

/***/ 719:
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DateUtil = (function () {
  function DateUtil() {
    _classCallCheck(this, DateUtil);
  }

  _createClass(DateUtil, null, [{
    key: "getAge",
    value: function getAge(d) {
      var b = "";
      if (d) {
        var birthday = Number(new Date(d).format('yyyyMMdd'));
        var now = Number(new Date().format("yyyyMMdd"));
        b = parseInt((now - birthday) / 10000);
      }
      return b;
    }
  }, {
    key: "getDateString",
    value: function value(date) {
      return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    },
    enumerable: true
  }]);

  return DateUtil;
})();

exports["default"] = DateUtil;

Date.prototype.format = function (format) {
  var o = {
    "M+": this.getMonth() + 1,
    "d+": this.getDate(),
    "h+": this.getHours(),
    "m+": this.getMinutes(),
    "s+": this.getSeconds(),
    "q+": Math.floor((this.getMonth() + 3) / 3),
    "S": this.getMilliseconds()
  };
  if (/(y+)/.test(format)) {
    format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  }
  for (var k in o) {
    if (new RegExp("(" + k + ")").test(format)) {
      format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
    }
  }
  return format;
};

Date.prototype.addDays = function (d) {
  this.setDate(this.getDate() + d);
};

Date.prototype.addWeeks = function (w) {
  this.addDays(w * 7);
};

Date.prototype.addMonths = function (m) {
  var d = this.getDate();
  this.setMonth(this.getMonth() + m);
  //if (this.getDate() < d)
  //  this.setDate(0);
};

DateUtil.isOutMonth = function (fm, lm) {
  fm = fm.split("-");
  lm = lm.split("-");
  return (lm[0] - fm[0]) * 12 + (lm[1] - fm[1]) + (lm[2] - fm[2] > -1 ? 1 : 0);
};
module.exports = exports["default"];

/***/ }),

/***/ 720:
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

var Banner = (function (_Component) {
    _inherits(Banner, _Component);

    function Banner(props) {
        _classCallCheck(this, Banner);

        _get(Object.getPrototypeOf(Banner.prototype), 'constructor', this).call(this, props);
    }

    _createClass(Banner, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            //顶部图片链接跳转
            mui('#indexBanner').on('tap', 'a', this.onBannerTap);
        }
    }, {
        key: 'render',
        value: function render() {
            var bannerList = this.props.bannerList;
            var bannerBegin = {},
                bannerEnd = {},
                bannerRadio = [];
            if (!bannerList || bannerList.length == 0) {
                return null;
            }
            if (bannerList && bannerList.length > 0) {
                bannerBegin = bannerList[0];
                bannerEnd = bannerList[bannerList.length - 1];
                for (var i = 0; i < bannerList.length; i++) {
                    if (i == 0) {
                        bannerRadio.push(_react2['default'].createElement('div', { className: 'mui-indicator mui-active', key: i }));
                    } else {
                        bannerRadio.push(_react2['default'].createElement('div', { className: 'mui-indicator', key: i }));
                    }
                }
            }
            return _react2['default'].createElement(
                'section',
                { className: 'mui-slider', id: 'js-banner-slider' },
                _react2['default'].createElement(
                    'div',
                    { className: 'mui-slider-group mui-slider-loop', id: 'indexBanner' },
                    bannerBegin ? _react2['default'].createElement(
                        'div',
                        { className: 'mui-slider-item mui-slider-item-duplicate', key: 'bannerBegin' },
                        _react2['default'].createElement(
                            'a',
                            { 'data-url': bannerBegin.redirectUrl },
                            _react2['default'].createElement('img', { src: bannerBegin.picUrl ? bannerBegin.picUrl + '?x-oss-process=image/resize,p_50' : bannerBegin.picUrl })
                        )
                    ) : '',
                    bannerList.map(function (banner, index) {
                        return _react2['default'].createElement(
                            'div',
                            { className: 'mui-slider-item', key: 'banner_key_' + index },
                            _react2['default'].createElement(
                                'a',
                                { 'data-url': banner.redirectUrl },
                                _react2['default'].createElement('img', { src: banner.picUrl ? banner.picUrl + '?x-oss-process=image/resize,p_50' : banner.picUrl })
                            )
                        );
                    }),
                    bannerEnd ? _react2['default'].createElement(
                        'div',
                        { className: 'mui-slider-item mui-slider-item-duplicate', key: 'bannerEnd' },
                        _react2['default'].createElement(
                            'a',
                            { 'data-url': bannerEnd.redirectUrl },
                            _react2['default'].createElement('img', { src: bannerEnd.picUrl ? bannerEnd.picUrl + '?x-oss-process=image/resize,p_50' : bannerEnd.picUrl })
                        )
                    ) : ''
                ),
                _react2['default'].createElement(
                    'div',
                    { className: 'mui-slider-indicator' },
                    bannerRadio
                )
            );
        }
    }, {
        key: 'onBannerTap',
        value: function onBannerTap() {
            var url = this.dataset.url;
            if (url) {
                window.location.href = url;
            }
        }
    }]);

    return Banner;
})(_react.Component);

exports['default'] = Banner;
module.exports = exports['default'];

/***/ }),

/***/ 721:
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

var _immutable = __webpack_require__(84);

var _immutable2 = _interopRequireDefault(_immutable);

var ProductTypes = (function (_Component) {
    _inherits(ProductTypes, _Component);

    function ProductTypes(props) {
        _classCallCheck(this, ProductTypes);

        _get(Object.getPrototypeOf(ProductTypes.prototype), 'constructor', this).call(this, props);
    }

    _createClass(ProductTypes, [{
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            mui('.mui-grid-9').on('tap', '.mui-col-xs-3', this.onProductTap(this));
        }
    }, {
        key: 'render',
        value: function render() {
            var productTypes = this.props.productTypes;
            var showProductTypes = _immutable2['default'].fromJS([]);
            var ulLength = 8;
            var productTypePoint = _immutable2['default'].fromJS([]);
            if (productTypes && productTypes.size > 0) {
                var ulPage = parseInt(productTypes.size / ulLength);
                ulPage = productTypes.size % ulLength > 0 ? ulPage + 1 : ulPage;
                for (var i = 0; i < ulPage; i++) {
                    var lis = _immutable2['default'].fromJS([]);
                    for (var j = 0; j < ulLength; j++) {
                        if (ulLength * i + j < productTypes.size) {
                            var productType = productTypes.get(ulLength * i + j);
                            if (productType) {
                                lis = lis.push(_react2['default'].createElement(
                                    'li',
                                    { className: 'mui-table-view-cell mui-media mui-col-xs-3',
                                        'data-productType': productType.get('value'),
                                        key: ulLength * i + j },
                                    _react2['default'].createElement(
                                        'a',
                                        null,
                                        _react2['default'].createElement('i', { className: 'icon iconfont ' + (productType.get('iconClass') || 'icon-sousuo') }),
                                        _react2['default'].createElement(
                                            'p',
                                            { className: 'mui-media-body text' },
                                            productType.get('text')
                                        )
                                    )
                                ));
                            }
                        }
                    }

                    if (lis.size < ulLength) {
                        var supply = ulLength - lis.size;
                        for (var tmp = 0; tmp < supply; tmp++) {
                            lis = lis.push(_react2['default'].createElement('li', { className: 'mui-table-view-cell mui-media mui-col-xs-3',
                                key: ulLength * i + (ulLength - tmp) }));
                        }
                    }

                    showProductTypes = showProductTypes.push(_react2['default'].createElement(
                        'div',
                        { className: 'mui-slider-item', key: i },
                        _react2['default'].createElement(
                            'ul',
                            { className: 'mui-table-view mui-grid-view mui-grid-9' },
                            lis
                        )
                    ));
                    productTypePoint = productTypePoint.push(_react2['default'].createElement('div', { className: i == 0 ? "mui-indicator mui-active" : "mui-indicator", key: i }));
                }
            }
            return _react2['default'].createElement(
                'section',
                { className: 'mui-slider', id: 'js-slider-menus' },
                _react2['default'].createElement(
                    'div',
                    { className: 'mui-slider-group' },
                    showProductTypes
                ),
                _react2['default'].createElement(
                    'div',
                    { className: 'mui-slider-indicator' },
                    productTypePoint
                )
            );
        }
    }, {
        key: 'onProductTap',
        value: function onProductTap(_this) {
            return function () {
                if (this.dataset.producttype && _this.props.onProductTap) {
                    _this.props.onProductTap(this.dataset.producttype);
                }
            };
        }
    }]);

    return ProductTypes;
})(_react.Component);

exports['default'] = ProductTypes;
module.exports = exports['default'];

/***/ }),

/***/ 722:
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

var TopSearch = (function (_Component) {
    _inherits(TopSearch, _Component);

    function TopSearch(props) {
        _classCallCheck(this, TopSearch);

        _get(Object.getPrototypeOf(TopSearch.prototype), "constructor", this).call(this, props);
    }

    _createClass(TopSearch, [{
        key: "render",
        value: function render() {
            var searchText = this.props.searchText;
            return _react2["default"].createElement(
                "div",
                { className: "mui-scroll-wrapper jzc-scroll-bottom" },
                _react2["default"].createElement("input", { type: "text", placeholder: "搜索", className: "searchText", value: searchText, maxLength: "10",
                    onChange: this._onChangeSearch.bind(this), style: { margin: 0 } })
            );
        }
    }, {
        key: "_onChangeSearch",
        value: function _onChangeSearch(e) {
            console.error("text:" + e.target.value);
            this.props.onChange("searchText", e.target.value);
        }
    }], [{
        key: "defaultProps",
        value: {},
        enumerable: true
    }]);

    return TopSearch;
})(_react.Component);

exports["default"] = TopSearch;
module.exports = exports["default"];

/***/ })

});