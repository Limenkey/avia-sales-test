

const initialState = {
    firstBatch: [],
    allTickets: [],
}


const ticketsReducer = (state = initialState, action) => {
    switch (action.type){
        case 'tickets/getTickets':
            return {...state, allTickets: [...state.allTickets, ...action.payload]}
        case 'tickets/getFirstBatch':
            return {...state, firstBatch: [...state.firstBatch, ...action.payload]}
        default:
            return state   
    } 
}

export default ticketsReducer





