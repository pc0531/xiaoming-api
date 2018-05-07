import React from 'react';
import {msg,Store} from 'iflux';
import Constants from 'constants';
import Request from 'util/request';
import Immutable from 'immutable';

let appStore = Store({
    orderList:[]
})

msg.on('GoodsOrderList_getOrderList',(userCode)=>{
    console.error("usrCode:"+userCode);
    Request.get(`${Constants.Host}/order/findOrdersByUserCode`,{userCode:userCode}).then((res)=>{
            if(res){
                appStore.cursor().set("orderList",Immutable.fromJS(res.dataList))
            }
        }
    ).fail((res)=>{
        if(res.result=='fail'){
            mui.toast(res.msg);
        }
        else {
            mui.toast("系统异常请稍后再试！");
        }
    });
})

export default appStore;