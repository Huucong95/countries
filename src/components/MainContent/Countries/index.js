import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Scrollbar from 'react-perfect-scrollbar'
import styled from 'styled-components'
import Country from './Country'
import {getCountries, getCountriesByName, getCountryRegion} from '../../Store/Action/countriesActions'
import { useParams } from 'react-router-dom'
import Loading from '../../Loading/Loading'


function Countries() {
    const dispatch = useDispatch()
    const countries = useSelector(state => state.Countries.countries)
    const slug =useParams()
    const loading = useSelector(state => state.Countries.loading)
    
    useEffect(() => {
        if(slug.regionName){
            dispatch(getCountryRegion(slug.regionName))
        }else if(slug.name){
            dispatch(getCountriesByName(slug.name))
        }
        else {
            dispatch(getCountries())

        }
    },[dispatch,slug.regionName,slug.name])
    
  return (
      <>{
          loading ? (<Loading/> ): (<Scrollbar style={{maxHeight:'80vh', overflow:'hidden',  marginTop: '20px'}}>
          <CountriesContainer>
            {
                countries.map((country, index) =>(

                    <Country country={country} key={index} />

                ) )
            }
        </CountriesContainer>
      </Scrollbar>)
      }
      
    
      </>

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
