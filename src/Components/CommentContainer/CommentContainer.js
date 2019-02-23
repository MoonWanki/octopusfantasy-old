import React, { Component, div } from 'react';
import { CommentGroup } from 'Components';
import { loadComments } from 'util/http/comment';
import { Loader } from 'semantic-ui-react';
import { Input } from 'react-materialize';
import { Button } from 'semantic-ui-react';
import { postComment } from 'util/http/comment';
import { toast } from 'react-toastify';

class CommentContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            comments: null,
            commentText: '',
            isSendingComment: false,
        }
    }

    componentDidMount() {
        this.loadComments();
    }
    
    loadComments = async () => {
        const res = await loadComments(this.props.pid);
        if(res.status===200) {
            if(!this.state.loaded) {
                this.setState({ loaded: true, comments: res.data });
            }
            else if(JSON.stringify(res.data) !== JSON.stringify(this.state.comments)) {
                this.setState({ comments: res.data });
            }
        } else {
            toast.error("댓글을 불러오지 못했습니다. 서버 응답 내용: " + res.data);
        }
        setTimeout(this.loadComments, 5000);
    }

    getNumOfComments = () => {
        let num = 0;
        this.state.comments.forEach(comment => {
            num++;
            num += comment['recomments'].length;
        });
        return num;
    }

    addComment = async () => {
        const { pid } = this.props;
        this.setState({ isSendingComment: true })
        const newComment = {
            pid: pid,
            uid: 'dhksrl2589',
            nickname: '문어',
            profileImage: "https://phinf.pstatic.net/contact/profile/blog/75/4/dhksrl2589.jpg",
            comment: this.state.commentText
        }
        const res = await postComment(newComment);
        if(res.status===200) {
            const newComment = res.data;
            this.setState({ commentText: "", comments: [...this.state.comments, newComment] });
        } else {
            toast.error("댓글을 등록하지 못했습니다. 서버 응답 내용: " + res.data);
        }
        this.setState({ isSendingComment: false })
    }

    handleCommentTextChanged = (e, value) => this.setState({ commentText: value });
    

    render() {
        console.log('CommentContainer rendered');
        const { loaded, comments, isSendingComment, commentText } = this.state;
        const { addComment, handleCommentTextChanged } = this;
        
        if(loaded) this.props.notifyNumOfComments(this.getNumOfComments());

        return (
            <div className='comments-container'>
                {loaded ? comments.map(comment => <CommentGroup data={comment}/>) : <Loader active inline='centered'/>}
                <Input type='textarea' s={12} placeholder='댓글을 입력해 주세요.' onChange={handleCommentTextChanged} disabled={isSendingComment} value={commentText}/>
                <Button basic loading={isSendingComment} floated='right' onClick={addComment} disabled={commentText===""}>등록</Button>
            </div>
        );
    }
}

export default CommentContainer;