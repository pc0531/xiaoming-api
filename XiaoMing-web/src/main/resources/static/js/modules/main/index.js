import React from 'react';
import iflux, {msg as Messages, mixins} from 'iflux';
import {withRouter, Link} from 'react-router';
import Immutable from 'immutable';
import $Script from 'scriptjs';

class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    componentWillMount() {

        setTimeout(()=> {
            $Script(['https://pic.qianmi.com/ejz/ejzc_app/js/libs/mui.zoom.js'], "zoom");
            $Script(['https://pic.qianmi.com/ejz/ejzc_app/js/libs/mui.view.min.js'], "view");
            $Script(['https://pic.qianmi.com/ejz/ejzc_app/js/libs/mui.previewimage.js'], "previewimage");
            $Script(['https://pic.qianmi.com/ejz/ejzc_app/js/libs/mui.picker.min.js'], "picker");

            $Script(['/static/js/common/mui.video.js'], "video");
            $Script(['/static/js/thirdUtil/mui/mui.dtpicker.js'], "dtpicker");
        }, 500);
    }

    render(){
        return (
            <div>
                {this.props.children}
            </div>
        );
    }

}

export default Main;