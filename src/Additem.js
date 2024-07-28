import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { useRef } from 'react'

const Additem = ({newItem, setNewItem, handleSubmit}) => {

    const inputRef=useRef()
  return (
    <form className='addform' onSubmit={handleSubmit}>
        <label htmlFor='addItem'>Add item</label>
        <input 
        autoFocus
        ref={inputRef}
        id='additem'
        type='text'
        placeholder='Add item'
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}>
        </input>
        <button type='submit'
        aria-label='Add item'
        onClick={()=>inputRef.current.focus()}
    >
            <FaPlus />
        </button>
    </form>
  )
}

export default Additem