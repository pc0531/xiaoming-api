package com.xiaoming.po;

import com.xiaoming.enums.Constants;

import java.util.Date;

public class ChatMsg {
    //消息
    private String msg;
    //用户名
    private String nickName;
    //发送时间
    private Date date;
    //用户Id
    private String userId;
    //发送者Id
    private String sendId;
    //接受者Id
    private String acceptId;
    //发送者头像
    private String avatar;
    private boolean send;
    //消息类型
    private int type = Constants.MessageTypeCode.MSG_TYPE;

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public String getNickName() {
        return nickName;
    }

    public void setNickName(String nickName) {
        this.nickName = nickName;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getSendId() {
        return sendId;
    }

    public void setSendId(String sendId) {
        this.sendId = sendId;
    }

    public String getAcceptId() {
        return acceptId;
    }

    public void setAcceptId(String acceptId) {
        this.acceptId = acceptId;
    }

    public String getAvatar() {
        return avatar;
    }

    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }

    public int getType() {
        return type;
    }

    public boolean isSend() {
        return send;
    }

    public void setSend(boolean send) {
        this.send = send;
    }

    public ChatMsg() {
    }

    public ChatMsg(String msg, String nickName, Date date, String userId, String sendId, String acceptId, String avatar, boolean send) {
        this.msg = msg;
        this.nickName = nickName;
        this.date = date;
        this.userId = userId;
        this.sendId = sendId;
        this.acceptId = acceptId;
        this.avatar = avatar;
        this.send = send;
    }
}
