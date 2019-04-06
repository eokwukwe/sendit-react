/* eslint-disable no-undef */
/* eslint-disable max-len */
/* eslint-disable valid-jsdoc */
/* eslint-disable react/jsx-key */
import React, { Component, Fragment } from "react"
import PlacesAutocomplete from "react-places-autocomplete"
import Script from "react-load-script"
import { Link, withRouter } from "react-router-dom"
import { connect } from "react-redux"
import PropTypes from "prop-types"

import SignedInMenu from "../Auth/SignedInMenu/SignedInMenu"
import Footer from "../common/Footer/Footer"
import { changeOrderLocation } from "../../actions/ordersActions"

/**
 * @description Renders the Create Order Form
 * @return {JSX} - returns the page JSX
 */
export class ChangeLocation extends Component {
  state = { address: "", scriptLoaded: false };

  handleScriptLoad = () => this.setState({ scriptLoaded: true });

  handleChange = address => this.setState({ address });

  handleSelect = (address) => {
    this.setState({ address })
  };

  handleSubmit = (e) => {
    const { address } = this.state
    e.preventDefault()
    this.props.changeOrderLocation(this.props.order.id, {
      location: address
    })
    this.setState({ show: false, address: "" })
  };

  /**
   * @returns {JSX} - Create Order Form
   */
  render() {
    const SuggestionsList = ({
      getInputProps,
      getSuggestionItemProps,
      suggestions,
      loading
    }) => (
      <div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <i className="fas fa-map-marker-alt" />
            </span>
          </div>
          <input
            autoFocus
            required={true}
            {...getInputProps({
              placeholder: "Enter address e.g. 12 Toyin street, Ikeja Lagos",
              className: "form-control form-control-sm"
            })}
          />
        </div>
        <div className="d-block">
          {loading && <div>Loading...</div>}
          {suggestions.map(suggestion => (
            <div className="my-1" {...getSuggestionItemProps(suggestion)}>
              <span>{suggestion.description}</span>
            </div>
          ))}
        </div>
      </div>
    )

    return (
      <Fragment>
        <SignedInMenu />
        <div className="main main__order-form">
          <div className="card card__order-form">
            <h2 className="card-header text-center card-header__order-form">
              Change Location
            </h2>
            <div className="card-body">
              <Script
                url="https://maps.googleapis.com/maps/api/js?key=AIzaSyCUzHg3TmmcuHVRnYyAx5reBG-fVIn4wYc&libraries=places"
                onLoad={this.handleScriptLoad}
              />
              <form onSubmit={this.handleSubmit}>
                {this.state.scriptLoaded && (
                  <div className="form-group">
                    <PlacesAutocomplete
                      value={this.state.address}
                      onChange={this.handleChange}
                      onSelect={this.handleSelect}
                    >
                      {SuggestionsList}
                    </PlacesAutocomplete>
                  </div>
                )}
                <button
                  type="submit"
                  className="btn btn-block btn-sm btn__order-form mt-3"
                >
                  Submit Location
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

ChangeLocation.propTypes = {
  changeOrderLocation: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
}

export const mapStateToProps = state => ({
  errors: state.errors
})

export default connect(
  mapStateToProps,
  { changeOrderLocation }
)(withRouter(ChangeLocation))
