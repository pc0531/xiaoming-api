package com.xiaoming.request;

import lombok.Data;

@Data
public class PayOrderRequest {
    private String payerCode;

    private String payType;

    private String orderId;

    private String payPassword;

}
