package com.xiaoming.common;

import lombok.Data;

import java.util.Date;

@Data
public class JwtUser {

    private String userCode;

    private String userName;
    /**
     * 过期时间
     */
    private Date expDate;
}
