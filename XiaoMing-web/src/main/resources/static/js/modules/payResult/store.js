import React from 'react';
import {msg,Store} from 'iflux';
import Constants from 'constants';
import Request from 'util/request';
import Immutable from 'immutable';

let appStore = Store({
    payInfo:{}
})

msg.on('PayResult_findPay',(payId)=>{
    Request.post(`${Constants.Host}/pay/findByPayId`,{payId:payId}).then((res)=>{
            if(res){
                appStore.cursor().set("payInfo",Immutable.fromJS(res));
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