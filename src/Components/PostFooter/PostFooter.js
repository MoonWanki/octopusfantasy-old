import React, { Component } from 'react';
import { CommentGroup } from 'Components';
import { Button, Icon, Label } from 'semantic-ui-react';

class PostFooter extends Component {
    render() {

        const { likes, comments } = this.props;

        return (
            <div style={{paddingBottom: '100px'}}>
                <div style={{textAlign: 'center', padding: '30px 0'}} >
                    <Button as='div' labelPosition='right'>
                        <Button color='teal'>
                            <Icon name='thumbs up' />
                            Like!
                        </Button>
                        <Label as='a' basic color='teal' pointing='left'>
                            {likes.length}
                        </Label>
                    </Button>
                </div>
                <CommentGroup comments={comments} isParent={true}/>
            </div>
        );
    }
}

export default PostFooter;