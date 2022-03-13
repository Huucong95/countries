import React from 'react'
import styled from 'styled-components'
import {useNavigate} from 'react-router-dom'

export default function Option({region}) {
    const navigate = useNavigate()
    const handleVauleOption = ()=> {
      if(region.value!=='All'){
        navigate(`/region/${region.value}`)
      }else{
        navigate(`/`)

      }
    }
  
  return (
      <OptionItem onClick={handleVauleOption}>
         <region.icon/>
         <span>{region.value}</span>
      </OptionItem>
  )
}


const OptionItem = styled.li`
    display: flex;
    align-item: center;
    font-size: 18px;
    font-weight:500;
    cursor:pointer;
    padding: 4px 8px;
    &:hover {
        font-weight:bold;
        background:var(--SelectOptionBg)

    }
    span {
        margin-left: 4px
    }

`