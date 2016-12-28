import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPantry } from '../actions/pantry'
import { toggleIngredientForm } from '../actions/ingredient'
import { bindActionCreators } from 'redux'
import NewIngredient from './new_ingredient'
import IngredientTable from './ingredient_table'
import { fetchPantryIngredients } from '../actions/ingredient'

class Pantry extends Component {
  componentDidMount() {
    this.props.fetchPantry(this.props.params.id)
    this.props.fetchPantryIngredients(this.props.params.id)
  }

  handleClick() {
    this.props.toggleIngredientForm()
  }

  render() {
    return(
      <div>
        <button onClick={this.handleClick.bind(this)}>Add an Ingredient</button>
        { this.props.addIngredientForm ? <NewIngredient /> : null }
        <IngredientTable
          id={this.props.params.id}
          ingredients={this.props.ingredients}
        />
      </div>
    )
  }
}
// 
function mapStateToProps(state) {
  // debugger
  return { ingredients: state.ingredient.ingredients, addIngredientForm: state.ingredient.addIngredientForm }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPantry, toggleIngredientForm, fetchPantryIngredients}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Pantry)

// return { currentPantry: state.pantry.currentPantry, addIngredientForm: state.ingredient.addIngredientForm }
