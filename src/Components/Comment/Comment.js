import React, { Component } from 'react';

class Comment extends Component {

    render() {

        const { name, comment, recomments } = this.props;
        return (
            <div>
                {name}: {comment}
                {recomments}
            </div>
        );
    }
}

export default Comment;