package com.xiaoming.controller;


import com.xiaoming.form.PicCreateForm;
import com.xiaoming.po.Pic;
import com.xiaoming.repository.PicRepository;
import com.xiaoming.response.ResponseEntity;
import com.xiaoming.vo.PicVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/pic")
public class PicController extends BaseController {
    @Autowired
    PicRepository picRepository;

    @RequestMapping("/findAllPic")
    public @ResponseBody
    ResponseEntity<PicVO> findAllPic(){
        List<Pic> picList=picRepository.findAll();
        return getSuccessResult(picList);
    }

    @RequestMapping("/addPic")
    public @ResponseBody
    ResponseEntity<PicVO> addPic(PicCreateForm picCreateForm){
        Pic pic=new Pic();
        pic.setPicUrl(picCreateForm.getPicUrl());
        pic.setRedirectUrl(picCreateForm.getRedirectUrl());
        pic.setAddUserId(picCreateForm.getAddUserId());
        picRepository.insert(pic);
        return getSuccessResult("插入成功！");
    }
}
