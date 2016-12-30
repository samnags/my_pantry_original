import React from 'react'
import { Col, Table } from 'react-bootstrap'
import IngredientTableRow from './ingredient_table_row'
// import { connect } from 'react-redux'
// import { fetchPantryIngredients } from '../actions/ingredient'

const IngredientTable = (props) => {
  var tableRows = props.ingredients.map((ingredient) => {
        return <IngredientTableRow
          key={ingredient.created_at ? ingredient.created_at : 'None' }
          name={ingredient.ingredient.name ? ingredient.ingredient.name : 'None'}
          quantity={ingredient.quantity ? ingredient.quantity : 'None'}
          measurement={ingredient.measurement ? ingredient.measurement.name : 'None' }
          category={ingredient.category ? ingredient.category.name : 'None'}
          />
    })

    return (
      <Col xs={6} md={4}>
      <Table bordered condensed responsive={true} >
        <thead>
          <tr>
            <th>
              Quantity
            </th>
            <th>
              Measurement
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
          {tableRows}
        </tbody>
      </Table>
      </Col>
    )
  }
//
module.exports = IngredientTable


// class IngredientTable extends Component {
//   componentWillMount() {
//     this.props.fetchPantryIngredients(this.props.id)
//   }
//
//   renderTableRows(ingredient) {
//       return <IngredientTableRow
//         key={ingredient.created_at}
//         name={ingredient.ingredient.name ? ingredient.ingredient.name : 'None'}
//         quantity={ingredient.quantity ? ingredient.quantity : 'None'}
//         measurement={ingredient.measurement ? ingredient.measurement.name : 'None' }
//         category={ingredient.category ? ingredient.category.name : 'None'}
//       />
//   }
//
//   render() {
//     return(
//       <Col xs={6} md={4}>
//       <Table bordered condensed responsive={true} >
//         <thead>
//           <tr>
//             <th>
//               Quantity
//             </th>
//             <th>
//               Measurement
//             </th>
//             <th>
//               Ingredient
//             </th>
//             <th>
//               Category
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           {this.props.ingredients.map(this.renderTableRows)}
//         </tbody>
//       </Table>
//       </Col>
//     )
//   }
// }
//
// function mapStateToProps(state) {
//   return { ingredients: state.ingredient.ingredients }
// }
//
// export default connect(mapStateToProps, { fetchPantryIngredients })(IngredientTable)
