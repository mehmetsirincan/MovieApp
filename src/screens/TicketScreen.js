import { View, Text, StyleSheet, useWindowDimensions, TouchableOpacity, ScrollView } from 'react-native'
import React, { useRef, useState }  from 'react'
import TicketBG from '../components/TicketBG'
import { COLORS, FONTS } from '../Const';
import RenderTicket from '../components/RenderTicket';
import Carousel from 'react-native-snap-carousel';

export default function TicketScreen() {
  const {width,height}  = useWindowDimensions();
  const [active,setActive] = useState('active');
  const [ActiveCarousel,setActiveCarousel] = useState(0);
  const [ticketContainerWidth,setticketContainerWidth] = useState();

  const data  = [{id:1},{id:2},{id:2},{id:2},{id:2},{id:2},{id:2},{id:2}]

  const onLayout = (event)=>{
    const {width} = event.nativeEvent.layout;
    setticketContainerWidth(width);
  }
  let refcarousel = useRef(null);
  return (
    <View style={styles.container}>

          {width < height &&
          <TicketBG  />
          }
          

          <View style={styles.leftTab}>
              <TouchableOpacity style={[styles.tab]} onPress={()=>setActive('active')}>
                  <Text style={[styles.tabText,{
                      color:active === 'active' ? '#333' : '#777',
                      fontFamily : active === 'active' ? FONTS.Bold : FONTS.Regular
                      }]}>Active Ticket</Text>
                      {active === 'active' &&<View style={styles.activeBorder}></View>}
              </TouchableOpacity>
              
              <TouchableOpacity style={[styles.tab,{justifyContent:'flex-start'}]}  onPress={()=>setActive('successfull')}>
              <Text style={[styles.tabText,{
                  color:active === 'successfull' ? '#333' : '#777',
                  fontFamily : active === 'successfull' ? FONTS.Bold : FONTS.Regular,
                  top:10,
                  }]}>Successfull Ticket</Text>
                   {active === 'successfull' &&<View style={styles.activeBorder}></View>}
              </TouchableOpacity>
          </View>

          <View style={{flex:1}} onLayout={(event) => onLayout(event)} >
                <ScrollView>
                {ticketContainerWidth &&
                    <Carousel 
                        data={data}
                        layout='default'
                        enableSnap={true}
                        renderItem={e=><RenderTicket layoutWidth={ticketContainerWidth} />}
                        sliderWidth={ticketContainerWidth}
                        itemWidth={ticketContainerWidth}
                        autoplay={false}
                        shouldOptimizeUpdates={true}
                        useScrollView={true}
                        activeSlideAlignment='center'
                        ref={e=>refcarousel = e}
                        onSnapToItem={(index) => setActiveCarousel(index) }
                    />
                }

                
                {(ticketContainerWidth && data?.length > 0) &&
                  <View style={{flexDirection:'row',marginBottom:40,justifyContent: 'center',alignItems:'center'}}>
                      {data.map((e,index)=>{
                        return(
                              <View key={index} style={{backgroundColor:ActiveCarousel === index ? COLORS.PrimaryLight : '#c4c4c4',width:ActiveCarousel === index ? 30:8,height:8,borderRadius:8,marginRight:8}} />
                        )
                      })
                      }
                  </View> 
                  }
                  
                 </ScrollView>
                 <View style={{height:100}} />
          </View>
     
    </View>
  )
}

const styles = StyleSheet.create({
    activeBorder : {
        width: 2,
        height:50,
        backgroundColor:COLORS.DarkGray,
        position: 'absolute',
        left:15
    },
    container : {
        flex:1,
        flexDirection:'row',
        backgroundColor:'#f5f5f5'
    },
    leftTab : {
        justifyContent:'center',
        alignItems:'center',
    },
    tab : {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:30
    },
    tabText : {
        position: 'absolute',
        fontFamily:FONTS.Regular,
        fontSize:15,
        lineHeight:15,
        transform: [
            { rotate: '270deg'}          
        ],
    }
}) 