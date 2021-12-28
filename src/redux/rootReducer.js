import { combineReducers } from 'redux';
//! reducers
import userReducers from './user/user.reducer';

const rootReducer = combineReducers({
    user: userReducers,
});

export default rootReducer;