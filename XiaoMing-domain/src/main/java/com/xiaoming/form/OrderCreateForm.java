package com.xiaoming.form;

import lombok.Data;

@Data
public class OrderCreateForm {
    private String id;

//    private String orderId;

    private String buyId;

    private String goodsName;

    private String goodsId;

    private Integer goodsNum;

    private Integer totalCash;
}
