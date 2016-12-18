import React, { Component } from 'react'
import { addPantry } from '../actions/pantry'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class newPantry extends Component {
  constructor(props) {
    super(props)
    this.state = { pantryName: '' }

    this.onPantryChange = this.onPantryChange.bind(this)
    this.onPantrySubmit = this.onPantrySubmit.bind(this)
  }

  onPantrySubmit(event) {
    event.preventDefault()
    this.props.addPantry(this.state)
  }

  onPantryChange(event) {
    this.setState({ pantryName: event.target.value})
  }

  render() {
    return(
      <div>
        <h2>Add a Pantry</h2>
        <form onSubmit={this.onPantrySubmit}>
          <label>Pantry Name</label>
          <input type="text" placeholder="Name your pantry" name="name" value={this.state.pantryName} onChange={this.onPantryChange} />
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addPantry}, dispatch)
}

export default connect(null, mapDispatchToProps)(newPantry)
