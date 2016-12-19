import React, { Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchPantries } from '../actions/pantry'
import PantryCard from './pantry_card'

class Home extends Component {
  componentWillMount() {
    this.props.fetchPantries()
  }

  render() {
    if(this.props.pantries) {
        var pantries = this.props.pantries.map(pantry => {
          return <PantryCard key={pantry.id} pantry={pantry}/>
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
  return { pantries: state.pantry.pantries }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPantries }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

// return <Link to={`/pantries/${pantry.id}`} key={pantry.id}> {pantry.location}</Link>
