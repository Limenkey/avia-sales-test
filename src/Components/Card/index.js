/* eslint-disable react/forbid-prop-types */

import React from "react";
import PropTypes from 'prop-types'
import { Card } from "antd";
import './card.scss'

const MyCard = ({ticket}) => {
    const { carrier, price, segments } = ticket
    const [ depart, back ] = segments
    const { origin: originDepart, destination: destinationDepart, date: dateDepart, stops: stopsDepart, duration: durationDepart } = depart
    const { origin: originBack, destination: destinationBack, date: dateBack, stops: stopsBack, duration: durationBack } = back

    const departTime = new Date(dateDepart)
    const backTime = new Date(dateBack)

    const checkTime = (date) => {
        const hours = date.getHours() >= 10 ? date.getHours() : `0${date.getHours()}`
        const minutess = date.getMinutes() >= 10 ? date.getMinutes() : `0${date.getMinutes()}`
        return `${hours}:${minutess}`
    }

    const calcArival = (date, duration) => {
        const dateInMins = date.getTime()/1000/60
        const dateOfArival = new Date((dateInMins + duration) * 60 * 1000)
        return checkTime(dateOfArival)
    }

    
    
    const checkStops = (stops) => stops.length !== 1 ? `${stops.length} stops` : `${stops.length} stop`

    return (
        <Card className="tickets__card">
            <div className="card__row">
                <p className="card__price">{price} rub</p>
                <img className="card__transporter-logo" src={`https://pics.avs.io/99/36/${carrier}.png`} alt="Transporter logo"/>
            </div>
            <div className="card__row">
                <div className="card__column">
                    <h3>{originDepart} - {destinationDepart}</h3>
                    <p className="card__departure">
                        {checkTime(departTime)} - {calcArival(departTime, durationDepart)}
                        </p>
                </div>
                <div className="card__column">
                    <h3>Trip Duration</h3>
                    <p>{Math.floor(durationDepart/60)}h {durationDepart%60}m</p>
                </div>
                <div className="card__column">
                    <h3>{checkStops(stopsDepart)}</h3>
                    <p>{[...stopsDepart].join(', ')}</p>
                </div>
            </div>
            <div className="card__row">
                <div className="card__column">
                    <h3>{originBack} - {destinationBack}</h3>
                    <p className="card__departure">{checkTime(backTime)} - {calcArival(backTime, durationBack)}</p>
                </div>
                <div className="card__column">
                    <h3>Trip Duration</h3>
                    <p>{Math.floor(durationBack/60)}h {durationBack%60}m</p>
                </div>
                <div className="card__column">
                    <h3>{checkStops(stopsBack)}</h3>
                    <p>{[...stopsBack].join(', ')}</p>
                </div>
            </div>
        </Card>
    )
}

MyCard.defaultProps = {
    ticket: {}
}


MyCard.propTypes = {
    ticket: PropTypes.object
}


export default MyCard