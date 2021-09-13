import { bindActionCreators } from "redux"
import service from "./Services/avSalesService"
import * as actions from "./actions"


const searchId = service.getSearchId().then(res => res)

const requestTickets = async (dispatch, getState) => {
    const boundActions = bindActionCreators(actions, dispatch)
    const { loadedFull, firstBatchLoaded, getFirstBatch, getTickets } = boundActions
    let status
    try {
        const req = await service.getTickets(await searchId)
        status =  req.status
        const res = await req.json()
        getTickets(res.tickets)
        if (getState().app.loadingFirstBatch === true) {
            firstBatchLoaded()
            getFirstBatch(res.tickets)
        }
        setTimeout(() => requestTickets(dispatch, getState), 500)
    }
    catch (err) {
        if (status === 404) loadedFull()
        if (status === 500) setTimeout(() => requestTickets(dispatch, getState), 500)
    }    
}


export default requestTickets