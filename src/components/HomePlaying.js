import { View, Text, useWindowDimensions, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useRef,useState } from 'react'
import Carousel from 'react-native-snap-carousel';
import { COLORS, FONTS } from '../Const';
import { Star } from '../icons';
import { useSelector } from 'react-redux';


export default function HomePlaying({scheme,navigation}) {

    const {width,height}  = useWindowDimensions(); 
    let _carousel= useRef(null);

    const CarouselWidth  = width;
    const itemWidth  = width > height ? width/5 : width/2;
    const ImageHeight  = 295;
    const [activeSlider,setActiveSlider] = useState(1)
    const {film} = useSelector(state=>state.Film.homedata)


    const _renderItem = ({item, index}) => {
       
        return (
            <TouchableOpacity onPress={()=>navigation.navigate('Modals',{screen:'Detail',params:{id:item.id}})} style={styles.slide}>
                <Image source={{uri : item.image}} style={{
                    width:'100%',height:ImageHeight,borderRadius:10
                }} />
            </TouchableOpacity>
        );
    }

    const color = scheme === 'dark' ? COLORS.LightGray: COLORS.DarkGray;

  return (
    <View>
     
      <View style={styles.HeaderContainer}>
        <Text style={{...styles.HeaderTitle, color}}>Playing</Text>
        <TouchableOpacity>
            <Text style={{...styles.seeAllText, color:scheme === 'dark' ? COLORS.LightGray1: COLORS.DarkGray1}}>See All ></Text>
        </TouchableOpacity>
      </View>
       
      <Carousel
            data={film}
            layout='default'
            enableSnap={true}
            renderItem={_renderItem}
            sliderWidth={CarouselWidth}
            itemWidth={itemWidth}
            firstItem={width > height ? 2 : activeSlider}
            shouldOptimizeUpdates={true}
            inactiveSlideScale={0.9}
            onSnapToItem={e=>{
            setActiveSlider(e)
            }}
            ref={(c) => { _carousel = c; }}
        />

        {film?.length > 0 && 
        <View style={styles.ActiveItemContainer}>

            <Text style={{...styles.Year,backgroundColor:scheme === 'dark' ? '#033705': '#0E840C'}}>{film[activeSlider].year}</Text>

            <Text style={{...styles.activeTitle,color}}>{film[activeSlider].title}</Text>

            <View style={{flexDirection:'row',alignItems:'center'}}>

                <View style={{flexDirection:'row',marginRight:20,alignItems: 'center',}}>
                    <Star/>
                    <Text style={styles.IMDB}>{film[activeSlider].imdb}</Text>
                </View>

                <Text style={styles.category}>{film[activeSlider].category}</Text>

            </View>
        </View>
        }

    </View>
  )
}

const styles = StyleSheet.create({
    HeaderContainer : {
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems:'center',
        marginTop:30,
        marginHorizontal:16,
        marginBottom:16
    },  
    HeaderTitle : {
        fontFamily:FONTS.Bold,
        fontSize:25
    },  
    seeAllText : {
        fontFamily:FONTS.Light,
        fontSize:15
    },
    slide : {
        justifyContent:'center',
        alignItems:'center'
    },
    ActiveItemContainer : {
        justifyContent:'center',
        alignItems:'center',
        marginTop:17
    },
    Year : {
        paddingHorizontal:17,
        paddingVertical:5,
        backgroundColor:'red',
        borderRadius:15,
        marginBottom:7,
        color:'white',
        fontFamily:FONTS.Regular,
        fontSize:12
    },
    activeTitle : {
        fontFamily:FONTS.SemiBold,
        fontSize:25,
        marginBottom:6
    },
    IMDB : {
        fontSize:15,
        color:COLORS.DarkGray1,
        fontFamily:FONTS.Regular,
        marginLeft:4.8
    },
    category : {
        fontSize:15,
        color:COLORS.DarkGray1,
        fontFamily:FONTS.Regular
    }
})