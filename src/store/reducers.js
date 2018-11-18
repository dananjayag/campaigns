import { combineReducers } from 'redux';
import { appReducer } from '../containers/app/reducer';

//combining diffrent reducers
const reducer =  combineReducers({
     appData:appReducer
});

export default reducer;