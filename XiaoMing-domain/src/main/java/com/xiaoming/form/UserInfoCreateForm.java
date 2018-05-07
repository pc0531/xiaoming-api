package com.xiaoming.form;

import lombok.Data;

@Data
public class UserInfoCreateForm {
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
     * @return
     */
    private String age;
}
