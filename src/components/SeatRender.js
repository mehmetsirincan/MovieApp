import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Actions from '../redux/actions'
import { useDispatch } from 'react-redux';
import { COLORS, FONTS } from '../Const';

export default function SeatRender({item}) {
    const [selected,setSelected] = useState(false);
    const dispatch = useDispatch();
    const selectedSeat = ()=>{
        if(item.available){
           
            if(selected){
                dispatch(Actions.OrderAction.removeSeat(item?.name))
            }else{
                dispatch(Actions.OrderAction.addSeat(item?.name))
            }

            setSelected(!selected)
            
        }
    }

    return(
       <TouchableOpacity onPress={()=>selectedSeat()} 
       disabled={!item.available} 
       style={{
           backgroundColor:!item.available?  '#CCCCCC' : selected ? COLORS.LightPurple :  COLORS.Primary,
           width:25,
           height:25,
           margin:4,
           borderRadius:2,
           justifyContent:'center',
           alignItems:'center'}}
        >
           <Text style={{
               fontFamily:FONTS.SemiBold,
               fontSize:12,
               color:!item.available? '#777777' : selected ? COLORS.LightGray1 : COLORS.LightGray1 
               }}>{item.name}</Text>

       </TouchableOpacity>
    )
}