/* eslint-disable no-param-reassign */
// import toastr from 'toastr';
// import * as AuthApi from '../api/auth';
import ReducerFactory from '../../utils/reducerFactory';
const reducerName = 'auth';
const initialState = {
    authToken:null,
    loggin:false,
    user: {},
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


export default reducerFactory;