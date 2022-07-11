import React from "react"
import prepareColorVariables from "./utils/prepareColorVariables"
import colors from "../colors.json"

const cssVariables = prepareColorVariables(colors).cssVariables

console.log(cssVariables)

export default function App(): JSX.Element {
  return (
    <h1>LOL</h1>
  )
}
