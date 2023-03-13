
function Button(props) {
 
  return (   
    <button className="filter-btn" onClick={props.filter}>{props.menuType}</button>
  )
}

export default Button