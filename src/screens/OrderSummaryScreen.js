import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image, useWindowDimensions} from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { COLORS, FONTS } from '../Const'
import TicketLine from '../components/TicketLine'
import { useSelector } from 'react-redux'



export default function OrderSummaryScreen({navigation}) {
  const {width,height}  = useWindowDimensions();
  const {day,cinema,hour,ticketPrice,selectedSeats}  = useSelector(state=>state.Order)
  const {filmData}  = useSelector(state=>state.Film)
  return (
    <View style={{flex:1,backgroundColor:'#F5F5F5'}}>
      <Header title='Order Summary' back={true} navigation={navigation} />
      <View style={{flex:1}}>
        <ScrollView>

          <View style={styles.card}>

              <View style={{flexDirection:'row'}}>
                <Image
                source={{uri :filmData.image}}
                style={styles.image}
                />

                <View style={styles.filmDetailBox}>
                  <Text style={styles.filmName}>{filmData?.title}</Text>
                  <Text style={styles.cinemaName}>{cinema?.name}</Text>
                  <Text style={styles.date}>{day?.day}, {day?.date}, {hour}</Text>
                </View>

              </View>

              <View style={{position: 'relative',flexDirection:'row',alignItems:'center'}}>
                <View style={{...styles.ticketCircle,left:-40}}></View>
                <TicketLine fill='#f5f5f5' height={8} />
                <View style={{...styles.ticketCircle,right:-40}}></View>
              </View>

              <View style={{marginTop:30}}>
                
              <Text style={styles.title}>Order Number</Text>
              <Text style={styles.desc}>1198804794001625088</Text>
                
              <Text style={styles.title}>Seat</Text>
              <Text style={styles.desc}>{selectedSeats?.length > 0 ?  selectedSeats?.join(',') : '-'}</Text>
                
              <Text style={styles.title}>Regular Seat</Text>
              <Text style={styles.desc}>Rp{ticketPrice} <Text style={{fontSize:15,color:'#777'}}>x {selectedSeats?.length}</Text></Text>


              <Text style={styles.title}>Convenience Fee</Text>
              <Text style={styles.desc}>Rp3.000 <Text style={{fontSize:15,color:'#777'}}>x {selectedSeats?.length}</Text></Text>


              <View style={{height:.3,backgroundColor:COLORS.DarkGray}} />

              <Text style={[styles.title,{marginTop:15}]}>Actual Pay</Text>
              <Text style={[styles.desc,{fontSize:30,lineHeight:30}]}>Rp{(parseInt(ticketPrice*selectedSeats?.length) + selectedSeats?.length*3000)}</Text>


              </View>


          </View>

        </ScrollView>
      </View>
      <TouchableOpacity onPress={()=>navigation.navigate('Modals',{screen:'Payment'})} style={styles.Button}>
        <Text style={styles.ButtonText}>Confirm Payment</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  ticketCircle : {
    width:50,
    height:50,
    backgroundColor:'#f5f5f5',
    borderRadius:50,
    position:'absolute'
  },  
  title : {
    fontSize:15,
    fontFamily: FONTS.Medium,
    color:'#777777'
  },
  desc : {
    fontSize:20,
    fontFamily: FONTS.Medium,
    color : COLORS.DarkGray,
    lineHeight:20,
    marginBottom:16
  },
  filmName : {
    fontSize:20,
    fontFamily:FONTS.SemiBold,
    color : COLORS.DarkGray,
    
  },
  cinemaName : {
    fontSize:15,
    fontFamily:FONTS.SemiBold,
    color : COLORS.DarkGray,
  }, 
  date : {
    fontSize:12,
    fontFamily:FONTS.Regular,
    color : '#777777'
  }, 
  filmDetailBox: {
    padding:15,
    flexShrink:1
  },  
  image : {
    width:120,
    height:190,
    resizeMode:'cover',
    position: 'relative',
    top:-40,
    borderRadius:15
  },
  card : {
    borderRadius:10,
    padding:15,
    margin:16,
    backgroundColor:'white',
    marginTop:30
  },
  Button : {
    backgroundColor:COLORS.Primary,
    height:60,
    justifyContent:'center',
    alignItems:'center'
  },  
  ButtonText : {
      fontFamily : FONTS.Regular,
      fontSize:20,
      color : COLORS.LightGray
  }
})

