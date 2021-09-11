import service from "./Services/avSalesService"
import { loadedFull, firstBatchLoaded, getFirstBatch, getTickets } from "./actions"

const searchId = service.getSearchId().then(res => res)

const requestTickets = async (dispatch, getState) => {
    let status
    try {
        const req = await service.getTickets(await searchId)
        status =  req.status
        const res = await req.json()
        dispatch(getTickets(res.tickets))
        if (getState().app.loadingFirstBatch === true) {
            dispatch(firstBatchLoaded)
            dispatch(getFirstBatch(res.tickets))
        }
        setTimeout(() => requestTickets(dispatch, getState), 1000)
    }
    catch (err) {
        if (status === 404) dispatch(loadedFull)
        if (status === 500) setTimeout(() => requestTickets(dispatch, getState), 1000)
    }    
}


export default requestTickets