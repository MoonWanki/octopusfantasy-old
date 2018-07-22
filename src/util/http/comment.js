/**
 * 
 * 댓글추가 POST
 * pid, uid, nickname, profileImage, comment
 * 
 * 댓글수정 PUT
 * pid, uid, commentedOn, comment
 * 
 * 댓글삭제 DELETE
 * pid, uid, commentedOn
 * 
 * 답글추가
 * pid, parentUid, uid, commentedOn, nickname, profileImage, recomment
 * 
 * 답글수정
 * pid, uid, recommentedOn, recomment
 * 
 * 답글삭제
 * pid, uid, recommentedOn
 * 
 */

import axios from 'axios';

export const loadComments = (pid) => {
    return axios.get(`https://server.octopusfantasy.com/comment?pid=${pid}`);
}