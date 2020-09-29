import axions from 'axions'

import{
  POST_LOADING,
  ADD_POST,
  GET_POSTS,
  GET_POST,
  DELETE_POST,
  CLEAR_POST,
  UPDATE_POST
} from './types'

export const create = (post) => (dispatch) => {
  axios
  .post('/api/posts', post)
  .then((res) => dispath({
    type: ADD_POST,
    payload: res.data
  }))
}

 export const getAll = (params) => (dispath) => {
   dispath(setPostLoadins(true))
   axios
   .get('/api/posts', { params })
   .then((res) => dispath({
     type: GET_POSTS,
     payload: {
       
     }
