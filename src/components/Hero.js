import { useState } from "react";
import MenuItem from "./menu-item/Menu-Item";
import menuData from "../menu-data";
import buttonData from "../button-data";
import FilterButton from "../FilterButton";

export default function Hero() {

  const [menuArray, setMenuArray] = useState(menuData)

  const [btnData] = useState(buttonData)

  const items = menuArray.map( 
    item => {
      return (
        <MenuItem key = {item.id} item={item} />
      )
    }
  )

  const filterButtons = btnData.map(
    button => {
      return (
        <FilterButton key={button.id} button={button}  filter={filter} />
      )
    }
  )
  
  function filter(category) {
    category.toLowerCase() !== "all" 
    ? setMenuArray( menuData.filter(menu => menu.category === category.toLowerCase())) 
    : setMenuArray(menuData)
  }

  return (
    <>
      <div className="btn-container">
        {filterButtons}
      </div>

      <div className='section-center'>
        {items}
      </div>
    </>
  )
}