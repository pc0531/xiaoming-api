import React,{Component} from 'react';
import {withRouter} from 'react-router';
import {msg,connectToStore} from 'iflux';
import appStore from './store';
import CommonInfo from 'util/CommonInfo';

class SubmitOrder extends Component{
    constructor(props){
        super(props);
        this.state={
            buyerId:''
        }
    }

    componentDidMount(){
        // //TODO 检查是否登录
        // CommonInfo.checkLogin();
        let userInfo =CommonInfo.getUserInfo();
        let goodsId = this.props.params.goodsId;
        msg.emit('SubmitOrder_initUserData',userInfo);
        msg.emit('SubmitOrder_changeData',"goodsId",goodsId);
        msg.emit('SubmitOrder_getGoodsInfo',goodsId);
        let that = this;
        (function ($, doc) {
            $.init({
                // swipeBack: true //启用右滑关闭功能
            });
            $('.mui-scroll-wrapper').scroll();
        })(mui, document);
        mui('.jzc-btn-item').on('tap', '#submitOrder', this.gotoPay(this));

        mui('.mui-fullscreen').on('tap', '.mui-backdrop', function () {
            appStore.cursor().set('isOrderSuccess', false);
            appStore.cursor().set('isShowDialogCss', false);
        });
        mui('.mui-fullscreen').on('tap', '#toOrderDetail',this.payMoney(this) );
    }

    componentDidUpdate() {
        //此处主要用于弹框时，有逐渐放大的效果
        let isOrderSuccess = appStore.data().get('isOrderSuccess');
        let isShowDialogCss = appStore.data().get('isShowDialogCss');

        if(isOrderSuccess && !isShowDialogCss) {
            setTimeout(() => {
                appStore.cursor().set('isShowDialogCss', true);
            }, 10);
        }
    }

    render(){
        let data = appStore.data();
        let name = data.getIn(["userInfo","name"]);
        let phone = data.getIn(["userInfo","phone"]);
        let classNum = data.get("classNum");
        let goodsPrice = data.get("goodsPrice");
        let totalCash = classNum*goodsPrice
        return(
            <div className="animated fadeIn mui-fullscreen">
                <header className="mui-bar mui-bar-nav jzc-bar-nav linear-background">
                    <a href="javascript:void(0)"
                       className="mui-pull-left mui-icon mui-icon-arrowleft mui-action-back"></a>

                    <h1 className="mui-title">下单</h1>
                </header>
                <div className="mui-content">
                    <div className="mui-scroll-wrapper jzc-scroll-top">
                        <div className="mui-scroll">
                            <ul className="mui-table-view jzc-ordmsg-lists">
                                {/*联系人*/}
                                {/*<ViewContact cuserInfo={cuserInfo} serviceType={choosedProduct.serviceForm.serviceType}*/}
                                             {/*callback={this._setUserInfo}/>*/}
                                {/*推荐门店*/}
                                <li className="mui-table-view-cell mui-media">
                                    <a href="javascript:void(0)" className="mui-navigate-right" id="showAddressArea">
                                        <div className="mui-media-body">
                                            <p className="name">姓名:{name} <span>电话:{phone}</span></p>

                                        </div>
                                    </a>
                                </li>
                                {/*<ViewRecommend recommendPuser={recommendPuser}*/}
                                               {/*serviceType={choosedProduct.serviceForm.serviceType}/>*/}
                            </ul>

                            {/*{this._renderChoosedProduct()}*/}

                            {/*{this._renderTpl2AndNomal(serviceStartTime, cateId)}*/}
                            <form action="" className="mui-input-group jzc-input-group jzc-address-cont">
                                <div className="mui-input-row jzc-input-row">
                                    <label>课时数</label>
                                    <input type="text" placeholder="请输入课时数" className="name" value={classNum}
                                           name="classNum" maxLength="15" onChange={this._commonChange.bind(this)}/>
                                </div>
                                <div className="mui-input-row jzc-input-row">
                                    <label>单价</label>
                                    <label style={{textAlign:'right',width:'70%',padding:'.3rem .2rem'}}>{goodsPrice}</label>
                                </div>
                                <div className="mui-input-row jzc-input-row">
                                    <label>总价</label>
                                    <label style={{textAlign:'right',width:'70%',padding:'.3rem .2rem'}}>{classNum?totalCash:0}</label>
                                </div>
                            </form>
                            <p className="jzc-btn-item">
                                        <a href="javascript:void(0)" className="jzc-btn-com jzc-bjbtn-block"
                                           id="submitOrder">提交订单</a>
                            </p>
                        </div>
                    </div>
                </div>

                {this._renderDialog()}

                {this._renderCanvas()}

            </div>
        )

    }

    _renderDialog() {
        let isOrderSuccess = appStore.data().get('isOrderSuccess');

        let isShowDialogCss = appStore.data().get('isShowDialogCss');

        let classStyle = isShowDialogCss ? "jzc-tip-modal medium-height js-dialog-content active" : "jzc-tip-modal medium-height js-dialog-content";

        let isBlock = isOrderSuccess ? {display: 'block'} : {};

        let totalCash  = appStore.data().get("classNum") * appStore.data().get("goodsPrice");

        let payPassword  = appStore.data().get("payPassword");

        let name = appStore.data().getIn(["userInfo","name"]);

        return (
            <div className={classStyle} style={isBlock}>
                <div className="header"><i className="iconfont icon-xuanzhong"></i>确认付款</div>
                <div className="content">
                    <div className="details">
                        <p style={{fontSize:"0.6rem"}}>￥{totalCash}</p>

                        <p>付款账号：{name}</p>
                        <p>支付方式:余额</p>
                        <input type="password" placeholder="请输入支付密码" className="name" value={payPassword}
                               name="payPassword" maxLength="15" onChange={this._commonChange.bind(this)} style={{width:"4rem",marginBottom:'0',height:'0.5rem',marginTop:'0.15rem'}}/>
                    </div>
                    <p className="btn-item">
                        <a href="javascript:void(0)" className="jzc-btn-com jzc-bjbtn-block" id="toIndex">取消</a>
                        <a href="javascript:void(0)" className="jzc-btn-com jzc-bjbtn-block" id="toOrderDetail">立即付款</a>
                    </p>

                </div>
            </div>
        );
    }

    _renderCanvas() {

        let isOrderSuccess = appStore.data().get('isOrderSuccess');

        let classStyle = isOrderSuccess ? "mui-backdrop jzc-backdrop js-backdrop active" : "mui-backdrop jzc-backdrop js-backdrop";

        return (
            <div className={classStyle}></div>
        );
    }

    payMoney = () =>{
        let that = this;
        return function () {
            msg.emit('SubmitOrder_payMoneny',(payId)=>{
                that.props.router.push(`/payResult/${payId}`)
            });
        }
    }

    _commonChange(e){
        let name = e.target.name;
        let value =  e.target.value;
        msg.emit('SubmitOrder_changeData',name,value);
    }

    gotoPay(){
        return function () {
            msg.emit('SubmitOrder_submit');
        }
    }

}
export default withRouter(connectToStore(appStore,true)(SubmitOrder)) ;