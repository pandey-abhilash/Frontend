/* eslint-disable no-param-reassign */
import ReducerFactory from '../../utils/reducerFactory';
import * as authAPI from '../apis/authApi';
import toastr from 'toastr';

const reducerName = 'auth';
const initialState = {
    authToken:null,
    loggin:false,
    user: null, 
    error: null,
    loading: false,
};
const reducerFactory = new ReducerFactory(reducerName, initialState);
reducerFactory.addAction('LOGIN_LOADING', `${reducerName}Loading`,
  (status) => status, (state, action) => {
    const newState = Object.assign({}, state);
    newState.loading = action.data;
    return newState;
  }
);

reducerFactory.addAction('REGISTER_USERS', 'registerUser',
  async (body) => {
    const response= await authAPI.registerUser(body);
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


reducerFactory.addAction('LOGIN_USERS', 'loginUser',
  async (body) => {
    const response= await authAPI.loginUser(body);
    return response.data
  },
   (state, action) => {
    if(action.data.success){
      const{email,password}=action.data.data 
      window.localStorage.setItem("myproject",JSON.stringify({email,password}));
      state.user=action.data.data
      state.loggin = true;
    }else{
        toastr.warning(action.data.message)
        state.loggin=false
    } 
    const newState = Object.assign({}, state);
    newState.loading = false;
    return newState;
  }
);




export default reducerFactory;