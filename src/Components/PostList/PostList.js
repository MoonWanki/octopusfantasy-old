import React, { Component } from 'react';
import { Post } from 'Components';
import './PostList.scss';

class PostList extends Component {

    renderContents = () => {

        const { postList } = this.props;
        let key = 0;

        return postList.map((post)=>(
            <Post
                key={key++}
                title={post.get('title')}
                postedOn={post.get('postedOn')}
                content={post.get('content')}
                likes={post.get('likes')}
                comments={post.get('comments')}
            />
        ))
    }

    render() {
        const { renderContents } = this;
        return (
            <div id='post-list'>
                {renderContents()}
            </div>
        );
    }
}

export default PostList;