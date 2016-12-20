import React, { Component } from 'react'
// import { addPantry } from '../actions/pantry'
// import { bindActionCreators } from 'redux'
// import { connect } from 'react-redux'

export default class newIngredient extends Component {
  constructor(props) {
    super(props)
    this.state = { ingredientInfo: { quantity: '', measurement: '', ingredient: '' } }

    this.onIngredientChange = this.onIngredientChange.bind(this)
    this.onIngredientSubmit = this.onIngredientSubmit.bind(this)
  }

  onIngredientChange(event) {
    const field = event.target.name
    const ingredients = this.state.ingredientInfo
    ingredients[field] = event.target.value
    this.setState({ ingredientInfo:  ingredients })
  }

  onIngredientSubmit(event) {
    event.preventDefault()
    debugger
    this.props.addIngredient(this.state.ingredientInfo)
  }

  render() {
    return(
      <div>
        <h2>Add a Ingredient</h2>
        <form onSubmit={this.onIngredientSubmit}>
          <label>Quantity</label>
          <input type="number" placeholder="Quantity" name="quantity" value={this.state.ingredientName} onChange={this.onIngredientChange} />
          <label>Measurement</label>
          <select name="measurement" onChange={this.onIngredientChange}>
              <option value="nothing" selected="selected">--</option>
              <option value="cup">Cup</option>
              <option value="ounce">Ounce</option>
              <option value="liter">Liter</option>
              <option value="gram">Gram</option>
              <option value="ml">Milliliter</option>
              <option value="teaspoon">Teaspoon</option>
              <option value="tablespoon">Tablespoon</option>
          </select>
          <label>Name</label>
          <input type="text" placeholder="Ingredient" name="ingredient" value={this.state.ingredientName} onChange={this.onIngredientChange} />
          <input type="submit"/>
        </form>
      </div>
    )
  }
}
