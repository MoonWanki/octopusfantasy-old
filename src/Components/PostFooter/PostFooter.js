import React, { Component } from 'react';
import { CommentBoxList } from 'Components';

class PostFooter extends Component {
    render() {

        const { likes, comments } = this.props;

        return (
            <div>
                <p>좋아요: {likes.length}개</p>
                <CommentBoxList comments={comments} />
        </div>
        );
    }
}

export default PostFooter;