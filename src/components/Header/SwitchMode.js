import React, { useContext, useEffect, useRef, useState } from 'react'
import {RiSunFill, RiMoonFill} from 'react-icons/ri'
import styles from './SwitchStyles.module.scss'
import {ThemeContext} from '../ThemeContext/ThemeContext'

export default function SwitchMode() {
    const themeContext = useContext(ThemeContext)
    const refInput = useRef()
    const refCircle = useRef()
    const refToggle = useRef()
    const [isDark, setIsDark] = useState(false)
    
    useEffect(() => {
        refInput.current.checked = isDark
    }, [isDark])

     const handleToggle =()=> {
         refInput.current.checked = !refInput.current.checked
        setIsDark(refInput.current.checked)
        themeContext.toggleTheme()

     }
     useEffect(() => {
        const changeBackgrondButton = () => {
            if(isDark) {
                refCircle.current.style.background = '#222'
                refToggle.current.style.background = '#fff'
            }else {
                refCircle.current.style.background = '#fff'
                refToggle.current.style.background = 'rgba(105, 75, 238, 0.719)'
            }
        }
        changeBackgrondButton()
        document.addEventListener('resize',changeBackgrondButton )
        return () => {
            document.removeEventListener('resize',changeBackgrondButton )
        }
    }, [isDark])
  return (
    <div className={styles.toggleButton} ref={refToggle} onClick={handleToggle}>
        <input type="checkbox" name="" className={styles.Input} ref={refInput}/>
        <div className={styles.Icon}>
            {(!isDark)? <RiSunFill /> : <RiMoonFill />
            }

        </div>
        <div className={styles.Circle} ref={refCircle}></div>
    </div>
  )
}
