import React, { Component } from 'react'
import { updateIngredient, getCategories, getMeasurements } from '../actions/ingredient'
import { connect } from 'react-redux'

class editIngredient extends Component {
  constructor(props) {
    super(props)

    this.state = {
      ingredientInfo: {
        quantity: this.props.ingredient.quantity,
        measurement: this.props.ingredient.measurement,
        ingredient: this.props.ingredient.ingredient,
        currentPantry: this.props.currentpantry,
        category: this.props.ingredient.category }}

    this.onIngredientChange = this.onIngredientChange.bind(this)
    this.onIngredientSubmit = this.onIngredientSubmit.bind(this)
  }

  componentDidMount() {
    this.props.getCategories()
    this.props.getMeasurements()
  }

  onIngredientChange(event) {
    const field = event.target.name
    const ingredients = this.state.ingredientInfo
    ingredients[field] = event.target.value
    ingredients["currentPantry"] = this.props.currentPantry.id
    this.setState({ ingredientInfo: ingredients })
  }

  onIngredientSubmit(event) {
    event.preventDefault()
    this.props.updateIngredient(this.state.ingredientInfo)
  }

  renderCategories() {
    return this.props.categories.map((category) => {
      return <option key={category.id} value={category.name}>{category.name}</option>
    })
  }

  renderMeasurements() {
    return this.props.measurements.map((measurement) => {
      return <option key={measurement.id} value={measurement.name}>{measurement.name}</option>
    })
  }

  render() {

    return(
      <div>
        <h2>Edit an Ingredient</h2>
        <form onSubmit={this.onIngredientSubmit}>
          <label>Quantity</label>
          <input type="number" min="0" placeholder="Quantity" name="quantity" value={this.state.ingredientInfo.quantity} onChange={this.onIngredientChange} />

          <label>Measurement</label>
            <select name="measurement" onChange={this.onIngredientChange} defaultValue={this.state.ingredientInfo.measurement}>
              <option key='Nothing' value='Nothing'>--</option>
              {this.renderMeasurements()}
            </select>

          <label>Name</label>
          <input type="text" placeholder="Ingredient" name="ingredient" value={this.state.ingredientInfo.ingredient} onChange={this.onIngredientChange} />

          <label>Category</label>
            <select name="category" onChange={this.onIngredientChange} value={this.state.ingredientInfo.category}>
              <option key='Nothing' value='Nothing'>--</option>
              {this.renderCategories()}
            </select>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    categories: state.ingredient.categories,
    measurements: state.ingredient.measurements
  }
}

export default connect(mapStateToProps, { updateIngredient, getCategories, getMeasurements })(editIngredient)
