
export default function MenuItem(props) {  

  const defColor = "#c59d5f"
  const bColor = "#3cb043"
  const lColor = "#e55b02"
  const sColor = "#80400b"

  let borderColor = props.item.category

  switch(borderColor) {
    case "breakfast":
      borderColor = bColor
      break;

    case "lunch":
      borderColor = lColor 
      break;

    case "shakes":
      borderColor = sColor
      break;

    default:
      borderColor = defColor
  }

  const photoSyles = {
    borderColor: borderColor
  }

  return(

    <article className="menu-item">
      <img src={`../images/${props.item.img}`} alt="menu item"  style={photoSyles}  className="photo" />
      <div className="item-info">
        <header>
          <h4>{props.item.title}</h4>
          <h4 className="price">${props.item.price}</h4>
        </header>
        <p className="item-text">
          {props.item.desc}
        </p> 
      </div>
    </article>
  )
} 