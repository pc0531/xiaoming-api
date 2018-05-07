import React from 'react';
import RenderContent from 'common/tabbar/renderContent'

let OrderStatusBar = React.createClass({

        mixins:[RenderContent],
        /**
         * 渲染TabBar
         *
         * @returns {XML}
         */
        render() {
            return (
                <div className="mui-content jzc-ordlist-content new2">
                    <div id="aunttabbar" className="jzc-tab-nav js-tab-title">
                        {/**tab选择框*/}
                        {this.props.children}
                    </div>
                    {/**展示数据*/}
                    {this._renderContent()}
                </div>
            );
        }
    }
)




module.exports = OrderStatusBar;