import { View, Text, TouchableOpacity,StyleSheet, useColorScheme} from 'react-native'
import React from 'react'
import { COLORS, FONTS } from '../Const'
import { useState } from 'react';
import Schedule from './Schedule';

export default function FilmDetailTabs() {
  const [activeTab,setActiveTab] = useState('schedule')
  const scheme = useColorScheme();

  

  return (
    <View>
        
        <View style={{flexDirection:'row'}}>

        <TouchableOpacity style={{...activeTab=='schedule'?styles.activeTabButton:styles.tabButton,borderBottomColor:scheme=='dark'?activeTab=='schedule'?COLORS.LightPurple:COLORS.LightGray1:activeTab=='schedule'?COLORS.DarkGray:'#ddd'}} onPress={()=>setActiveTab('schedule')}>
            <Text style={{...activeTab == 'schedule'?styles.tabactivetext : styles.tabtext,color:scheme=='dark'?COLORS.LightGray : COLORS.DarkGray}}>Schedule</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{...activeTab=='synopsis'?styles.activeTabButton:styles.tabButton,borderBottomColor:scheme=='dark'?activeTab=='synopsis'?COLORS.LightPurple:COLORS.LightGray1:activeTab=='synopsis'?COLORS.DarkGray:'#ddd'}} onPress={()=>setActiveTab('synopsis')}>
            <Text style={{...activeTab == 'synopsis'?styles.tabactivetext : styles.tabtext,color:scheme=='dark'?COLORS.LightGray : COLORS.DarkGray}}>Synopsis</Text>
        </TouchableOpacity>

        </View>

        {activeTab == 'schedule' &&  <Schedule /> }

        <View style={{height:100}}></View>
        


    </View>
  )
}

const styles = StyleSheet.create({
        tabactivetext : {
            fontFamily:FONTS.Bold,
            fontSize:20
        },
        tabtext : {
            fontFamily:FONTS.Regular,
            fontSize:20
        },
        activeTabButton : {
            flex:1,
            justifyContent:'center',
            alignItems:'center',
            borderBottomWidth:1.5,
            paddingVertical:5
        },
        tabButton : {
            flex:1,
            justifyContent:'center',
            alignItems:'center',
            borderBottomWidth:1,
            paddingVertical:5
        }
})