
const initialState = {
  currentTab: 'cheapest',
  ticketsPerPage: 5,
  loadingFirstBatch: true,
  loadedFull: false,
  useAll: false,
}

const appReducer = (state = initialState, action) => {
    switch (action.type){
        case 'app/switchToFastest':
          return {...state, currentTab: 'fastest'}
        case 'app/switchToCheapest':
          return {...state, currentTab: 'cheapest'}
        case 'app/showMoreTickets':
          return {...state, ticketsPerPage: state.ticketsPerPage + 5}
        case 'app/firstBatchLoaded':
          return {...state, loadingFirstBatch: false}
        case 'app/loadedFull':
          return {...state, loadedFull: true}  
        case 'app/switchToAll':
          return {...state, useAll: true }  
  
        default:
            return state   
    } 
}

export default appReducer