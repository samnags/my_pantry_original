import React, { Component } from 'react'
import { addIngredient, getCategories } from '../actions/ingredient'
import { bindActionCreators } from 'redux'
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

  render() {
    return(
      <div>
        <h2>Add a Ingredient</h2>
        <form onSubmit={this.onIngredientSubmit}>
          <label>Quantity</label>
          <input type="number" min="0" placeholder="Quantity" name="quantity" value={this.state.ingredientName} onChange={this.onIngredientChange} />
          <label>Measurement</label>
            <select name="measurement" onChange={this.onIngredientChange} defaultValue={this.state.ingredientInfo.measurement}>
                <option value="nothing">--</option>
                <option value="Cup">Cups</option>
                <option value="Ounce">Ounces</option>
                <option value="Liter">Liters</option>
                <option value="Gram">Grams</option>
                <option value="Milliliter">Milliliters</option>
                <option value="Pound">Pound</option>
                <option value="Teaspoon">Teaspoons</option>
                <option value="Tablespoon">Tablespoons</option>
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
  return { currentPantry: state.pantry.pantry, categories: state.ingredient.categories }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addIngredient, getCategories }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(newIngredient)
