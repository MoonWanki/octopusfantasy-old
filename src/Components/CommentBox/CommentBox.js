import React, { Component } from 'react';
import Comment from './Comment';

class CommentBox extends Component {

    renderRecomments = () => {

        const { recomments } = this.props;

        if(!recomments || recomments.length===0) return;

        let key = 0;
        return recomments.map((curRecomment)=>(
            <Comment
                key={key++}
                id={curRecomment.id}
                text={curRecomment.comment}
                date={curRecomment['commented-on']}
                isRecomment={true}
             />
        ));

    }

    render() {

        const { id, commentedOn, comment } = this.props;
        const { renderRecomments } = this;

        return (
            <div>
                <Comment id={id} date={commentedOn} text={comment} isRecomment={false}/>
                {renderRecomments()}
            </div>
        );
    }
}

export default CommentBox;