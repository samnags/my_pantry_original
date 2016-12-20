import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPantry } from '../actions/pantry'
import { bindActionCreators } from 'redux'
import NewIngredient from './new_ingredient'

class Pantry extends Component {
  componentDidMount() {
    this.props.fetchPantry(this.props.params.id)
  }

  render() {
    return(
      <div>
        Hi, I'm Pantry #{this.props.pantry.id}
        <NewIngredient />
      </div>
    )
  }
}

function mapStateToProps(state) {
  // debugger
  return { pantry: state.pantry.pantry}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPantry}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Pantry)
