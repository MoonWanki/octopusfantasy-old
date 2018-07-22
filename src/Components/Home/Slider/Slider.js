import React, { Component } from 'react';
import SliderItem from './SliderItem';
import ProgressBar from './ProgressBar';
import './Slider.css';

class Slider extends Component {

    ITEMS_SIZE = 3; // slider item 개수

    constructor(props) {
        super(props);
        this.state = {
            current: 0,
            progressbar: true
        }
    }

    toPrev = () => {
        const { current } = this.state;
        this.setState({
            current: (current===0 ? this.ITEMS_SIZE-1 : current-1),
        });
        this.setState({ progressbar: false });
        setTimeout(()=>{ this.setState({ progressbar: true }); }, 500);
    }

    toNext = () => {
        const { current } = this.state;
        this.setState({
            current: (current===this.ITEMS_SIZE-1 ? 0 : current+1),
        });
        this.setState({ progressbar: false });
        setTimeout(()=>{ this.setState({ progressbar: true }); }, 500);
    }

    render() {
        const { current, progressbar } = this.state;
        return (
            <div className='slider-container'>
                <SliderItem
                    visible={current===0}
                    src="https://i.imgur.com/o3DpJY0.jpg"
                    title={<p className='slider-item-title' style={{fontFamily: 'NanumSquare', fontWeight: '300'}}>
                        새로운 PC. <span style={{fontFamily: 'NanumSquare', fontWeight: '700'}}>새로운 시작.</span>
                    </p>}
                    subtitle={<p className='slider-item-subtitle' style={{fontFamily: 'NanumSquare', fontWeight: '300'}}>
                        유로트럭 풀옵을 돌리기 위한 그의 부단한 노력.
                    </p>}
                    />
                <SliderItem
                    visible={current===1}
                    src="https://i.imgur.com/Z6gkeQl.jpg"
                    title={<p className='slider-item-title' style={{fontFamily: 'Nanum Myeongjo', fontWeight: '300'}}>
                        文, "경영대학원 <span style={{fontFamily: 'Nanum Myeongjo', fontWeight: '700'}}>사퇴</span> 결정"
                    </p>}
                    subtitle={<p className='slider-item-subtitle' style={{fontFamily: 'Nanum Myeongjo'}}>
                        4개월 간의 숨가쁜 大장정···끝내 막을 내리다
                    </p>}
                    />
                <SliderItem
                    visible={current===2}
                    src="https://i.imgur.com/pMVmK4y.jpg"
                    title=""
                    subtitle="" />
                {progressbar ? <ProgressBar active={true} onFinish={this.toNext} /> : null}
            </div>
        );
    }
}

export default Slider;