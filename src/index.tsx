// TODO upgrade react, react-dom, @types/react, @types/react-dom to version 18 (requires upgrade of @testing-library/react - blocked by oidc-react at this time)
import React from "react"
import ReactDOM from "react-dom"
import "./main.scss"
import App from "./App"
//import "~/main.scss"
//import App from "~/App"

const rootElement = document.getElementById("root")

ReactDOM.render(
  <App />,
  rootElement
)
