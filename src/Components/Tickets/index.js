/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable id-length */
/* eslint-disable react/jsx-fragments */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
import React from "react";
import {connect} from 'react-redux'
import { bindActionCreators } from "redux";

import { Alert, Spin } from "antd";

import MyCard from "../Card";
import * as actions from '../../actions'

const Tickets = ( {perPage, currentTab, filters, loading, useAll, allTickets, firstBatch} ) => {
    
    const { nonStop, oneStop, twoStops, threeStops } = filters
    const cheapest = 'cheapest'
    const fastest ='fastest'
    const currentSelection = !useAll ? firstBatch : allTickets

    const tickets = currentSelection
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


const mapStateToProps = state => ({
    perPage: state.app.ticketsPerPage,
    currentTab: state.app.currentTab, 
    filters: state.filters, 
    loading: state.app.loadingFirstBatch, 
    useAll: state.app.useAll,
    allTickets: state.tickets.allTickets,
    firstBatch: state.tickets.firstBatch,
})

const mapDispatchToProps = dispatch => {
    const boundActions = bindActionCreators(actions, dispatch)

    return {
        boundActions
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tickets)