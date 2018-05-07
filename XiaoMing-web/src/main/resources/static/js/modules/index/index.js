import React from 'react';
import {msg, connectToStore} from 'iflux';
import {withRouter} from 'react-router';
import Immutable from 'immutable';
import appStore from './store';
import CommonNavigationBar from 'common/components/common-navigation-bar';
import CommonInfo from 'util/CommonInfo';
import Constants from '../../common/constants'

//热门商品
import HotProductList from './components/hot-product-list';
//轮播图片
import Banner from './components/banner';
//商品类型列表
import ProductTypes from './components/product-types';
//顶部搜索
import TopSearch from './components/topSearch';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.onProductTap = this.onProductTap.bind(this);
    }

    componentWillMount() {
        msg.emit('index:queryHotProduct');
        msg.emit('index:queryPicList');
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

    componentDidMount() {
        let that = this;
        mui('#indexRefresh').pullRefresh({
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
        (function ($, doc) {
            $.init({
                // swipeBack: true //启用右滑关闭功能
            });
            $('.mui-scroll-wrapper').scroll();
            $("#js-banner-slider").slider({ //图片轮播；
                interval: 5000,
            });
            $("#js-slider-menus").slider({ //商品类目；
                interval: 0,
            });
        })(mui, document);

    }


    render() {
        let data = appStore.data();
        let hotProductList = data.getIn(["productList", "dataList"]);
        let bannerList = data.get("bannerList");
        let productTypes = Constants.productTypes;
        let searchText = data.get("searchText");

        return (
            <div>
                <div className="animated fadeIn mui-fullscreen">
                    <div className="mui-content jzc-index-item">
                        {/*<TopSearch searchText={searchText}*/}
                        {/*onChange={this._onChangeProps}/>*/}
                        <div className="mui-scroll-wrapper jzc-scroll-bottom" id="indexRefresh">
                            <div className="mui-scroll">

                                {/*轮播图片*/}
                                <Banner bannerList={bannerList}/>
                                <ProductTypes productTypes={productTypes}
                                              onProductTap={this.onProductTap}
                                />

                                {/*<a className="jzc-btn-block jzc-index-ksxd" id="quickOrder">*/}
                                {/*<img src="https://pic.qianmi.com/ejz/ejzc_app2.0/img/ksxd.png" alt="快速下单"*/}
                                {/*className="jzc-disb"/>*/}
                                {/*</a>*/}

                                {/*<a className="jzc-btn-block jzc-index-ksxd" style={{marginTop:10}} id="beginEvaluate">*/}
                                {/*<img src="https://pic.qianmi.com/ejz/ejzc_app2.0/img/banner/index-banner02.png" alt="测评"*/}
                                {/*className="jzc-disb"/>*/}
                                {/*</a>*/}
                                <div className="xm-index-4">
                                    <div className="xm-index-4 content">
                                        <div className="xm-index-4 up">
                                            <div className="xm-index-4 upcontent" style={{paddingRight:'0.1rem'}}>
                                                <p>11</p>
                                            </div>
                                            <div className="xm-index-4 upcontent" style={{paddingLeft:'0.1rem'}}>
                                                <p>22</p>
                                            </div>
                                        </div>
                                        <div className="xm-index-4 down">
                                            <div className="xm-index-4 downcontent" style={{paddingRight:'0.1rem'}}>
                                                <p>33</p>
                                            </div>
                                            <div className="xm-index-4 downcontent" style={{paddingLeft:'0.1rem'}}>
                                                <p>44</p>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                                {/*热门商品*/}
                                <HotProductList productList={hotProductList}/>
                            </div>
                        </div>
                    </div>
                    <CommonNavigationBar curTab={'_indexTab'}/>
                </div>
            </div>
        );

    }


    //需要下拉刷新数据时调用
    onPullRefresh = () => {
        this.refreshIndex();
        //结束下拉
        mui('#indexRefresh').pullRefresh().endPulldownToRefresh();
    }
    refreshIndex = () => {
        msg.emit('index:queryHotProduct');
    }

    onProductTap(value) {
        this.props.router.push(`/product/${value}`)
    }

    _onChangeProps = (name, value) => {
        msg.emit('index:changeParams', name, value);

    }
}

export default withRouter(connectToStore(appStore, true)(Index));
