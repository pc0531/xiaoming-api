package com.xiaoming.po;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.NotNull;

@Document
@Data
public class UserInfo {
    /**
     * id
     */
    @Id
    private String id;
    /**
     * 用户名
     */
    private String userName;
    /**
     * 密码
     */
    private String passWord;

    /**
     * 年龄
     *
     * @return
     */
    private String age;

    @NotNull
    private String userCode;

    private String name;

    private Integer idCard;

    private Integer totalCash;

    private Long phone;

    private String payPassword;
}
