package com.xiaoming.repository;


import com.xiaoming.po.UserInfo;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<UserInfo, String> {
    UserInfo findByUserName(String username);

    UserInfo findByUserCode(String userCode);
}
