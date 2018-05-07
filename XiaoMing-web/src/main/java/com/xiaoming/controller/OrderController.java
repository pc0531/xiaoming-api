package com.xiaoming.controller;

import com.xiaoming.enums.Constants;
import com.xiaoming.form.OrderCreateForm;
import com.xiaoming.po.OrderInfo;
import com.xiaoming.repository.OrderRepository;
import com.xiaoming.response.ResponseEntity;
import com.xiaoming.util.CopyUtil;
import com.xiaoming.vo.OrderInfoVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;
import java.util.List;

@RestController
@RequestMapping("/order")
public class OrderController extends BaseController {
    @Autowired
    OrderRepository orderRepository;

    @RequestMapping("/addOrder")
    public @ResponseBody
    ResponseEntity<OrderInfoVO> addOrder(OrderCreateForm orderCreateForm , HttpSession httpSession){
        String userSession = (String)httpSession.getAttribute("token");
//        if (userSession != null) {
//            httpSession.removeAttribute("token");
//        }
        OrderInfo orderInfo = new OrderInfo();
        orderInfo.setBuyId(orderCreateForm.getBuyId());
        orderInfo.setOrderId("TR"+Math.random()*10000000);
        //TODO orderId自动生成
        orderInfo.setGoodsName(orderCreateForm.getGoodsName());
        orderInfo.setGoodsId(orderCreateForm.getGoodsId());
        orderInfo.setGoodsNum(orderCreateForm.getGoodsNum());
        orderInfo.setTotalCash(orderCreateForm.getTotalCash());
        orderInfo.setAddTime(System.currentTimeMillis());
        orderInfo.setPayStatus(Constants.PayStatus.Never);
        orderInfo.setStatus(Constants.OrderStatus.WaitingPay);
        orderRepository.save(orderInfo);
        OrderInfoVO orderInfoVO = CopyUtil.transfer(orderInfo, OrderInfoVO.class);
        return getSuccessResult(orderInfoVO);
    }

    @RequestMapping("/findAllOrders")
    public @ResponseBody ResponseEntity<OrderInfo> findAllOrders(){
        List<OrderInfo> orderInfos=orderRepository.findAll();
        int totalCount=orderRepository.findAll().size();
        return getSuccessResult(getPageResponse(0,0,totalCount,orderInfos));
    }

    @RequestMapping("/findOrdersByUserCode")
    public @ResponseBody ResponseEntity<OrderInfo> findOrdersByUserCode(String userCode){
        List<OrderInfo> orderInfos=orderRepository.findByBuyId(userCode);
        int totalCount=orderRepository.findByBuyId(userCode).size();
        return getSuccessResult(getPageResponse(0,0,totalCount,orderInfos));
    }

    @RequestMapping("/findOrderById")
    public @ResponseBody ResponseEntity<OrderInfo> findOrderById(String orderId){
        //OrderInfo orderInfo=orderRepository.findById(id).get();
        OrderInfo orderInfo=orderRepository.findByOrderId(orderId);
        OrderInfoVO orderInfoVO = CopyUtil.transfer(orderInfo, OrderInfoVO.class);
        return getSuccessResult(orderInfoVO);
    }

    @RequestMapping("/deleteOrder")
    public @ResponseBody ResponseEntity<String> deleteOrder(String orderId){
        int i=orderRepository.deleteByOrderId(orderId);
        if(i ==1){
            return getSuccessResult("删除成功！");
        }
        else if(i==0){
            return getSuccessResult("不存在该订单！");
        }
        else {
            return getSuccessResult("系统异常！");
        }
    }

}
