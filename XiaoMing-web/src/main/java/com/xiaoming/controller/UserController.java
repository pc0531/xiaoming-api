package com.xiaoming.controller;


import com.xiaoming.exception.XiaoMingException;
import com.xiaoming.form.UserInfoCreateForm;
import com.xiaoming.po.UserInfo;
import com.xiaoming.repository.UserRepository;
import com.xiaoming.response.ResponseEntity;
import com.xiaoming.service.UserService;
import com.xiaoming.util.CopyUtil;
import com.xiaoming.util.RSAUtil;
import com.xiaoming.vo.UserInfoVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;


@RestController
@RequestMapping("/user")
public class UserController extends BaseController {
    @Autowired
    private UserService userService;
    @Autowired
    private UserRepository userRepository;

    @RequestMapping("/register")
    public @ResponseBody
    ResponseEntity<UserInfo> register(@ModelAttribute @Valid UserInfoCreateForm userInfoCreateForm, BindingResult result){
        if(result.hasErrors()){
            return getFailResult(result.getFieldErrors().get(0).getDefaultMessage());
        }
        try {
            userService.resetPassword(userInfoCreateForm.getUserName(), RSAUtil.decryptPassword(userInfoCreateForm.getPassWord()));
            return getSuccessResult("注册成功！");
        }
        catch (XiaoMingException e){
            return getFailResult(e.getMessage());
        }
    }

    @RequestMapping("/resetPayPassword")
    public @ResponseBody
    ResponseEntity<UserInfo> resetPayPassword(String username,String payPassword){
        try {
            userService.resetPayPassword(username, RSAUtil.decryptPassword(payPassword));
            return getSuccessResult("设置成功！");
        }
        catch (XiaoMingException e){
            return getFailResult(e.getMessage());
        }
    }

    @RequestMapping("/findUserInfoByUsername")
    public @ResponseBody
    ResponseEntity<UserInfoVO> findUserInfoByUsername(String username){
           UserInfo userInfo = userRepository.findByUserName(username);
           UserInfoVO userInfoVO = CopyUtil.transfer(userInfo,UserInfoVO.class);
            return getSuccessResult(userInfoVO);
    }
}
