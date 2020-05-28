import React, { Component } from 'react'
import './error.css'
export default class NopgFound extends Component {
    render() {
        return (
            <>
            <div className="error">
                <div className="b1">
                Unfortunately, 
                </div>
                <div className="b2">
                we cannot find any results that suit your filter criteria.
                </div>
                <hr></hr>
            </div>
            </>
        )
    }
}
