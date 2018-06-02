import React, { Component } from 'react';
import { Comment } from 'Components';

class CommentList extends Component {

    renderComments = () => {

        const { comments } = this.props;
        let key = 0;

        return comments.map((comment)=>(
            <Comment
                key={key++}
                name={comment.get('name')}
                comment={comment.get('comment')}
                recomments={comment.get('recomments')}
             />
        ))
    }

    render() {
        const { renderComments } = this;
        return (
            <div>
                {renderComments()}
            </div>
        );
    }
}

export default CommentList;