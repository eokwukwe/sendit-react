import React from "react"
import OrderInfo from "../common/OrderInfo/OrderInfo"
import CancelOrder from "../CancelOrder/CancelOrder"
import DestinationInput from "../DestinationInput/DestinationInput"
import OrderMap from "../OrderMap/OrderMap"
import "./UserOrderInfo.scss"

const UserOrderInfo = ({ order }) => (
  <div className="row">
    <div className="card col-sm-12 col-md-7 py-1">
      <OrderInfo order={order} />
      <div
        className={
          "d-flex justify-content-between align-items-center mt-1 btn-order-action"
        }
      >
        <CancelOrder order={order} />
        <DestinationInput order={order} />
      </div>
    </div>
    <div className="card col-sm-12 col-md-5 p-0 map-card">
      <OrderMap lat={6.465422} lng={3.406448} />
    </div>
  </div>
)

export default UserOrderInfo
