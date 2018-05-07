/**
 * Created by xiedejun on 2016/10/8.
 */
import React from 'react';
import LazyComponent from './Lazy-component';

let RenderContent = {
    _renderContent:function(){
        let _children = [];
        let selectedIndex = 0;

        //遍历TabBar.Item的children
        React.Children.forEach(this.props.children, (child, index) => {
            if(child) {
                if (child.props.selected) {
                    selectedIndex = index;
                }
                _children.push(child.props.children);
            }else{
                _children.push(null);
            }
        });

        //返回延迟加载的组件,当selected为true时,才去真正的render组件
        return _children.map((child, i) => {
            let selected = selectedIndex == i;
            if(child) {
                return <LazyComponent selected={selected} component={child} key={i}/>;
            }
        });
    }
};

module.exports = RenderContent;