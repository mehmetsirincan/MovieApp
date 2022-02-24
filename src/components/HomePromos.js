import { View, Text, useWindowDimensions, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useRef,useState } from 'react'
import Carousel,{ Pagination } from 'react-native-snap-carousel';
import { COLORS, FONTS } from '../Const';
import { Star } from '../icons';
import { useSelector } from 'react-redux';



export default function HomePromos({scheme}) {

    const {width,height}  = useWindowDimensions();
    let _carousel= useRef(null);
    const {promos} = useSelector(state=>state.Film.homedata)

    const CarouselWidth  = width;
    const itemWidth  = width > height ? width/2 : width;
    const [activeSlider,setActiveSlider] = useState(0)


    const _renderItem = ({item, index}) => {
       
        return (
            <TouchableOpacity style={styles.slide}>
                <Image source={{uri : item}} style={{
                    width:'100%',height:180,resizeMode:'cover',borderRadius:10
                }} />
            </TouchableOpacity>
        );
    }

    const pagination=()=>{

        return (
            <Pagination
              dotsLength={promos?.length}
              activeDotIndex={activeSlider}
              containerStyle={{ position: 'absolute', zIndex:2,bottom:-20 }}
              dotStyle={{
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  marginHorizontal: 0,
                  backgroundColor: '#2815A6'
              }}
              inactiveDotStyle={{
                backgroundColor: '#fff'
              }}
              inactiveDotOpacity={1}
              inactiveDotScale={1}
            />
        );
    }



  return (
    <View style={{position:'relative',justifyContent: 'center',alignItems:'center'}}>
      
      <Text style={{...styles.title,color:scheme === 'dark' ? COLORS.LightGray: COLORS.DarkGray}}>Promo</Text>

      <Carousel
            data={promos}
            layout='default'
            enableSnap={true}
            renderItem={_renderItem}
            sliderWidth={CarouselWidth}
            itemWidth={itemWidth}
            firstItem={width > height ? 1 : 0}
            autoplay={true}
            activeSlideAlignment='center'
            onSnapToItem={e=>{
            setActiveSlider(e)
            }}
            ref={(c) => { _carousel = c; }}
        />
        {pagination()}


    </View>
  )
}

const styles = StyleSheet.create({ 
    title : {
        fontFamily:FONTS.Medium,
        fontSize:25,
        marginLeft:16,
        marginTop:40,
        marginBottom:12,
        alignSelf:'flex-start'
    },
    slide : {
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:16
    }
})