import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Scrollbar from 'react-perfect-scrollbar'
import styled from 'styled-components'
import Country from './Country'
import {getCountries} from '../../Store/Action/countriesActions'


function Countries() {
    const dispatch = useDispatch()
    const countries = useSelector(state => state.Countries.countries)
    
    useEffect(() => {
        dispatch(getCountries())
    },[])
    
  return (
    <Scrollbar style={{maxHeight:'80vh', overflow:'hidden',  marginTop: '20px'}}>
          <CountriesContainer>
            {
                countries.map((country, index) =>(

                    <Country country={country} key={index} />

                ) )
            }
        </CountriesContainer>
      </Scrollbar>

  )
}
export default Countries
const CountriesContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap:12px;
    padding: 4px 1px;

    @media screen and  (max-width:1024px) {
        grid-template-columns: repeat(3,1fr);
        gap:10px;
    }
    @media screen and  (max-width:768px) {
        grid-template-columns: repeat(2,1fr);
        gap:8px;
    }
    @media screen and  (max-width:680px) {
        grid-template-columns: repeat(1,auto);
    }

`
