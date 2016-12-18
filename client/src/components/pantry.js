import React, { Component } from 'react'
// import { Link } from 'react-router'
import { connect } from 'react-redux'
import { fetchPantry } from '../actions/pantry'
import { bindActionCreators } from 'redux'

class Pantry extends Component {
  // constructor(props) {
  //   super(props)
  // }
  componentDidMount() {
    this.props.fetchPantry(this.props.params.id)
  }

  render() {
    return (
      <div>
        {this.props.pantry.id}
        {this.props.pantry.location}
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
