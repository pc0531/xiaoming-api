package com.xiaoming.repository;


import com.xiaoming.po.ActionLog;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ActionLogRepository extends MongoRepository<ActionLog,String> {
}
