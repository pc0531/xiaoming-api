package com.xiaoming.service.imp;

import com.xiaoming.exception.XiaoMingException;
import com.xiaoming.po.UserInfo;
import com.xiaoming.repository.UserRepository;
import com.xiaoming.request.UserLoginRequest;
import com.xiaoming.service.UserService;
import com.xiaoming.util.MD5Util;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImp implements UserService {
    @Autowired
    private UserRepository userRepository;

    @Override
    public UserInfo loginUser(UserLoginRequest userLoginRequest) throws XiaoMingException {
        String passWord = MD5Util.encode(userLoginRequest.getPassWord());
        UserInfo userInfo = userRepository.findByUserName(userLoginRequest.getUserName());
        if(userInfo == null){
            throw new XiaoMingException("用户名不存在！");
        }
        if (!passWord.equals(userInfo.getPassWord())) {
            throw new XiaoMingException("用户名或密码错误！");
        }
        return userInfo;
    }

    @Override
    public void resetPassword(String username, String password) throws XiaoMingException {
        String passwordMD5 = MD5Util.encode(password);
        UserInfo userInfo = new UserInfo();
        userInfo.setUserName(username);
        userInfo.setPassWord(passwordMD5);
        userInfo.setUserCode("U" + (int) (Math.random() * 100 + 1));
        userRepository.save(userInfo);
    }

    @Override
    public void resetPayPassword(String username, String payPassword) throws XiaoMingException {
        String payPasswordMD5 = MD5Util.encode(payPassword);
        UserInfo userInfo = userRepository.findByUserName(username);
        UserInfo newUserInfo = userInfo;
        newUserInfo.setPayPassword(payPasswordMD5);
        userRepository.save(newUserInfo);
    }
}
