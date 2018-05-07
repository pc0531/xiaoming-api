package com.xiaoming.util;


import com.xiaoming.common.AppConstants;
import com.xiaoming.enums.Constants;
import com.xiaoming.exception.XiaoMingException;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class JwtComponent {


    public String createToken(String userCode, String userName) {
        Date expDate = new Date(System.currentTimeMillis() + Constants.ExpTime.UserExpTime);
        String token = Jwts.builder().setSubject(userCode).setExpiration(expDate)
                .claim("userName", userName)
                .signWith(SignatureAlgorithm.HS256, AppConstants.JWT_SECRET).compact();

        return token;

    }

    public Claims getClaims(String token) throws XiaoMingException {
        if (StringUtils.isBlank(token)) {
            return null;
        }
        Claims claims = Jwts.parser().setSigningKey(AppConstants.JWT_SECRET).parseClaimsJwt(token).getBody();
        return claims;
    }
}
