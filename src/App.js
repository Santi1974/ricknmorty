import React, { useState, useEffect } from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Fade } from "react-awesome-reveal";
import { Helmet } from 'react-helmet';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Filter from './components/Filters/Filter';
import Cards from "./components/Cards"
import Pages from './components/Pages';
import Search from './components/Search';
import Navigation from './components/Navigation';
import Episodes from './components/Episodes';
import CardSelect from './components/CardSelect';

import icon from "./assets/icon.webp"

import './App.css';

import "../src/components/styles.css"

function App(){
  return(
    <>
    <Helmet>
      <title>Mi Título de Página</title>
      <link rel='icon' href={icon} />
    </Helmet>

    <BrowserRouter>
      <div className="App">
        <Fade  direction='down' triggerOnce={true}>
          <Navigation />
        </Fade>
      </div>

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path="/:id" element={<CardSelect />} />

        <Route path='/episodes' element={<Episodes />}/>
        <Route path="/episodes/:id" element={<CardSelect />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

/*Home|Characters Page*/
const Home = () => {

  const [pageNumber, setPageNumber] = useState(1);

  /*Filters*/
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");
  const [species, setSpecies] = useState("");

  /*Search*/
  const [search,setSearch] = useState("");

  /*Fetching data*/
  const [fetchedData, setFetchedData] = useState([]);
  const{info, results} = fetchedData;

  const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(()=>{
    (async function(){
      const data = await fetch(api).then(res=>res.json());
      setFetchedData(data);
    })()
  },[api])

  return (
    <Fade delay={350} triggerOnce={true}>
      <Search setSearch={setSearch} setPageNumber={setPageNumber}/>

      <Container >
        <Row className='main-row' >
          <Col md={9}>
            <Cards page="/" results={results}/>
          </Col>
            <Filter
             setStatus={setStatus}
             setPageNumber={setPageNumber}
             setGender={setGender}
             setSpecies={setSpecies}
             />
        </Row>
      </Container>

      <Pages 
        pageNumber={pageNumber} 
        setPageNumber={setPageNumber}
        info={info}
        />
    </Fade>
  );
}

export default App;
