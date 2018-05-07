package Test;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.Map;

public class ControllerTest {
    private static final String SERVER_URL = "http://127.0.0.1:8081";

    public static String test(String url, Map<String, Object> param) {
        HashMap<String, Object> map = new HashMap<>();
        map.putAll(param);
        MultiValueMap<String, Object> form = new LinkedMultiValueMap<>();
        for (Map.Entry<String, Object> entry : map.entrySet()) {
            form.add(entry.getKey(), entry.getValue());
        }
        HttpHeaders headers = new HttpHeaders();
        HttpEntity<MultiValueMap<String, Object>> request = new HttpEntity<>(form, headers);

        RestTemplate restTemplate = new RestTemplate();
        String result = restTemplate.postForObject(SERVER_URL + url, request, String.class);
        return result;
    }
}
