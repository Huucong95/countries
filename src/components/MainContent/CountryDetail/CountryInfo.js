import React, { useContext, useState,useEffect } from 'react'
import styles from './CountryInfoStyles.module.scss'
import clsx from 'clsx'
import { ThemeContext } from '../../ThemeContext/ThemeContext'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { Link } from 'react-router-dom'
import ScrollBar from 'react-perfect-scrollbar'


const getLanguages =(country) => {
    let result =''
    country.languages.forEach(language => {
        if(result!==''){
            result = result + '-' +language.name
        }else {
            result+= language.name
        }
    })
    return result
}
const getCountryNameByCode = async (code) => {
    const result = await axios.get(`https://restcountries.com/v2/alpha?codes=${code}`)
    return result.data
}
export default function CountryInfo(Props) {
    const [countriesBorder,setCountriesBorder ] = useState([])
    const country = useSelector(state => state.Countries.country)
    const themeContext = useContext(ThemeContext)
    useEffect(() => {
      if(country && country.borders){
          getCountryNameByCode(country.borders)
          .then(res =>{
              const countryName = res.map(country => country.name)
              setCountriesBorder(countryName)
            })
            .catch((err) => console.log(err))
      }
    
     
    }, [country])
    

  return (
      <ScrollBar style={{maxHeight:'70vh', overflow:'hidden'}}>
        <div className={styles.countryInfo}>
            {country&& (
                <>
                <h3 className={styles.countryName}>{country.name}</h3>
            <table>
                <tbody>
                    <tr>
                        <td className={styles.countryInfo__tittle}>Native Name</td>
                        <td> :</td>
                        <td className={styles.countryInfo__value}>{country.nativeName}</td>
                    </tr>
                    <tr>
                        <td className={styles.countryInfo__tittle}>Official</td>
                        <td> :</td>
                        <td className={styles.countryInfo__value}> {country.altSpellings}</td>
                    </tr>
                    <tr>
                        <td className={styles.countryInfo__tittle}>Population</td>
                        <td> :</td>
                        <td className={styles.countryInfo__value}>{country.population}</td>
                    </tr>
                    <tr>
                        <td className={styles.countryInfo__tittle}>Region</td>
                        <td> :</td>
                        <td className={styles.countryInfo__value}>{country.region}</td>
                    </tr>
                    <tr>
                        <td className={styles.countryInfo__tittle}>Sub Region</td>
                        <td> :</td>
                        <td className={styles.countryInfo__value}>{country.subregion}</td>
                    </tr>
                    <tr>
                        <td className={styles.countryInfo__tittle}>Capital</td>
                        <td> :</td>
                        <td className={styles.countryInfo__value}>{country.capital}</td>
                    </tr>
                    <tr>
                        <td className={styles.countryInfo__tittle}>Top Level Domain</td>
                        <td> :</td>
                        <td className={styles.countryInfo__value}>{country.topLevelDomain}</td>
                    </tr>
                    <tr>
                        <td className={styles.countryInfo__tittle}>Currentcies</td>
                        <td> :</td>
                        <td className={styles.countryInfo__value}>{`${country.currencies[0].code}- ${country.currencies[0].name}` }</td>
                    </tr>
                    <tr>
                        <td className={styles.countryInfo__tittle}>Languages</td>
                        <td> :</td>
                        <td className={styles.countryInfo__value}>{getLanguages(country)}</td>
                    </tr>
                    <tr>
                        <td className={styles.countryInfo__tittle}>Border Country</td>
                        <td> :</td>
                        <td className={styles.borderList}>
                            {
                                countriesBorder.length>0 && countriesBorder.map((country,index) =>(
                                    <Link to= {`/country/${country}`} key={index}>
                                        <div className={clsx(styles.borderItem, themeContext.theme)} key={index}>{country}</div>
                                    </Link>
                                ))
                            }
                            
                        </td>
                    </tr>
                </tbody>
            </table>
                </>
            )}
        </div>
      </ScrollBar>
  )
}
