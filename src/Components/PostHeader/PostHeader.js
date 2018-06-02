import React, { Component } from 'react';

class PostHeader extends Component {

    render() {

        const { title, postedOn } = this.props;

        return (
            <div>
                <p>제목:{title}</p>
                <p>작성일자:{postedOn}</p>
            </div>
        );
    }
};

export default PostHeader;