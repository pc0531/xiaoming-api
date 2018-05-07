import React from 'react';
import {withRouter} from 'react-router';
import Constants from 'constants';
import moment from 'moment';
import {msg,connectToStore} from 'iflux';

class OrderListBody extends React.Component{

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let leftStyle = Constants.chooseOrderIconClass(2).split('jzc-icon-left')[0];
        let iconCode = '0';
        let list = [];
        let orderList = this.props.list;
        console.error("orderList:"+orderList);
        orderList.map((param,index)=>{
            if(param.get("payStatus")!=='已支付'){
                iconCode = '1'
            }
            list.push(
                <li  key={index}>
                    <a className="top">
                        <span className={leftStyle}/>
                        <span className={"iconfont icon-dingdanzhuangtai-" + iconCode}/>
                        <div className="cont">
                            <h3>{param.get("goodsName")}</h3>
                            <p>合计：<em>￥{param.get("totalCash")}</em></p>
                            <p>创建时间：{moment(param.get("addTime")).format('YYYY-MM-DD HH:mm:ss') } </p>
                        </div>
                    </a>
                </li>
            )
        })

        return (
            <div>
            {orderList?<div className="ordlist-tab-content active">
                <ul className="jzc-ordstatus-lists" style={{paddingBottom: "2.8rem"}}>
                    {list}
                </ul>
            </div>:null}</div>

        );
    }
};

module.exports = withRouter(OrderListBody);