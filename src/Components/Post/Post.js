import React, { Component, Fragment } from 'react';
import { PostHeader, PostContent, PostFooter } from 'Components';
import { css } from 'glamor';

class Post extends Component {

    render() {
        const { id, title, postedOn, video, image, content, likes, type } = this.props;
        return (
            <Fragment>
                <PostHeader title={title} postedOn={postedOn} type={type}/>
                <PostContent video={video} image={image} content={content} />
                <PostFooter likes={likes} id={id} type={type} />
                <div {...css({
                    width: '100%',
                    height: '80px'
                })} />
            </Fragment>
        );
    }
};

export default Post;