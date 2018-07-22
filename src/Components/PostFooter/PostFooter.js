import React, { Component } from 'react';
import { CommentGroup } from 'Components';
import * as CommentUtil from 'util/http/comment';
import { Button, Icon, Label } from 'semantic-ui-react';

class PostFooter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            comments: []
        }
    }

    componentDidMount() {
        this.loadComments(this.props.id);
    }

    loadComments = async (id) => {
        const res = await CommentUtil.loadComments(id);
        this.setState({ comments: res.data });
    }

    render() {

        const { likes, id, type } = this.props;

        return (
            <div style={{paddingBottom: '100px'}}>
                {/* <CommentGroup comments={this.state.comments} isParent={true}/> */}
            </div>
        );
    }
}

export default PostFooter;