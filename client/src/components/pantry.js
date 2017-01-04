import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPantry } from '../actions/pantry'
import { toggleAddIngredientForm } from '../actions/ingredient'
import EditIngredient from './edit_ingredient'
import NewIngredient from './new_ingredient'
import IngredientTable from './ingredient_table'
import { fetchPantryIngredients, fetchIngredient } from '../actions/ingredient'
import { Button } from 'react-bootstrap'

class Pantry extends Component {
  componentDidMount() {
    this.props.fetchPantry(this.props.params.id)
    this.props.fetchPantryIngredients(this.props.params.id)
  }

  handleAddClick() {
    this.props.toggleAddIngredientForm()
  }

  handleRowClick(event) {
    let ingredient = event.target.innerText
    let pantry = this.props.params.id
    this.props.fetchIngredient(pantry, ingredient)
  }

  componentWillReceiveProps(nextProps) {
    // debugger
    if ((this.props.params.id !== nextProps.params.id) ||
        (this.props.addingIngredient !== nextProps.addingIngredient) ||
        (this.props.editingIngredient !== nextProps.editingIngredient) ||
        (this.props.deletingIngredient !== nextProps.deletingIngredient))
    {
      this.props.fetchPantry(nextProps.params.id)
      this.props.fetchPantryIngredients(nextProps.params.id)
    }
  }

  render() {
    return(
      <div>
        <Button onClick={this.handleAddClick.bind(this)}>Add an Ingredient</Button>
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
    deletingIngredient: state.ingredient.deletingIngredient,
    ingredients: state.ingredient.ingredients,
    editIngredient: state.ingredient.editIngredient,
    addIngredientForm: state.ingredient.addIngredientForm,
    editIngredientForm: state.ingredient.editIngredientForm,
    currentPantry: state.pantry.currentPantry
  }
}


export default connect(mapStateToProps, { fetchPantry, toggleAddIngredientForm, fetchPantryIngredients, fetchIngredient})(Pantry)
