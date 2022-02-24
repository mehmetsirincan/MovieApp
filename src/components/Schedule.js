import { View, Text, FlatList, useColorScheme, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLORS, FONTS } from '../Const';
import { Actionsheet  } from "native-base";
import { ArrowDown } from '../icons';
import { useDispatch, useSelector } from 'react-redux';
import Actions from '../redux/actions';

const {width,height}  = Dimensions.get('window');

export default function Schedule() {
    const [openActionSheet,setOpenActionSheet] = useState(false)
    const scheme = useColorScheme();
    const {dayList,day,cinemaList,cinema,hourList,hour,ticketPrice}  = useSelector(state=>state.Order)
    const orderLst  = useSelector(state=>state.Order)
    const dispatch = useDispatch();


    const setday = (id)=>{
        dispatch(Actions.OrderAction.setOrderData({day:id}));
    }

    const setHour = (hour)=>{
        dispatch(Actions.OrderAction.setOrderData({hour}));
    }
  

    const setCinema = (data)=>{
        dispatch(Actions.OrderAction.setCinema(data));
        setOpenActionSheet(false)
    }
  

    const RenderDay =({item})=>{
    
        if(scheme === 'dark'){
   
           return(
            <TouchableOpacity  onPress={()=>setday(item)}  key={item.id} disabled={item.disabled} style={{...styles.scheduleBox,backgroundColor:item.disabled ? '#282633' : day?.id == item.id ? COLORS.LightPurple : COLORS.PrimaryLight,borderColor : item.disabled || day == item.id ? 'transparent' : '#333'}}>
            <Text style={{...styles.date,color:item.disabled ? COLORS.PrimaryLight : day?.id == item.id ? COLORS.LightGray : COLORS.LightGray1}}>{item.date}</Text>
            <Text style={{...styles.day,color:item.disabled ? COLORS.PrimaryLight : day?.id == item.id ? COLORS.LightGray : COLORS.LightGray1}}>{item.day}</Text>
            </TouchableOpacity>
           )
   
        }else{
   
           return(
               <TouchableOpacity  onPress={()=>setday(item)}  key={item.id} disabled={item.disabled} style={{...styles.scheduleBox,backgroundColor:item.disabled ? '#ddd' : day?.id == item.id ? COLORS.Primary : '#fff',borderColor : item.disabled || day == item.id ? 'transparent' : '#333'}}>
                   <Text style={{...styles.date,color:day?.id == item.id ? '#fff' : COLORS.DarkGray}}>{item.date}</Text>
                   <Text style={{...styles.day,color:day?.id == item.id ? '#fff' : COLORS.DarkGray}}>{item.day}</Text>
               </TouchableOpacity>
           )
   
        }
     }

     const RenderTime = ({item,index}) => {
        
        const active = hour == item?.time ? true : false;

        if(scheme == 'dark'){

            return(
                <View key={index} style={{alignItems:'center'}}>
                    <TouchableOpacity  onPress={()=>setHour(item.time)} disabled={item.available === 0 ? true : false} style={{...styles.timeButton,backgroundColor: item.available === 0  ? '#282633' : active ? '#251977' : '#38354B',borderColor : active || item.available == 0  ? 'transparent' : COLORS.DarkGray}}>
                        <Text style={{...styles.time,color:item.available === 0 ? 'rgba(255, 255, 255, 0.3)' : active  ? COLORS.LightGray1 : COLORS.LightGray1}}>{item.time}</Text>
                        <Text style={{...styles.available,color:item.available === 0 ? 'rgba(255, 255, 255, 0.3)' : active  ? COLORS.LightGray1 : COLORS.LightGray1}}>{item.available === 0  ? 'All seat taken' : item.available + ' seat available'}</Text>
                    </TouchableOpacity>
                    {item.dolby &&
                        <Text style={{...styles.dolby,color:'rgba(255, 255, 255, 0.3)'}}>DOLBY <Text style={{fontFamily:FONTS.Medium}}>Atmos</Text></Text>
                    }
                </View>
            )

        }else{

            return(
                <View style={{alignItems:'center'}}>
                    <TouchableOpacity onPress={()=>setHour(item.time)} disabled={item.available === 0 ? true : false} style={{...styles.timeButton,backgroundColor: item.available === 0  ? '#ddd' : active ? COLORS.Primary : '#fff',borderColor : active || item.available == 0  ? 'transparent' : COLORS.DarkGray}}>
                        <Text style={{...styles.time,color:item.available === 0 ? '#777' : active  ? COLORS.LightGray : COLORS.DarkGray}}>{item.time}</Text>
                        <Text style={{...styles.available,color:item.available === 0 ? '#777' : active  ? COLORS.LightGray : COLORS.DarkGray}}>{item.available === 0  ? 'All seat taken' : item.available + ' seat available'}</Text>
                    </TouchableOpacity>
                    {item.dolby &&
                        <Text style={styles.dolby}>DOLBY <Text style={{fontFamily:FONTS.Medium}}>Atmos</Text></Text>
                    }
                </View>
            )

        }
        
     }


    return(
        <View style={{marginTop:11}}>

        {dayList?.length > 0 &&
            <FlatList 
            data={dayList}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            keyExtractor={e=>e.id}
            renderItem={({item})=><RenderDay item={item} />}
            />
        }

        <Text style={{...styles.selectBoxTitle,color:scheme === 'dark' ? COLORS.LightGray : COLORS.DarkGray}}>Select Cinema</Text>

        <TouchableOpacity onPress={()=>setOpenActionSheet(true)} style={{...styles.selectBox,borderBottomColor:scheme == 'dark' ? COLORS.LightGray1 :  COLORS.DarkGray}}>
            <Text style={{...styles.selectText,color:scheme === 'dark' ? COLORS.LightGray : COLORS.DarkGray}}>{cinema?.name ? cinema.name : 'Please select cinema'}</Text>
            <ArrowDown width={15} height={15} fill={'#333'}/>
        </TouchableOpacity> 

        <Actionsheet isOpen={openActionSheet} onClose={()=>setOpenActionSheet(false)}>
        <Actionsheet.Content>
            {cinemaList?.length > 0 &&
                cinemaList?.map(e=>
                    <Actionsheet.Item style={{fontFamily:cinema?.id == e.id ? FONTS.Bold : FONTS.Regular}} key={e.id} onPress={()=>{setCinema(e)}}>{e.name}</Actionsheet.Item>
                )
            }
        </Actionsheet.Content>
        </Actionsheet>


        <View style={{flexDirection:'row',justifyContent: 'space-between',marginTop:16}}>
            <Text style={{...styles.ticketName,color:scheme === 'dark' ? COLORS.LightGray : COLORS.DarkGray}}>REGULAR 2D</Text>
            <Text style={{...styles.ticketPrice,color:scheme === 'dark' ? COLORS.LightGray : COLORS.DarkGray}}>Rp {ticketPrice}</Text>
        </View>

        {hourList?.length > 0 &&
        <FlatList 
            data={hourList}
            renderItem={({item},index)=><RenderTime item={item} index={index} />}
            keyExtractor={(e,index) => index}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
        />
        }



        </View>
    )
}


