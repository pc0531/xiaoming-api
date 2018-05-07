package com.xiaoming.service;

import com.xiaoming.exception.XiaoMingException;
import com.xiaoming.po.PayInfo;
import com.xiaoming.request.PayOrderRequest;

public interface PayService {
    PayInfo payMoney(PayOrderRequest payOrderRequest) throws XiaoMingException;
}
