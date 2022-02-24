import axios from 'axios';

const BASE_URL="https://kreaktif.net/fakeapi.php?action=";

const requestGet= (endpoint)=>{
    return axios.get(BASE_URL+endpoint).then(e=>e.data).catch(e=>console.log(e));
}
const requestPost= (endpoint,data=[])=>{
    return axios.post(BASE_URL+endpoint,data).then(e=>e.data).catch(e=>console.log(e));
}

export const getHomeData = ()=>{
    return requestGet('home-data');
}

export const getFilmData = (id)=>{
    return requestPost('film',{id});
}
export const getOrderData = ()=>{
    return requestGet('order-data');
}
export const getSeatList = ()=>{
    return requestGet('seat-list');
}
