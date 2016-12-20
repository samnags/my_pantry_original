import React, { Component } from 'react'
import { addIngredient } from '../actions/ingredient'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class newIngredient extends Component {
  constructor(props) {
    super(props)
    this.state = { ingredientInfo: { quantity: '', measurement: '--', ingredient: '', currentPantry: this.props.currentPantry.id } }

    this.onIngredientChange = this.onIngredientChange.bind(this)
    this.onIngredientSubmit = this.onIngredientSubmit.bind(this)
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

  render() {
    return(
      <div>
        <h2>Add a Ingredient</h2>
        <form onSubmit={this.onIngredientSubmit}>
          <label>Quantity</label>
          <input type="number" placeholder="Quantity" name="quantity" value={this.state.ingredientName} onChange={this.onIngredientChange} />
          <label>Measurement</label>
          <select name="measurement" onChange={this.onIngredientChange} defaultValue={this.state.ingredientInfo.measurement}>
              <option value="nothing">--</option>
              <option value="Cup">Cups</option>
              <option value="Ounce">Ounces</option>
              <option value="Liter">Liters</option>
              <option value="Gram">Grams</option>
              <option value="Milliliter">Milliliters</option>
              <option value="Teaspoon">Teaspoons</option>
              <option value="Tablespoon">Tablespoons</option>
          </select>
          <label>Name</label>
          <input type="text" placeholder="Ingredient" name="ingredient" value={this.state.ingredientName} onChange={this.onIngredientChange} />
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { currentPantry: state.pantry.pantry }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addIngredient}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(newIngredient)
