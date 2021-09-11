/* eslint-disable no-unused-expressions */

import React from "react";
import { Checkbox } from "antd";
import "./filterslist.scss"
import {useSelector, useDispatch} from "react-redux"
import * as actions from '../../actions'
import { selectFilters, selectLoadedFull } from "../../selectors";

const FiltersList = () => {

    const activeFilters = useSelector(selectFilters)
    const loadedFull = useSelector(selectLoadedFull)
    const { nonStop, oneStop, twoStops, threeStops } = activeFilters
    const { toggleAll, toggleNonStop, toggleOneStop, toggleTwoStops, toggleThreeStops, switchToAll } = actions
    const areAllChecked = [nonStop, oneStop, twoStops, threeStops].every(bool => bool)
    const dispatch = useDispatch()

    const toggleFilter = (filter) => {
        dispatch(filter)
        loadedFull && dispatch(switchToAll)
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

export default FiltersList