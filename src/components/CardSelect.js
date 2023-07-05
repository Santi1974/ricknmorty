import React, { useEffect, useState } from 'react'

import { Fade } from 'react-awesome-reveal';

import Image from 'react-bootstrap/Image'

import { useParams } from 'react-router-dom'

function CardSelect() {
    const {id} = useParams();

    const [fetchedData, setFetchedData] = useState([]);
    const { name, location, origin, gender, image, status, species } = fetchedData;
  
    const api = `https://rickandmortyapi.com/api/character/${id}`;
  
    useEffect(() => {
      (async function () {
        let data = await fetch(api).then((res) => res.json());
        setFetchedData(data);
      })();
    }, [api]);
  return (
    <Fade direction='left'>
      <div className='main-card'>
        <div>
          <Image src={image} alt='Character pic' fluid/>
        </div>
        <div className='main-card-text'>
          <p>Name: <span>{name}</span></p>
          <p>Status: <span>{status}</span></p>
          <p>Gender: <span>{gender}</span></p>
          <p>Location: <span>{location?.name}</span></p>
          <p>Origin: <span>{origin?.name}</span></p>
          <p>Species: <span>{species}</span></p>
        </div>
      </div>
    </Fade>
  )
}

export default CardSelect