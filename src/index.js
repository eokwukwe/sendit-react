/* eslint-disable import/extensions */
import React from "react"
import ReactDOM from "react-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.js"
import "../public/assets/styles/index.scss"
import "react-redux-toastr/lib/css/react-redux-toastr.min.css"

import App from "./pages/app/App"

ReactDOM.render(<App />, document.getElementById("root"))
