import { GET_COUNTRIES } from "../types"
const CountriesReducerinitialState = {
    countries: []
}

const CountriesReducer = (state = CountriesReducerinitialState, action) => {
    const {type,payload} = action
  switch (type) {
    case GET_COUNTRIES:
        return {...state, countries:payload}
  default:
    return state
  }
}
export default CountriesReducer