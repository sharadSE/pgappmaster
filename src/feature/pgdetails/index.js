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
                        console.log('index pgdetails'),
                        console.log(this.props)
                    }
                   <div>
                    {this.props.data.map((da,key)=>(
                        <Pgdetailslist key={key} data={da} startd={this.props.startd} endd={this.props.endd}></Pgdetailslist>
                        )
                        )}
                        </div>
            </>
        )
    }
}

export default PgDetails