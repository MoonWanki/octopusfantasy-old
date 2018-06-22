import React, { Component } from 'react';
import { Comment, Form } from 'semantic-ui-react';
import { CommentGroup } from 'Components';
import './CommentBox.scss';

class CommentBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            replyOn: false
        }
    }

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

    toggleReplyOnOff = (e) => {
        e.stopPropagation();
        this.setState({ replyOn: !this.state.replyOn});
    }

    render() {

        const { id, commentedOn, comment, recomments } = this.props;
        const { getStringDate, toggleReplyOnOff } = this;
        const { replyOn } = this.state;

        return (
            <div id='comment-box'> 
                <Comment>
                    <Comment.Avatar src='/assets/images/avatar/small/jenny.jpg' />
                    <Comment.Content>
                        <Comment.Author as='b'>{id}</Comment.Author>
                        <Comment.Metadata>{getStringDate(commentedOn)}</Comment.Metadata>
                        <Comment.Text>{comment}</Comment.Text>
                        <Comment.Actions>
                            <Comment.Action><span onClick={toggleReplyOnOff}>답글 달기</span></Comment.Action>
                        </Comment.Actions>
                    </Comment.Content>
                    { recomments && recomments.length>0
                        ? <CommentGroup comments={recomments} isParent={false} />
                        : null }
                    { replyOn ?
                        (<div style={{paddingBottom: '40px'}}>
                            <Form>
                                <Form.TextArea />
                                <Form.Button content='등로쿠' floated='right' labelPosition='right' icon='edit' primary />
                            </Form>
                        </div>
                        )
                    : null }
                </Comment>
            </div>
        );
    }
}

export default CommentBox;