package com.xiaoming.vo;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@Data
public class UserInfoVO {
    /**
     * id
     */
    @Id
    private String id;

    private String userName;
    /**
     * 年龄
     *
     * @return
     */
    private String age;

    private Integer totalCash;

    private Long phone;

    private String userCode;
}
