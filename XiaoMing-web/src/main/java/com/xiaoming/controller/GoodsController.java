package com.xiaoming.controller;


import com.xiaoming.common.JwtUser;
import com.xiaoming.enums.Constants;
import com.xiaoming.exception.XiaoMingException;
import com.xiaoming.form.GoodsInfoCreateForm;
import com.xiaoming.po.GoodsInfo;
import com.xiaoming.repository.GoodsRepository;
import com.xiaoming.response.ResponseEntity;
import com.xiaoming.util.CopyUtil;
import com.xiaoming.vo.GoodsInfoVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/goods")
public class GoodsController extends BaseController{
    @Autowired
    GoodsRepository goodsRepository;

    @RequestMapping("/findGoodsDetail")
    public @ResponseBody
    ResponseEntity<GoodsInfoVO> findGoodsDetail(@RequestHeader(value = Constants.LOGIN_TOKEN)String authorization) throws XiaoMingException{
        try {
            JwtUser jwtUser = checkLogin(authorization);
            GoodsInfo goodsInfo=goodsRepository.findByAddUserCode(jwtUser.getUserCode());
            GoodsInfoVO goodsInfoVO = CopyUtil.transfer(goodsInfo, GoodsInfoVO.class);
            return getSuccessResult(goodsInfoVO);
        }
        catch (XiaoMingException e){
            return getFailResult(e.getMessage());
        }
    }


    @RequestMapping("/findAllGoods")
    public @ResponseBody ResponseEntity<GoodsInfo> findAllGoods(){
        List<GoodsInfo> goodsInfos=goodsRepository.findAll();
        int totalCount=goodsRepository.findAll().size();
        return getSuccessResult(getPageResponse(0,0,totalCount,goodsInfos));
    }

    @RequestMapping("/findByGoodsId")
    public @ResponseBody ResponseEntity<GoodsInfoVO> findByGoodsId(String goodsId){
        GoodsInfo goodsInfo=goodsRepository.findByGoodsId(goodsId);
        GoodsInfoVO goodsInfoVO = CopyUtil.transfer(goodsInfo,GoodsInfoVO.class);
        return getSuccessResult(goodsInfoVO);
    }

    @RequestMapping("/findAllGoodsByType")
    public @ResponseBody ResponseEntity<GoodsInfo> findAllGoodsByType(String goodsType){
        List<GoodsInfo> goodsInfos=goodsRepository.findByGoodsType(goodsType);
        return getSuccessResult(goodsInfos);
    }


    @RequestMapping("/addGoods")
    public @ResponseBody ResponseEntity<GoodsInfoVO> addGoods(GoodsInfoCreateForm goodsInfoCreateForm){
            GoodsInfo goodsInfo = new GoodsInfo();
            goodsInfo.setGoodsName(goodsInfoCreateForm.getGoodsName());
            goodsInfo.setGoodsPrice(goodsInfoCreateForm.getGoodsPrice());
            goodsInfo.setGoodsDescription(goodsInfoCreateForm.getGoodsDescription());
            goodsInfo.setAddTime(System.currentTimeMillis());
            goodsInfo.setGoodsType(goodsInfoCreateForm.getGoodsType());
            goodsInfo.setGoodsId(goodsInfoCreateForm.getGoodsId());
            //TODO goodid应该自动生成;
            goodsInfo.setPicUrl(goodsInfoCreateForm.getPicUrl());
            goodsInfo.setGoodsNum(goodsInfoCreateForm.getGoodsNum());
            goodsRepository.save(goodsInfo);
            GoodsInfoVO goodsInfoVO = CopyUtil.transfer(goodsInfo, GoodsInfoVO.class);
            return getSuccessResult(goodsInfoVO);

    }

    @RequestMapping("/deleteGoods")
    public @ResponseBody ResponseEntity<String> deleteGoods(String goodsName){
        int i=goodsRepository.deleteGoodsInfoByGoodsName(goodsName);
        if(i==1){
            return getSuccessResult("删除成功！");
        }
        else if(i==0){
            return getSuccessResult("不存在该商品！");
        }
        else {
            return getSuccessResult("系统异常！");
        }
    }

    @RequestMapping("/updateGoods")
    public @ResponseBody ResponseEntity<GoodsInfo> updateGoods(GoodsInfoCreateForm goodsInfoCreateForm){
        GoodsInfo goodsInfo = goodsRepository.findByGoodsId(goodsInfoCreateForm.getGoodsId());
        GoodsInfo newGoodsInfo =goodsInfo;
        newGoodsInfo.setGoodsNum(goodsInfoCreateForm.getGoodsNum());
        newGoodsInfo.setGoodsType(goodsInfoCreateForm.getGoodsType());
        newGoodsInfo.setUpdateTime(System.currentTimeMillis());
        newGoodsInfo.setGoodsDescription(goodsInfoCreateForm.getGoodsDescription());
        newGoodsInfo.setGoodsName(goodsInfoCreateForm.getGoodsName());
        newGoodsInfo.setGoodsPrice(goodsInfoCreateForm.getGoodsPrice());
        newGoodsInfo.setPicUrl(goodsInfoCreateForm.getPicUrl());
        goodsRepository.save(newGoodsInfo);
        return getSuccessResult(newGoodsInfo);
    }
}
