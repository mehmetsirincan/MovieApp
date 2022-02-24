import { View } from "native-base";
import * as React from "react"
import { useColorScheme, useWindowDimensions } from "react-native";
import Svg, { Path } from "react-native-svg"

const HomeBg = (props) =>{
  const {width,height}  = useWindowDimensions();
  const originalWidth= 375;
  const originalHeight= 442;
  const aspectRatio = originalWidth / originalHeight;
  const scheme = useColorScheme();

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
    viewBox={`0 0 ${originalWidth} ${originalHeight}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    >
    <Path
      d="M173.5 137.5C149.5 67.1 72.667 49.667 0 64.5V0h375v362.5C326.5 416 184.908 489.589 126 400c-48-73 77.5-174.5 47.5-262.5Z"
      fill={scheme === 'dark' ? "#201E2D" : "#E5E1FF"}
    />
  </Svg>

  </View>
)}

export default HomeBg
