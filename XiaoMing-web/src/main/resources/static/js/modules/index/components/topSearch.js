import React,{Component} from 'react';

export default class TopSearch extends Component{
    constructor(props){
        super(props);
    }

    static defaultProps = {
    }
    render(){
        let searchText=this.props.searchText;
        return(
            <div className="mui-scroll-wrapper jzc-scroll-bottom">
                <input type="text" placeholder="搜索" className="searchText" value={searchText} maxLength="10"
                          onChange={this._onChangeSearch.bind(this)} style={{margin:0}}/></div>
        );
    }

    _onChangeSearch(e){
        console.error("text:"+e.target.value);
        this.props.onChange("searchText",e.target.value);
    }

}