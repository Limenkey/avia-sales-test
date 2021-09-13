/* eslint-disable react/prop-types */
/* eslint-disable no-unused-expressions */
/* eslint-disable id-length */
import React from "react";
import { Button, Spin } from "antd";
import { connect } from "react-redux"
import { bindActionCreators } from "redux";
import FiltersList from "../FiltersList";
import Tickets from "../Tickets";
import * as actions from "../../actions"



import logo from "./images/logo.svg"

import 'antd/dist/antd.css'
import './app.scss'


const App = ({loadedFull, loading, filters, boundActions}) => {
    

    const {switchToFastest, switchToCheapest, showMoreTickets, switchToAll} = boundActions


    const switchTabs = (e) => {
        const clickedBtnClasses = e.target.closest('.navigation__btn').classList
        Array.from(document.getElementsByClassName('navigation__btn')).forEach(el => {
            el.classList.remove('navigation__btn--active')
            clickedBtnClasses.add('navigation__btn--active')
        });

        clickedBtnClasses.contains('navigation__btn--cheapest') ? switchToCheapest() : switchToFastest()
        loadedFull && switchToAll()
    }
    
    const showMore = () => {
        showMoreTickets()
        loadedFull && switchToAll()
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

const mapStateToProps = state => ({
    loadedFull: state.app.loadedFull,
    loading: state.app.loading,
    filters: state.filters
})

const mapDispatchToProps = dispatch => {
    const boundActions = bindActionCreators(actions, dispatch)

    return {
        boundActions
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App)




