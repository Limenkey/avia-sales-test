const initialState = {
    all: true,
    nonStop: true,
    oneStop: true,
    twoStops: true,
    threeStops: true,
}

const filtersReducer = (state = initialState, action) => {
    switch (action.type){

        case 'filters/toggleAll':
            return {
                all: !state.all, 
                nonStop: !state.all, 
                oneStop: !state.all, 
                twoStops: !state.all, 
                threeStops: !state.all
            }
        
        case 'filters/toggleNonStop':
            return {...state, nonStop: !state.nonStop}

        case 'filters/toggleOneStop':
            return {...state, oneStop: !state.oneStop}

        case 'filters/toggleTwoStops':
            return {...state, twoStops: !state.twoStops}

        case 'filters/toggleThreeStops':
            return {...state, threeStops: !state.threeStops}

        default:
            return state   
    } 
}

export default filtersReducer