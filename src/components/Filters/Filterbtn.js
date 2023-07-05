import React from 'react'
import Form from 'react-bootstrap/Form'

function Filterbtn({name,index, items, task, setPageNumber}) {

    const handleClick = () => {
        setPageNumber(1);
        task(items);
      };

  return (
    <Form.Check
    type='radio'
    name={name}
    id={`${name}-${index}`}
    label={items}
    onClick={handleClick}/>
  )
}

export default Filterbtn