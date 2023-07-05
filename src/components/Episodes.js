import React, { useEffect, useState } from 'react'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import Cards from './Cards';
import EpisodeInput from './EpisodeInput';
import { Fade } from 'react-awesome-reveal';

function Episodes() {

    const [id,setId] = useState("1");
    const [results,setResults] = useState("")

    const [fetchedData, setFetchedData] = useState([]);
    const{name, air_date} = fetchedData;
  
    const api = `https://rickandmortyapi.com/api/episode/${id}`;
  
    useEffect(()=>{
      (async function(){
        const data = await fetch(api).then(res=>res.json());
        setFetchedData(data);

        const a = await Promise.all(
          data.characters.map((e) => {
            return fetch(e).then((res) => res.json());
          })
        );
        setResults(a);
      })()
    },[api])

  return (
    <Fade delay={350}>
    <Container>
      <Row className='episodes-title'>
        <h2>Episode: <span>{name===""? "Unknown" : name}</span></h2>
        <h4>Air Date: <span>{air_date===""? "Unknown" : air_date}</span></h4>
      </Row>
      <Row className='main-row'>
        <Col md={9}>
          <Row>
            <Cards page="/episodes/" results={results} />
          </Row>
        </Col> 
        <Col md={3}>
          <h3 className='fw-bold'>Select episode</h3>
          <EpisodeInput total={50} setId={setId}/>
        </Col>
      </Row>
    </Container>
    </Fade>
  )
}

export default Episodes