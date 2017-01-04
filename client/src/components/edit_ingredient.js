import React, { Component } from 'react'
import { updateIngredient, toggleEditIngredientForm, deleteIngredient, getCategories, getMeasurements } from '../actions/ingredient'
import { connect } from 'react-redux'
import { Form, Button, FormGroup, FormControl, FieldGroup, ControlLabel } from 'react-bootstrap'

class editIngredient extends Component {
  constructor(props) {
    super(props)

    this.state = {
      ingredientInfo: {
        id: this.props.ingredient.pi.id,
        quantity: this.props.ingredient.quantity,
        measurement: this.props.ingredient.measurement,
        ingredient: this.props.ingredient.ingredient,
        currentPantry: this.props.currentpantry,
        category: this.props.ingredient.category }}

    this.onIngredientChange = this.onIngredientChange.bind(this)
    this.onIngredientSubmit = this.onIngredientSubmit.bind(this)
    this.onIngredientDelete = this.onIngredientDelete.bind(this)
    this.onIngredientCancel = this.onIngredientCancel.bind(this)
  }

  componentDidMount() {
    this.props.getCategories()
    this.props.getMeasurements()
  }

  onIngredientCancel() {
    this.props.toggleEditIngredientForm()
  }

  onIngredientChange(event) {
    const field = event.target.name
    const ingredients = this.state.ingredientInfo
    ingredients[field] = event.target.value
    ingredients["currentPantry"] = this.props.currentPantry.id
    this.setState({ ingredientInfo: ingredients })
  }

  onIngredientSubmit(event) {
    event.preventDefault()
    this.props.updateIngredient(this.state.ingredientInfo)
  }

  onIngredientDelete(event) {
    event.preventDefault()
    this.props.deleteIngredient(this.state.ingredientInfo.id)
  }

  renderCategories() {
    return this.props.categories.map((category) => {
      return <option key={category.id} value={category.name}>{category.name}</option>
    })
  }

  renderMeasurements() {
    return this.props.measurements.map((measurement) => {
      return <option key={measurement.id} value={measurement.name}>{measurement.name}</option>
    })
  }

  render() {

    return(
      <div>
        <h2>Edit an Ingredient</h2>
        <form onSubmit={this.onIngredientSubmit}>
        <Form inline controlId="formBasicText">
          <ControlLabel>Quantity</ControlLabel>
           {' '}
          <FormControl
            type="number"
            placeholder="Enter a quantity"
            name="quantity"
            value={this.state.ingredientInfo.quantity}
            onChange={this.onIngredientChange}
          />
          {' '}
          <ControlLabel>Measurement</ControlLabel>
          {' '}
          <FormControl
            componentClass="select"
            placeholder="select"
            name="measurement"
            value={this.state.ingredientInfo.measurement}
            onChange={this.onIngredientChange}>
              <option key='Nothing' value='Nothing'>--</option>
              {this.renderMeasurements()}
          </FormControl>
          {' '}
          <ControlLabel>Name</ControlLabel>
          {' '}
          <FormControl
            type="text"
            placeholder="Ingredient"
            name="ingredient"
            value={this.state.ingredientInfo.ingredient}
            onChange={this.onIngredientChange}
          />
          {' '}
          <ControlLabel>Category</ControlLabel>
          {' '}
          <FormControl
            componentClass="select"
            placeholder="select"
            name="category"
            value={this.state.ingredientInfo.category}
            onChange={this.onIngredientChange}>
              <option key='Nothing' value='Nothing'>--</option>
              {this.renderCategories()}
          </FormControl>
          {' '}
          <Button type="submit">
            Submit
          </Button>

          </Form>
        </form>



          {/* <label>Quantity</label>
          <input type="number" min="0" placeholder="Quantity" name="quantity" value={this.state.ingredientInfo.quantity} onChange={this.onIngredientChange} />

          <label>Measurement</label>
            <select name="measurement" onChange={this.onIngredientChange} value={this.state.ingredientInfo.measurement}>
              <option key='Nothing' value='Nothing'>--</option>
              {this.renderMeasurements()}
            </select>

          <label>Name</label>
          <input type="text" placeholder="Ingredient" name="ingredient" value={this.state.ingredientInfo.ingredient} onChange={this.onIngredientChange} />

          <label>Category</label>
            <select name="category" onChange={this.onIngredientChange} value={this.state.ingredientInfo.category}>
              <option key='Nothing' value='Nothing'>--</option>
              {this.renderCategories()}
            </select>
          <input type="submit"/>
        </form> */}
        <Button bsStyle="danger" onClick={this.onIngredientDelete}>Delete</Button>
        <Button bsStyle="warning" onClick={this.onIngredientCancel}>Cancel</Button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    categories: state.ingredient.categories,
    measurements: state.ingredient.measurements
  }
}

export default connect(mapStateToProps, { updateIngredient, toggleEditIngredientForm, deleteIngredient, getCategories, getMeasurements })(editIngredient)
