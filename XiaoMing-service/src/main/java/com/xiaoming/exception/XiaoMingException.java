package com.xiaoming.exception;

public class XiaoMingException extends Exception {
    private static final long serialVersionUID = 3458935199484140192L;

    private static final int DEFAULT_ERROR_CODE = 201;

    //错误码
    private int errCode;

    public XiaoMingException(){
        super();
    }

    public XiaoMingException(String msg){
        super(msg);
        this.errCode = DEFAULT_ERROR_CODE;
    }

    public XiaoMingException(int errCode,String msg){
        super(msg);
        this.errCode = errCode;
    }

    public XiaoMingException(String msg,Throwable e){
        super(msg,e);
        this.errCode=DEFAULT_ERROR_CODE;
    }

    public XiaoMingException(String msg,int errCode,Throwable e){
        super(msg,e);
        this.errCode = errCode;
    }

    public int getErrCode(){
        return errCode;
    }

}
