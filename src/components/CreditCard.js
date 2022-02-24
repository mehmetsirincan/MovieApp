import { View, Text } from 'react-native'
import React from 'react'
import { COLORS, FONTS } from '../Const'
import Radio from './ui/Radio'
import { Visa } from '../icons'

export default function CreditCard({active,card,lastdigid,hiddenvalue}) {
  return (
    <View style={styles.container}>
        
        <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
            <Radio active={active} />
            <View style={{marginLeft:16}}>
                {card}
            </View>
            <Text style={styles.cardText}>{hiddenvalue && '●●●'} {lastdigid}</Text>
        </View>

        <Text style={styles.cardText}>11/21</Text>
        
    </View>
  )
}

const styles = {
    cardText:  {
        marginLeft:16,
        fontFamily:FONTS.SemiBold,
        fontSize:15
    },
    container : {
        backgroundColor:'transparent',
        borderRadius:30,
        padding:16,
        margin:16,
        flexDirection:'row',
        borderWidth:0.8,
        borderColor:COLORS.DarkGray,
        alignItems: 'center',
        marginBottom:0
    }
}