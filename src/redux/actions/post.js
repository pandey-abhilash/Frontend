/* eslint-disable no-param-reassign */
import ReducerFactory from '../../utils/reducerFactory';
import * as postAPI from '../apis/postApi';
import toastr from 'toastr';

const reducerName = 'post';
const initialState = {
    error: null,
    loading: false,
    myposts:[],
    totalPosts:0
};
const reducerFactory = new ReducerFactory(reducerName, initialState);
reducerFactory.addAction('POST_LOADING', `${reducerName}Loading`,
  (status) => status, (state, action) => {
    const newState = Object.assign({}, state);
    newState.loading = action.data;
    return newState;
  }
);

reducerFactory.addAction('MY_POSTS', 'fetchPosts',
  async (body) => {
    const response= await postAPI.fetchPosts(body);
    return response.data
  },
   (state, action) => {
     if(action.data.success){
       state.myposts= action.data.data
     }else{
      toastr.error(action.data.message)
     }
     state.loading=false
    const newState = Object.assign({}, state);
    return newState;
  }
);

reducerFactory.addAction('CREATE_POSTS', 'createPosts',
  async (body) => {
    const response= await postAPI.createPosts(body);
    return response.data
  },
   (state, action) => {
     if(action.data.success){
       toastr.success(action.data.message)
     }else{
      toastr.error(action.data.message)
     }
     state.loading=false
    const newState = Object.assign({}, state);
    return newState;
  }
);






export default reducerFactory;