import { bindActionCreators } from 'redux';

export default class ReducerFactory {
  constructor(name, initState) {
    this.name = name;
    this.reduceFuncs = {};
    this.creators = {};
    this.initState = initState;
    this.boundActions = null;
  }

  // eslint-disable-next-line class-methods-use-this
  isPromise(obj) {
    return (!!obj && ((typeof obj) === 'object' || (typeof obj) === 'function') && obj.then && typeof obj.then === 'function');
  }

  // note: data can be a promise for async action data
  addAction(type, trigger, data, reduce) {
    this.reduceFuncs[type] = reduce.bind(this);

    if (data == null) return;

    if (typeof data !== 'function') {
      throw new Error('the data parameter must be a function');
    }

    this.creators[trigger] = (args) => {
      const _data = args ? data(args) : data();
      // async action
      if (this.isPromise(_data)) {
        return dispatch => _data.then(r => {
          dispatch({ type, data: r });
          args && args.done && args.done({ success: true, data: r });
          return r;
        },
        err => {
          args && args.done && args.done({ success: false, err });
        });
      }
      // normal actions
      return { type, data: _data };
    };
  }

  getName() {
    return this.name;
  }

  // returns reducer function and reducer type in an object
  getReducer() {
    return (state = this.initState, action) => {
      // if action is registered
      if (this.reduceFuncs[action.type]) {
        const _state = { ...state };
        return this.reduceFuncs[action.type](_state, action);
      }
      return state;
    };
  }

  getActions(dispatch) {
    this.boundActions = bindActionCreators(this.creators, dispatch);
    return this.boundActions;
  }

  // manual dispatch
  action(name, data) {
    if (this.creators[name]) {
      this.boundActions[name](data);
    }
  }
}
