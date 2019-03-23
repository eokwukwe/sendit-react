/* eslint-disable max-len */
import React from "react"
import UserOrderInfo from "../../UserOrderInfo/UserOrderInfo"
import "./OrderInfoCard.scss"

const OrderInfoCard = ({ order }) => (
  <div className="accordion mt-2" id={`accordion-${order.id}`}>
    <div className="card order-card">
      <div className="card-header py-1 d-flex flex-row justify-content-between align-items-center">
        <h6 className="order-info-header">{order.description}</h6>
        <button
          className="btn btn-sm btn-details"
          type="button"
          data-toggle="collapse"
          data-target={`#collapse-${order.id}`}
          aria-expanded="true"
          aria-controls={`collapse-${order.id}`}
        >
          Details
        </button>
      </div>
      <div
        id={`collapse-${order.id}`}
        className="collapse order-collapse"
        aria-labelledby="Order"
        data-parent={`#accordion-${order.id}`}
      >
        <div className="card-body">
          <UserOrderInfo order={order} />
        </div>
      </div>
    </div>
  </div>
)

export default OrderInfoCard
