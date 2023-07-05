import React from 'react';

import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';

import Status from './Status';
import Gender from './Gender';
import Species from './Species';

function Filter({setGender,setSpecies, setStatus, setPageNumber}) {

  const clear = () =>{
    setGender("");
    setSpecies("");
    setStatus("");
    setPageNumber("");
    window.location.reload(false);
  }
  return (
    <Col className='filter-container' md={3}>
      <h3 className='fw-bold'>Filters</h3>
      <h5 className="filter-clear" onClick={clear}>Clear all filters</h5>
      <Accordion defaultActiveKey="">
        <Status 
          setStatus={setStatus}
          setPageNumber={setPageNumber}
          />
        <Gender           
          setGender={setGender}
          setPageNumber={setPageNumber}
          />
        <Species           
          setSpecies={setSpecies}
          setPageNumber={setPageNumber}
          />
      </Accordion>
    </Col>

  )
}

export default Filter