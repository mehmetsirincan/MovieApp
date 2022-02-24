import * as React from "react"
import { useWindowDimensions, View } from "react-native";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"
import { COLORS } from "../Const";

const CinemaScreenTitle = (props) => {
  const {width,height}  = useWindowDimensions();
  const originalWidth= 375;
  const originalHeight= 112;
  const aspectRatio = originalWidth / originalHeight;
  return(
  <View style={{aspectRatio}}>
  <Svg
    width={375}
    height={112}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox={`0 0 ${originalWidth} ${originalHeight}`}
    {...props}
  >
    <Path d="m-21 112 38-43 163-32.5 178.5 33L401 112H-21Z" fill="url(#a)" />
    <Path
      d="M16 21.348S120.25 0 187.5 0 359 21.348 359 21.348V70S254.818 48.156 187.5 48.156 16 70 16 70V21.347Z"
      fill={COLORS.Primary}
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={188}
        y1={20.75}
        x2={188}
        y2={108.25}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#333" stopOpacity={0.9} />
        <Stop offset={1} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
    </Defs>
  </Svg>
  </View>
)
}

export default CinemaScreenTitle
