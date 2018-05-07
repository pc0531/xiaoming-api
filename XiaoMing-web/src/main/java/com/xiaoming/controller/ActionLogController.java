package com.xiaoming.controller;


import com.xiaoming.form.ActionLogCreateForm;
import com.xiaoming.po.ActionLog;
import com.xiaoming.repository.ActionLogRepository;
import com.xiaoming.response.ResponseEntity;
import com.xiaoming.util.CopyUtil;
import com.xiaoming.vo.ActionLogVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/actionLog")
public class ActionLogController extends BaseController {

    @Autowired
    ActionLogRepository actionLogRepository;

    @RequestMapping("/add")
    public @ResponseBody
    ResponseEntity<String> addActionLog(ActionLogCreateForm actionLogCreateForm) {
        long timeMillis=System.currentTimeMillis();
        Date date=new Date(timeMillis);
        ActionLog actionLog = new ActionLog();
        actionLog.setCity(actionLogCreateForm.getCity());
        actionLog.setLatitude(actionLogCreateForm.getLatitude());
        actionLog.setLongitude(actionLogCreateForm.getLongitude());
        actionLog.setIp(actionLogCreateForm.getIp());
        actionLog.setLogTime(getFullDateFormat().format(date));
        actionLogRepository.insert(actionLog);
        return getSuccessResult("成功！");
    }

    @RequestMapping("/query")
    public @ResponseBody
    ResponseEntity<ActionLogVO> queryActionLog() {
        List<ActionLog> actionLogs = actionLogRepository.findAll();
        List<ActionLogVO> actionLogVOS = CopyUtil.transfer(actionLogs,ActionLogVO.class);
        return getSuccessResult(actionLogVOS);
    }
}
