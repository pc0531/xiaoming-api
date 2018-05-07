import React from 'react';
import {withRouter, Link} from 'react-router';
import Request from 'util/request';
import Constants from 'constants';
import RSA from 'util/RSA';

class Register extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            phoneNumber: '', // 电话号码
            password:'',//密码
            icon:'http://g.hiphotos.baidu.com/zhidao/pic/item/d833c895d143ad4bd74bac3f85025aafa50f06e3.jpg',// 商家logo
            company:'小鸣学堂',// 商家名称
            iconImage: 'https://pic.qianmi.com/ejz/ejzc_app2.0/img/res-avatar.png',
            hasIcon: false, // 是否上传了头像
            contractChecked: true, //D00232的定制需求，如果选择了合同才让注册
        };
    }

    componentDidMount(){
        let that = this;
        ((mui) => {
            // 注册
            mui('.login-input-group').on('tap', '#pwdRegisterButton', () => {
                let phoneNumber = that.state.phoneNumber; // 电话号码
                let password = that.state.password;//密码
                if (!/^1\d{10}$/.test(phoneNumber)) {
                    mui.toast('请填写正确的手机号码');
                    return;
                }
                if(/^\s*$/.test(password)){
                    mui.toast('密码不能为空');
                    return ;
                    }
                let formData = {
                    userName: phoneNumber,
                    passWord: RSA.encryptedString(password)
                };
                let url = `${Constants.Host}/user/register`;
                Request.get(url, formData).then(function (res) {
                    mui.toast("注册成功！");
                    //CommonInfo.setLoginInfo(res);
                }).fail(function (res) {
                    if (res.result == 'fail') {
                        mui.toast(res.msg);
                    } else {
                        mui.toast("系统异常，请稍后再试！");
                    }
                });
            });

            // 去登录
            mui('.mui-content').on('tap', '#goLogin', () => {
                console.error("xx:"+that.props.location.query.from);
                if (that.props.location.query.from == 'login') {
                    that.props.router.goBack();
                } else {
                    that.props.router.push('/login');
                }
            });

            mui('.top').on('tap','.go-back',function () {
                that.props.router.goBack();
            })
        })(mui)
    }


    render(){
        return(
            <div className="mui-content ex-user-login-content">
                <div className="top">
                    <a href="javascript:void(0)" className="mui-pull-left mui-icon mui-icon-arrowleft go-back"/>
                    <h1 className="mui-title">注册</h1>
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
                                    onChange={this._writePhone.bind(this)}
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
                            <button id="pwdRegisterButton" type="button" className="ex-login-btn">注册</button>
                        </div>
                    </div>
                </form>
                <p className="bottom">已有账号？<a href="javascript:void(0)" id="goLogin">立即登录</a></p>
            </div>
        );
    }

    // 填写手机号码
    _writePhone(e) {
        let name = e.target.name,
            phone = e.target.value;
        this.setState({
            phoneNumber: phone,
        })
    }
    _writePassword(e){
        let password = e.target.value;
        this.setState({
            password:password
        });
    }
}
export default withRouter(Register);