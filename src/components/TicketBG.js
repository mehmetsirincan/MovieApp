import { View } from "native-base";
import * as React from "react"
import { useWindowDimensions } from "react-native";
import Svg, { Path } from "react-native-svg"

const TicketBG = (props) =>{
  const {width,height}  = useWindowDimensions();
  const originalWidth= 375;
  const originalHeight= 253;
  const aspectRatio = originalWidth / originalHeight;

  return (
   <View style={{
    position:'absolute',
    top:0,
    left:0,
    width:'100%',
    aspectRatio,
    zIndex :0
   }}>
    <Svg
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 ${originalWidth} ${originalHeight}`}
        {...props}
    >
        <Path d="M375 0H0v253L375 77.5V0Z" fill="#E5E1FF" />
    </Svg>
  </View>
)}

export default TicketBG
