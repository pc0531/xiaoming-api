package com.xiaoming.service;


import com.xiaoming.exception.XiaoMingException;
import com.xiaoming.po.UserInfo;
import com.xiaoming.request.UserLoginRequest;

public interface UserService {
    UserInfo loginUser(UserLoginRequest userLoginRequest) throws XiaoMingException;

    void resetPassword(String username, String password) throws XiaoMingException;

    void resetPayPassword(String username,String payPassword) throws XiaoMingException;

}
