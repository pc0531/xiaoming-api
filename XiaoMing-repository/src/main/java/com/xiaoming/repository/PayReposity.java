package com.xiaoming.repository;

import com.xiaoming.po.PayInfo;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PayReposity extends MongoRepository<PayInfo,Integer> {
    int countByOrderId(String orderId);

    PayInfo findByPayId(String payId);
}
