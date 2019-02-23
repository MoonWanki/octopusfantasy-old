import React, { Component, Fragment } from 'react';
import { CommentContainer } from 'Components';
import { Icon } from 'semantic-ui-react';
import { toast } from 'react-toastify';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './PostFooter.scss';

class PostFooter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            numOfComments: null
        }
    }

    handleNumOfComments = (num) => {
        if(this.state.numOfComments !== num) {
            this.setState({ numOfComments: num });
        }
    }

    getButtonColor = () => {
        switch(this.props.type) {
            case 'music':
                return 'violet';
            case 'entertainment':
                return 'pink';
            case 'daigasso':
                return 'orange';
            case 'gamevideo':
                return 'red';
            case 'mrblog':
                return 'olive';
            default:
                return null;
        }
    }

    getPostUrl = (id) => `https://www.octopusfantasy.com/post/${id}`;

    toastClipboardCopied = () => toast.info('클립보드에 복사되었습니다!');
    

    render() {
        console.log('PostFooter rendered');

        const { likes, id, type } = this.props;
        const { numOfComments } = this.state;
        const { getButtonColor, getPostUrl, toastClipboardCopied } = this;

        return (
            <Fragment>
                {/* <CommentGroup comments={this.state.comments} isParent={true}/> */}
                <div className='post-menu-container'>
                    <div className='num-of-comments'>{numOfComments!=null ? `댓글 ${numOfComments}개` : '댓글을 불러오고 있습니다...'}</div>
                    <div className='post-menu-buttons-container'>
                        <div className='post-menu-button like-button'>
                            <Icon name='thumbs up'/>&nbsp;{likes.length}
                        </div>
                        <CopyToClipboard onCopy={toastClipboardCopied} text={getPostUrl(id)}>
                            <div className='post-menu-button share-button'>
                                <Icon name='share alternate' />
                            </div>
                        </CopyToClipboard>
                    </div>
                </div>
                <CommentContainer pid={id} notifyNumOfComments={this.handleNumOfComments} />
            </Fragment>
        );
    }
}

export default PostFooter;