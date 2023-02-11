import {combineReducers} from "redux";
import currentUserReducer from './currentUserReducer'
import myDetails from './myDetails'
import user from './user'
import staff from './staff'
import auth from './auth';

export default combineReducers({
    currentUserReducer,
    myDetails,
    user,
    staff,
    auth
});
