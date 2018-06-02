import React from 'react';

const PostContent = ({ content }) => {
    return (
        <div dangerouslySetInnerHTML={{ __html: content }} >
        </div>
    );
};

export default PostContent;