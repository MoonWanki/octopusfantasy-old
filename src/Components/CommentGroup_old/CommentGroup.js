import React, { Component } from 'react';
import { CommentBox } from 'Components';
import { Comment, Button, Form } from 'semantic-ui-react';

class CommentGroup extends Component {

    renderCommentBoxs = () => {

        const { isParent, comments } = this.props;
        let key = 0;

        return comments.map((curComment)=>(
            <CommentBox
                key={key++}
                id={curComment.uid}
                comment={curComment.comment}
                commentedOn={curComment['commented-on']}
                recomments={isParent ? curComment.recomments : null}
             />
        ))
    }

    render() {
        const { isParent } = this.props;
        const { renderCommentBoxs } = this;
        return (
            <div>
                <Comment.Group threaded={isParent} >
                    {renderCommentBoxs()}
                </Comment.Group>
                {isParent ? (
                    <Form>
                        <Form.TextArea placeholder='덧글을 입력해주세요.'/>
                        <Button color='teal' content='등록' floated='right' labelPosition='right' icon='edit' />
                    </Form>
                ):null}

            </div>
        );
    }
}

export default CommentGroup;