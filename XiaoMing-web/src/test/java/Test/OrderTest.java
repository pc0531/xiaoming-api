package Test;

import org.junit.Test;

import java.util.HashMap;
import java.util.Map;

public class OrderTest {
    @Test
    public void addOrder() {
        String url = "/order/addOrder";
        Map<String, Object> param = new HashMap<>();
        param.put("buyId", "U28");
        param.put("orderId", "D0002");
        param.put("goodsName", "语文辅导1");
        param.put("goodsId", "G0001");
        param.put("goodsNum", 20);
        param.put("totalCash",10000);
        String response = ControllerTest.test(url, param);
        System.err.println("response:" + response);
    }

    @Test
    public void findAllOrders() {
        String url = "/order/findAllOrders";
        Map<String, Object> param = new HashMap<>();
        String response = ControllerTest.test(url, param);
        System.err.println("response:" + response);
    }

    @Test
    public void findOrderById() {
        String url = "/order/findOrderById";
        Map<String, Object> param = new HashMap<>();
        param.put("orderId", "1");
        String response = ControllerTest.test(url, param);
        System.err.println("response:" + response);
    }

    @Test
    public void deleteOrder() {
        String url = "/order/deleteOrder";
        Map<String, Object> param = new HashMap<>();
        param.put("orderId", "1");
        String response = ControllerTest.test(url, param);
        System.err.println("response:" + response);
    }
}
