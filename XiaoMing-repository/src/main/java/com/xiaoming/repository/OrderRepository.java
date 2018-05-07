package com.xiaoming.repository;

import com.xiaoming.po.OrderInfo;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface OrderRepository extends MongoRepository<OrderInfo,String> {
//    List<OrderInfo> findByBuyIdAAndStatus(String buyId,String status);

    List<OrderInfo> findByBuyId(String buyId);

    int deleteByOrderId(String id);

    OrderInfo findByOrderId(String orderId);
}
