import React, { Component } from 'react';
import './ProgressBar.css';

class ProgressBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            percent: 0
        }
        this.timer = null;
    }

    componentDidMount() {
        setInterval(() => {
            const { percent } = this.state;
            if(this.props.active && percent < 99.5) {
                this.setState({ percent: percent + 0.4 });
            } else {
                this.setState({ percent: 0 });

                this.props.onFinish();
            }
        }, 20);
    }

    render() {

        const { percent } = this.state;

        return (
            <div style={{ width: `${percent}%` }} className='slider-progress-bar' />
        );
    }
}

export default ProgressBar;