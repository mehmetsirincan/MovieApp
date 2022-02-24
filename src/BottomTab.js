import { View, Text, TouchableOpacity, useColorScheme, StyleSheet } from 'react-native';
import React, { useEffect } from 'react'
import { BuildingIcon, HomeIcon, TicketIcon } from './icons';
import { COLORS, FONTS } from './Const';
import Animated, { useSharedValue, useAnimatedStyle,withTiming, withSpring } from 'react-native-reanimated';



export default function BottomTab({ state, descriptors, navigation }) {

  const scheme = useColorScheme();

  const COLOR = scheme === 'dark' ? 'rgba(225, 225, 228, 0.5)' : '#aaaaaa';
  const ACTIVECOLORS = scheme === 'dark' ? COLORS.LightGray : COLORS.DarkGray;  
 

  const containerShadow = scheme == 'dark' ? {} : {
    shadowColor: "#333",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  }

  
  

  return (
    <View style={{...styles.Container, backgroundColor:scheme == 'dark' ? COLORS.PrimaryLight : '#fff',...containerShadow}}>


      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;
      
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

      const scale = useSharedValue(0);

      const animatedStyles = useAnimatedStyle(() => {
        return {
          transform: [
            {
             scale : scale.value
            },
          ],
        };
      });
      
      useEffect(()=>{
       
        if(isFocused){
          scale.value = withSpring(1);
        }else{
          scale.value = withSpring(0);
        }
      },[isFocused])

        return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{...styles.ButtonContainer}}
              key={index}
            >
              
             {route.name ==  'Main' ? <HomeIcon width={20} height={20} fill={isFocused ? ACTIVECOLORS : COLOR} /> : null}
             {route.name ==  'Build' ? <BuildingIcon width={20} height={20} fill={isFocused ? ACTIVECOLORS : COLOR} /> : null}
             {route.name ==  'Tickets' ? <TicketIcon width={20} height={14} fill={isFocused ? ACTIVECOLORS : COLOR} />: null}


            
            {isFocused &&
            <Animated.View style={animatedStyles}>
              <Text style={{...styles.Text,color: ACTIVECOLORS}}>{label}</Text>
            </Animated.View>
            }
            

          </TouchableOpacity>
        );
      })}

    </View>
  );
}

const styles = StyleSheet.create({

    Container : {
      position:'absolute',
      bottom : 0,
      zIndex:99,
      overflow :'hidden',
      flexDirection:'row',
      borderRadius:130,
      margin:16,
      paddingVertical:20
    },
    ButtonContainer : {
      flex : 1,
      justifyContent: 'center',
      alignItems:'center',
      flexDirection:'row'
    },
    Text : {
      fontFamily: FONTS.Medium,
      fontSize:20,
      marginLeft:10
    }

})
