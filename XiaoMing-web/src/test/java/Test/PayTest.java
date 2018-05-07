package Test;

import org.junit.Test;

import java.util.HashMap;
import java.util.Map;

public class PayTest {
    @Test
    public void addOrder() {
        String url = "/pay/addPay";
        Map<String, Object> param = new HashMap<>();
        param.put("orderId", "D0001");
        param.put("payType", "余额");
        param.put("payerCode", "U28");
        String response = ControllerTest.test(url, param);
        System.err.println("response:" + response);
    }

    @Test
    public void resetPayPassword() {
        String url = "/user/resetPayPassword";
        Map<String, Object> param = new HashMap<>();
        param.put("username", "15161181368");
        param.put("payPassword", "000205d08e4cf5fd0aec3673e64f27e420153083c510775c5f9d3ba5cfa9f7b3");
        String response = ControllerTest.test(url, param);
        System.err.println("response:" + response);
    }
    @Test
    public void registerUser() {
        String url = "/user/register";
        Map<String, Object> param = new HashMap<>();
        param.put("userName", "15161181367");
        param.put("passWord", "000205d08e4cf5fd0aec3673e64f27e420153083c510775c5f9d3ba5cfa9f7b3");
        String response = ControllerTest.test(url, param);
        System.err.println("response:" + response);
    }
}
