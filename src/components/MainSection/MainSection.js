import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner'
import Cards from '../../utils/Card/Cards';
import classes from './MainSection.module.css';
import {getAllFunction,getAllFeatures} from '../../service/ApiService/ApiService'

const MainSection = () => {
  const [allData, setAllData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchDetails = async () => {
      setLoading(true); 
      const data= await getAllFunction('https://pokeapi.co/api/v2/pokemon?limit=20');
      await getPersonDetail(data);
      setLoading(false);
    }
    fetchDetails();
  }, [])



  const getPersonDetail = async (data) => {
    let pData = await Promise.all(
      data.map(async (e) => {
        let data=await getAllFeatures(e.url);
        return data
      })
    )
    setAllData(pData)
  }

  return (
    <section>
      <Container>
        {loading && <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>}
        <div className={classes.flex}>
         {allData.map((e)=>{
           return <Cards key={e.id} name={e.name} height={e.height} weight={e.weight} stats={e.stats} 
           image={e.sprites.front_default} ability={e.abilities}/>
         })}
        </div>
      </Container>
    </section>
  )
}

export default MainSection

