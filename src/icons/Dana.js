import * as React from "react"
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={69}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <Path fill="url(#a)" d="M0 0h69v20H0z" />
    <Defs>
      <Pattern
        id="a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#b" transform="matrix(.00208 0 0 .00719 0 -.007)" />
      </Pattern>
      <Image
        id="b"
        width={480}
        height={141}
        xlinkHref="data:image/png;base64,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"
      />
    </Defs>
  </Svg>
)

export default SvgComponent
