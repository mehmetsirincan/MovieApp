import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import { COLORS, FONTS } from '../Const'

export default function Loading() {
  return (
    <View style={{flex:1,justifyContent: 'center',alignItems:'center'}}>
        <ActivityIndicator size='large' color={COLORS.Primary} />
        <Text style={{fontFamily:FONTS.Medium,fontSize:15,marginTop:5}}>Loading...</Text>
    </View>
  )
}