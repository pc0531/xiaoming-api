package com.xiaoming.controller;



import com.xiaoming.common.JwtUser;
import com.xiaoming.condition.BaseCondition;
import com.xiaoming.exception.XiaoMingException;
import com.xiaoming.response.CutPageResponse;
import com.xiaoming.response.ResponseEntity;
import com.xiaoming.util.JwtComponent;
import io.jsonwebtoken.Claims;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Collections;
import java.util.List;

public class BaseController {
    /**
     * 成功的status code
     */
    private static final int RESCODE_OK=200;
    /**
     * 失败的status code
     */
    private static final int RESCODE_FAIL=201;
    /**
     * 成功返回success
     */
    private static final String SUCCESS="success";

    @Autowired
    protected JwtComponent jwtComponent;

    /**
     * 获取成功结果
     * @param obj
     * @param <T>
     * @return
     */
    protected <T> ResponseEntity getSuccessResult(T obj) {
        return new ResponseEntity<T>("ok", RESCODE_OK, "操作成功", obj);
    }

    protected <T> ResponseEntity getFailResult(String msg) {
        return new ResponseEntity("fail", RESCODE_FAIL, msg, Collections.EMPTY_MAP);
    }

    /**
     * 获取成功信息
     * @param msg
     * @return
     */
    protected ResponseEntity getSuccessResult(String msg) {
        return new ResponseEntity("ok", RESCODE_OK, msg, Collections.EMPTY_MAP);
    }

    protected <T> CutPageResponse<T> getPageResponse(BaseCondition condition, int totalCount, List<T> dataList){
        CutPageResponse<T> response=new CutPageResponse<T>();
        response.setPageNum(condition.getPageNum());
        response.setPageSize(condition.getPageSize());
        response.setTotalCount(totalCount);
        response.setDataList(dataList);
        return response;
    }

    protected <T> CutPageResponse<T> getPageResponse(int pageNo,int pageSize,int totalCount,List<T> dataList){
        CutPageResponse<T> response=new CutPageResponse<T>();
        response.setPageNum(pageNo);
        response.setPageSize(pageSize);
        response.setTotalCount(totalCount);
        response.setDataList(dataList);
        return response;
    }

    protected DateFormat getFullDateFormat(){
        return new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
    }

    protected JwtUser checkLogin(String authorization) throws XiaoMingException{
        JwtUser jwtUser = getJwtUser(authorization);
        if(jwtUser == null){
            throw new XiaoMingException(202,"未登录!");
        }
        return jwtUser;
    }

    protected JwtUser getJwtUser(String authorization) throws XiaoMingException{
        JwtUser jwtUser;
        Claims claims = this.jwtComponent.getClaims(authorization);
        if(claims == null){
            return  null;
        }
        String userCode = claims.getSubject();
        if(StringUtils.isBlank(userCode)){
            throw new XiaoMingException("会话中的用户编号为空！");
        }
        jwtUser = new JwtUser();
        jwtUser.setUserCode(userCode);
        jwtUser.setUserName((String)claims.get("userName"));
        jwtUser.setExpDate(claims.getExpiration());
        return jwtUser;
    }
}
