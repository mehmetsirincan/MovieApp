import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m8 .8 2.4 4.8 4.8.6-3.296 3.696.896 5.304L8 12.8l-4.8 2.4.904-5.304L.8 6.2l4.8-.6L8 .8Z"
      fill="#F99601"
    />
  </Svg>
)

export default SvgComponent
