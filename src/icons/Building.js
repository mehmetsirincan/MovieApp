import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    fill='none'
  >
    <Path
      d="M3.5 20V2a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v8.5M3.5 20H1m2.5 0H7m7.5 0v-9.5m0 9.5H19m-4.5 0H11m3.5-9.5H18a1 1 0 0 1 1 1V20m0 0h2M7 20v-7.057h4V20m-4 0h4m-.5-15.5h.5M7 9h.5"
      stroke={props.fill}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default SvgComponent
