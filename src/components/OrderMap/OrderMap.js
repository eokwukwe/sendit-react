import React from "react"
import GoogleMapReact from "google-map-react"

const OrderMap = ({ lat, lng }) => (
  <div style={{ width: "100%", height: "100%" }}>
    <GoogleMapReact
      bootstrapURLKeys={{
        key: "AIzaSyCUzHg3TmmcuHVRnYyAx5reBG-fVIn4wYc"
      }}
      defaultCenter={[lat, lng]}
      defaultZoom={10}
    />
  </div>
)

export default OrderMap
