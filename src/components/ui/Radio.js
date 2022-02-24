import { View, Text } from 'react-native'
import React from 'react'
import { COLORS } from '../../Const'

export default function Radio({active}) {
  return (
    <View style={styles.container}>
        {active && <View style={styles.dot}></View>}
    </View>
  )
}

const styles  = {
    dot : {
        width: 10,
        height:10,
        borderRadius:10,
        backgroundColor : COLORS.Primary
    },
    container : {
        width:26,
        height:26,
        borderRadius : 26,
        backgroundColor:'#C4C4C4',
        justifyContent: 'center',
        alignItems: 'center',
    }
}