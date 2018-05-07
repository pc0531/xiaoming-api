import React,{Component} from 'react';
import {withRouter} from 'react-router';
import {msg,connectToStore} from 'iflux';
import appStore from './store';
import moment from 'moment';
import CommonInfo from 'util/CommonInfo';

class PayResult extends Component{
    componentDidMount(){
        let _self = this;
        let payId = this.props.params.payId;
        msg.emit('PayResult_findPay',payId);
        (function ($, doc) {
            $.init({
                // swipeBack: true //启用右滑关闭功能
            });
            $('.mui-scroll-wrapper').scroll();
        })(mui, document);
        // 返回首页，添加事件；
        mui('.jzc-default-nav-tab').on('tap', '#goToIndex', function () {
            _self.props.router.push('/');
        });
    }
    render(){
        let payInfo = appStore.data().get("payInfo");
        return(
            <div className="animated fadeIn mui-fullscreen">
                <header className="mui-bar mui-bar-nav jzc-bar-nav linear-background">
                    <a href="javascript:void(0)"
                       className="mui-pull-left mui-icon mui-icon-arrowleft mui-action-back"></a>

                    <h1 className="mui-title">支付成功</h1>
                </header>

                <div className="mui-content">
                    <div className="mui-scroll-wrapper jzc-scroll-tb">
                        <div className="mui-scroll">
                            <div className="jzc-pay-success">
                                <img src="https://pic.qianmi.com/ejz/ejzc_app2.0/img/paysuccess.png" alt="恭喜您支付成功"/>
                            </div>
                            <div className="jzc-card-item">
                                <div className="top">
                                    <p>名字<span>(面值￥)</span>
                                    </p>
                                    <h4><span>￥{payInfo.get("totalCash")}</span></h4>
                                </div>
                                <div className="bottom-btn-2">
                                    <a href="javascript:void(0)" className="js-sendGift">分享</a>
                                    <a href="javascript:void(0)" id="bindPCard"
                                       >查看订单详情</a>
                                </div>
                            </div>

                            <div className="jzc-paydetail">
                                <div className="top">
                                    <p>订单号:{payInfo.get("orderId")}</p>
                                    <p>支付流水号:{payInfo.get("payId")}</p>
                                    <p>支付时间:{moment(payInfo.get("time")).format('YYYY-MM-DD HH:mm:ss') }</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <footer>
                    <nav className="mui-bar mui-bar-tab jzc-default-nav-tab">
                        <a href="javascript:void(0)" id="goToIndex">返回首页</a>
                    </nav>
                </footer>

                {/*赠礼*/}
                <div className="jzc-copy-password js-copy-password">
                    <p><span>卡密：</span>123</p>
                    <a href="javascript:void(0)" id="copyCardPwd" className="copyCardPwd">复制</a>
                </div>
                <div className="mui-backdrop jzc-backdrop js-backdrop"></div>
            </div>
        )
    }
}
export default withRouter(connectToStore(appStore,true)(PayResult)) ;