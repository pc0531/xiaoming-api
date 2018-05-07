import React from 'react';
import {withRouter, Link} from 'react-router';

class CommonNavigationBar extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            icon: '',
            tabName: '',
            tabRouter: '',
        };
    }
    componentDidMount() {
        let _self = this;
        mui('#_tabBar').on('tap', '#_indexTab', function () {
            _self.props.router.push('/');
        });
        mui('#_tabBar').on('tap', '#_myTab', function () {
            _self.props.router.push('/my');
        });
        mui('#_tabBar').on('tap', '#_orderTab', function () {
            _self.props.router.push('/shopping/goods-order-list');
        });
    }

    render(){
        let _curTab = this.props.curTab;
        return(
            <div>
                <nav className="mui-bar mui-bar-tab jzc-nav-tab" id="_tabBar">
                    <a className={'_indexTab' == _curTab ? "mui-tab-item mui-active" : "mui-tab-item"}
                       id="_indexTab">
                        <i className="icon iconfont icon-shouye"></i>首页
                    </a>
                    <a className={'_orderTab' == _curTab ? "mui-tab-item mui-active" : "mui-tab-item"}
                       id="_orderTab">
                        <i className="icon iconfont icon-jiaoyu"></i>订单
                    </a>
                    <a className={'_goodsTab' == _curTab ? "mui-tab-item mui-active" : "mui-tab-item"}
                       id="_goodsTab">
                        <i className="icon iconfont icon-faxian"></i>发现
                    </a>
                    <a className={'_serviceTab' == _curTab ? "mui-tab-item mui-active" : "mui-tab-item"}
                       id="_serviceTab">
                        <i className="icon iconfont icon-pinglun"></i>消息
                    </a>
                    <a className={'_myTab' == _curTab ? "mui-tab-item mui-active" : "mui-tab-item"}
                       id="_myTab">
                        <i className="icon iconfont icon-wo"></i>我的
                    </a>
                </nav>
            </div>
        );
    }


}

export default withRouter((CommonNavigationBar));
