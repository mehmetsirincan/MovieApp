import { View, Text, ScrollView, useWindowDimensions, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import Header from '../components/Header'
import { Clock,Marker } from '../icons'
import { COLORS, FONTS } from '../Const'
import CinemaScreenTitle from '../components/CinemaScreenTitle'
import SelectSeat from '../components/SelectSeat'
import { useDispatch, useSelector } from 'react-redux'
import { useToast } from 'native-base';
import Actions from '../redux/actions'

export default function TakeSeatScreen({navigation}) {
    const {width,height}  = useWindowDimensions();
    const {day,cinema,hour,ticketPrice,selectedSeats,seatsList}  = useSelector(state=>state.Order)

    const toast = useToast();

    const dispatch = useDispatch();

    useEffect(()=>{
        if(seatsList?.length < 1){
            navigation.goBack();
        }else{
            dispatch(Actions.OrderAction.removeAllSeat());
        }

    },[seatsList])

    const PayNow = () => {
        if(selectedSeats?.length < 1){
            toast.show({
            title: "Something went wrong",
            status: "error",
            description: "You must select at least one seat.."
          })
        }else{
            navigation.navigate('Modals',{screen:'OrderSummary'})
        }
        
    }
  return (
    <View style={{flex:1}}>
    <ScrollView  contentContainerStyle={{ flexGrow: 1 }}>
            <Header title='Choose Seat' back={true} navigation={navigation} right={<Clock width={25}height={25} fill={COLORS.DarkGray} />} />

            <View style={{flex:.6}}>

            <View style={{justifyContent:'center',alignItems:'center'}}>
                <Text style={[styles.cinemaTitle,{}]}>Cinema Screen</Text>
                <CinemaScreenTitle width={'100%'}  />
            </View>

            <View style={styles.statusInfoBox}>
                <View style={styles.boxItem}>
                    <View style={[styles.box,{backgroundColor:COLORS.Primary}]}></View>
                    <Text style={styles.boxText}>Available</Text>
                </View>
                <View style={styles.boxItem}>
                    <View style={[styles.box,{backgroundColor:'#CCC'}]}></View>
                    <Text style={styles.boxText}>Unvailable</Text>
                </View>
                <View style={styles.boxItem}>
                    <View style={[styles.box,{backgroundColor:COLORS.LightPurple}]}></View>
                    <Text style={styles.boxText}>Selected</Text>
                </View>
            </View>

            </View>

            <View style={{flex:.8}}>
                <SelectSeat />
            </View>

            <View style={{flex:1.4}}>
                <View style={styles.ticketBox}>

                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Marker width={16} height={20} fill={COLORS.DarkGray} />
                            <Text style={styles.cinemaName}>{cinema?.name}</Text>
                        </View>

                        <View style={styles.details}>

                            <View style={{...styles.detail,paddingLeft:0}}>
                                <Text style={styles.detailTitle}>Date</Text>
                                <Text style={styles.detailVal}>{day?.date}</Text>
                            </View>

                            <View style={{height:28,width:1,backgroundColor:COLORS.DarkGray}}></View>

                            <View style={styles.detail}>
                                <Text style={styles.detailTitle}>Hour</Text>
                                <Text style={styles.detailVal}>{hour}</Text>
                            </View>

                            <View style={{height:28,width:1,backgroundColor:COLORS.DarkGray}}></View>

                            <View style={styles.detail}>
                                <Text style={styles.detailTitle}>Seats</Text>
                                <Text style={[styles.detailVal,{flexWrap:'wrap'}]}>{selectedSeats?.length > 0 ? selectedSeats?.join(',') : '-'}</Text>
                            </View>
                        </View>

                        <Text style={styles.totalPrice}>Total Price</Text>
                        <Text style={styles.price}>Rp{selectedSeats?.length > 0 ? selectedSeats?.length * ticketPrice : '0.00'}</Text>

                        <Text style={styles.description}>Children (2 years old or above) are required to purchase ticket.</Text>

                </View>
            </View>

            <TouchableOpacity onPress={()=>PayNow()} activeOpacity={1} style={styles.payButton}>
              <Text style={styles.payButtonText}>Pay Now</Text>
            </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    payButton : {
        position :'absolute',
        left:0,
        right:0,
        bottom:0,
        backgroundColor:COLORS.Primary,
        height:60,
        justifyContent:'center',
        alignItems:'center'
    },  
    payButtonText : {
        fontFamily : FONTS.Regular,
        fontSize:20,
        color : COLORS.LightGray
    },
    totalPrice : { 
        fontFamily: FONTS.Medium,
        fontSize:15,
        color: COLORS.DarkGray
    },
    price : {
        fontSize:25,
        fontFamily : FONTS.SemiBold,
        color : COLORS.LightPurple,
        lineHeight:30
    }, 
    description : {
        fontSize:12,
        fontFamily:FONTS.Regular,
        color : '#777777',
        marginTop:20
    },
    details : {
        flexDirection:'row',
        alignItems:'center'
    }, 
    detail : {
        justifyContent:'center',
        padding:10,
        paddingHorizontal:20
    },  
    detailTitle : {
        fontFamily: FONTS.Medium,
        fontSize:15,
        color: COLORS.DarkGray
    },
    detailVal : {
        fontFamily: FONTS.Medium,
        fontSize:18,
        lineHeight:18,
        color: COLORS.DarkGray
    },  
    cinemaName : {
        color : COLORS.DarkGray,
        fontSize:20,
        fontFamily:FONTS.SemiBold,
        marginLeft:10
    }, 
    ticketBox: {
        backgroundColor:'white',
        borderTopLeftRadius:32,
        borderTopRightRadius:32,
        flex:1,
        padding:16,
        paddingBottom:60
    },
    boxItem : {
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'center',
    },
    box : {
        width:16,
        height:16
    },  
    boxText : {
        fontSize:13,
        fontFamily:FONTS.Regular,
        marginLeft:  8
    },
    statusInfoBox: {
        justifyContent: 'space-between',
        flexDirection:'row',
        marginTop:-20,
    },
    cinemaTitle : {
        fontSize: 15,
        color:'white',
        fontFamily : FONTS.Regular,
        position: 'absolute',
        zIndex:3,
        top:'10%'
    }
})