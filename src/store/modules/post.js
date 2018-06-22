import { createAction, handleActions } from 'redux-actions';

const initialState = {
    active: false,
    postList: []
};

const INIT_POSTS = 'contents/INIT_POSTS';
const FETCH_POST = 'contents/FETCH_POST';
const SET_ACTIVE = 'contents/SET_ACTIVE';

export const initPosts = createAction(INIT_POSTS);
export const fetchPost = createAction(FETCH_POST);
export const setActive = createAction(SET_ACTIVE);

export default handleActions({
    [INIT_POSTS]: (state) => {
        console.log("포스트 제거!");
        return { ...state, postList: [] };
    },
    [FETCH_POST]: (state, { payload }) => {
        if(state.active) {
            const newPost = {
                id: payload.id,
                title: payload.title,
                type: payload.type,
                postedOn: payload['posted-on'],
                video: payload.video,
                image: payload.image,
                content: payload.content,
                likes: payload.likes
            };
            return { ...state, postList: [...state.postList, newPost] };
        } else return {...state};
    },
    [SET_ACTIVE]: (state, { payload }) => {
        return { ...state, active: payload };
    }
}, initialState);

