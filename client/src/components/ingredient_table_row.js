import React from 'react'

const IngredientTableRow = (props) => {
  // debugger
  return (
    <tr>
      <td>
        {props.quantity ? props.quantity : "None"}
      </td>
      <td>
        {props.name}
      </td>
      <td>
        {props.category ? props.category : 'None'}
      </td>
    </tr>
  )
}


module.exports = IngredientTableRow
