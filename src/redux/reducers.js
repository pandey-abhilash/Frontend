/**
 * Combine all reducers in this file and export the combined reducers.
 */
import { reducer as form } from 'redux-form/immutable';
import { combineReducers } from 'redux-immutable';
import { connectRouter } from 'connected-react-router/immutable';
import history from '../utils/history';
import auth from '../redux/actions/authReducer'
import posts from '../redux/actions/postReducer';
import comments from '../redux/actions/commentReducer';
import follows from '../redux/actions/followReducer'
/**
 * Creates the main reducer with the dynamically injected ones
 */
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    form,
    auth: auth.getReducer(),
    posts: posts.getReducer(),
    comments: comments.getReducer(),
    follows:follows.getReducer(),
    router: connectRouter(history),
    ...injectedReducers,
  });

  // Wrap the root reducer and return a new root reducer with router state
  const mergeWithRouterState = connectRouter(history);
  return mergeWithRouterState(rootReducer);
}
