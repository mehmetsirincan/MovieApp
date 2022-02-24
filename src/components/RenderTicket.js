import { View, Text, StyleSheet, Image, useWindowDimensions } from 'react-native'
import React from 'react'
import { COLORS, FONTS } from '../Const'
import { Marker } from '../icons'
import TicketLine from './TicketLine'
import Barcode from '@kichiyaki/react-native-barcode-generator';



export default function RenderTicket({layoutWidth}) {
    const {width,height}  = useWindowDimensions();
  return (
    <View style={{flex:1}}>
      <View style={styles.card}>
          <Image source={{uri :'https://dahacokgezsek.com/wp-content/uploads/2016/04/into-the-wild-wannart-900x580-1.jpg'}}
          style={{
              resizeMode:'cover',
              height:140,
              width:'100%',
              borderTopLeftRadius : 10,
              borderTopRightRadius : 10
            }}
          />
          <View style={styles.cardContent}>

              <View style={{flexDirection:'row'}}>
                <Text style={styles.filmName}>RATU ILMU HITAM</Text>
                <Text style={styles.Year}>XXI</Text>
              </View>

              <View style={{flexDirection:'row',alignItems:'center',marginBottom:16}}>
                <Marker style={{transform:[{scale:0.7}]}}fill={COLORS.DarkGray} />
                <Text style={styles.cinemaName}>XXI Ambarukmo Plaza</Text>
               </View>

               <View style={styles.details}>

                    <View style={{...styles.detail,paddingLeft:0}}>
                        <Text style={styles.detailTitle}>Date</Text>
                        <Text style={styles.detailVal}>20 Nov</Text>
                    </View>

                    <View style={styles.detail}>
                        <Text style={styles.detailTitle}>Hour</Text>
                        <Text style={styles.detailVal}>15:05</Text>
                    </View>


                    <View style={[styles.detail,{borderRightWidth:0}]}>
                        <Text style={styles.detailTitle}>Seats</Text>
                        <Text style={styles.detailVal}>G10,G11</Text>
                    </View>

                </View>

                <View style={{position: 'relative',flexDirection:'row',alignItems:'center',marginTop:16}}>
                    <View style={{...styles.ticketCircle,left:-28}}></View>
                    <TicketLine fill='#f5f5f5' height={8} />
                    <View style={{...styles.ticketCircle,right:-28}}></View>
                </View>

                <Text style={[styles.detailTitle,{marginBottom:0}]}>Booking Code</Text>
                <Text style={styles.detailVal}>091821912301</Text>

                <Text style={[styles.detailTitle,{marginBottom:0,marginTop:10}]}>Pass Key</Text>
                <Text style={[styles.detailVal,{marginBottom:15}]}>129312</Text>

                <Barcode
                format="CODE128B"
                value="091821912301"
                maxWidth={layoutWidth-60}
                />


                

          </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    ticketCircle : {
        width:24,
        height:24,
        backgroundColor:'#f5f5f5',
        borderRadius:24,
        position:'absolute'
    },
    details : {
        flexDirection:'row',
        alignItems:'center',
    }, 
    detail : {
        justifyContent:'center',
        paddingHorizontal:20,
        borderRightWidth:0.3,
        borderRightColor: '#333333'
    },  
    detailTitle : {
        fontFamily: FONTS.Medium,
        fontSize:15,
        marginBottom:8,
        color: '#777777'
    },
    detailVal : {
        fontFamily: FONTS.Medium,
        fontSize:20,
        lineHeight:20,
        color: COLORS.DarkGray
    },
    cinemaName : {
        color : COLORS.DarkGray,
        fontSize:15,
        fontFamily:FONTS.SemiBold,
        marginLeft:10
    },
    filmName : {
        fontSize:20,
        fontFamily:FONTS.SemiBold,
        color : COLORS.DarkGray,
        flex:1
    },
    Year : {
        paddingHorizontal:17,
        paddingVertical:5,
        backgroundColor:'red',
        borderRadius:15,
        marginBottom:7,
        color:'white',
        fontFamily:FONTS.Regular,
        fontSize:12,
        backgroundColor:'#0E840C'
    },
    card : {
       margin:16,
       marginTop:30,
       flex:1,
       backgroundColor:'white',
       borderRadius:10
    },
    cardContent : {
        padding:16
    }
})