import { createAction, handleActions } from 'redux-actions';

const initialState = {
    fetched: false,
    postList: []
};

const FETCH_POSTS = 'contents/FETCH_POSTS';

export const fetchPosts = createAction(FETCH_POSTS);

export default handleActions({
    [FETCH_POSTS]: (state, { payload }) => {
        return {
            fetched: true,
            postList: payload
        };
    },
    // [FETCH_POST]: (state, { payload }) => {
    //     if(state.active) {
    //         const newPost = {
    //             id: payload.id,
    //             title: payload.title,
    //             type: payload.type,
    //             postedOn: payload['posted-on'],
    //             video: payload.video,
    //             image: payload.image,
    //             content: payload.content,
    //             likes: payload.likes
    //         };
    //         return { ...state, postList: [...state.postList, newPost] };
    //     } else return {...state};
    // },
}, initialState);

