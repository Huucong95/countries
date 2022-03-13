import axios from 'axios'
import { GET_COUNTRIES } from '../types'


const countriesApi = 'https://restcountries.com/v2'


export const getCountries = () => async (dispatch) => {
    await axios.get(countriesApi+'/all')
    .then(res => {
        const countries = res.data.map((country)=>({
           name: country.name,
           capital: country.capital,
           population: new Intl.NumberFormat().format(country.population),
           region: country.region,
           flag: country.flag,
        }))
        dispatch({type: GET_COUNTRIES, payload: countries})
    })
    .catch((err) => console.log('get api error', err))
}