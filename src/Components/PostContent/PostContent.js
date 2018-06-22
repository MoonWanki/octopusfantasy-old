import React from 'react';
import './PostContent.scss';

const PostContent = ({ video, image, content }) => {
    return (
        <div id='post-content'>
            {image && image!==""
            ?<div>
                <img src={image} width="100%" height="auto" alt=""/>
            </div>
            :null}
            {video && video!==""
            ?<div id='video-container-wrapper'>
                <div id='video-container'>
                    <iframe
                        width="100%"
                        height="100%"
                        src={video}
                        frameBorder="no"
                        scrolling="no"
                        title="NaverVideo"
                        allow="autoplay; encrypted-media"
                        allowFullScreen="true">
                    </iframe>
                </div>
            </div>
            :null
            }
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    );
};

export default PostContent;