import { createStore, combineReducers } from 'redux';
import { reducer as todoReducer } from './todos';
import { reducer as filterReducer } from './filter';

const reducers = combineReducers({
  todos: todoReducer,
  filter: filterReducer,
});

export default createStore(reducers);
