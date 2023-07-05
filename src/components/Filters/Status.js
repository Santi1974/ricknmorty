import React from 'react'

import Accordion from 'react-bootstrap/Accordion'
import Form from 'react-bootstrap/Form'

import Filterbtn from './Filterbtn'

function Status({setStatus,setPageNumber}) {

    const status =["Alive","Dead","Unknown"];

  return (
    <Accordion.Item eventKey="0">
        <Accordion.Header>Status</Accordion.Header>
        <Accordion.Body>
            {status.map((items,index) =>(
                 <Filterbtn 
                    setPageNumber={setPageNumber}
                    task={setStatus} 
                    key={index} 
                    index={index} 
                    name="status" 
                    items={items}
                 />
            ))}
                <Form.Check
                  type='radio'
                  name="status"
                  id='x'
                  label="No filter"
                  onClick={()=>setStatus("")}
                />
        </Accordion.Body>
    </Accordion.Item>
  )
}

export default Status