import React from "react"

import "./Spinner.scss"

export default () => (
  <div className="d-flex justify-content-center h-100 loader" >
    <div className="spinner-border" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div>
)
