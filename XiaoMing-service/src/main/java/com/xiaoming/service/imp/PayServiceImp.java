package com.xiaoming.service.imp;

import com.xiaoming.enums.Constants;
import com.xiaoming.exception.XiaoMingException;
import com.xiaoming.po.GoodsInfo;
import com.xiaoming.po.OrderInfo;
import com.xiaoming.po.PayInfo;
import com.xiaoming.po.UserInfo;
import com.xiaoming.repository.GoodsRepository;
import com.xiaoming.repository.OrderRepository;
import com.xiaoming.repository.PayReposity;
import com.xiaoming.repository.UserRepository;
import com.xiaoming.request.PayOrderRequest;
import com.xiaoming.service.PayService;
import com.xiaoming.util.MD5Util;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PayServiceImp implements PayService {
    @Autowired
    PayReposity payReposity;
    @Autowired
    UserRepository userRepository;
    @Autowired
    GoodsRepository goodsRepository;
    @Autowired
    OrderRepository orderRepository;
    @Override
    public synchronized PayInfo payMoney(PayOrderRequest payOrderRequest) throws XiaoMingException {
        UserInfo userInfo=userRepository.findByUserCode(payOrderRequest.getPayerCode());
        OrderInfo orderInfo = orderRepository.findByOrderId(payOrderRequest.getOrderId());
        String payPassword = MD5Util.encode(payOrderRequest.getPayPassword());
        if(!payPassword.equals(userInfo.getPayPassword())){
            throw new XiaoMingException("支付密码错误！");
        }
        if(orderInfo.getPayStatus().equals(Constants.PayStatus.Success)){
            throw new XiaoMingException("订单已支付!");
        }
        if(orderInfo.getTotalCash()>userInfo.getTotalCash()){
            throw  new XiaoMingException("余额不足！");
        }
        else {
            GoodsInfo goodsInfo=goodsRepository.findByGoodsId(orderInfo.getGoodsId());
            if(goodsInfo.getGoodsNum()>=orderInfo.getGoodsNum()){
                PayInfo payInfo = new PayInfo();
                payInfo.setTotalCash(orderInfo.getTotalCash());
                payInfo.setTime(System.currentTimeMillis());
                payInfo.setPayType(payOrderRequest.getPayType());
                payInfo.setOrderId(payOrderRequest.getOrderId());
                payInfo.setPayerCode(payOrderRequest.getPayerCode());
                payInfo.setPayId("PA"+(Math.random()*10000+1));
                //TODO  支付记录id
                payReposity.save(payInfo);
                GoodsInfo newGoodsInfo = goodsInfo;
                newGoodsInfo.setGoodsNum(goodsInfo.getGoodsNum()-orderInfo.getGoodsNum());
                goodsRepository.save(newGoodsInfo);
                UserInfo newUserInfo = userInfo;
                newUserInfo.setTotalCash(userInfo.getTotalCash()-orderInfo.getTotalCash());
                userRepository.save(newUserInfo);
                OrderInfo newOrderInfo = orderInfo;
                newOrderInfo.setPayStatus(Constants.PayStatus.Success);
                newOrderInfo.setPayTime(System.currentTimeMillis());
                newOrderInfo.setStatus(Constants.OrderStatus.HavePay);
                orderRepository.save(newOrderInfo);
                return payInfo;
                }
            else {
                throw new XiaoMingException("商品数量不足！");
            }
        }
    }
}
