import React, { Component } from 'react';
import './SliderItem.css';
import Fade from 'react-reveal/Fade';

class SliderItem extends Component {

    render() {
        const { visible, src, title, subtitle } = this.props;
        return (
            <div className={visible ? 'slider-item visible' : 'slider-item'} style={{ backgroundImage: `url(${src})`}}>
                {visible
                ?<Fade bottom delay={200} duration={600} distance="50%">
                    {title}
                    {subtitle}
                </Fade>
                :null}
            </div>
        );
    }
}

export default SliderItem;