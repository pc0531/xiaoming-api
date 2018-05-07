package com.xiaoming.controller;

import com.xiaoming.exception.XiaoMingException;
import com.xiaoming.form.OrderCreateForm;
import com.xiaoming.form.PayCreateForm;
import com.xiaoming.po.OrderInfo;
import com.xiaoming.po.PayInfo;
import com.xiaoming.po.UserInfo;
import com.xiaoming.repository.PayReposity;
import com.xiaoming.repository.UserRepository;
import com.xiaoming.request.PayOrderRequest;
import com.xiaoming.response.ResponseEntity;
import com.xiaoming.service.PayService;
import com.xiaoming.util.CopyUtil;
import com.xiaoming.util.RSAUtil;
import com.xiaoming.vo.OrderInfoVO;
import com.xiaoming.vo.PayInfoVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;
import java.util.Iterator;
import java.util.List;

@RestController
@RequestMapping("/pay")
public class PayController extends BaseController {
    @Autowired
    PayReposity payReposity;
    @Autowired
    UserRepository userRepository;
    @Autowired
    private PayService payService;

    @RequestMapping("/addPay")
    public @ResponseBody ResponseEntity<PayInfoVO> addPay(PayCreateForm payCreateForm, HttpSession httpSession) throws XiaoMingException {
        try {

            PayOrderRequest payOrderRequest = new PayOrderRequest();
            payOrderRequest.setOrderId(payCreateForm.getOrderId());
            payOrderRequest.setPayerCode(payCreateForm.getPayerCode());
            payOrderRequest.setPayType(payCreateForm.getPayType());
            payOrderRequest.setPayPassword(RSAUtil.decryptPassword(payCreateForm.getPayPassword()));
            PayInfo payInfo = payService.payMoney(payOrderRequest);
            PayInfoVO payInfoVO = CopyUtil.transfer(payInfo,PayInfoVO.class);
            return getSuccessResult(payInfoVO);
        }
        catch (Exception e) {
            return getFailResult(e.getMessage());
        }
    }

    @RequestMapping("/findByPayId")
    public @ResponseBody ResponseEntity<PayInfoVO> findByPayId(String payId) throws XiaoMingException {
        try {
            PayInfo payInfo=payReposity.findByPayId(payId);
            PayInfoVO payInfoVO = CopyUtil.transfer(payInfo,PayInfoVO.class);
            return getSuccessResult(payInfoVO);
        }
        catch (Exception e) {
            return getFailResult(e.getMessage());
        }
    }
}
