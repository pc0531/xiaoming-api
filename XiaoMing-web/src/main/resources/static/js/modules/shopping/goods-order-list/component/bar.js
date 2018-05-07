import React from 'react';


class OrderStatusBarItem extends React.Component{
    constructor(props){
        super(props);
        this.state={
            selected: false,
            title:'',
            showed:''
        }
    }


    render(){
        let className = this.props.selected?"mui-control-item mui-active":"mui-control-item";

        return (
            this.props.showed?
            <a href="#" className={className} data-choose={this.props.choose} >{this.props.title}</a>:null
        )
    }
};


module.exports = OrderStatusBarItem;
