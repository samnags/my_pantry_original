import React, { Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchPantries } from '../actions/pantry'
import Pantry from './pantry'

class Home extends Component {
  // constructor(props) {
  //   super(props)
  // }

  componentDidMount() {
    this.props.fetchPantries()
  }

  renderPantries(pantry) {
    return (
      <Pantry location={pantry} />
    )
  }

  render() {
    return(
      <div>{this.props.pantries.lengths > 0 ? 'yes' : 'no' }</div>
    )
  }


}

function mapStateToProps(state) {
  return { pantries: state.pantry }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPantries }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
