/* eslint-disable id-length */
/* eslint-disable react/jsx-fragments */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
import React from "react";
import {useSelector} from 'react-redux'
import { Alert, Spin } from "antd";
import * as selectors from "../../selectors"

import MyCard from "../Card";

const Tickets = () => {
    const perPage = useSelector(selectors.selectTicketsPerPage)
    const currentTab = useSelector(selectors.selectCurrentTab)
    const filters = useSelector(selectors.selectFilters)
    const loading = useSelector(selectors.selectLoading)
    const useAll = useSelector(selectors.selectUseAll)
    const { nonStop, oneStop, twoStops, threeStops } = filters
    const cheapest = 'cheapest'
    const fastest ='fastest'
    const currentSelection = useAll ? selectors.selectAllTickets : selectors.selectFirstBatch


    const tickets = useSelector(currentSelection)
        .reduce((acc, cur)=> {
            const curLength = cur.segments[0].stops.length
            if (nonStop && !curLength) acc = [...acc, cur]
            if (oneStop && curLength === 1) acc = [...acc, cur]
            if (twoStops && curLength === 2) acc = [...acc, cur]
            if (threeStops && curLength === 3) acc = [...acc, cur]
            return acc
        }, [])
        .sort((a,b) => {
            if (currentTab === cheapest) return a.price - b.price
            if (currentTab === fastest) return a.segments[0].duration - b.segments[0].duration
        })
        .slice(0, perPage)
        .map((ticket) => <MyCard ticket={ticket} key={`${ticket.price}${ticket.segments[0].duration}`}/>)
    
    const noTickets = 
        !tickets.length && 
        !loading && 
        <Alert 
            type="warning" 
            message="Sorry, there aren't any tickets matching these parameteres"
        />
    const spinner = loading && <Spin tip="Loading..."/>

    return (
        <React.Fragment>
            {spinner}
            {noTickets}
            {tickets}
        </React.Fragment>
    )
}


export default Tickets