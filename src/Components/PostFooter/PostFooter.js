import React, { Component } from 'react';
import { CommentList } from 'Components';

class PostFooter extends Component {
    render() {

        const { likes, comments } = this.props;

        return (
            <div>
                <p>좋아요: {likes.size}개</p>
                <CommentList comments={comments} />
        </div>
        );
    }
}

export default PostFooter;