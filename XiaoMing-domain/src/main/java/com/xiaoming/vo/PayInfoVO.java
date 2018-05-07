package com.xiaoming.vo;

import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@Data
public class PayInfoVO {
    private String id;

    private String orderId;

    private String payId;
    /**
     * 支付方式
     */
    private String payType;

    private String totalCash;

    private String payerCode;

    private Long time;
}
