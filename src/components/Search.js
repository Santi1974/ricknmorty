import React from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'

function Search({setPageNumber,setSearch}) {
  return (
    <Form className='searchbar'>
      <InputGroup>
        <Form.Control 
        type="text" 
        placeholder='Search for characters' 
        className='searchbar-bar'
        onChange={e=>{
            setPageNumber(1);
            setSearch(e.target.value);
        }}/>
        <Button
        onClick={e=>{e.preventDefault()}}
        className='search-button'>Search</Button>
      </InputGroup>
    </Form>
  )
}

export default Search