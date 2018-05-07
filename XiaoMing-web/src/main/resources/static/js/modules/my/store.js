import React from 'react';
import {msg,Store} from 'iflux';
import Constants from 'constants';
import Request from 'util/request';
import Immutable from 'immutable';
let appStore = Store({
    userInfo:{}
});

msg.on('My_getUserInfo',(username)=>{
    Request.get(`${Constants.Host}/user/findUserInfoByUsername`,{username:username}).then((res)=>{
            if(res){
                appStore.cursor().set("userInfo",Immutable.fromJS(res));
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
