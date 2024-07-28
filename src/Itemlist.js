import React from 'react'
import { FaTrash} from "react-icons/fa";

const Itemlist = ({items,handlecheck,handleDelete}) => {
  return (
    <ul>
      {items.map((item)=> (

         <li className='item' key={item.id}>

          <input type="checkbox"
          onChange={() =>handlecheck(item.id)}
          checked={item.checked}
        ></input>

        <label>{item.item}</label>
        <FaTrash 
        role='button'
        onClick={() => handleDelete(item.id)}
        tabIndex="0"
         />
         </li>
       

      ) )}
    </ul>
  )
}

export default Itemlist