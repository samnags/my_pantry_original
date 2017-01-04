import React, { Component } from 'react'
import { addIngredient, getCategories, getMeasurements } from '../actions/ingredient'
import { connect } from 'react-redux'
import { Form, Button, FormGroup, FormControl, FieldGroup, ControlLabel } from 'react-bootstrap'

class newIngredient extends Component {
  constructor(props) {
    super(props)
    this.state = { ingredientInfo: { quantity: '', measurement: '--', ingredient: '', currentPantry: this.props.currentPantry, category: '' }}

    this.onIngredientChange = this.onIngredientChange.bind(this)
    this.onIngredientSubmit = this.onIngredientSubmit.bind(this)
  }

  componentDidMount() {
    this.props.getCategories()
    this.props.getMeasurements()
  }

  onIngredientChange(event) {
    const field = event.target.name
    const ingredients = this.state.ingredientInfo
    ingredients[field] = event.target.value
    ingredients["currentPantry"] = this.props.currentPantry.id
    this.setState({ ingredientInfo:  ingredients })
  }

  onIngredientSubmit(event) {
    event.preventDefault()
    this.props.addIngredient(this.state.ingredientInfo)
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
        <h2>Add an Ingredient</h2>
        <form onSubmit={this.onIngredientSubmit}>
        <Form inline controlId="formBasicText">
          <ControlLabel>Quantity</ControlLabel>
           {' '}
          <FormControl
            type="number"
            placeholder="Enter a quantity"
            name="quantity"
            value={this.state.ingredientName}
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
            value={this.state.ingredientName}
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

export default connect(mapStateToProps, { addIngredient, getCategories, getMeasurements })(newIngredient)
