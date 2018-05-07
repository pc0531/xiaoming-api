package Test;

import org.junit.Test;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

public class GoodsTest {
    @Test
    public void addGoods() {
        String url = "/goods/addGoods";
        Map<String, Object> param = new HashMap<>();
        param.put("goodsName", "语文辅导7");
        param.put("goodsPrice", 20);
        param.put("goodsType", "0");
        param.put("goodsId", "G0007");
        param.put("goodsNum", 1);
        param.put("picUrl", "https://img.alicdn.com/imgextra/i1/154491046/TB2vDrRcQCWBuNjy0FaXXXUlXXa_!!154491046.jpg");
        String response = ControllerTest.test(url, param);
        System.err.println("response:" + response);
    }

    @Test
    public void findByGoodsType() {
        String url = "/goods/findAllGoodsByType";
        Map<String, Object> param = new HashMap<>();
        param.put("goodsType", "1");
        String response = ControllerTest.test(url, param);
        System.err.println("response:" + response);
    }



    @Test
    public void deleteGoods() {
        String url = "/goods/deleteGoods";
        Map<String, Object> param = new HashMap<>();
        param.put("goodsName", "pc20");
        //param.put("goodsDescription", "测试测试12");
        String response = ControllerTest.test(url, param);
        System.err.println("response:" + response);
    }

    @Test
    public void findAllGoods() {
        String url = "/goods/findAllGoods";
        Map<String, Object> param = new HashMap<>();
        String response = ControllerTest.test(url, param);
        System.err.println("response:" + response);
    }

    @Test
    public void findAllGoods1() {
        String url = "/actionLog/add";
        Map<String, Object> param = new HashMap<>();
        param.put("city", "上海");
        param.put("longitude", "117.22");
        param.put("latitude", "31.22");
        String response = ControllerTest.test(url, param);
        System.err.println("response:" + response);
    }


    @Test
    public void findAllGoods2() {
        String url = "/actionLog/query";
        Map<String, Object> param = new HashMap<>();
        String response = ControllerTest.test(url, param);
        System.err.println("response:" + response);
    }

    @Test
    public void findAllGoods3() {
        long a=System.currentTimeMillis();
        SimpleDateFormat format = new SimpleDateFormat("yyyy年-MM月dd日-HH时mm分ss秒");
        Date date = new Date(a);
        String a1=format.format(date);
        Date date1=new Date();
        System.out.println("a:"+format.format(date));
        System.out.println("date:"+date1);
    }

    @Test
    public void addPic() {
        String url = "/pic/addPic";
        Map<String, Object> param = new HashMap<>();
        param.put("picUrl", "http://pic.qianmi.com/ejz/images/lALOC1lhsM0Bcc0DwA_960_369.png");
        param.put("addUserId", "1");
        param.put("redirectUrl", "www.baidu.com");
        String response = ControllerTest.test(url, param);
        System.err.println("response:" + response);
    }

    @Test
    public void findPic() {
        String url = "/pic/findAllPic";
        Map<String, Object> param = new HashMap<>();
//        param.put("picUrl", "http://pic.qianmi.com/ejz/images/lALOC1lhsM0Bcc0DwA_960_369.png");
//        param.put("addUserId", "1");
//        param.put("redirectUrl", "www.baidu.com");
        String response = ControllerTest.test(url, param);
        System.err.println("response:" + response);
    }
}
