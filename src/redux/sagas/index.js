import {all,fork} from 'redux-saga/effects';
import * as FilmSaga from './FilmSaga';
import * as OrderSaga from './OrderSaga';

export default function* rootSaga(){
    yield all([
        fork(FilmSaga.WatchHomeFilmData),
        fork(FilmSaga.WatchSingleFilmData),
        fork(OrderSaga.WatchOrderData),
        fork(OrderSaga.WatchCinema),
    ])
}