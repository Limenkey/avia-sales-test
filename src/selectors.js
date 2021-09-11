export const selectFilters = state => state.filters
export const selectFirstBatch = state => state.tickets.firstBatch
export const selectAllTickets = state => state.tickets.allTickets
export const selectUseAll = state => state.app.useAll
export const selectTicketsPerPage = state => state.app.ticketsPerPage
export const selectCurrentTab = state => state.app.currentTab
export const selectLoading = state => state.app.loadingFirstBatch
export const selectLoadedFull = state => state.app.loadedFull