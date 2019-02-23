import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import moment from 'moment';
import './Comment.scss';

class Comment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fromNow: ''
        }
    }

    componentDidMount() {
        const { updateFromNow } = this;
        moment.updateLocale('en', {
            relativeTime : {
                future: '%s',
                past: '%s',
                s: '방금',
                ss: '%d초 전',
                m: "1분 전",
                mm: "%d분 전",
                h: "1시간 전",
                hh: "%d시간 전",
                d: "하루 전",
                dd: "%d일 전",
                M: "1달 전",
                MM: "%d달 전",
                y: "1년 전",
                yy: "%d년 전"
            }
        });
        updateFromNow();
        setInterval(updateFromNow, 5000);
    }

    updateFromNow = () => {
        const newFromNow = moment(this.props.commentedOn).fromNow();
        if(this.state.fromNow !== newFromNow) this.setState({ fromNow: newFromNow });
    }

    render() {
        const { nickname, profileImage, text } = this.props;
        const { fromNow } = this.state;
        return (
            <div className="comment-box">
                <div className="comment-profile-image">
                    <Image src={profileImage} circular size='mini'/>
                </div>
                <div className="comment-content">
                    <div className="comment-title">
                        <div className="comment-nickname">{nickname}</div>
                        <div className="comment-time">{fromNow}</div>
                    </div>
                    <div className="comment-text">{text}</div>
                </div>
            </div>
        );
    }
}

export default Comment;