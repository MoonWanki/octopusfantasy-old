import React, { Component } from 'react';
import './ContentBanner.scss';
import MusicBanner from '../../images/content_banner_music.jpg';
import DaigassoBanner from '../../images/content_banner_daigasso.jpg';
import GamevideoBanner from '../../images/content_banner_gamevideo.jpg';


export default class ContentBanner extends Component {

    resolve = (contentType) => {
        switch(contentType) {
            case 'music':
                return {
                    banner: MusicBanner,
                    title: "Music Works",
                    subtitle: "자작곡 및 뮤직비디오"
                }
            case 'entertainment':
                return {
                    banner: GamevideoBanner,
                    title: "Entertainments",
                    subtitle: "각종 UCC 영상 모음. 흑역사 다수 포함. 오글 주의."
                }
            case 'daigasso':
                return {
                    banner: DaigassoBanner,
                    title: "Daigasso! DX",
                    subtitle: "닌텐도 게임 《대합주! 밴드브라더스 DX》 작품 모음"
                }
            case 'gamevideo':
                return {
                    banner: GamevideoBanner,
                    title: "Game Videos",
                    subtitle: "쓸데없이 고퀄로 편집한 게임 플레이 영상들"
                }
            case 'mrblog':
                return {
                    banner: GamevideoBanner,
                    title: "Mr. Blog 시리즈",
                    subtitle: "Octopus Fantasy의 진미, Mr. 블로그씨와의 만담"
                }
            default:
                return;
        }
    }

    render() {

        const { contentType } = this.props;
        const { banner, title, subtitle } = this.resolve(contentType);

        return (
            <div className='content-banner-container' style={{ backgroundImage: `url(${banner})` }}>
                <div className='content-banner-inner'>
                    <p className='content-banner-title'>{title}</p>
                    <p className='content-banner-subtitle'>{subtitle}</p>                    
                </div>
            </div>
        );
    }
};