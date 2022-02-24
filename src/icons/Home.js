import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg  
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M13 20.065v-5a3 3 0 0 0-6 0v5H2a2 2 0 0 1-2-2V7.197a2 2 0 0 1 .971-1.715l8-4.8a2 2 0 0 1 2.058 0l8 4.8A2 2 0 0 1 20 7.197v10.868a2 2 0 0 1-2 2h-5Z"
      fill={props?.fill}
      fillOpacity={0.85}
    />
  </Svg>
)

export default SvgComponent
