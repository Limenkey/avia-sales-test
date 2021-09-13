
/* APP */
export const switchToFastest = () =>  ({type: 'app/switchToFastest'})
export const switchToCheapest = () => ({type: 'app/switchToCheapest'})
export const showMoreTickets = () => ({type: 'app/showMoreTickets'})
export const switchToAll = () => ({type: 'app/switchToAll'})
export const firstBatchLoaded = () => ({type: 'app/firstBatchLoaded'})
export const loadedFull = () => ({type: 'app/loadedFull'})

/* FILTERS */
export const toggleAll = () => ({type: 'filters/toggleAll'})
export const toggleNonStop = () => ({type: 'filters/toggleNonStop'})
export const toggleOneStop = () => ({type: 'filters/toggleOneStop'})
export const toggleTwoStops = () => ({type: 'filters/toggleTwoStops'})
export const toggleThreeStops = () => ({type: 'filters/toggleThreeStops'})

/* TICKETS */
export const getFirstBatch = payload => ({type: 'tickets/getFirstBatch', payload})
export const getTickets = payload => ({type: 'tickets/getTickets', payload})
