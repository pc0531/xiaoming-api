/**
 * 延迟加载组件
 *
 * @type {ReactNative|exports|module.exports}
 */
import React from 'react';

import StaticComponent from './static-component'

/**
 * Usage
 *
 * var LazyComponent = require('lazy-component');
 *
 * <LazyComponent selected={true} component={XXX}/>
 */
let LazyComponent = React.createClass({
    getDefaultProps(){
        return {
            selected: false,
            component: null
        };
    },

    render(){
        var selected = this.props.selected;
        var Component = this.props.component;
        var style = selected ? {display:'block',height:document.documentElement.clientHeight+"px"}:{display:'none'};
        return (
                <div style={style}>
                    <StaticComponent selected={selected} component={Component}/>
                </div>
            )
    }
});

module.exports = LazyComponent;
