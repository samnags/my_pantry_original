import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPantry } from '../actions/pantry'
import { toggleIngredientForm } from '../actions/ingredient'
import EditIngredient from './edit_ingredient'
import NewIngredient from './new_ingredient'
import IngredientTable from './ingredient_table'
import { fetchPantryIngredients, fetchIngredient } from '../actions/ingredient'

class Pantry extends Component {
  componentDidMount() {
    this.props.fetchPantry(this.props.params.id)
    this.props.fetchPantryIngredients(this.props.params.id)
  }

  handleClick() {
    this.props.toggleIngredientForm()
  }

  handleRowClick(event) {
    let ingredient = event.target.innerText
    let pantry = this.props.params.id
    this.props.fetchIngredient(pantry, ingredient)    
  }

  componentWillReceiveProps(nextProps) {
    if ((this.props.params.id !== nextProps.params.id) || (this.props.addingIngredient !== nextProps.addingIngredient) || (this.props.editingIngredient !== nextProps.editingIngredient)) {
      this.props.fetchPantry(nextProps.params.id)
      this.props.fetchPantryIngredients(nextProps.params.id)
    }
  }

  render() {
    return(
      <div>
        <button onClick={this.handleClick.bind(this)}>Add an Ingredient</button>
        { this.props.addIngredientForm ? <NewIngredient currentPantry={this.props.currentPantry} /> : null }
        { this.props.editIngredientForm ? <EditIngredient ingredient={this.props.editIngredient}  currentPantry={this.props.currentPantry} /> : null }
        <IngredientTable
          id={this.props.params.id}
          ingredients={this.props.ingredients}
          location={this.props.currentPantry.location}
          onClick={this.handleRowClick.bind(this)}
        />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    addingIngredient: state.ingredient.addingIngredient,
    editingIngredient: state.ingredient.editingIngredient,
    ingredients: state.ingredient.ingredients,
    editIngredient: state.ingredient.editIngredient,
    addIngredientForm: state.ingredient.addIngredientForm,
    editIngredientForm: state.ingredient.editIngredientForm,
    currentPantry: state.pantry.currentPantry
  }
}


export default connect(mapStateToProps, { fetchPantry, toggleIngredientForm, fetchPantryIngredients, fetchIngredient})(Pantry)
