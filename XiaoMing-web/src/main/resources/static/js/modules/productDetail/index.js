import React,{Component} from 'react';
import {withRouter} from 'react-router';
import {msg,connectToStore} from 'iflux';
import CommonInfo from 'util/CommonInfo';
import appStore from './store';

class ProductDetail extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        let goodsId = this.props.params.goodsId;
        msg.emit("ProductDetail_queryGoodsDetail",goodsId);
        let that = this;
        (function ($, doc) {
            $.init({
                // swipeBack: true //启用右滑关闭功能
            });
            $('.mui-scroll-wrapper').scroll();
        })(mui, document);
        //
        mui(".jzc-gds-price-btm").on('tap','#submitorder',this.submitorder(this));
    }

    render(){
        let goodsDetail = appStore.data().get("goodsDetail")
        return(
            <div>
                <div className="animated fadeIn mui-fullscreen">
                    <div className="mui-content jzc-index-item">
                        <div className="xm-productDetail-top">
                            <a href="javascript:void(0)" className="mui-icon mui-icon-arrowleft mui-action-back"></a>
                        </div>
                        <div className="mui-scroll-wrapper jzc-scroll-bottom" id="productDetailRefresh">
                            <div className="mui-scroll">
                                <div className="jzc-gooods-wrapper">
                                    <div className="img-item">
                                        <a href="javascript:void(0)" className="mui-icon mui-icon-arrowleft mui-action-back"></a>
                                        <img src={goodsDetail.get("picUrl")} alt="example"/>
                                    </div>
                                <div className="goods-details">
                                    <div className="left">
                                        <p className="mui-ellipsis">{goodsDetail.get("goodsName")}</p>
                                        <p className="price">{goodsDetail.get("goodsPrice")}</p>
                                    </div>
                                    <div className="share-right">
                                        <p className="iconfont icon-fenxiang"></p>
                                        分享
                                    </div>
                                </div>
                                <div className="jzc-title row js-open-dialog">选择规格</div>
                            </div>
                            </div>
                        </div>
                        <div className="jzc-gds-price-btm">
                                <div className="left">
                                </div>
                            <a href="javascript:void(0)" id="submitorder" className="order-btn js-open-dialog">立即下单</a>
                        </div>
                    </div>
                </div>
            </div>
        )

    }

    submitorder=()=>{

        let that = this;
        let goodsId = this.props.params.goodsId;
        return function () {
            if(CommonInfo.checkLogin()){
                that.props.router.push(`/submitOrder/${goodsId}`)
            }
        }
    }
}
export default withRouter(connectToStore(appStore,true)(ProductDetail)) ;