import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPantry } from '../actions/pantry'
import { toggleIngredientForm } from '../actions/ingredient'
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

  componentWillReceiveProps(nextProps) {
    // debugger
    if ((this.props.params.id !== nextProps.params.id) || (this.props.addingIngredient !== nextProps.addingIngredient)) {
      this.props.fetchPantry(nextProps.params.id)
      this.props.fetchPantryIngredients(nextProps.params.id)
    }
  }

  render() {
    return(
      <div>
        <button onClick={this.handleClick.bind(this)}>Add an Ingredient</button>
        { this.props.addIngredientForm ? <NewIngredient currentPantry={this.props.currentPantry} /> : null }
        <IngredientTable
          id={this.props.params.id}
          ingredients={this.props.ingredients}
          location={this.props.currentPantry.location}
        />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    addingIngredient: state.ingredient.addingIngredient,
    ingredients: state.ingredient.ingredients,
    addIngredientForm: state.ingredient.addIngredientForm,
    currentPantry: state.pantry.currentPantry
  }
}


export default connect(mapStateToProps, { fetchPantry, toggleIngredientForm, fetchPantryIngredients})(Pantry)
