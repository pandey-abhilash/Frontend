import ReducerFactory from '../../utils/reducerFactory';
import * as followAPI from '../apis/followApi';
import toastr from 'toastr';
import { act } from 'react-dom/test-utils';

const reducerName = 'follows';
const initialState = {
    follows: {}, 
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

reducerFactory.addAction('SEND_FOLLOW_REQUEST', 'sendFollowRequest',
  async (body) => {
    const response= await followAPI.sendFollowRequest(body);
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
