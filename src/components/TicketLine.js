import * as React from "react"
import { useWindowDimensions } from "react-native";
import Svg, { Path } from "react-native-svg"

const TicketLine = (props) => {
    const {width,height}  = useWindowDimensions();
    
    return(
        <Svg
        width={1083}
        height={11}
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        fill="none"
      >
        <Path
          d="m1 2 5.42 7 5.42-7 5.42 7 5.42-7 5.42 7 5.42-7 5.42 7 5.42-7 5.42 7 5.42-7 5.42 7 5.42-7 5.42 7 5.42-7 5.42 7 5.42-7 5.42 7 5.42-7 5.42 7 5.42-7 5.42 7 5.42-7 5.42 7 5.42-7 5.42 7 5.42-7 5.42 7 5.42-7 5.42 7 5.42-7 5.42 7 5.42-7 5.42 7 5.42-7 5.42 7 5.42-7 5.42 7 5.42-7 5.42 7 5.42-7 5.42 7 5.42-7 5.42 7 5.42-7 5.42 7 5.42-7 5.42 7 5.42-7 5.42 7L272 2M541 2l5.42 7 5.42-7 5.42 7 5.42-7 5.42 7 5.42-7 5.42 7 5.42-7 5.42 7 5.42-7 5.42 7 5.42-7 5.42 7 5.42-7 5.42 7 5.42-7 5.42 7 5.42-7 5.42 7 5.42-7 5.42 7 5.42-7 5.42 7 5.42-7 5.42 7 5.42-7 5.42 7 5.42-7 5.42 7 5.42-7 5.42 7 5.42-7 5.42 7 5.42-7 5.42 7 5.42-7 5.42 7 5.42-7 5.42 7 5.42-7 5.42 7 5.42-7 5.42 7 5.42-7 5.42 7 5.42-7 5.42 7 5.42-7 5.42 7L812 2"
          stroke={props.fill}
          strokeWidth={1.5}
        />
        <Path
          d="m271 2 5.42 7 5.42-7 5.42 7 5.42-7 5.42 7 5.42-7 5.42 7 5.42-7 5.42 7 5.42-7 5.42 7 5.42-7 5.42 7 5.42-7 5.42 7 5.42-7 5.42 7 5.42-7 5.42 7 5.42-7 5.42 7 5.42-7 5.42 7 5.42-7 5.42 7 5.42-7 5.42 7 5.42-7 5.42 7 5.42-7 5.42 7 5.42-7 5.42 7 5.42-7 5.42 7 5.42-7 5.42 7 5.42-7 5.42 7 5.42-7 5.42 7 5.42-7 5.42 7 5.42-7 5.42 7 5.42-7 5.42 7 5.42-7 5.42 7L542 2M811 2l5.42 7 5.42-7 5.42 7 5.42-7 5.42 7 5.42-7 5.42 7 5.42-7 5.42 7 5.42-7 5.42 7 5.42-7 5.42 7 5.42-7 5.42 7 5.42-7 5.42 7 5.42-7 5.42 7 5.42-7 5.42 7 5.42-7 5.42 7 5.42-7 5.42 7 5.42-7 5.42 7 5.42-7 5.42 7 5.42-7 5.42 7 5.42-7 5.42 7 5.42-7 5.42 7 5.42-7 5.42 7 5.42-7 5.42 7 5.42-7 5.42 7 5.42-7 5.42 7 5.42-7 5.42 7 5.42-7 5.42 7 5.42-7 5.42 7 5.42-7"
          stroke={props.fill}
          strokeWidth={1.5}
        />
      </Svg>
)
}

export default TicketLine
