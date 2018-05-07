package com.xiaoming.util;

import java.util.HashMap;
import java.util.Map;

public class JsonUtil {
    public static Map<String,Object> createJson(boolean isOK,int resCode,String errorMsg,Object object){
        Map<String,Object> jsonMap=new HashMap<>();
        jsonMap.put("result",isOK?"ok":"fail");
        jsonMap.put("rescode",resCode);
        jsonMap.put("msg",errorMsg);
        jsonMap.put("data",object);
        return jsonMap;
    }
}
