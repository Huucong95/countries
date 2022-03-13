
import React, { useContext } from 'react'

import styled from 'styled-components'
import SwitchMode from './SwitchMode'
import {ThemeContext} from '../ThemeContext/ThemeContext'

export default function Header() {
  const themeContext = useContext(ThemeContext)

  return (
    <HeaderPane className={themeContext.theme}>
        <span>Where in the world?</span>
        <SwitchMode />
    </HeaderPane>
  )
}

const HeaderPane = styled.div`
 height: 8vh;
 display: flex;
 align-items: center;

 justify-content: space-between;
 padding: 0 40px;
 box-shadow: 0 5px 5px -5px #333;
 z-index: 999;

 span {
     font-size : 24px;
     font-weight: bold;

 }
`