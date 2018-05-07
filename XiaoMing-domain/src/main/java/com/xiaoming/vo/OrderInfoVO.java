package com.xiaoming.vo;

import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@Data
public class OrderInfoVO {
    private String id;

    private String orderId;

    private String buyId;

    private String goodsName;

    private String goodsId;

    private Integer goodsNum;

    private Integer totalCash;

    private String payStatus;

    private Long addTime;

    private Long payTime;
}
