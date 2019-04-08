import React, { Component, Fragment } from "react"
import { Link, withRouter } from "react-router-dom"
import { connect } from "react-redux"
// import PropTypes from "prop-types";
import SignedInMenu from "../Auth/SignedInMenu/SignedInMenu"
import Footer from "../common/Footer/Footer"
import { changeOrderStatus } from "../../actions/ordersActions"
import Spinner from "../common/Spinner/Spinner"
import isEmpty from "../../utils/isEmpty"

/**
 * @description Renders the Update status form
 * @return {JSX} - returns the page JSX
 */
export class ChangeStatus extends Component {
  state = {
    status: "",
    loading: false,
    disabled: true
  };

  handleStatusSelect = (e) => {
    this.setState({ status: e.target.value })
  };

  handleSubmit = (e) => {
    this.setState({ loading: true })
    e.preventDefault()
    this.props.changeOrderStatus(
      this.props.match.params.id,
      { status: this.state.status },
      this.props.history
    )
  };

  /**
   * @returns {JSX} - Update status Form
   */
  render() {
    return (
      <Fragment>
        <SignedInMenu />
        <div className="main main__order-form">
          <div className="card card__order-form">
            <h2 className="card-header text-center card-header__order-form">
              Change Location
            </h2>
            <div className="card-body">
              {this.state.loading && <Spinner />}
              <form onSubmit={this.handleSubmit}>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="status"
                    id="pending"
                    value="pending"
                    onChange={this.handleStatusSelect}
                  />
                  <label className="form-check-label" htmlFor="pending">
                    Pending
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="status"
                    id="intransit"
                    value="intransit"
                    onChange={this.handleStatusSelect}
                  />
                  <label className="form-check-label" htmlFor="intransit">
                    In-Transit
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="status"
                    id="delivered"
                    value="delivered"
                    onChange={this.handleStatusSelect}
                  />
                  <label className="form-check-label" htmlFor="delivered">
                    Delivered
                  </label>
                </div>
                <button
                  type="submit"
                  className="btn btn-block btn-sm btn__order-form mt-3"
                  disabled={
                    this.state.disabled ? isEmpty(this.state.status) : false
                  }
                >
                  Update Status
                </button>
              </form>
            </div>
            <div className="card-footer card-footer__order-form">
              <Link to="/admin">
                <button className="btn btn-sm btn-secondary">
                  &#171; Dashboard
                </button>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </Fragment>
    )
  }
}

export default connect(
  null,
  { changeOrderStatus }
)(withRouter(ChangeStatus))
