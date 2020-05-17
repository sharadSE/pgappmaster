import React, {Component} from 'react'
import Pgdetailslist from './Pgdetailslist'
import axios from 'axios'
import './menu.css';
import FilterList from '../filterList/filterList'
class PgDetails extends Component {
    constructor() {
        super()
         this.state = {
        }
    }
    render() {
        return(
            <>
                    {
                        console.log('index pgdetails')
                    }
                   <div>
                       <FilterList />
                   </div>
                   <div>
                    {this.props.data.map((da,key)=>(
                        <Pgdetailslist key={key} data={da}></Pgdetailslist>
                        )
                        )}
                        </div>
            </>
        )
    }
}

export default PgDetails