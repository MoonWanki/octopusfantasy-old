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
                id={post.id}
                title={post.title}
                postedOn={post.postedOn}
                video={post.video}
                image={post.image}
                content={post.content}
                likes={post.likes}
                type={post.type}
            />
        ))
    }

    render() {
        const { renderContents } = this;
        return (
            <div className='post-list'>
                {renderContents()}
            </div>
        );
    }
}

export default PostList;