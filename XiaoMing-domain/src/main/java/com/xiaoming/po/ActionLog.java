package com.xiaoming.po;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document
public class ActionLog {
    @Id
    private String id;

    private String ip;

    private String city;

    /**
     * 经度
     */
    private String longitude;

    /**
     * 维度
     */
    private String latitude;

    /**
     * 登录时间
     */
    private String logTime;
}
