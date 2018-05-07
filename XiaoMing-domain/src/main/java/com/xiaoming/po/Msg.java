package com.xiaoming.po;

import java.util.Date;

public class Msg {
    private String id;
    //发送方Id
    private String fromId;
    //接受方Id
    private String toId;
    //消息内容
    private String content;
    //创建时间
    private Date createDate;
    //消息状态
    private boolean status;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getFromId() {
        return fromId;
    }

    public void setFromId(String fromId) {
        this.fromId = fromId;
    }

    public String getToId() {
        return toId;
    }

    public void setToId(String toId) {
        this.toId = toId;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Date getCreateDate() {
        return createDate;
    }

    public void setCreateDate(Date createDate) {
        this.createDate = createDate;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    public Msg() {
    }

    public Msg(String fromId, String toId, String content, Date createDate, boolean status) {
        this.fromId = fromId;
        this.toId = toId;
        this.content = content;
        this.createDate = createDate;
        this.status = status;
    }
}
