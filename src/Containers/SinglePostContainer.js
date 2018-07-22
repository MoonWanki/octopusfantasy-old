import React, { Component, Fragment } from 'react';
import * as PostUtil from 'util/http/post';
import { Post, ContentBanner, Footer } from 'Components';
import { HeaderContainer } from 'Containers';
import { Loader } from 'semantic-ui-react';

class SinglePostContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            post: null
        }
    }

    loadPost = async (pid) => {
        const res = await PostUtil.loadSinglePost(pid);
        this.setState({ post: res.data });
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        const { pid } = this.props.match.params;
        this.loadPost(pid);
    }

    render() {

        const { post } = this.state;

        return (
            <Fragment>
                <HeaderContainer />
                <ContentBanner contentType={'music'} />
                {post!=null ?
                <div className='post-list'>
                    <Post
                        id={post.id}
                        title={post.title}
                        postedOn={post['posted-on']}
                        video={post.video}
                        image={post.image}
                        content={post.content}
                        likes={post.likes}
                        type={post.type}
                    />
                </div>
                :
                <div style={{minHeight: '60vh', paddingTop: '100px', textAlign: 'center', color: 'gray'}}>
                    <Loader size='big' active inline='centered' />
                </div>
                }
                <Footer />
            </Fragment>
        );
    }
}

export default SinglePostContainer;