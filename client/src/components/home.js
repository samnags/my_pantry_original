import React, { Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchPantries } from '../actions/pantry'
import { Link } from 'react-router'

class Home extends Component {
  componentWillMount() {
    this.props.fetchPantries()
  }

  render() {
    if(this.props.pantries) {
        var pantries = this.props.pantries.map(pantry => {
          return <Link to={`/pantries/${pantry.id}`} key={pantry.id}> {pantry.location}</Link>
        })
      }

    return(
      <div>
        {pantries}
      </div>
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
