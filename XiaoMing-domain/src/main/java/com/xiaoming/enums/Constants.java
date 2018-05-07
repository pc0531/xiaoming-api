package com.xiaoming.enums;

public interface Constants {

    String LOGIN_TOKEN = "Authorization";

    interface ExpTime {
        /**
         * 用户登录超时时间
         */
        int UserExpTime = 10 * 24 * 60 * 60 * 1000;
        /**
         * 判断超时时间
         */
        int JudgeExpTime = 20 * 60 * 1000;
    }

    interface PayStatus {
        int Success = 1;

        int Never = 2;
    }

    interface OrderStatus {
        int Canceled = 6;//已取消

        int Complete = 5;//上课完成

        int HavePay = 2;//已支付未分配课程

        int WaitingPay = 1;//待支付

        int Distribute = 3;//已分配

        int Starting = 4;//已开始上课

        int Canceling = 7;//申请取消
    }

    interface MessageTypeCode {
        int STATUS_TYPE = 1000;

        //信息消息
        int MSG_TYPE = 1001;
    }

    /*
     * Description: 用户状态码
     */

    interface UserStatusCode {
        boolean USER_ONLINE = true;

        boolean USER_OUTLINE = false;

    }


}
