import React, { Component } from 'react'
// import { addPantry } from '../actions/pantry'
// import { bindActionCreators } from 'redux'
// import { connect } from 'react-redux'

export default class newIngredient extends Component {
  constructor(props) {
    super(props)
    this.state = { ingredientInfo: { quantity: '', name: '' } }

    this.onIngredientChange = this.onIngredientChange.bind(this)
    this.onIngredientSubmit = this.onIngredientSubmit.bind(this)
  }

  onIngredientChange(event) {
    // debugger
    const field = event.target.name
    const ingredients = this.state.ingredientInfo
    ingredients[field] = event.target.value
    this.setState({ ingredientInfo:  ingredients })
  }

  onIngredientSubmit(event) {
    event.preventDefault()
    this.props.addIngredient(this.state.ingredientInfo)
  }

  render() {
    return(
      <div>
        <h2>Add a Ingredient</h2>
        <form onSubmit={this.onIngredientSubmit}>
          <label>Quantity</label>
          <input type="text" placeholder="Quantity" name="quantity" value={this.state.ingredientName} onChange={this.onIngredientChange} />
          <label>Name</label>
          <input type="text" placeholder="Ingredient" name="ingredient" value={this.state.ingredientName} onChange={this.onIngredientChange} />
          <input type="submit"/>
        </form>
      </div>
    )
  }
}
