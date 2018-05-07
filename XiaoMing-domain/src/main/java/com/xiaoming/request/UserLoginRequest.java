package com.xiaoming.request;

import lombok.Data;

@Data
public class UserLoginRequest {
    /**
     * 登录用户名
     */
    private String userName;

    /**
     * 登录密码
     */
    private String passWord;

    /**
     * 登录ip地址
     */

    private String loginIp;

    /**
     * 登录手机号
     */
    private String phone;
}
