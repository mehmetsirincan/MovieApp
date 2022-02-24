import { View, Text, ScrollView, StyleSheet, TouchableOpacity,  useWindowDimensions, TextInput} from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { COLORS, FONTS } from '../Const'
import Radio from '../components/ui/Radio';
import CreditCard from '../components/CreditCard';
import { Dana, Visa } from '../icons';
import SelectBox from '../components/ui/SelectBox';
import { useToast } from 'native-base';
import { useSelector } from 'react-redux';



export default function PaymentScreen({navigation}) {
  const {width,height}  = useWindowDimensions();
  const toast = useToast();
  const {day,cinema,hour,ticketPrice,selectedSeats}  = useSelector(state=>state.Order)
  return (
    <View style={{flex:1,backgroundColor:'#F5F5F5'}}>
      <Header title='Payment Method' back={true} navigation={navigation} />
      <View style={{flex:1}}>
        <ScrollView>

        <Text style={styles.timeAlert}>Finish your payment in 06:55</Text> 

        <View style={styles.Information}>
            <View style={{flex:1,justifyContent:'space-between',flexDirection:'row'}}>
                <Text style={styles.leftText}>Regular Seat</Text>
                <Text style={styles.rightText}>Rp{ticketPrice}<Text style={{fontSize:15,color:'#777'}}> x {selectedSeats?.length}</Text></Text>
            </View>    
            <View style={{flex:1,justifyContent:'space-between',flexDirection:'row'}}>
                <Text style={styles.leftText}>Convenience Fee</Text>
                <Text style={styles.rightText}>Rp3.000<Text style={{fontSize:15,color:'#777'}}> x {selectedSeats?.length}</Text></Text>
            </View>    
        </View>     

        <View style={{flex:1,justifyContent:'space-between',flexDirection:'row',alignItems:'center',margin:16,marginTop:0}}>
            <Text style={styles.leftText}>Actual Pay</Text>
            <Text style={[styles.rightText,{fontSize:25}]}>Rp{(parseInt(ticketPrice*selectedSeats?.length) + selectedSeats?.length*3000)}</Text>
        </View>    

        <Text style={styles.paymentTitle}>Recent Payment Method</Text>

        <TouchableOpacity style={styles.activeButton}>
          <View style={{flex:1,flexDirection:'row'}}>
             <Radio active={true} />
             <Text style={styles.activeButtonText}>Account Balance</Text>
          </View>
          <Text style={{...styles.activeButtonText,fontSize:20}}>Rp50.000</Text>
        </TouchableOpacity>
        <Text style={styles.balanceError}>Insufficient balance</Text>

        <CreditCard active={false} card={<Visa fill={COLORS.DarkGray} />} lastdigid={'3490'} hiddenvalue={true} />
        <CreditCard active={false} card={<Dana fill={COLORS.DarkGray} />} lastdigid={'089xxxxxx212'} hiddenvalue={false} />

        <Text style={[styles.paymentTitle,{marginTop:25}]}>Add Payment Method</Text>

        <View style={{margin:16}}>
          <SelectBox defaultValue={'Bank Transfer'} selectData={[{id:1,name:'Bank Transfer'},{id:2,name :'Credit Card'}]} />
          
          <View style={{flexDirection:'row'}}>

            <View style={{flex:1,marginVertical:10,marginRight:5}}>
               <SelectBox defaultValue={'BNI'} selectData={[{id:1,name:'BNI'},{id:2,name :'CNI'},{id:3,name : 'DNI'}]} />
            </View>

            <View style={{flex:1,marginVertical:10,marginLeft:5}}>
               <TextInput style={styles.input} placeholder='Account Number' />
            </View>

          </View>
        </View>

        </ScrollView>
      </View>
      <TouchableOpacity onPress={()=>{
        toast.show({
          title: "Successful!",
          status: "success",
          placement : "top",
          description: "Your purchase has been made successfully."
        }), navigation.navigate('App')
      }} style={styles.Button}>
        <Text style={styles.ButtonText}>Confirm</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    input : {
      backgroundColor :'#C4C4C4',
      borderRadius :22,
      paddingHorizontal : 24,
      fontSize:14,
      lineHeight:14,
      color : COLORS.DarkGray,
      fontFamily:FONTS.SemiBold
    },  
    balanceError : {
      color:'#EF5555',
      fontSize:13,
      lineHeight:13,
      marginLeft:40
    },
    activeButtonText : {
      fontFamily : FONTS.SemiBold,
      fontSize:15,
      color: COLORS.LightGray,
      marginLeft : 16
    },
    activeButton : {
        backgroundColor:COLORS.Primary,
        borderRadius:30,
        padding:16,
        margin:16,
        flexDirection:'row',
        alignItems: 'center',
    },
    paymentTitle : {
      color: COLORS.DarkGray,
      fontSize:15,
      paddingLeft:16,
      fontFamily:FONTS.SemiBold
    },  
   rightText : {
    fontFamily: FONTS.SemiBold,
    fontSize:20,
    color:COLORS.DarkGray
  },   
  leftText : {
    fontFamily: FONTS.Regular,
    fontSize:15,
    color:COLORS.DarkGray
  },    
  Information : {
    borderBottomColor:COLORS.DarkGray,
    borderBottomWidth:.5,
    margin:16,
    paddingBottom:10,
    margnBottom:0
  },
  timeAlert : {
    fontFamily : FONTS.Regular,
    fontSize:15,
    color:'#EF5555',
    textAlign:'center',
    backgroundColor:'#DDD',
    paddingVertical:8
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

