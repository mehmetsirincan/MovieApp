import { OrderType } from "../types";

export const getOrderData= (payload)=>({
    type : OrderType.GET_ORDER_DATA,
    payload
})

export const setOrderData= (payload)=>({
    type : OrderType.SET_ORDER_DATA,
    payload
})

export const removeOrderData = (payload)=>({
    type : OrderType.REMOVE_ORDER_DATA,
    payload
})

export const setCinema = (payload)=>({
    type : OrderType.SET_CINEMA,
    payload
})

export const addSeat = (payload)=>({
    type : OrderType.ADD_SEAT,
    payload
})

export const removeSeat = (payload)=>({
    type : OrderType.REMOVE_SEAT,
    payload
})

export const removeAllSeat = (payload)=>({
    type : OrderType.REMOVE_ALL_SEAT,
    payload
})
