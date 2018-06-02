import React, { Component } from 'react';
import { PostHeader, PostContent, PostFooter } from 'Components';

class Post extends Component {

    render() {

        const { title, postedOn, video, text, likes, comments } = this.props;

        return (

            <div>
                <PostHeader title={title} postedOn={postedOn.toString()} />
                <PostContent video={video} text={text} />
                <PostFooter likes={likes} comments={comments} />
            </div>
        );
    }
};

export default Post;