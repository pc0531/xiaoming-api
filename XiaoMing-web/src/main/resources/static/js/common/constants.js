var Immutable = require('immutable');
import React from 'react';

var constants = function () {
};

constants.productTypes =Immutable.fromJS([
    {value:0,text:"烹饪",iconClass:"icon-meishi"},
    {value:1,text:"健身",iconClass:"icon-tiyu"},
    {value:2,text:"金融",iconClass:"icon-caijing"},
    {value:3,text:"初等教育",iconClass:"icon-yuwen"},
    {value:4,text:"高等教育",iconClass:"icon-boshi"},
    {value:5,text:"驾驶",iconClass:"icon-qiche"},
    {value:6,text:"技工",iconClass:"icon-weixiu"},
    {value:7,text:"摄影",iconClass:"icon-zhaoxiangji"},
    {value:8,text:"乐器",iconClass:"icon-lm-101"}
        ])

/**
 * 根据标准商品的id，找对应的订单Icon样式
 * @param itemId
 * @returns {*}
 */
constants.chooseOrderIconClass = (itemId)=> {
    switch (itemId) {
        case 1://临时保洁
            return 'lm-iconfont icon-lm-001 jzc-icon-left';
            break;
        case 2://育儿嫂
            return 'lm-iconfont icon-lm-002 jzc-icon-left';
            break;
        case 3://长期钟点工
            return 'lm-iconfont icon-lm-003 jzc-icon-left';
            break;
        case 4://住家保姆
            return 'lm-iconfont icon-lm-004 jzc-icon-left';
            break;
        case 5://月嫂
            return 'lm-iconfont icon-lm-005 jzc-icon-left';
            break;
        case 6://看护老人
            return 'lm-iconfont icon-lm-006 jzc-icon-left';
            break;
        case 10://新房开荒
            return 'lm-iconfont icon-lm-010 jzc-icon-left';
            break;
        case 11://公司保洁
            return 'lm-iconfont icon-lm-011 jzc-icon-left';
            break;
        case 12://病人陪护
            return 'lm-iconfont icon-lm-012 jzc-icon-left';
            break;
        case 13://深度保洁
            return 'lm-iconfont icon-lm-013 jzc-icon-left';
            break;
        case 14://玻璃清洗
            return 'lm-iconfont icon-lm-014 jzc-icon-left';
            break;
        case 15://其他
            return 'lm-iconfont icon-lm-015 jzc-icon-left';
            break;


        //万家定制类目 -- begin
        case 61://开荒保洁
            return 'lm-iconfont icon-lm-010 jzc-icon-left';
            break;
        case 62://全面保洁
            return 'lm-iconfont icon-lm-001 jzc-icon-left';
            break;
        case 63://钟点保洁
            return 'lm-iconfont icon-lm-003 jzc-icon-left';
            break;
        case 64://玻璃保洁
            return 'lm-iconfont icon-lm-014 jzc-icon-left';
            break;
        case 65://地板打蜡
            return 'lm-iconfont icon-lm-065 jzc-icon-left';
            break;
        case 66://沙发洗护
            return 'lm-iconfont icon-lm-015 jzc-icon-left';
            break;
        case 67://油烟机拆洗杀菌
            return 'lm-iconfont icon-lm-067 jzc-icon-left';
            break;
        case 68://空调拆洗杀菌消毒
            return 'lm-iconfont icon-lm-068 jzc-icon-left';
            break;
        case 69://冰箱除菌消除
            return 'lm-iconfont icon-lm-069 jzc-icon-left';
            break;
        case 70://布艺除螨
            return 'lm-iconfont icon-lm-070 jzc-icon-left';
            break;
        case 71://美缝
            return 'lm-iconfont icon-lm-071 jzc-icon-left';
            break;
        case 72://管道疏通
            return 'lm-iconfont icon-lm-072 jzc-icon-left';
            break;
        case 73://地毯深层杀菌消毒
            return 'lm-iconfont icon-lm-073 jzc-icon-left';
            break;
        case 74://卫生间深层杀菌消毒
            return 'lm-iconfont icon-lm-074 jzc-icon-left';
            break;
        case 75://厨房深层杀菌消毒
            return 'lm-iconfont icon-lm-075 jzc-icon-left';
            break;
        //万家定制类目 -- end


        default:
            return 'lm-iconfont icon-lm-000 jzc-icon-left';
    }
};

module.exports = constants;

constants.Host='http://localhost:8081';

//home-wifi
// constants.Host='http://192.168.0.101:8081';