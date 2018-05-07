import React from 'react';
import {withRouter,Link} from 'react-router';
import Request from 'util/request';
import RSA from 'util/RSA';
import CommonInfo from 'util/CommonInfo';
import Constants from 'constants';
import $Script from 'scriptjs';

class Login extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            username:'',//用户名
            icon:'http://g.hiphotos.baidu.com/zhidao/pic/item/d833c895d143ad4bd74bac3f85025aafa50f06e3.jpg',// 商家logo
            company:'小鸣学堂',// 商家名称

        }
        this._password=''
    }

    componentWillMount(){

    }

    componentDidMount(){
        let that = this;
        (function (mui,doc,me) {
            mui('.login-input-group').on('tap','#pwdLoginButton',function () {
                that._normalLogin(me);
            })
            mui('.pwdLogin-input-group').on('tap','#registerButton',function () {
                that._normalRegister(me);
            })

            mui('.top').on('tap','.go-back',function () {
                that.props.router.push('/my');
            })

            // 注册按钮事件
            mui('.mui-content').on('tap','#register',function(){
                me.props.router.push('/register?from=login');
            });

            if (/(Android)/i.test(navigator.userAgent)) {
                for(let i =0; i<document.getElementsByTagName('input').length;i++){
                    document.getElementsByTagName('input')[i].addEventListener('focus',function(){
                        document.getElementsByClassName('js-form')[0].classList.add('up');
                    });
                    document.getElementsByTagName('input')[i].addEventListener('blur',function(){
                        document.getElementsByClassName('js-form')[0].classList.remove('up');
                    })
                }
            }
        }(mui,document,this));
    }

    render(){
        return(
            <div className="mui-content ex-user-login-content">
                <div className="top">
                    <a href="javascript:void(0)" className="mui-pull-left mui-icon mui-icon-arrowleft go-back"/>
                    <h1 className="mui-title">登录</h1>
                </div>
                <form className="js-form">
                    <figure>
                        <img src={this.state.icon} />
                        <p>{this.state.company}</p>
                    </figure>
                    <div className="login-input-group">
                        <div className="validate-group">
                            <div className="row">
                                <input
                                    onChange={this._writeUsername.bind(this)}
                                    type="text"
                                    name="username"
                                    placeholder="请输入账号"
                                    value={this.state.username}
                                />
                            </div>
                            <div className="row hava-msg-row">
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="请输入密码"
                                    onChange={this._writePassword.bind(this)}
                                />
                            </div>
                            <button id="pwdLoginButton" type="button" className="ex-login-btn">登录</button>
                            <a href="javascript:void(0)" className="ex-login-way">{'<< 验证码登录'}</a>
                        </div>
                    </div>
                </form>
                <p className="bottom">还没账号？<a href="javascript:void(0)" id="register">立即注册</a></p>
            </div>
        );

    };

    //用户名输入
    _writeUsername =(e)=>{
        let username = e.target.value;
        this.setState({
            username:username
        })
    }

    _writePassword =(e)=>{
        let password = e.target.value;
        this._password = password;
    }

    _normalLogin =(me)=>{
        let username = me.state.username;
        if(!username){
            mui.toast('请输入用户名');
            return;
        }
        let url = `${Constants.Host}/oauth/login`;
        let condition = {};
        let password = me._password;
        if(/^\s*$/.test(password)){
            mui.toast('密码不能为空');
            return ;
        }
        condition.userName = username;
        condition.logPassword = RSA.encryptedString(password);
        Request.post(url,condition).then((res)=>{
                CommonInfo.setLoginInfo(res);
        }
        ).fail((res)=>{
            if (res.result == 'fail') {
                mui.toast(res.msg);
            } else {
                mui.toast("系统异常，请稍后再试！");
            }
        })
    }

    // _normalRegister = (me) =>{
    //     let username = me.state.username;
    //     if(!username){
    //         mui.toast('请输入用户名');
    //         return;
    //     }
    //     let url = 'http://127.0.0.1:8081/user/register';
    //     let condition = {};
    //     let password = me._password;
    //     if(/^\s*$/.test(password)){
    //         mui.toast('密码不能为空');
    //         return ;
    //     }
    //     condition.userName = username;
    //     condition.passWord = RSA.encryptedString(password);
    //     Request.post(url,condition).then((res)=>{
    //                 mui.toast("注册成功！！")
    //         }
    //     ).fail((res)=>{
    //         console.error("res:"+res);
    //         if (res.result == 'fail') {
    //             mui.toast(res.msg);
    //         } else {
    //             mui.toast("系统异常，请稍后再试！");
    //         }
    //     })
    //
    // }
}
export default withRouter(Login)