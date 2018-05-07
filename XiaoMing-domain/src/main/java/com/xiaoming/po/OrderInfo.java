package com.xiaoming.po;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@Data
public class OrderInfo {
    @Id
    private String id;

    private String orderId;

    private String buyId;

    private String goodsName;

    private String goodsId;

    private Integer goodsNum;

    private Integer totalCash;

    private Integer payStatus;

    //订单状态：cancel取消 complete已学完成 havepay已支付学习
    private Integer status;

    private Long addTime;

    private Long payTime;
}
