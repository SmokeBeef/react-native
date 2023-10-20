import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Book = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" {...props}>
    <Path fill="#303030" d="M9 16v43c0 3 3 5 5 5h35V11H14c-3 0-5 2-5 5z" />
    <Path fill="#ddd" d="M11 58c0 2 1 4 4 4h32v-8H15c-3 0-4 2-4 4z" />
    <Path fill="#505050" d="M18 54h31V11H18v43z" />
    <Path fill="#008a00" d="M14 6v43c0 3 3 5 5 5h35V1H19c-3 0-5 2-5 5z" />
    <Path fill="#ddd" d="M16 48c0 2 1 4 4 4h32v-8H20c-3 0-4 2-4 4z" />
    <Path fill="#60a917" d="M23 44h31V1H23v43z" />
    <Path
      fill="#7a3b3f"
      d="M9 43c0-3 4-13 10-13h35V20H19c-7 0-10 7-10 11v12z"
    />
  </Svg>
)
export default Book
