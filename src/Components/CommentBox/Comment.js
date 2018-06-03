import React, { Component } from 'react';
import styled from 'styled-components';
import './Comment.scss';

const CommentWrapper = styled.div`
    width: 100%;
    height: 50px;
    padding:
    padding-left: ${
        (props)=>props.isRecomment ? '10px' : '0'
    };
    background-color: ${
        (props)=>props.isRecomment ? '#f8a8b8' : '#ffffff'
    };
`


class Comment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: ''
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
    
    componentDidMount() {
    }

    render() {

        const { id, text, date, isRecomment } = this.props;
        const { name } = this.state;
        const { getStringDate } = this;
        
        return (
            <CommentWrapper isRecomment={isRecomment}>
                <div id='comment-profile-image'>
                </div>
                <div id='comment-name'>
                    {id}
                </div>
                <div id='comment-text'>
                    {text}
                </div>
                <div id='comment-date'>
                    {getStringDate(date)}
                </div>
            </CommentWrapper>
        );
    }
}

export default Comment;