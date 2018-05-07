package com.xiaoming.util;

import java.math.BigInteger;

public class RSAUtil {
    private  static BigInteger private_d = new BigInteger(
            "3206586642942415709865087389521403230384599658161226562177807849299468150139");

    private static  BigInteger n =new BigInteger(
            "7318321375709168120463791861978437703461807315898125152257493378072925281977"
    );


    public static String decryptPassword(String string){
        byte[] text = HexUtil.toByteArray(string);
        BigInteger bigInteger = new BigInteger(text);

        BigInteger private_m = bigInteger.modPow(private_d,n);
        byte[] mt = private_m.toByteArray();
        StringBuffer buffer = new StringBuffer();
        for(int i=mt.length - 1;i>-1;i--){
            buffer.append((char)mt[i]);
        }
        return buffer.toString();
    }
}
