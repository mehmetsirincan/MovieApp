import {combineReducers} from 'redux';
import FilmReducer from './FilmReducer';
import OrderReducer from './OrderReducer';

export default combineReducers({
    Film : FilmReducer,
    Order : OrderReducer
})