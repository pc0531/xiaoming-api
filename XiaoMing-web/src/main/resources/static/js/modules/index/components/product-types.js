import React, {Component} from 'react';

import Immutable from 'immutable';

export default class ProductTypes extends Component {
    constructor(props) {
        super(props);
    }

    componentDidUpdate() {
        mui('.mui-grid-9').on('tap', '.mui-col-xs-3', this.onProductTap(this));
    }
    render() {
        let productTypes = this.props.productTypes;
        let showProductTypes = Immutable.fromJS([]);
        const ulLength = 8;
        let productTypePoint = Immutable.fromJS([]);
        if (productTypes && productTypes.size > 0) {
            let ulPage = parseInt(productTypes.size / ulLength);
            ulPage = productTypes.size % ulLength > 0 ? ulPage + 1 : ulPage;
            for (let i = 0; i < ulPage; i++) {
                let lis = Immutable.fromJS([]);
                for (let j = 0; j < ulLength; j++) {
                    if (ulLength * i + j < productTypes.size) {
                        let productType = productTypes.get(ulLength * i + j);
                        if (productType) {
                            lis = lis.push(
                                <li className="mui-table-view-cell mui-media mui-col-xs-3"
                                    data-productType={productType.get('value')}
                                    key={ulLength * i + j}>
                                    <a>
                                        <i className={'icon iconfont ' + (productType.get('iconClass')||'icon-sousuo')}></i>
                                        <p className="mui-media-body text">{productType.get('text')}</p>
                                    </a>
                                </li>
                            )
                        }
                    }
                }

                if (lis.size < ulLength) {
                    let supply = ulLength - lis.size;
                    for (let tmp = 0; tmp < supply; tmp++) {
                        lis = lis.push(
                            <li className="mui-table-view-cell mui-media mui-col-xs-3"
                                key={ulLength * i + (ulLength - tmp)}>
                            </li>
                        )
                    }
                }

                showProductTypes = showProductTypes.push(
                    <div className="mui-slider-item" key={i}>
                        <ul className="mui-table-view mui-grid-view mui-grid-9">
                            {lis}
                        </ul>
                    </div>
                )
                productTypePoint = productTypePoint.push(
                    <div className={i == 0 ? "mui-indicator mui-active" : "mui-indicator"} key={i}></div>
                );
            }
        }
        return (
            <section className="mui-slider" id="js-slider-menus">
                <div className="mui-slider-group">
                        {showProductTypes}
                </div>
                <div className="mui-slider-indicator">
                    {productTypePoint}
                </div>
            </section>

        );
    }

    onProductTap(_this) {
        return function () {
            if (this.dataset.producttype && _this.props.onProductTap) {
                _this.props.onProductTap(this.dataset.producttype);
            }
        }
    }
}
