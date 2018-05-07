package com.xiaoming.form;

import lombok.Data;

@Data
public class PayCreateForm {
    private String orderId;
    /**
     * 支付方式
     */
    private String payType;

    private String payerCode;

    /**
     * 支付密码（加密）
     */
    private String payPassword;


}
