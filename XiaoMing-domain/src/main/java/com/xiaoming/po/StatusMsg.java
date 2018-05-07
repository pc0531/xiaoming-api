package com.xiaoming.po;

import com.xiaoming.enums.Constants;
import lombok.Data;

import java.util.Date;
@Data
public class StatusMsg {
    //用户id
    private String userId;
    //当前状态
    private boolean status;
    //发送时间
    private Date time;

    //消息类型
    private int type = Constants.MessageTypeCode.STATUS_TYPE;

    public StatusMsg(String userId, boolean status, Date time) {
        this.userId = userId;
        this.status = status;
        this.time = time;
    }
}
