import { createAction, handleActions } from 'redux-actions';

const initialState = {
    postList: []
};

const INIT_POSTS = 'contents/INIT_POSTS';
const FETCH_POST = 'contents/FETCH_POST';

export const initPosts = createAction(INIT_POSTS);
export const fetchPost = createAction(FETCH_POST);

export default handleActions({
    [INIT_POSTS]: (state) => {
        return { postList: [] };
    },
    [FETCH_POST]: (state, { payload }) => {
        const newPost = {
            id: payload.id,
            type: payload.type,
            title: payload.title,
            postedOn: payload['posted-on'],
            video: payload.video,
            content: payload.content,
            likes: payload.likes,
            comments: payload.comments
        };
        return { postList: [...state.postList, newPost] }
    }
}, initialState);

