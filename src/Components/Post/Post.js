import React, { Component } from 'react';
import { PostHeader, PostContent, PostFooter } from 'Components';

class Post extends Component {

    render() {

        const { id, title, postedOn, video, image, content, likes, type } = this.props;

        return (

            <div>
                <PostHeader title={title} postedOn={postedOn} type={type}/>
                <PostContent video={video} image={image} content={content} />
                <PostFooter likes={likes} id={id} type={type} />
            </div>
        );
    }
};

export default Post;