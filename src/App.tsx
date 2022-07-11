import React from "react"
import prepareColorVariables from "./utils/prepareColorVariables"
import colors from "../colors.json"

const lol = prepareColorVariables(colors)

console.log(lol)

export default function App(): JSX.Element {
  return (
    <h1>LOL</h1>
  )
}
