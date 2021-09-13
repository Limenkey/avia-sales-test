/* eslint-disable react/prop-types */
/* eslint-disable no-unused-expressions */

import React from "react";
import { Checkbox } from "antd";
import "./filterslist.scss"
import {connect} from "react-redux"
import { bindActionCreators } from "redux";
import * as actions from '../../actions'


const FiltersList = ({filters, loadedFull, boundActions}) => {

    const { nonStop, oneStop, twoStops, threeStops } = filters
    const { toggleAll, toggleNonStop, toggleOneStop, toggleTwoStops, toggleThreeStops, switchToAll } = boundActions
    const areAllChecked = [nonStop, oneStop, twoStops, threeStops].every(bool => bool)

    const toggleFilter = (filter) => {
        filter()
        loadedFull && switchToAll()
    }
    
    return (
        <ul className="filters-list">
            <li className="filters-list__item">
                <Checkbox className="filters-list__checkbox" checked={areAllChecked} onChange={() => toggleFilter(toggleAll)}>All</Checkbox>
            </li>
            <li className="filters-list__item">
                <Checkbox className="filters-list__checkbox" checked={nonStop} onChange={() => toggleFilter(toggleNonStop)}>Non-stop</Checkbox>
            </li>
            <li className="filters-list__item">
                <Checkbox className="filters-list__checkbox" checked={oneStop} onChange={() => toggleFilter(toggleOneStop)}>1 Stop</Checkbox>
            </li>
            <li className="filters-list__item">
                <Checkbox className="filters-list__checkbox" checked={twoStops} onChange={() => toggleFilter(toggleTwoStops)}>2 Stops</Checkbox>
            </li>
            <li className="filters-list__item">
                <Checkbox className="filters-list__checkbox" checked={threeStops} onChange={() => toggleFilter(toggleThreeStops)}>3 Stops</Checkbox>
            </li>
        </ul>
    )
}

const mapDispatchToProps = dispatch => {
    const boundActions = bindActionCreators(actions, dispatch);

    return {
        boundActions
    }
}


const mapStateToProps = state => ({
    filters: state.filters,
    loadedFull: state.app.loadedFull
})



export default connect(mapStateToProps, mapDispatchToProps)(FiltersList)