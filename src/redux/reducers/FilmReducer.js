import {FilmType} from '../types'

const initialState = {
    homedata : [],
    homeloading : true,
    filmData : [],
    filmError : false,
    filmLoading : true
};

export default function (state=initialState,action){
    switch(action.type){
        case FilmType.SET_HOME_DATA:
            return {...state,homedata:action.payload}
        case FilmType.SET_HOME_LOADING:
            return {...state,homeloading:action.payload};
        case FilmType.SET_FILM_ERROR:
            return {...state,filmError:action.payload};
        case FilmType.SET_FILM_DATA:
            return {...state,filmData:action.payload};
        default:
            return state;
    }
}