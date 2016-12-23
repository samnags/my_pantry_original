import React from 'react'

const IngredientTableRow = (props) => {
  return (
    <tr>
      <td>
        {props.quantity}
      </td>
      <td>
        {props.measurement}
      </td>
      <td>
        {props.name}
      </td>
      <td>
        {props.category}
      </td>
    </tr>
  )
}


module.exports = IngredientTableRow
