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

import "./CreateOrderForm.scss"
import SignedInMenu from "../Auth/SignedInMenu/SignedInMenu"
import Input from "../common/Input/Input"
import Footer from "../common/Footer/Footer"
import callDistanceMatrix from "../../utils/calculateDIstance"
import { createOrder } from "../../actions/ordersActions"
import Spinner from "../common/Spinner/Spinner"

/**
 * @description Renders the Create Order Form
 * @return {JSX} - returns the page JSX
 */
export class CreateOrderForm extends Component {
  state = {
    description: "",
    weight: "",
    receiver: "",
    distance: "",
    price: "",
    phone: "",
    pickup: "",
    destination: "",
    errors: {},
    scriptLoaded: false
  };

  /**
   * @description - Update the errors state when the user
   * enters an invalid data
   * @param {*} prevProps
   * @returns {void}
   */
  componentDidUpdate(prevProps) {
    if (prevProps.errors !== this.props.errors) {
      this.setState({ errors: this.props.errors, loading: false })
    }
  }

  calculateDistance = async (pickup, destination) => {
    const service = new google.maps.DistanceMatrixService()
    const result = await callDistanceMatrix(service, {
      origins: [pickup],
      destinations: [destination],
      travelMode: "DRIVING",
      unitSystem: google.maps.UnitSystem.IMPERIAL,
      avoidHighways: false,
      avoidTolls: false
    })
    const distance = await result.rows[0].elements[0].distance.value
    return distance / 1000
  };

  handleScriptLoad = () => this.setState({ scriptLoaded: true });

  /**
   * @description Handles input change
   * @param {string} input form input
   * @returns {void}
   */
  handleInput = (e) => {
    this.setState({ errors: {} })
    this.setState({ [e.target.name]: e.target.value })
  };

  handlePickup = (pickup) => {
    this.setState({ pickup })
  };

  handlePickupSelect = (pickup) => {
    this.setState({ pickup })
  };

  handleDestination = (destination) => {
    this.setState({ destination })
  };

  handleDestinationSelect = (destination) => {
    this.setState({ destination })
  };

  /**
   * @description Submit order
   * @param {object} e
   * @returns {void}
   */
  handleSubmit = async (e) => {
    this.setState({ errors: {}, loading: true })
    e.preventDefault()
    let distance
    if (this.state.scriptLoaded) {
      distance = await this.calculateDistance(
        this.state.pickup,
        this.state.destination
      )
      this.setState({
        distance
      })
    }
    // num.toFixed(n) returns a string. The unary plus is used
    // to coerce it into a number:
    const price = +(this.state.weight * 200 + distance * 100).toFixed(2)
    this.setState({
      price
    })
    const {
      description,
      weight,
      receiver,
      phone,
      pickup,
      destination
    } = this.state
    const orderData = {
      weight,
      receiver,
      phone,
      pickup,
      destination,
      distance,
      price,
      description
    }
    this.props.createOrder(orderData, this.props.history)
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
    const {
      description, weight, receiver, phone, errors
    } = this.state
    return (
      <Fragment>
        <SignedInMenu />
        <div className="main main__order-form">
          {this.state.loading && <Spinner />}
          <div className="card card__order-form">
            <h2 className="card-header text-center card-header__order-form">
              Create Order
            </h2>
            <div className="card-body">
              <Script
                url="https://maps.googleapis.com/maps/api/js?key=AIzaSyCUzHg3TmmcuHVRnYyAx5reBG-fVIn4wYc&libraries=places"
                onLoad={this.handleScriptLoad}
              />
              <form onSubmit={this.handleSubmit}>
                <Input
                  placeholder="Parcel Description"
                  name="description"
                  type="text"
                  icon="fas fa-book"
                  value={description}
                  onChange={this.handleInput}
                  error={errors.description}
                />

                <Input
                  placeholder="Parcel weight in kg"
                  name="weight"
                  type="number"
                  icon="fas fa-weight-hanging"
                  value={weight}
                  onChange={this.handleInput}
                  error={errors.weight}
                  step="0.1"
                  min="0"
                />

                <Input
                  placeholder="Receiver name (firstname and lastname)"
                  name="receiver"
                  type="text"
                  icon="fas fa-user"
                  value={receiver}
                  onChange={this.handleInput}
                  error={errors.receiver}
                />

                <Input
                  placeholder="Receiver phone number"
                  name="phone"
                  type="text"
                  icon="fas fa-phone"
                  value={phone}
                  onChange={this.handleInput}
                  error={errors.phone}
                />
                {this.state.scriptLoaded && (
                  <div className="form-group">
                    <PlacesAutocomplete
                      value={this.state.pickup}
                      onChange={this.handlePickup}
                      onSelect={this.handlePickupSelect}
                    >
                      {SuggestionsList}
                    </PlacesAutocomplete>
                    <PlacesAutocomplete
                      value={this.state.destination}
                      onChange={this.handleDestination}
                      onSelect={this.handleDestinationSelect}
                    >
                      {SuggestionsList}
                    </PlacesAutocomplete>
                  </div>
                )}
                <button
                  type="submit"
                  className="btn btn-block btn-sm btn__order-form mt-3"
                >
                  Submit Order
                </button>
              </form>
            </div>
            <div className="card-footer card-footer__order-form">
              <Link to="/user">
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

CreateOrderForm.propTypes = {
  createOrder: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
}

export const mapStateToProps = state => ({
  errors: state.errors
})

export default connect(
  mapStateToProps,
  { createOrder }
)(withRouter(CreateOrderForm))
