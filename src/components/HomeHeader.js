import { View, Text,StyleSheet, TouchableOpacity, useWindowDimensions } from 'react-native'
import React from 'react'
import { COLORS, FONTS } from '../Const'
import Button from './ui/Button'
import {ArrowDown,NotificationIcon} from '../icons'

export default function HomeHeader({scheme}) {

  const {width,height}  = useWindowDimensions();

  return (
    <View style={styles.Container}>
      
        <View style={{flex:1}}>
          <Text style={{...styles.Text,color:scheme === 'dark' ? COLORS.LightGray : COLORS.DarkGray}}>Rp 50.000</Text>
        </View>

        <Button style={{flexDirection:'row',maxWidth:width/2}}>
                  <Text style={{...styles.Text,color:scheme === 'dark' ? COLORS.LightGray: COLORS.DarkGray,marginRight:5}}>YogyaKarta</Text>
                  <ArrowDown fill={scheme === 'dark' ? COLORS.LightGray: COLORS.DarkGray} width={10} height={6} />
        </Button>    
     

      <TouchableOpacity style={{flex:1,alignItems:'flex-end'}}>
          <NotificationIcon width={24} height={24} fill={scheme === 'dark' ? COLORS.LightGray1 : COLORS.DarkGray} />
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
    Container : {
        flexDirection:'row',
        margin:20,
        justifyContent: 'space-between',
        alignItems:'center'
    },
    Text : {
        fontFamily:FONTS.Regular,
        fontSize:15
    }
})