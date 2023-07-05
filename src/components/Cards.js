import React from 'react'

import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge';

import { Link } from "react-router-dom";

function Cards({results, page}) {
  
  let display;

  if(results){
    display = results.map((e)=>{

      const {id, name, image, location, status} = e;

      /*Badge Style*/
      function condition(){
        if(status === "Alive"){
          return 'success';
        }
        else if(status === "Dead"){
          return 'danger';
        }else{
          return 'secondary';
        }
      }

      /*Card*/
      return(
        
          <Link 
            to={`${page}${id}`} 
            className="col-lg-4 col-md-6 col-sm-6 col-12" 
            key={id}
            >
            <div className='cards'>
            <Image src={image} alt='Character pic' fluid/>
            <h4 className='fw-bold'>
              <span id='name-title'>{name}</span>
              <Badge bg={condition()}>{status}</Badge>
            </h4>
            <div>
              <h6>Last Location:</h6>
              <h5>{location.name}</h5>
            </div></div>
          </Link>
          
      )

    });
  }else{
    display = "No characters found"
  }
  return (
    <Row>
       <>{display}</>
    </Row>
  )
}

export default Cards