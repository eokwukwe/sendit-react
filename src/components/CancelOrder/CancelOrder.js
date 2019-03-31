import React, { Component, Fragment } from "react"
import { Button, Modal } from "react-bootstrap"
import { connect } from "react-redux"
import "./CancelOrder.scss"
import { cancelOrder } from "../../actions/ordersActions"

/**
 * @description Renders the Cancel order component
 * @param {object} e DOM event object
 * @return {JSX} - returns the page JSX
 */
export class CancelOrder extends Component {
  state = {
    show: false
  };

  handleShow = () => {
    this.setState({ show: true })
  };

  handleHide = () => {
    this.setState({ show: false })
  };

  handleClick = () => {
    this.props.cancelOrder(this.props.order.id)
    this.setState({ show: false })
  };

  /**
   * @returns {JSX} - Cancel order Template
   */
  render() {
    const { order } = this.props
    const disabled = !!(
      order.status === "cancelled" || order.status === "delivered"
    )
    return (
      <Fragment>
        <Button
          disabled={disabled}
          size="sm"
          variant="danger"
          onClick={this.handleShow}
        >
          Cancel
        </Button>
        <Modal
          show={this.state.show}
          onHide={this.handleHide}
          aria-labelledby="cancel-order"
          centered
        >
          <Modal.Body>
            <h5 className="text-center">ARE YOU SURE?</h5>
            <p className="text-center">You cannot undo it after cancelling</p>
            <div className="row">
              <div
                className={
                  "col-md-8 offset-md-2 col-sm-12 d-flex justify-content-between align-items-center"
                }
              >
                <Button size="sm" variant="danger" onClick={this.handleHide}>
                  DIMISS
                </Button>
                <Button onClick={this.handleClick} size="sm">
                  ACCEPT
                </Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </Fragment>
    )
  }
}

export default connect(
  null,
  { cancelOrder }
)(CancelOrder)
