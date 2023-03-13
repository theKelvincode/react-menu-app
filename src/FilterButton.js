import React from 'react'

function FilterButton(props) {
  
  const defColor = "#c59d5f"
  const bColor = "#3cb043"
  const lColor = "#e55b02"
  const sColor = "#80400b"

  let color = props.button.category

  switch(color) {
    case "breakfast":
      color = bColor
      break;

    case "lunch":
      color = lColor
      break;

    case "shakes":
      color = sColor
      break;

    default:
      color = defColor
  }

  const btnSyles = {
    borderColor: color,
    color : color
  }


  return (
    <button style={btnSyles} className="filter-btn" onClick={()=> props.filter(props.button.category)}>
      {props.button.category}</button>
  )
}

export default FilterButton