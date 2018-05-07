package com.xiaoming.po;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document
public class GoodsInfo {
    @Id
    private String id;

    private String goodsId;

    private Integer goodsNum;

    private String goodsName;

    private Integer goodsPrice;

    private String goodsDescription;

    private String addUserCode;

    private String addUserName;

    private String picUrl;

    private Long addTime;

    private Long updateTime;

    private String goodsType;
}
