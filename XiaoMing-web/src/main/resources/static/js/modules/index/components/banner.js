import React,{Component} from 'react';

export default class Banner extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount() {
        //顶部图片链接跳转
        mui('#indexBanner').on('tap', 'a', this.onBannerTap);
    }

    render(){
        let bannerList=this.props.bannerList;
        let bannerBegin={}, bannerEnd = {}, bannerRadio = [];
        if (!bannerList || bannerList.length == 0) {
            return null;
        }
        if(bannerList&&bannerList.length>0){
            bannerBegin=bannerList[0];
            bannerEnd=bannerList[bannerList.length-1];
            for(let i =0;i<bannerList.length;i++){
                if(i==0){
                    bannerRadio.push(<div className="mui-indicator mui-active" key={i}></div>)
                }
                else {
                    bannerRadio.push(<div className="mui-indicator" key={i}></div>);
                }
            }
        }
        return(
            <section className="mui-slider" id="js-banner-slider">
                <div className="mui-slider-group mui-slider-loop" id="indexBanner">
                    {bannerBegin?
                        <div className="mui-slider-item mui-slider-item-duplicate" key="bannerBegin">
                            <a data-url={bannerBegin.redirectUrl}>
                                <img src={bannerBegin.picUrl ? (bannerBegin.picUrl + '?x-oss-process=image/resize,p_50') : bannerBegin.picUrl}/>
                            </a>
                        </div> : ''
                    }
                    {
                        bannerList.map((banner, index) => {
                            return (
                                <div className="mui-slider-item" key={`banner_key_${index}`}>
                                    <a data-url={banner.redirectUrl}>
                                        <img src={banner.picUrl ? (banner.picUrl + '?x-oss-process=image/resize,p_50') : banner.picUrl}/>
                                    </a>
                                </div>
                            )
                        })
                    }
                    {
                        bannerEnd ?
                            <div className="mui-slider-item mui-slider-item-duplicate" key="bannerEnd">
                                <a data-url={bannerEnd.redirectUrl}>
                                    <img src={bannerEnd.picUrl ? (bannerEnd.picUrl + '?x-oss-process=image/resize,p_50') : bannerEnd.picUrl}/>
                                </a>
                            </div> : ''
                    }
                </div>
                <div className="mui-slider-indicator">
                    {bannerRadio}
                </div>
            </section>

        );
    }


    onBannerTap() {
        let url = this.dataset.url;
        if (url) {
            window.location.href = url;
        }
    }
}