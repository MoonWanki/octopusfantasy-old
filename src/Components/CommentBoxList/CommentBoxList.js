import React, { Component } from 'react';
import { CommentBox } from 'Components';

class CommentBoxList extends Component {

    renderComments = () => {

        const { comments } = this.props;
        let key = 0;

        return comments.map((curComment)=>(
            <CommentBox
                key={key++}
                id={curComment.id}
                comment={curComment.comment}
                commentedOn={curComment['commented-on']}
                recomments={curComment.recomments}
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

export default CommentBoxList;