import React, { Component } from 'react';

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
            <div>
                <p>제목:{title}</p>
                <p>작성일자:{getStringDate(postedOn)}</p>
            </div>
        );
    }
};

export default PostHeader;