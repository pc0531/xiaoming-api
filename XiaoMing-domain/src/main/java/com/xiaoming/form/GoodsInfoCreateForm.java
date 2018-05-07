package com.xiaoming.form;

import lombok.Data;

@Data
public class GoodsInfoCreateForm {
    private String goodsName;

    private Integer goodsPrice;

    private String goodsDescription;

    private String addUserId;

    private String addUserName;

    private String picUrl;

    private String goodsType;

    private String goodsId;

    private Integer goodsNum;
}
