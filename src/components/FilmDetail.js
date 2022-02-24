import { View, Text, Image,StyleSheet, useColorScheme } from 'react-native'
import React from 'react'
import { COLORS, FONTS } from '../Const'
import { useSelector } from 'react-redux';


export default function FilmDetail({data}) {
    const scheme = useColorScheme();
    const {filmData} = useSelector(state=>state.Film);
  return (
    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
     
          <Image
          source={{uri :filmData?.image}}
          style={{width:100,height:170}}
          />

          <View style={{flex:1,padding:20}}>

                <View style={styles.col}>
                    <Text style={{...styles.Text,width:60}}>Director </Text>
                    <Text style={{...styles.Text,color:scheme=='dark'?COLORS.LightGray:COLORS.DarkGray}}> : Kimo Stamboel</Text>
                </View>

                <View style={styles.col}>
                    <Text style={{...styles.Text,color:scheme=='dark'?COLORS.LightGray:COLORS.DarkGray,width:60}}>Writter </Text>
                    <Text style={{...styles.Text,color:scheme=='dark'?COLORS.LightGray:COLORS.DarkGray}}> : Joko Anwar</Text>
                </View>

                <View style={styles.col}>
                    <Text style={{...styles.Text,color:scheme=='dark'?COLORS.LightGray:COLORS.DarkGray,width:60}}>Duration </Text>
                    <Text style={{...styles.Text,color:scheme=='dark'?COLORS.LightGray:COLORS.DarkGray}}> : 1 hour 38 Minute(s)</Text>
                </View>

                <View style={styles.col}>
                    <Text style={{...styles.Text,color:scheme=='dark'?COLORS.LightGray:COLORS.DarkGray,width:60}}>Rating </Text>
                    <Text style={{...styles.Text,color:scheme=='dark'?COLORS.LightGray:COLORS.DarkGray}}> : D 17(+)</Text>
                </View>

          </View>

    </View>
  )
}

const styles = StyleSheet.create({
    col : {
        flexDirection:'row',
        marginBottom:16
    },
    Text : {
        fontFamily:FONTS.Regular,
        fontSize:15
    }
})