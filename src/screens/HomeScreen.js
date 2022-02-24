import { View, StyleSheet,  useColorScheme, ScrollView,Text, TouchableOpacity} from 'react-native'
import React, { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux';
import Actions from '../redux/actions';
import HomeBg from '../components/HomeBg';
import HomeHeader from '../components/HomeHeader';
import HomePlaying from '../components/HomePlaying';
import HomePromos from '../components/HomePromos';
import FooterSpace from '../components/FooterSpace';
import Loading from '../components/Loading';


export default function HomeScreen({navigation}) {
  const {homeloading} = useSelector(state=>state.Film)
  const dispatch = useDispatch()
  const scheme = useColorScheme();

  useEffect(()=>{
    dispatch(Actions.FilmAction.GetHomeData());
  },[dispatch])

  

  if(homeloading) return  <Loading />
 
  return (
    <View style={styles.Container}>
      <ScrollView>
        <HomeBg scheme={scheme} />
        <HomeHeader scheme={scheme} />
        <HomePlaying navigation={navigation} scheme={scheme} />
        <HomePromos scheme={scheme} />
        <FooterSpace />
      </ScrollView>
    </View>
  )
}


const styles = StyleSheet.create({
    Container : {
      flex:1
    },
    HomeBg : {
      position: 'absolute',
      backgroundColor:'yellow',
      left:0,top:0,
      width:'100%',
      height:'100%',
    }
})