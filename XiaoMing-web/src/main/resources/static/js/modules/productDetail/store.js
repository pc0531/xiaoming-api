import React from 'react';
import {msg,Store} from 'iflux';
import Constants from 'constants';
import Request from 'util/request';
import Immutable from 'immutable';
let appStore = Store({
    goodsDetail:{}
});

msg.on("ProductDetail_queryGoodsDetail",(goodsId)=>{
    let param = {}
    param.goodsId =goodsId
    Request.get(`${Constants.Host}/goods/findByGoodsId`,param).then((res)=>{
            if(res){
                appStore.cursor().set("goodsDetail",Immutable.fromJS(res))
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
});


export default appStore;