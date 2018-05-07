package com.xiaoming.util;

import java.io.UnsupportedEncodingException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class MD5Util {
    private MD5Util(){

    }

    static MessageDigest getDigest(){
        try {
            return MessageDigest.getInstance("MD5");
        }
        catch (NoSuchAlgorithmException e){
            throw new RuntimeException(e);
        }
    }

    public static String encode(String info){
        MessageDigest messageDigest=getDigest();
        try {
            messageDigest.update(info.getBytes("utf-8"));
            byte[] digest= messageDigest.digest();
            return HexUtil.byte2hex(digest);
        }
        catch (UnsupportedEncodingException e){
        }
        return null;
    }
}
