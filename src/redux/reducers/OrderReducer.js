import {OrderType} from '../types'

const initialState = {
    dayList : [],
    day : '',
    cinemaList : [],
    cinema : [],
    hourList : [],
    hour : '',
    selectedSeats : [],   
    seatsList : [],
}

export default function(state=initialState,action){

    switch(action.type){
        case OrderType.REMOVE_ORDER_DATA:
            return initialState;
        case OrderType.SET_ORDER_DATA:
            return {...state,...action.payload};
        case OrderType.SET_CINEMA:
            return {...state,cinema:action.payload};
        case OrderType.ADD_SEAT:
            return {...state,selectedSeats:state.selectedSeats.concat(action.payload)};
        case OrderType.REMOVE_SEAT:
            return {...state,selectedSeats:state.selectedSeats?.filter(e=> e !== action.payload)};
        case OrderType.REMOVE_ALL_SEAT:
            return {...state,selectedSeats:[]};
        default:
            return state;

    }

}