import {call,put,takeLatest,all, takeEvery} from 'redux-saga/effects'
import Actions from '../actions';
import {FilmType} from '../types'
import { getFilmData, getHomeData } from '../../API';


function* fetchHomeFilmData(action){
    
    try {
        const response = yield call(getHomeData);
        yield all([
            put(Actions.FilmAction.setHomeLoading(false)),
            put(Actions.FilmAction.setHomeData(response))
          ]);
       
    } catch (error) {
        console.log(error);
    }
}

function* fetchSingleFilmData(action){
    try {
        yield put(Actions.FilmAction.setFilmData([]))
        yield put(Actions.OrderAction.removeOrderData([]))
        yield put(Actions.OrderAction.getOrderData())
        const response = yield call(getFilmData,action.payload);
        if(response?.status){
            yield all([
                put(Actions.FilmAction.setFilmError(false)),
                put(Actions.FilmAction.setFilmData(response?.data))
              ]);
        }else{
            yield  put(Actions.FilmAction.setFilmError(true))
        }
       
    } catch (error) {
        yield  put(Actions.FilmAction.setFilmError(true))
    }
}


export function* WatchHomeFilmData(){
    yield takeLatest(FilmType.GET_HOME_DATA, fetchHomeFilmData);
}

export function* WatchSingleFilmData(){
    yield takeEvery(FilmType.GET_FILM_DATA, fetchSingleFilmData);
}