import React from 'react';
import {withRouter, Link} from 'react-router';
import CommonNavigationBar from 'common/components/common-navigation-bar';
import BarContainer from './component/bar-container';
import Bar from './component/bar';
import OrderServiceListBody from './component/order-service-list-body';
import {msg,connectToStore} from 'iflux';
import appStore from './store';
import CommonInfo from 'util/CommonInfo';

class GoodsOrderList extends React.Component{

    constructor(props){
        super(props);
        this.state={
            ready:false,
            type:"service",
            selected:"all",
        }
    }
    componentWillMount(){
        let userInfo =CommonInfo.getUserInfo();
        msg.emit('GoodsOrderList_getOrderList',userInfo.userCode);
    }
    componentDidMount() {
        let that = this;
        (function ($, doc) {
            $.init({
                // swipeBack: true //启用右滑关闭功能
            });
            $('.mui-scroll-wrapper').scroll();
        })(mui, document);

        mui("#ordertab").on('tap','#serviceorder',function(){
            // CommonInfo.sessionStorage.setItem("orderTypeSelected",'service');
            // CommonInfo.sessionStorage.setItem("orderFirstSelected",'all');
            that.setState({
                type:'service',
                selected:'all'
            })
            //window.location.href ="#/service-order-list"
        });

        mui("#ordertab").on('tap','#goodsorder',function(){
            // CommonInfo.sessionStorage.setItem("orderTypeSelected",'goods');
            // CommonInfo.sessionStorage.setItem("orderFirstSelected",'allGoods');
            that.setState({
                type:'goods',
                selected:'allGoods'
            })
        });

        mui("#aunttabbar").on('tap','a',function(){
            let chooseId = this.dataset.choose;
            that.setState({
                selected:chooseId
            })
        });

    }


    render() {
        let all = {
            classType : 2
        };
        let selected = this.state.selected;
        let type = this.state.type;
        let orderList = appStore.data().get("orderList");
        console.error("orderList11:"+orderList);
        return (
            <div>
            {orderList?
                <div>
                <header className="mui-bar mui-bar-nav jzc-bar-nav linear-background">
                    <a href="javascript:void(0)" className="mui-pull-left mui-icon mui-icon-arrowleft mui-action-back"></a>
                    <h1 className="mui-title">订单列表</h1>
                </header>
                <div id="ordertab" className="mui-segmented-control jzc-ordlist-items" style={{margin: "1rem .2rem -1rem"}}>
                    <a id="serviceorder" className={type=="service"?"mui-control-item mui-active":"mui-control-item"}>服务订单</a>
                    <a id="goodsorder" className={type=="goods"?"mui-control-item mui-active":"mui-control-item"}>实物订单</a>
                </div>
                <BarContainer>
                    <Bar title="全部" choose="all" selected={'all' == selected} showed={'service' == type} >
                       <OrderServiceListBody url="/trade/queryListWithExtend" id="allOrderList" type="order" list={orderList}/>
                    </Bar>
                    <Bar title="未完成" choose="uncomplete" selected={'uncomplete' == selected} showed={'service' == type}>
                        <OrderServiceListBody url="/trade/queryListWithExtend" id="uncompletelOrderList" type="order" />
                    </Bar>
                    <Bar title="已完成" choose="complete" selected={'complete' == selected} showed={'service' == type}>
                        {/*<OrderServiceListBody url="/trade/queryListWithExtend" id="completelOrderList" filterData = {complete} type="order" />*/}
                    </Bar>
                    <Bar title="售后" choose="afterSale" selected={'afterSale' == selected} showed={'service' == type}>
                        {/*<OrderServiceListBody url="/serviceorder/queryServiceorderList" id="serviceorderList"  type="service" />*/}
                    </Bar>
                    <Bar title="全部" choose="allGoods" selected={'allGoods' == selected} showed={'goods' == type}>
                        {/*<OrderServiceListBody url="/ka/yly/entity/trade/queryListWithPic" id="allGoodsList" filterData={allGoods}  type="goods" />*/}
                    </Bar>
                    <Bar title="未完成" choose="uncompleteGoods" selected={'uncompleteGoods' == selected} showed={'goods' == type}>
                        {/*<OrderServiceListBody url="/ka/yly/entity/trade/queryListWithPic" id="uncompleteGoodsList" filterData={uncompleteGoods} type="goods" />*/}
                    </Bar>
                    <Bar title="已完成" choose="completeGoods" selected={'completeGoods' == selected} showed={'goods' == type}>
                        {/*<OrderServiceListBody url="/ka/yly/entity/trade/queryListWithPic" id="completeGoodsList" filterData = {completeGoods} type="goods" />*/}
                    </Bar>
                </BarContainer>
                <CommonNavigationBar curTab={'_orderTab'}/>
            </div>:null}
            </div>
        );
    }
};

export default withRouter(connectToStore(appStore,true)(GoodsOrderList)) ;