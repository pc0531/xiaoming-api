package com.xiaoming.response;

import lombok.Data;

import java.util.List;

@Data
public class CutPageResponse<T> extends ListResponse<T>{
    private int pageNum;

    private int pageSize;

    private long totalCount;

    public CutPageResponse(int pageNum, int pageSize, long totalCount, List<T> dataList){
        super(dataList);
        this.pageNum = pageNum;
        this.pageSize = pageSize;
        this.totalCount = totalCount;
    }
    public CutPageResponse() {
    }
}
