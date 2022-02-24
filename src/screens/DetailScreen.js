import { View, Text,TouchableOpacity, Platform, StyleSheet, ScrollView,  useColorScheme, useWindowDimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ImageHeaderScrollView, TriggeringView } from 'react-native-image-header-scroll-view';
import { ArrowLeft,Heart, PlayIcon, Star} from '../icons';
import { COLORS, FONTS } from '../Const';
import FilmDetail from '../components/FilmDetail';
import FilmDetailTabs from '../components/FilmDetailTabs';
import Loading from '../components/Loading';
import {useSelector,useDispatch} from 'react-redux';
import Actions from '../redux/actions';
import { useToast } from 'native-base';

export default function DetailScreen({route,navigation}) {
   const {width,height}  = useWindowDimensions();
  const scheme = useColorScheme();
  const MIN_HEIGHT = Platform.OS === 'ios' ? 90 : 55;
  const MAX_HEIGHT = width > height ? height /2 : 250;

  const toast = useToast();

  const {filmData,filmError,filmLoading}  = useSelector(state=>state.Film)
  const {day,cinema,hour}  = useSelector(state=>state.Order)


  const dispatch = useDispatch();
  const [liked,setLiked] = useState(false);
  const [loading,setLoading] = useState(true);

  useEffect(()=>{
    if(!route.params?.id){
        navigation.goBack();
    }else{
        dispatch(Actions.FilmAction.getFilmData(route.params?.id));
    }
  },[dispatch])

  useEffect(()=>{
    if(filmError){
        navigation.goBack();
    }
  },[filmError])

  useEffect(()=>{
    
    if(filmData?.id === route.params?.id){
        setLoading(false);
    }
  },[filmData])


  const takeaSeat = () => {
      if(!day || !cinema?.name || !hour){
        toast.show({
            title: "Something went wrong",
            status: "error",
            description: "Please fill in all fields."
          })
      }else{
        navigation.navigate('Modals',{screen : 'TakeSeat'})
      }
   
  }



  const shadow = scheme == 'dark' ? {} : {
    shadowColor: "#333",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  }

  const RenderCategory = ({data,index})=>{
    return(
        <TouchableOpacity key={index} style={{...styles.Button,backgroundColor:scheme === 'dark' ? COLORS.DarkGray : COLORS.LightGray}}>
            <Text style={{...styles.buttonText,color:scheme === 'dark' ? COLORS.LightGray : COLORS.DarkGray}}>{data}</Text>
        </TouchableOpacity>
    )
  }

  if(loading) return  <Loading />

 
  const RenderForeground = ()=>{
      return(
        <View style={styles.headerContainer}>

            <View style={styles.headerTop}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <ArrowLeft fill='white' width={24} height={24} />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>setLiked(!liked)}>
                    <Heart fill={liked  ? 'white' : 'none'} stroke="white" width={24} height={24} />
                </TouchableOpacity>
            </View>

            <View style={styles.headerContent}>
                
                <Text style={styles.Title}>{filmData?.title}</Text>
                <View style={styles.IMDBBox}>
                    <Star width={16} height={16} />
                    <Text style={styles.imbdbTEXT}>{filmData?.imdb} / 10 from IMDb</Text>
                </View>
                <ScrollView horizontal={true} style={{maxHeight:60,marginTop:20}} showsHorizontalScrollIndicator={false}>
                    {filmData?.categoryList?.length > 0 &&
                        <View style={styles.categoryContainer}>
                        {filmData?.categoryList?.map((e,index)=><RenderCategory data={e} index={index}/>)}
                        </View>
                    }
                </ScrollView>

            </View>

            <TouchableOpacity style={{...styles.playBox,...shadow,backgroundColor:scheme == 'dark' ?  COLORS.LightPurple : '#fff' }}>
                <PlayIcon fill={scheme == 'dark' ? COLORS.LightGray : COLORS.Primary} />
            </TouchableOpacity>

        </View>
      )
  }
 
  const RenderFixedForeground = ()=>{
      return(
        <View style={styles.headerContainer}>

            <View style={styles.headerTop}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <ArrowLeft fill='white' width={24} height={24} />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>setLiked(!liked)}>
                    <Heart fill={liked  ? 'white' : 'none'} stroke="white" width={24} height={24} />
                </TouchableOpacity>
            </View>
        </View>
      )
  }

  return (
      <View style={{flex:1}}>
         
        <ImageHeaderScrollView
        maxHeight={MAX_HEIGHT}
        minHeight={MIN_HEIGHT}
        headerImage={{uri:filmData?.coverImage}}
        renderFixedForeground={() => <RenderFixedForeground />}
        renderForeground={()=><RenderForeground />}
        childrenStyle={{zIndex:10}}
        foregroundParallaxRatio={20}
        foregroundExtrapolate={'identity'}
        fadeOutForeground={false}
        >
        <View style={{ flex:1,backgroundColor: scheme==='dark'? COLORS.PrimaryDark :'#F5F5F5',padding:20}}>
            <TriggeringView >

                <FilmDetail />
                <FilmDetailTabs />

            </TriggeringView>
        </View>
        </ImageHeaderScrollView>

        <TouchableOpacity onPress={()=>takeaSeat()} style={{...styles.takeSeatButton,backgroundColor:scheme === 'dark' ? COLORS.LightPurple : COLORS.PrimaryDark }}>
            <Text style={styles.takeSeatButtonText}>Take a Seat</Text>
        </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
    headerContainer : {
        position: 'relative',
        flex:1,
        padding:20,
        backgroundColor:'rgba(28, 26, 41, 0.55)'
    },
    headerTop : {
        flexDirection:'row',justifyContent: 'space-between'
    },
    headerContent : {
        flex:1,
        justifyContent: 'center'
    },
    Title : {
        color : COLORS.LightGray,
        fontSize:25,
        fontFamily:FONTS.Bold
    },
    imbdbTEXT : {
        fontSize: 15,
        fontFamily : FONTS.Regular,
        color : COLORS.LightGray,
        marginLeft:5
    },
    IMDBBox : {
        flexDirection: 'row',
        alignItems: 'center',
    },
    categoryContainer : {
        flexDirection:'row'
    },  
    buttonText : {
        fontSize:15,
        fontFamily:FONTS.Regular
    },
    Button : {
        paddingHorizontal:16,
        height:35,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:16,
        marginRight:10
    },
    playBox : {
        position:'absolute',
        right:20,
        bottom:-33.5,
        width:67,
        height:67,
        borderRadius:67,
        justifyContent: 'center',
        alignItems:'center',
        zIndex:2
    },
    takeSeatButton : {
        position:'absolute',
        bottom:0,
        left:0,
        width:'100%',
        justifyContent: 'center',
        alignItems:'center',
        height:60,
        zIndex:5
    },
    takeSeatButtonText : {
        fontFamily:FONTS.Regular,
        fontSize:20,
        color:'white'
    }
})