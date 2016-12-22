import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchPantryIngredients } from '../actions/ingredient'

class IngredientTable extends Component {
  // constructor(props) {
  //   super(props)
  // }

  componentDidMount() {
    this.props.fetchPantryIngredients(this.props.id)
  }

  render() {
    return (
      <div>
        Hi
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPantryIngredients}, dispatch)
}

export default connect(null, mapDispatchToProps)(IngredientTable)
