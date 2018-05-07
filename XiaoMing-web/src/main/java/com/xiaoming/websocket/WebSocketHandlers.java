package com.xiaoming.websocket;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.xiaoming.enums.Constants;
import com.xiaoming.po.ChatMsg;
import com.xiaoming.po.Msg;
import com.xiaoming.po.StatusMsg;
import com.xiaoming.po.UserInfo;
import com.xiaoming.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.*;

import java.io.IOException;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Component
public class WebSocketHandlers implements WebSocketHandler {

    @Autowired
    UserRepository userRepository;


    //在线用户的SOCKETsession(存储了所有的通信通道)
    public static Map<String, WebSocketSession> USER_SOCKETSESSION_MAP;

    //存储所有的在线用户
    static {
        USER_SOCKETSESSION_MAP = new HashMap<String, WebSocketSession>();
    }

    @Override
    public void afterConnectionEstablished(WebSocketSession webSocketSession) throws Exception {
        //获取websocket的session中的用户信息
        String userName = (String) webSocketSession.getAttributes().get("userName");
        //查找用户
        UserInfo userInfo = userRepository.findByUserName(userName);
        //user用户不为空的情况
        if (userInfo != null) {
            //把用户id和链接信息保存到内存中
            USER_SOCKETSESSION_MAP.put(userInfo.getId(), webSocketSession);
            //告诉好友该用户上线
            StatusMsg statusMsg = new StatusMsg(userInfo.getId(), Constants.UserStatusCode.USER_ONLINE, new Date());
            //封装成一个Json的数据
            String jsonString = JSONObject.toJSONString(statusMsg);
            //想所有在线好友发送上线消息
//            sendMessageToAll(jsonString);
//            //更改用户状态
//            userStatusServer.updateStatus(user.getId(), Constants.UserStatusCode.USER_ONLINE);


        }
    }

    @Override
    public void handleMessage(WebSocketSession webSocketSession, WebSocketMessage<?> webSocketMessage) throws Exception {
        //如果消息没有任何内容，则直接返回
        if (webSocketMessage.getPayloadLength() == 0) return;
        //反序列化服务端收到的json消息
//        webSocketMessage
        String string = webSocketMessage.getPayload().toString();
        JSONObject result = (JSONObject) JSONObject.parse(string);
        /**
         * 这里将消息保存
         */
        String nickName = result.getString("nickName");
        String content = result.getString("msg");
        String fromId = result.getString("userId");
        String toId = result.getString("acceptId");
        Date createDate = result.getDate("date");
        String avatar = result.getString("avatar");

        boolean isRead = false;
        //客户端推送消息
        ChatMsg chatMsg = new ChatMsg(content, nickName, createDate, fromId, fromId, toId, avatar, false);
        String chatJson = JSON.toJSONString(chatMsg);
        if (sendMessage(toId, chatJson)) {
            isRead = true;
        }

        Msg msg = new Msg(fromId, toId, content, createDate, isRead);
        //数据库将信息保存
//        msgServer.save(msg);
        System.out.println("服务器这里接受到了数据为:" + string);
    }

    @Override
    public void handleTransportError(WebSocketSession webSocketSession, Throwable throwable) throws Exception {
        String userName = (String) webSocketSession.getAttributes().get("user");
        UserInfo user = userRepository.findByUserName(userName);
        StatusMsg statusMsg = new StatusMsg(user.getId(), Constants.UserStatusCode.USER_OUTLINE, new Date());
        String jsonString = JSONObject.toJSONString(statusMsg);
        //发送下线消息
//        sendMessageToAll(jsonString);
        //删除session
        USER_SOCKETSESSION_MAP.remove(user.getId());
        //更新用户的状态为离线
//        userStatusServer.updateStatus(user.getId(), Constants.UserStatusCode.USER_OUTLINE);

    }

    @Override
    public void afterConnectionClosed(WebSocketSession webSocketSession, CloseStatus closeStatus) throws Exception {

    }

    @Override
    public boolean supportsPartialMessages() {
        return false;
    }

    /**
     * 发送消息的方法
     *
     * @param id
     * @param msg
     * @return
     */
    private boolean sendMessage(String id, String msg) {
        USER_SOCKETSESSION_MAP.size();
        WebSocketSession session = USER_SOCKETSESSION_MAP.get(id);
        if (session != null && session.isOpen()) {
            try {
                session.sendMessage(new TextMessage(msg));
                System.out.println("发送了数据:"+new TextMessage(msg));
                return true;
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        return false;
        //当前用户不在线,则设置消息状态为false

    }
}
