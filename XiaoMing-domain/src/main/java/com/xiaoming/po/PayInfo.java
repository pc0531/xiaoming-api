package com.xiaoming.po;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@Data
public class PayInfo {
    @Id
    private String id;

    private String payId;

    private String orderId;
    /**
     * 支付方式
     */
    private String payType;

    private Integer totalCash;

    private String payerCode;

    private Long time;
}
