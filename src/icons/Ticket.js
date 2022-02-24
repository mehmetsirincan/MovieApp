import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M7 5a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0V6a1 1 0 0 0-1-1Zm12 1a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1 1 1 0 0 1 0 2 1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1 1 1 0 1 1 0-2Zm-1-1.82a3 3 0 0 0 0 5.64V12H8a1 1 0 1 0-2 0H2V9.82a3 3 0 0 0 0-5.64V2h4a1 1 0 0 0 2 0h10v2.18Z"
      fill={props.fill}
    />
  </Svg>
)

export default SvgComponent
