import React, { Component, Fragment } from "react"
import { Button, Modal } from "react-bootstrap"
import format from "date-fns/format"

/**
 * @description Renders the Order Info
 * @return {JSX} - returns the page JSX
 */
export class OrderInfoAdmin extends Component {
  state = { show: false };

  handleShow = () => {
    this.setState({ show: true })
  };

  handleHide = () => {
    this.setState({ show: false })
  };

  /**
   * @returns {JSX} - Order info modal
   */
  render() {
    const { order } = this.props
    return (
      <Fragment>
        <Button size="sm" variant="info" onClick={this.handleShow}>
          <i className="fas fa-info-circle" />
        </Button>
        <Modal
          show={this.state.show}
          onHide={this.handleHide}
          aria-labelledby="order-info"
          centered
        >
          <Modal.Header>
            <Modal.Title>Order Info</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <p className="order-section-detail">
                Sender Id <span className="price">{order.userid}</span>
              </p>
              <p className="order-section-detail">
                Receiver <span className="price">{order.receiver_name}</span>
              </p>
              <p className="order-section-detail">
                Receiver Phone{" "}
                <span className="price">{order.receiver_phone}</span>
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
          </Modal.Body>
        </Modal>
      </Fragment>
    )
  }
}

export default OrderInfoAdmin
