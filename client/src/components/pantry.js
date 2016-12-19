import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPantry } from '../actions/pantry'
import { bindActionCreators } from 'redux'

class Pantry extends Component {
  componentDidMount() {
    this.props.fetchPantry(this.props.params.id)
  }

  render() {
    return(
      <div>
        Hi, I'm Pantry #{this.props.pantry.id}
      </div>
    )
  }
}

function mapStateToProps(state) {   
  return { pantry: state.pantry}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPantry}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Pantry)
