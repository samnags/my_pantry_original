import React, { Component } from 'react'
import { addIngredient, getCategories, getMeasurements } from '../actions/ingredient'
import { connect } from 'react-redux'

class newIngredient extends Component {
  constructor(props) {
    super(props)
    this.state = { ingredientInfo: { quantity: '', measurement: '--', ingredient: '', currentPantry: this.props.currentPantry.id, category: '' }}

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
    this.setState({ ingredientInfo:  ingredients })
  }

  onIngredientSubmit(event) {
    event.preventDefault()
    this.props.addIngredient(this.state.ingredientInfo)
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
        <h2>Add a Ingredient</h2>
        <form onSubmit={this.onIngredientSubmit}>
          <label>Quantity</label>
          <input type="number" min="0" placeholder="Quantity" name="quantity" value={this.state.ingredientName} onChange={this.onIngredientChange} />
          <label>Measurement</label>
            <select name="measurement" onChange={this.onIngredientChange} defaultValue={this.state.ingredientInfo.measurement}>
              {this.renderMeasurements()}
            </select>
          <label>Name</label>
          <input type="text" placeholder="Ingredient" name="ingredient" value={this.state.ingredientName} onChange={this.onIngredientChange} />
          <label>Category</label>
            <select name="category" onChange={this.onIngredientChange} defaultValue={this.state.ingredientInfo.category}>
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
    currentPantry: state.pantry.currentPantry,
    categories: state.ingredient.categories,
    measurements: state.ingredient.measurements
  }
}

export default connect(mapStateToProps, { addIngredient, getCategories, getMeasurements })(newIngredient)
