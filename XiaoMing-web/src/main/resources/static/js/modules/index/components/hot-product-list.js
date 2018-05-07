import React, {Component} from 'react';
import DateUtil from '../../../util/date-util';
export default class HotProductList extends Component {
    constructor(props) {
        super(props);
    }

    componentDidUpdate() {
        mui('.jzc-mrl0').on('tap', 'a', this.onProductTap(this));
    }

    render(){
        let _this = this;
        let _randomProductArray =[{name:"111",description:"测试111"},{name:"222",description:"测试222"}];
        let hotProductList=this.props.productList;
        let list=[];
        hotProductList.map((value,index)=>{
            list.push(
                <div className="ex-index-item" key={index}>
                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524308564345&di=4bdae8deeec75498b8f3bf8ba66da675&imgtype=0&src=http%3A%2F%2Fphoto.5imx.com%2Fforum%2F201511%2F17%2F110954ftqf6kwfwkft3krk.jpg"/>
                    <div className="ex-item-li-right">
                        <p className='ex-item-li-right-title'>早早家教</p>
                        <p className='ex-item-li-right-description'>早件课堂一课时</p>
                        <p className='ex-item-li-right-price'>
                            <span>￥122</span>
                            <span>门店价:￥12</span>
                        </p>
                    </div>
                    {/*<a className="ex-index-item-btn-block" data-productId={value.id}>*/}
                        {/*<div className="mui-sd-handle">*/}
                            {/*<div className="ex-item-li">*/}
                            {/**/}
                            {/*</div>*/}
                        {/*</div>*/}
                    {/*</a>*/}
                </div>
            )
        });
        return(
            <div className="ex-index-item-show-list">
                <div className="ex-index-list-top"><p>-&nbsp;猜你喜欢&nbsp;-</p></div>
                <div className="ex-index-item-show ex-index-mrl0">
                    {list}
                </div>
            </div>
        );

    }
    onProductTap(_this) {
        return function() {
            if (this.dataset.productid && _this.props.onProductTap) {
                _this.props.onProductTap(this.dataset.productid);
            }
        }
    }

}