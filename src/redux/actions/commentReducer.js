/* eslint-disable no-param-reassign */
import ReducerFactory from '../../utils/reducerFactory';
import * as commentAPI from '../apis/commentApi';

const reducerName = 'comments';
const initialState = {
    comments: {}, 
    total:0,
    error: null,
    loading: false,
};
const reducerFactory = new ReducerFactory(reducerName, initialState);
reducerFactory.addAction('COMMENTS_LOADING', `${reducerName}Loading`,
  (status) => status, (state, action) => {
    const newState = Object.assign({}, state);
    newState.loading = action.data;
    return newState;
  }
);

reducerFactory.addAction('FETCH_COMMENTS', 'fetchComments',
  async (body) => {
    const response= await commentAPI.fetchComments(body);
    return {data:response.data, postId:body.postId}
  },
   (state, action) => {
    if(action.data.data.success){
      let postId = action.data.postId;
      if(action.data.data.data.length>0){
        state.comments[postId] =[...action.data.data.data];
      }else{
        state.comments[action.data.postId] = [...action.data.data.data];
      }
    }
    const newState = Object.assign({}, state);
    newState.loading = false;
    return newState;
  }
);

export default reducerFactory;