import React, { useState } from 'react'
import {MdSearch} from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'


export default function Search() {
  const [valueInput,setValueInput] = useState('')
  const navigate = useNavigate()
  const handleKeyDown =(e) => {
      if(e.keyCode===13){
         (valueInput!=='')? navigate(`/search/${valueInput}`): navigate('/')
      }
  }
  return (
    <SearchPane>
        <h3>Search Country :</h3>
        <SearchElement>
          <input type="text" placeholder='Input...'
          onChange={e=>setValueInput(e.target.value)}
          value={valueInput}
          onKeyDown={handleKeyDown}
          />
          <Link to={(valueInput!=='')? `/search/${valueInput}`: '/'}>
            <div className='icon'>
              <MdSearch />
            </div>
          </Link>
        </SearchElement>
    </SearchPane>
  )
}
const SearchPane = styled.div`
    max-width:320px;
    width: 100%;
    margin-top: 20px;
`
const SearchElement = styled.div`
    margin-top: 8px;
    display: flex;
    align-item: center;
    justify-content: space-between;
    width: 100%;
    height: 34px;
    background: #fff;
    box-shadow: var(--BoxShadow);
    boder-radius:4px;
    .icon{
        height: 34px;
        width: 40px;
        padding:2px;
        text-align: center;
        padding-top: 10px;
        background: #aaa;
        opacity: 75%;
        cursor:pointer;
        &:hover {
        opacity: 1;

        }
    }
    input {
        boder:0;
        outline: none;
        width:100%;
    }

`