const styles = StyleSheet.create({
    dolby : {
        fontFamily: FONTS.Bold,
        fontSize:10,
        color:COLORS.DarkGray
    },
    time : {
        fontFamily : FONTS.Bold,
        lineHeight:15,
        fontSize: 15
    },
    available : {
        fontFamily : FONTS.Regular,
        fontSize: 10
    },
    timeButton: {
        marginTop:16,
        marginRight:8,
        justifyContent: 'center',
        alignItems:'center',
        paddingHorizontal:17,
        paddingVertical:10,
        borderRadius:4,
        borderWidth:1,
        minWidth:width > height ? width/5 : width/3.5
    }, 
    ticketName  : {
        fontFamily: FONTS.Bold,
        fontSize : 15
    },
    ticketPrice : {
        fontFamily : FONTS.Regular,
        fontSize:15
    },
    selectBox : {
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        borderBottomWidth:1,
        paddingVertical:10
    },
    selectBoxTitle: {
        flex:1,
        marginBottom:8,
        marginTop:20,
        fontSize:11,
        fontFamily: FONTS.Regular
    },
    selectText: {
        flex:1,
        fontSize:15,
        fontFamily: FONTS.SemiBold
    }
    ,
    scheduleBox : {
        borderRadius:5,
        width:48,
        height:48,
        justifyContent: 'center',
        alignItems:'center',
        borderWidth:1,
        borderColor:COLORS.DarkGray,
        marginRight: 8
    },
    date : {
        fontSize:10,
        lineHeight:10,
        fontFamily:FONTS.Regular
    },
    day : {
        fontSize:15,
        lineHeight:18,
        fontFamily:FONTS.Bold
    }
})