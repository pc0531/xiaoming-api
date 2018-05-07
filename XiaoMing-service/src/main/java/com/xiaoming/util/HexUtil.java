package com.xiaoming.util;

public class HexUtil {
    /**
     * 二进制转字符串
     * @param bytes
     * @return
     */
    public static String byte2hex(byte[] bytes){
        String hash="";
        String stmp="";
        for(int i=0;i< bytes.length;i++){
            stmp=(Integer.toHexString(bytes[i]&0XFF));
            if(stmp.length()==1){
                hash = hash + "0" + stmp;
            }
            else {
                hash = hash +stmp;
            }

            if(i<bytes.length-1){
                hash = hash;
            }

        }
        return hash;
    }

    public static byte[] toByteArray(String s){
        byte[] bytes = new byte[s.length()/2];
        int j=0;
        for(int i=0;i<bytes.length;i++){
            bytes[i] = (byte)((Character.digit(s.charAt(j++),16)<<4)|Character.digit(s.charAt(j++),16));

        }
        return bytes;
    }
}
