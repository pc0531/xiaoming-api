/**
 * Created by xiedejun on 16/8/15.
 */
import React from 'react';


let StaticComponent = React.createClass ({
    shouldComponentUpdate() {
        return this.refs.component == null;
    },

    render() {
        var Component = this.props.component;
        if (this.props.selected) {
            return React.cloneElement(Component, {
                ref: 'component'
            });
        }

        return null;
    }
});

module.exports = StaticComponent;