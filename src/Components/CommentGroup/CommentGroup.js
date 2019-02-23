import React, { Component, Fragment } from 'react';
import { Comment } from 'Components';
import { Input } from 'react-materialize';
import { Button } from 'semantic-ui-react';
import './CommentGroup.scss';

class CommentGroup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            recommentTextareaOn: false
        }
    }

    render() {
        const { data } = this.props;
        const { recommentTextareaOn } = this.state;
        return (
            <div>
                <Comment nickname={data["nickname"]} profileImage={data["profile-image"]} commentedOn={data["commented-on"]} text={data["comment"]} />
                <div className="recomments-container">
                    {data["recomments"].map(data =>
                        <Comment nickname={data["nickname"]} profileImage={data["profile-image"]} commentedOn={data["recommented-on"]} text={data["recomment"]} />
                    )}
                    { recommentTextareaOn ?
                        <Fragment>
                            <Input type='textarea' placeholder='답글을 입력해 주세요.'/>
                            <Button basic loading floated='right'>등록</Button>
                        </Fragment>
                    : null }
                </div>
            </div>
        );
    }
}

export default CommentGroup;