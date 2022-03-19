
import React, { useContext } from 'react'
import styled from 'styled-components'
import {ThemeContext} from '../ThemeContext/ThemeContext'

export default function Footer() {
  const themeContext = useContext(ThemeContext)

  return (
    <FooterPane className={themeContext.theme}>
        <h3>Design by ZTBee</h3>
    </FooterPane>
  )
}

const FooterPane = styled.div`
 height: 8vh;
 display: flex;
 align-items: center;
 position:fixed;
 right:0;
 left:0;
 bottom:0;
 justify-content: space-between;
 padding: 0 40px;
 box-shadow: 5px 5px 0px -5px #333;

 h3 {
     font-size : 24px;
     font-weight: bold;
     height:8vh;
     cursor:pointer;


 }
`