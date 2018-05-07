package com.xiaoming.po;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@Data
public class Pic {
    @Id
    private String id;

    /**
     * 图片地址
     */
    private String picUrl;

    /**
     * 图片跳转地址
     */
    private String redirectUrl;

    private String addUserId;

}
