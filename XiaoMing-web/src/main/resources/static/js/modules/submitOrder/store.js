import React from 'react';
import {msg,Store} from 'iflux';
import Constants from 'constants';
import Request from 'util/request';
import Immutable from 'immutable';
import RSA from 'util/RSA';

let appStore = Store({
    submitReturn:{},
    buyId:'',
    goodsId:'',
    totalCash:'',
    classNum:'',
    goodsPrice:0,
    goodsName:'',
    goodsDetail:{},
    userInfo:{
        name:'',
        phone:''
    },
    isOrderSuccess:false,
    isShowDialogCss:false,
    orderId:'',
    payPassword:'',//支付密码
    payStatus:'',
    payId:''
});

msg.on('SubmitOrder_submit',()=>{
    let param = {};
    let data = appStore.data();
    param.buyId = data.get("buyId");
    param.goodsId = data.get("goodsId");
    param.totalCash = data.get("classNum") * data.get("goodsPrice");
    param.goodsNum = data.get("classNum");
    param.goodsName = data.get("goodsName");
    Request.post(`${Constants.Host}/order/addOrder`,param).then((res)=>{
            if(res&&res.orderId){
                appStore.cursor().set("submitReturn",Immutable.fromJS(res))
                appStore.cursor().set("isOrderSuccess",true);
                appStore.cursor().set("orderId",res.orderId);
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

msg.on('SubmitOrder_getGoodsInfo',(goodsId)=>{
    Request.get(`${Constants.Host}/goods/findByGoodsId`,{goodsId:goodsId}).then((res)=>{
            if(res){
                appStore.cursor().set("goodsName",res.goodsName);
                appStore.cursor().set("goodsPrice",res.goodsPrice);
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

msg.on('SubmitOrder_changeData',(mark,data)=>{
    appStore.cursor().set(mark,data);
});

msg.on('SubmitOrder_initUserData',(userInfo)=>{
    appStore.cursor().setIn(["userInfo","name"],userInfo.name);
    appStore.cursor().setIn(["userInfo","phone"],userInfo.phone);
    appStore.cursor().set("buyId",userInfo.userCode);
});

msg.on('SubmitOrder_payMoneny',(that)=>{
    let payPassword  = appStore.data().get("payPassword");
    if(!payPassword){
        mui.toast("请输入支付密码!");
        return;
    }
    let param = {};
    let data = appStore.data();
    param.payType = "余额";
    param.payerCode = data.get("buyId");
    param.orderId = data.get("orderId")
    param.payPassword = RSA.encryptedString(data.get("payPassword"));
    Request.post(`${Constants.Host}/pay/addPay`,param).then((res)=>{
            if(res){
                that(res.payId);
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

