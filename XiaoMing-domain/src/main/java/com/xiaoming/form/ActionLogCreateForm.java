package com.xiaoming.form;

import lombok.Data;

import java.util.Date;

@Data
public class ActionLogCreateForm {
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

    private Date logTime;
}
