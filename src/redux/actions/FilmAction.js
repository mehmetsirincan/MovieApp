import { FilmType } from "../types";

export const setHomeLoading= (payload)=>({
    type : FilmType.SET_HOME_LOADING,
    payload
})
export const setHomeData= (payload)=>({
    type : FilmType.SET_HOME_DATA,
    payload
})
export const GetHomeData= (payload)=>({
    type : FilmType.GET_HOME_DATA
})
export const getFilmData= (payload)=>({
    type : FilmType.GET_FILM_DATA,
    payload
})
export const setFilmData= (payload)=>({
    type : FilmType.SET_FILM_DATA,
    payload
})
export const setFilmError= (payload)=>({
    type : FilmType.SET_FILM_ERROR,
    payload
})
export const setFilmLoading= (payload)=>({
    type : FilmType.SET_FILM_LOADING,
    payload
})