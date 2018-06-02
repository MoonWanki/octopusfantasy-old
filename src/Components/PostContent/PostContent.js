import React from 'react';

const PostContent = ({ video, text }) => {
    return (
        <div>
            
            <div dangerouslySetInnerHTML={{ __html: text }} />
        </div>
    );
};

export default PostContent;