import React from 'react'

import Accordion from 'react-bootstrap/Accordion'
import Form from 'react-bootstrap/Form'

import Filterbtn from './Filterbtn'

function Species({setSpecies, setPageNumber}) {

  const species = [
    "Human",
    "Alien",
    "Humanoid",
    "Poopybutthole",
    "Mythological",
    "Unknown",
    "Animal",
    "Disease",
    "Robot",
    "Cronenberg",
    "Planet",
  ];

  return (
    <Accordion.Item eventKey="2">
        <Accordion.Header>Species</Accordion.Header>
        <Accordion.Body>
            {species.map((items,index) =>(
                <Filterbtn 
                 setPageNumber={setPageNumber}
                 task={setSpecies} 
                 key={index} 
                 index={index} 
                 name="species" 
                 items={items}
              />
            ))}
              <Form.Check
                  type='radio'
                  name="species"
                  id='xxx'
                  label="No filter"
                  onClick={()=>setSpecies("")}
                />
        </Accordion.Body>
    </Accordion.Item>
  )
}

export default Species