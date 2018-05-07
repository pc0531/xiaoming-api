package com.xiaoming.repository;


import com.xiaoming.po.Pic;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PicRepository extends MongoRepository<Pic,String> {
}
