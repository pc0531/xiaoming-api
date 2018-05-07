import React,{Component} from 'react';
import {withRouter} from 'react-router';
import {msg,connectToStore} from 'iflux';
import CommonInfo from 'util/CommonInfo';
import appStore from './store';
import CommonNavigationBar from 'common/components/common-navigation-bar';
class Product extends Component{
    constructor(props){
        super(props);
        this.onProductTap = this.onProductTap.bind(this)
    }

    componentDidMount(){
        let value = this.props.params.value;
        msg.emit("Product_queryGoodsByType",value);
        mui('#productRefresh').pullRefresh({
            down: {
                height: 80,//可选,默认50.触发下拉刷新拖动距离,
                auto: false,//可选,默认false.自动下拉刷新一次
                contentdown: "下拉可以刷新",//可选，在下拉可刷新状态时，下拉刷新控件上显示的标题内容
                contentover: "释放立即刷新",//可选，在释放可刷新状态时，下拉刷新控件上显示的标题内容
                contentrefresh: "正在刷新...",//可选，正在刷新状态时，下拉刷新控件上显示的标题内容
                callback: this.onPullRefresh //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
            }
        });
    }

    componentDidUpdate() {
        mui('.jzc-mrl0').on('tap', 'a', this.onProductTap());
    }
    render(){
        let goodsList = appStore.data().get("goodsList");
        let list = [];
        goodsList.map((param,index)=>{
            console.error("param:"+param+"_index:"+index);
            list.push(
                <li key={param.get("goodsName")+index}>
                    <a className="jzc-btn-block" data-goodsId={param.get('goodsId')}>
                        <div className="mui-sd-handle">
                            <h2>{param.get("goodsName")}</h2>
                            <p>{param.get("goodsName")}</p>
                        </div>
                    </a>
                </li>
            );
        })
        return(
            <div>
                <div className="animated fadeIn mui-fullscreen">
                    <div className="mui-content jzc-index-item">
                        <div className = "xm-productType-top">
                            <a href="javascript:void(0)" className="mui-icon mui-icon-arrowleft mui-action-back"></a>
                            <h4 className="jzc-title">热门服务</h4>
                        </div>
                        <div className = "xm-productType-choose">
                            <p>筛选</p>
                        </div>
                        <div className="mui-scroll-wrapper xm-scroll-bottom" id="productRefresh">
                            <div className="mui-scroll">
                                <div className="xm-productType-content">
                                    <ul className="jzc-ks-lists js-slide-right jzc-mrl0">
                                        {list}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
    }

    onProductTap(){
        let that = this;
        return function () {
            if(this.dataset.goodsid){
                let goodsId = this.dataset.goodsid;
                that.props.router.push(`/productDetail/${goodsId}`);
            }
        }
    }

}
export default withRouter(connectToStore(appStore,true)(Product)) ;