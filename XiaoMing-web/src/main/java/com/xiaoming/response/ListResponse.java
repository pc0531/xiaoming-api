package com.xiaoming.response;

import java.beans.ConstructorProperties;
import java.util.List;

public class ListResponse<T> {
    private List<T> dataList;

    public List<T> getDataList() {
        return dataList;
    }

    public void setDataList(List<T> dataList) {
        this.dataList = dataList;
    }

    public ListResponse() {
    }

    @ConstructorProperties({"dataList"})
    public ListResponse(List<T> dataList) {
        this.dataList = dataList;
    }
}
