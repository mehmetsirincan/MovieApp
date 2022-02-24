import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, FONTS } from '../Const'
import { BackIcon } from '../icons'

export default function Header({navigation,title,right,back}) {
  return (
    <View style={styles.container}>
        {back &&
            <TouchableOpacity style={styles.left} onPress={()=>navigation.goBack()}>
                <BackIcon width={22} height={15} fill={COLORS.DarkGray} />
            </TouchableOpacity>
         }
         
         <Text style={{...styles.text,color:COLORS.DarkGray}}>{title}</Text>

         {right &&
          <View style={styles.right}>
                {right}
          </View>
         }
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        flexDirection:'row',
        justifyContent: 'center',
        alignItems:'center',
        paddingVertical:20
    },
    text : {
        fontSize : 20,
        fontFamily : FONTS.Regular
    },
    right: {
        position: 'absolute',
        right:20
    },
    left: {
        position: 'absolute',
        left:20
    }
})