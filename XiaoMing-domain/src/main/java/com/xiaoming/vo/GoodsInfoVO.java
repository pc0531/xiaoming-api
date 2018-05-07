package com.xiaoming.vo;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document
public class GoodsInfoVO {
    @Id
    private String id;

    private String goodsId;

    private String goodsName;

    private Integer goodsPrice;

    private Integer goodsNum;

    private String goodsDescription;

    private String addUserId;

    private String addUserName;

    private String picUrl;

    private Long addTime;

    private String goodsType;
}
