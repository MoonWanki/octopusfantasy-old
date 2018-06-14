import React, { Component } from 'react';
import './PostHeader.scss';

class PostHeader extends Component {

    getStringDate (rawDate) {
        const date = new Date(rawDate);
        const options = {
            hour12: false,
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit"
        };
        return date.toLocaleTimeString("ko-KR", options);
    }

    render() {

        const { title, postedOn } = this.props;
        const { getStringDate } = this;

        return (
            <div id='post-header'>
                <div id='post-header-colorbox' />
                <div id='post-header-title'>
                    <p bold='true'>{title}</p>
                </div>
                <div id='post-header-postedon'>
                    <p>{getStringDate(postedOn)}</p>
                </div>
            </div>
        );
    }
};

export default PostHeader;