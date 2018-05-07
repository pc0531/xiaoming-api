import React from 'react';
import Immutable from 'immutable';
import {msg, Store} from 'iflux';
import Request from 'util/request';
import Constants from 'constants';

let appStore = Store({
    productList:{
        dataList:[],
        pageNum: 0,
        pageSize: 20,
        totalCount: 0,
    },
    bannerList:{},//轮播图片
    searchText:""//搜索内容

});
export default appStore;

msg.on('index:queryHotProduct',()=>{
    Request.get(`${Constants.Host}/goods/findAllGoods`).then((res)=>{
            if(res){
                appStore.cursor().setIn(["productList","dataList"],Immutable.fromJS(res.dataList))
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

msg.on('index:addActionLog',(form)=>{
    Request.post(`${Constants.Host}/actionLog/add`,form).then((res)=>{
            if(res){
                mui.toast("调用成功！");
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

msg.on('index:queryPicList',()=>{
    Request.get(`${Constants.Host}/pic/findAllPic`,).then((res)=>{
            if(res){
               appStore.cursor().set("bannerList",res);
               console.error(Immutable.fromJS(res));
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

msg.on('index:changeParams',(name,value)=>{
    appStore.cursor().set(name,value);
})