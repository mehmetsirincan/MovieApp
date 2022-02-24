import { View, Text, useWindowDimensions, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { COLORS, FONTS } from '../Const';
import {useSelector,useDispatch} from 'react-redux'
import Actions from '../redux/actions';
import SeatRender from './SeatRender';
export default function SelectSeat() {
    const {width,height}  = useWindowDimensions();

    const {seatsList} = useSelector(state=>state.Order);
    const dispatch = useDispatch();

    
   

  

  return (
    <View style={{flex:1,minHeight:200,height:height/3-50,width}}>
        <ScrollView>
            <ScrollView horizontal>
                {seatsList?.length &&
                    seatsList.map((e,index)=>{
                        return(
                            <View key={index} style={{width:33*e?.numColumns,flexDirection:'row',flexWrap:'wrap',paddingVertical:20,marginRight:30}}>
                                {e?.seats?.length > 0 &&
                                    e?.seats?.map(data=> <SeatRender item={data} />)
                                }
                            </View>
                        )
                    })
                    
                }
            </ScrollView>
        </ScrollView>
    </View>
  )
}