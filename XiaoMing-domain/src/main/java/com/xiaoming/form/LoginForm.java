package com.xiaoming.form;

import lombok.Data;
import org.hibernate.validator.constraints.NotEmpty;

@Data
public class LoginForm {

    @NotEmpty(message = "用户名不能为空！")
    private String userName;

    @NotEmpty(message = "密码不能为空！")
    private String logPassword;

}
