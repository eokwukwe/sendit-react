import React from "react"
import format from "date-fns/format"
import "./OrderInfo.scss"

const OrderInfo = ({ order }) => (
  <div>
    <p className="order-section-detail">
      Sender <span className="price">Okwukwe Ewurum</span>
    </p>
    <p className="order-section-detail">
      Receiver <span className="price">{order.receiver_name}</span>
    </p>
    <p className="order-section-detail">
      Receiver Phone <span className="price">{order.receiver_phone}</span>
    </p>
    <p className="order-section-detail">
      Pickup <span className="price">{order.pickup}</span>
    </p>
    <p className="order-section-detail">
      Destination <span className="price">{order.destination}</span>
    </p>
    <p className="order-section-detail">
      Location <span className="price">{order.location}</span>
    </p>
    <p className="order-section-detail">
      Distance <span className="price">{`${order.distance}km`}</span>
    </p>
    <p className="order-section-detail">
      Weight <span className="price">{`${order.weight}kg`}</span>
    </p>
    <p className="order-section-detail">
      Created
      <span className="price">
        {format(order.created_on, "ddd, MMM DD YYYY hh:mm:ss")}
      </span>
    </p>
    <p className="order-section-detail">
      Status
      <span className="price" style={{ textTransform: "capitalize" }}>
        {order.status}
      </span>
    </p>
  </div>
)

export default OrderInfo
