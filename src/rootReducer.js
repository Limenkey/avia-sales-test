import { combineReducers } from 'redux'

import appReducer from "./Components/App/appReducer";
import filtersReducer from "./Components/FiltersList/filtersReducer"
import ticketsReducer from './Components/Tickets/ticketsReducer';

const rootReducer = combineReducers({
    app: appReducer,
    filters: filtersReducer,
    tickets: ticketsReducer,
  })
  
  export default rootReducer

