import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPantry } from '../actions/pantry'
import { toggleIngredientForm } from '../actions/ingredient'
import { bindActionCreators } from 'redux'
import NewIngredient from './new_ingredient'

class Pantry extends Component {
  componentDidMount() {
    this.props.fetchPantry(this.props.params.id)
  }

  handleClick() {
    this.props.toggleIngredientForm()
  }

  render() {
    return(
      <div>        
        <button onClick={this.handleClick.bind(this)}>Add an Ingredient</button>
        { this.props.addIngredientForm ? <NewIngredient /> : null }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { pantry: state.pantry.pantry, addIngredientForm: state.ingredient.addIngredientForm }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPantry, toggleIngredientForm}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Pantry)
