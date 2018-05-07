import React from 'react';
import {msg,Store} from 'iflux';
import Constants from 'constants';
import Request from 'util/request';
import Immutable from 'immutable';
let appStore = Store({
    goodsList:[]
});

msg.on("Product_queryGoodsByType",(value)=>{
    let param = {}
    param.goodsType =value
    Request.get(`${Constants.Host}/goods/findAllGoodsByType`,param).then((res)=>{
            if(res){
                appStore.cursor().set("goodsList",Immutable.fromJS(res))
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