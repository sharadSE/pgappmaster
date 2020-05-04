import React, { Component } from 'react'
import './filter.scss'

export default class FilterList extends Component {
    render() {
        return (
            <>  
                <div className='filter-container'>
                <div class="radio">
                    <input id="radio-1" name="radio" type="radio" checked />
                        <label for="radio-1" class="radio-label">wifi</label>
                </div>
                <div class="radio">
                    <input id="radio-2" name="radio" type="radio" checked />
                        <label for="radio-2" class="radio-label">Cupboard</label>
                </div>
                <div class="radio">
                    <input id="radio-3" name="radio" type="radio" checked />
                        <label for="radio-3" class="radio-label">Gym</label>
                </div>
                </div>
            </>
        )
    }
}
