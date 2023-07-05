import React from 'react'

import Accordion from 'react-bootstrap/Accordion'
import Form from 'react-bootstrap/Form'

import Filterbtn from './Filterbtn'

function Gender({setGender, setPageNumber}) {

    const gender =["Female", "Male", "Genderless", "Unknown"];

  return (
    <Accordion.Item eventKey="1">
        <Accordion.Header>Gender</Accordion.Header>
        <Accordion.Body>
            {gender.map((items,index) =>(
                <Filterbtn 
                  setPageNumber={setPageNumber}
                  task={setGender} 
                  key={index} 
                  index={index} 
                  name="gender" 
                  items={items}
                />            
              ))}
                <Form.Check
                  type='radio'
                  name="gender"
                  id='xx'
                  label="No filter"
                  onClick={()=>setGender("")}
                />
        </Accordion.Body>
    </Accordion.Item>
  )
}

export default Gender