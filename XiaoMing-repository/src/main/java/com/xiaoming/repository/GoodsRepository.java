package com.xiaoming.repository;


import com.xiaoming.po.GoodsInfo;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface GoodsRepository extends MongoRepository<GoodsInfo, String> {
    int deleteGoodsInfoByGoodsName(String goodsName);

    GoodsInfo findByAddUserCode(String userId);

    List<GoodsInfo> findByGoodsType(String goodsType);

    GoodsInfo findByGoodsId(String goodsId);
}
