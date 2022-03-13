import React,{useContext, useEffect, useRef, useState} from 'react'
import {FaChevronDown } from "react-icons/fa"
import { useParams } from 'react-router-dom'

import styled from 'styled-components'
import {ThemeContext} from '../../ThemeContext/ThemeContext'
import Options from './Options'



export default function Filter() {
  const themeContext = useContext(ThemeContext)
  const refSelect = useRef(null)
  const [isShowOption, setIsShowOption] = useState(false)
  const {regionName} = useParams()
  const [vauleOption, setValueOption] = useState('All')
    const handleOptions = (e) => {
        if(refSelect.current)
            setIsShowOption(refSelect.current.contains(e.target)) 
    }
    useEffect(()=> {
        if(isShowOption){
            document.addEventListener('click',handleOptions)
            return () => {
            document.removeEventListener('click',handleOptions)

            }
        }
    },[isShowOption])
    useEffect(() => {
        if(regionName)
            setValueOption(regionName)
        else
            setValueOption('All')
      }, [regionName])
    
  return (
    <FilterPane>
        <h3>Filter by regions:</h3>
        <SelectPane>
            <Select 
                className={themeContext.theme} 
                ref={refSelect}
                onClick={handleOptions}    
            >
                <span>{vauleOption}</span>
                <FaChevronDown />
            </Select>
            <Options isShowOption={isShowOption}/>
        </SelectPane>
      </FilterPane>
  )
}
const FilterPane = styled.div`
    max-width:160px;
    width: 100%;
    margin-top: 20px;

`
const SelectPane = styled.div`
    width:100%;
    margin-top:8px;
    position: relative;

`
const Select = styled.div`
    padding: 0 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 4px;
    height: 34px;
    user-select: none;

`
