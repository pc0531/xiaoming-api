package com.xiaoming.controller;


import com.xiaoming.bo.LoginReturn;
import com.xiaoming.form.LoginForm;
import com.xiaoming.po.UserInfo;
import com.xiaoming.request.UserLoginRequest;
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

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;
import java.util.Map;

@RestController
@RequestMapping("/oauth")
public class OauthController extends BaseController {
    @Autowired
    private UserService userService;

    @RequestMapping("/login")
    public @ResponseBody
    ResponseEntity<Map<String,Object>> login(@ModelAttribute@Valid LoginForm loginForm, BindingResult result, HttpServletRequest request, HttpSession httpSession){
        if(result.hasErrors()){
            return getFailResult(result.getFieldErrors().get(0).getDefaultMessage());
        }
        try {
            String userSession = (String)httpSession.getAttribute("userName");
            if (userSession != null) {
                httpSession.removeAttribute("userName");
            }
            UserLoginRequest userLoginRequest=new UserLoginRequest();
            userLoginRequest.setUserName(loginForm.getUserName());
            userLoginRequest.setPassWord(RSAUtil.decryptPassword(loginForm.getLogPassword()));
            UserInfo userInfo = userService.loginUser(userLoginRequest);
            String token = jwtComponent.createToken(userInfo.getUserCode(),loginForm.getUserName());
            LoginReturn loginReturn = new LoginReturn();
            loginReturn.setToken(token);
            UserInfoVO userInfoVO = CopyUtil.transfer(userInfo,UserInfoVO.class);
            loginReturn.setUser(userInfoVO);
            httpSession.setAttribute("userName", userInfoVO.getUserName());
            return getSuccessResult(loginReturn);
        }
        catch (Exception e){
            return getFailResult(e.getMessage());
        }
    }
}
