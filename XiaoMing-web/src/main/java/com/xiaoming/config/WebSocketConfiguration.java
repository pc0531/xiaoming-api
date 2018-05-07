package com.xiaoming.config;

import com.xiaoming.websocket.WebSocketHandlers;
import com.xiaoming.websocket.WebSocketShake;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;


@Component
@EnableWebSocket
public class WebSocketConfiguration implements WebSocketConfigurer {

    /**
     * websocket的主要处理方法
     */
    @Autowired
    WebSocketHandlers webSocketHandlers;

    /**
     * 握手之前操作
     */
    @Autowired
    WebSocketShake webSocketShake;
    @Override
    public void registerWebSocketHandlers(WebSocketHandlerRegistry webSocketHandlerRegistry) {
        webSocketHandlerRegistry.addHandler(webSocketHandlers, "/wsapi/ws").setAllowedOrigins("*").addInterceptors(webSocketShake);
        webSocketHandlerRegistry.addHandler(webSocketHandlers, "/wsapi/ws/sockjs").setAllowedOrigins("*").addInterceptors(webSocketShake).withSockJS();
    }
}
