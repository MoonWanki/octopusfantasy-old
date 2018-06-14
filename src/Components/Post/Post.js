import React, { Component } from 'react';
import { PostHeader, PostContent, PostFooter } from 'Components';

class Post extends Component {

    render() {

        const { title, postedOn, video, content, likes, comments } = this.props;

        return (

            <div>
                <PostHeader title={title} postedOn={postedOn} />
                <PostContent video={video} content={content} />
                <PostFooter likes={likes} comments={comments} />
            </div>
        );
    }
};

export default Post;