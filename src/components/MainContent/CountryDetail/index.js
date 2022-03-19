import React, { useContext, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { getCountryByName } from '../../Store/Action/countriesActions'
import {ThemeContext} from '../../ThemeContext/ThemeContext'
import CountryInfo from './CountryInfo'
import { useSelector } from 'react-redux'




export default function CountryDetail(props) {
    const country = useSelector(state => state.Countries.country)

    const themeContext = useContext(ThemeContext)
    const slug = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getCountryByName(slug.countryName))
    }, [slug.countryName, dispatch])
    
  return (
    <Wrapper>
        <div className={`${themeContext.theme} goback-btn`} onClick={()=>navigate(-1)}>Go Back</div>
        <CountryContainer>
            <div className='flagCountry'>
                <img src={country?country.flag:''} alt="" />
            </div>
            <CountryInfo/>
        </CountryContainer>
    </Wrapper>
  )
}
const Wrapper = styled.div`
    padding-top: 20px;
    .goback-btn {
        display: block;
        width:80px;
        height: 28px;
        line-height: 28px;
        padding: 2px 4px;
        border-radius : 4px;
        text-align : center;
        font-weight: 500;
        filter: brightness(0.9);
        transition: all 0.2 linear;
        &:hover {
            filter: brightness(1);
            font-weight: bold;
            user-select: none;

        }
    }
    .flagCountry {
        max-width:400px;
        width:100%;
        height:100%;
        box-shadow: var(--BoxShadow);
        img{
            width: 100%;
            height:100%
        }
    }


`
const CountryContainer = styled.div`

    display: flex;
    flex-direction: row;
    margin-top:30px;
    @media only screen and (max-width: 800px) {
        flex-direction: column;
        align-item:center;

    }

`
