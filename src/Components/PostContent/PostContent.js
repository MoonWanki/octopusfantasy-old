import React from 'react';
import './PostContent.scss';

const PostContent = ({ video, text }) => {
    return (
        <div>
            <div id='video-container-wrapper'>
                <div id='video-container'>
                    <iframe width="100%" height="100%" src={video} frameBorder="no" scrolling="no" title="NaverVideo" allow="autoplay; encrypted-media" allowFullScreen="true"></iframe>
                </div>
            </div>
            <div dangerouslySetInnerHTML={{ __html: text }} />
        </div>
    );
};

export default PostContent;