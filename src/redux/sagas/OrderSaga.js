import {call,put,takeLatest,all, takeEvery} from 'redux-saga/effects'
import Actions from '../actions';
import {OrderType} from '../types'
import { getOrderData, getSeatList } from '../../API';


function* fetchOrderData(action){
  
    try {
        
        const response = yield call(getOrderData,action.payload);
     
        if(response?.status){
           
            yield all([
                put(Actions.OrderAction.setOrderData({
                    dayList : response?.days,
                    cinemaList : response?.cinemaList,
                    ticketPrice : response?.ticketPrice,
                    hourList : response?.hours
                }))
              ]);
        }

    } catch (error) {
       
    }

}

function* fetchSeatList(action){
    try {
        const response = yield call(getSeatList,action.payload);
        if(response?.status){
            yield all([
                put(Actions.OrderAction.setOrderData({seatsList:response?.data}))
              ]);
        }
       
    } catch (error) {
        
    }

}

export function* WatchOrderData(){
    yield takeLatest(OrderType.GET_ORDER_DATA,fetchOrderData)
}

export function* WatchCinema(){
    yield takeLatest(OrderType.SET_CINEMA,fetchSeatList)
}