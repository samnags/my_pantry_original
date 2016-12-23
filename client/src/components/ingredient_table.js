import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchPantryIngredients } from '../actions/ingredient'
import { Col, Table } from 'react-bootstrap'
import IngredientTableRow from './ingredient_table_row'

class IngredientTable extends Component {
  componentDidMount() {
    this.props.fetchPantryIngredients(this.props.id)
  }

  renderTableRows() {
    return this.props.ingredients.map((ingredient) => {
        return <IngredientTableRow name={ingredient.name}  />
    })
  }

  render() {
    return (
      <Col xs={6} md={4}>
      <Table bordered condensed responsive={true} >
        <thead>
          <tr>
            <th>
              Quantity
            </th>
            <th>
              Ingredient
            </th>
            <th>
              Category
            </th>
          </tr>
        </thead>
        <tbody>
          {this.renderTableRows()}
        </tbody>
      </Table>
      </Col>
    )
  }
}

function mapStateToProps(state) {
  return { ingredients: state.ingredient.ingredients }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPantryIngredients}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(IngredientTable)
