import React from 'react'

export default function WeatherDetails(props) {
    const {name, temperature} = props;
    return (
        <>
        <h2>{name}</h2>
        <h3>{temperature}</h3>
        </>
    )
}
