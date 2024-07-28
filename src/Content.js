        import React from 'react'
        import Itemlist from './Itemlist';

        const Content = ({items,handlecheck,handleDelete}) => {
     
       return (
    <>
    {(items.length)?(
    <Itemlist 
    items={items}
     handlecheck={handlecheck}
     handleDelete={handleDelete}
     />
    ):(
      <p>your list is empty</p>
    )
  }
    </>
  )
}

export default Content 