import React,{Component} from 'react';
import {withRouter} from 'react-router';
import {msg,connectToStore} from 'iflux';
import CommonInfo from 'util/CommonInfo';
import appStore from './store';
import CommonNavigationBar from 'common/components/common-navigation-bar';
class My extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    componentDidMount(){
        let _userInfo = CommonInfo.getUserInfo();
        msg.emit('My_getUserInfo',_userInfo.userName);
    }

    _myInfoCount(){
        mui('#pullRefresh').pullRefresh().endPulldownToRefresh();
    }

    componentDidUpdate(){
        let _self = this;
        //快速登录，添加事件；
        mui('.jzc-my-top').on('tap', '#logIn', function () {
            CommonInfo.checkLogin();
        });

        mui('#pullRefresh').pullRefresh({
            down: {
                height: 80,//可选,默认50.触发下拉刷新拖动距离,
                auto: false,//可选,默认false.自动下拉刷新一次
                contentdown: "下拉可以刷新",//可选，在下拉可刷新状态时，下拉刷新控件上显示的标题内容
                contentover: "释放立即刷新",//可选，在释放可刷新状态时，下拉刷新控件上显示的标题内容
                contentrefresh: "正在刷新...",//可选，正在刷新状态时，下拉刷新控件上显示的标题内容
                callback: _self._myInfoCount //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
            }
        });
    }

    render(){
        let unReadMessageCount = 1;
        let messageClass = unReadMessageCount > 0 ? 'unread' : '';
        let _userInfo = CommonInfo.getUserInfo();
        let userInfo = _userInfo && _userInfo !== 'null' && _userInfo.userName ? _userInfo : {};
        let userInfo_find = appStore.data().get("userInfo");
        return(
            <div className="animated fadeIn mui-fullscreen">
                <header className="mui-bar jzc-bar-nav linear-background" id="myHeader">
                    <h1 className="mui-title">我的</h1>
                    <a id="messageCenter" href="javascript:void(0)" className={'mui-pull-right iconfont icon-xinfeng ' + messageClass}></a>
                    <a id="shoppingCart" href="javascript:void(0)" className="mui-pull-right iconfont icon-gouwuchekongxin"></a>
                </header>
                <div className="mui-content">
                        <div className="jzc-my-top">
                            {
                                CommonInfo.checkLogin({type:0}) ?
                                    <div className="use-phone-msg">
                                        <div>
                                            <p className="phone"> {userInfo.name || '-'}</p>
                                        </div>
                                    </div>:
                        <a href="javascript:void(0)"  id="logIn">快速登录</a> }
                        </div>
                    <div className="mui-scroll-wrapper jzc-scroll-tb" id="pullRefresh">
                        <div className="mui-scroll">
                            <div className="jzc-my-menu">
                                <a id="couponList">
                                    <span>
                                        {1}
                                    </span>优惠券
                                </a>
                                <a id="cardBag">
                                    <span>
                                        {userInfo_find.get("totalCash")?userInfo_find.get("totalCash"):0}
                                    </span>余额
                                </a>
                            </div>
                            <div className="jzc-row-box">
                                <a className="mui-navigate-right line" id="myInfo">我的信息</a>
                                <a className="mui-navigate-right line" id="myHealthList">我的报告</a>
                                <div className="row">
                                    <a className="mui-navigate-right" id="feedBack">意见反馈</a>
                                </div>
                                        <a className="jzc-layout-btn line" id="logOut">
                                            <i className="iconfont icon-web-icon-"></i>切换账号
                                        </a>
                            </div>

                        </div>
                    </div>
                </div>
                <CommonNavigationBar curTab={'_myTab'}/>
            </div>

        );
    }
}
export default withRouter(connectToStore(appStore,true)(My)) ;