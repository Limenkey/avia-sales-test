/* eslint-disable id-length */
/* eslint-disable no-unused-expressions */
import React from "react";
import { Button, Spin } from "antd";
import { useDispatch, useSelector } from "react-redux"
import FiltersList from "../FiltersList";
import Tickets from "../Tickets";
import {switchToFastest, switchToCheapest, showMoreTickets, switchToAll} from "../../actions"
import {selectLoadedFull, selectLoading, selectFilters} from "../../selectors"

import logo from "./images/logo.svg"

import 'antd/dist/antd.css'
import './app.scss'

const App = () => {
    
    const dispatch = useDispatch()
    const loadedFull = useSelector(selectLoadedFull)
    const loading = useSelector(selectLoading)
    const filters = useSelector(selectFilters)

    const switchTabs = (e) => {
        const clickedBtnClasses = e.target.closest('.navigation__btn').classList
        Array.from(document.getElementsByClassName('navigation__btn')).forEach(el => {
            el.classList.remove('navigation__btn--active')
            clickedBtnClasses.add('navigation__btn--active')
        });

        clickedBtnClasses.contains('navigation__btn--cheapest') ? dispatch(switchToCheapest) : dispatch(switchToFastest)
        loadedFull && dispatch(switchToAll)
    }
    
    const showMore = () => {
        dispatch(showMoreTickets)
        loadedFull && dispatch(switchToAll)
    }

    return (
        <main className="main">
            <header className="header">
                <img className="header__img" src={logo} alt="Avia Sales logo"/>
            </header>
            <div className="wrapper">
                <aside className="aside">
                    <h3 className="aside__header">NUMBER OF STOPS</h3>
                    <FiltersList className="tickets"/>
                    {!loadedFull && <Spin className="aside__loader" tip="We are loading more tickets"/>}
                </aside>
                <section className="content">
                    <nav className="navigation">
                        <Button className="navigation__btn navigation__btn--cheapest navigation__btn--active"
                                type="button"
                                onClick={switchTabs}
                                >
                            Cheapest
                        </Button>
                        <Button
                            className="navigation__btn navigation__btn--fastest"
                            type="button"
                            onClick={switchTabs}>
                            Fastest
                        </Button>
                    </nav>
                    <Tickets className="tickets"/>
                    {!loading && Object.values(filters).some((el) => el === true) && <Button
                        className="main__show-more-btn" 
                        type="button" 
                        onClick={showMore}>
                            Show more results
                    </Button>}
                </section>
            </div>
        </main>
    )
}

export default App




