import React from 'react'
import { Col } from 'react-bootstrap'
import Reactable from 'reactable'

var Table = Reactable.Table;

const IngredientTable = (props) => {

  let tableRows = null

  if (props.ingredients.length > 0) {
    tableRows = props.ingredients.map((ingredient) => {
      return (
          { Quantity: ingredient.quantity,
            Measurment: ingredient.measurement.name,
            Name: ingredient.ingredient.name,
            Category: ingredient.category.name }
          )
      })
  }
    return (
        <Col xs={6} md={4}>
          <Table
            className={'table table-bordered table-responsive table-hover'}
            data={tableRows}
            // filterable={['Quantity', 'Measurment', 'Name', 'Category']}
            // filterable={['Category']}
            noDataText="No matching records found."
            onClick={props.onClick}
            />
        </Col>

      // <Col xs={6} md={4}>
      // {props.location}
      // <Table bordered condensed responsive={true} >
      //   <thead>
      //     <tr>
      //       <th>
      //         Quantity
      //       </th>
      //       <th>
      //         Measurement
      //       </th>
      //       <th>
      //         Ingredient
      //       </th>
      //       <th>
      //         Category
      //       </th>
      //     </tr>
      //   </thead>
      //   <tbody>
      //     {tableRows}
      //   </tbody>
      // </Table>
      // </Col>
    )
  }

module.exports = IngredientTable


// const IngredientTable = (props) => {
//   let tableRows = null
//
//   if (props.ingredients.length > 0) {
//     tableRows = props.ingredients.map((ingredient) => {
//           return <IngredientTableRow
//             key={ingredient.created_at}
//             name={ingredient.ingredient.name}
//             quantity={ingredient.quantity}
//             measurement={ingredient.measurement.name}
//             category={ingredient.category.name}
//             />
//       })
//   }
//
//
//     return (
//       <Col xs={6} md={4}>
//       {props.location}
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
//           {tableRows}
//         </tbody>
//       </Table>
//       </Col>
//     )
//   }
//
// module.exports = IngredientTable
