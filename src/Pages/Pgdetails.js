import React from 'react'
import data from '../data/data.json'
import PgDetails from '../feature/pgdetails/index'
import '../feature/pgdetails/menu.css'

export default function Pgdetails (props) {
    return(
        <div>
        <PgDetails data={data.pune}></PgDetails>
        </div>
    )
}