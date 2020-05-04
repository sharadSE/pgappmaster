import React,{useState} from 'react'
import Pgdetailslist from './Pgdetailslist'
import './menu.css';
import FilterList from '../filterList/filterList'
// import {connect} from 'react-redux'

function PgDetails(props){
    // const [value, total] = useState()
    return(
        <>
               <div>
                   <FilterList />
               </div>
               <div>
                {props.data.map(data=>(
                    <Pgdetailslist data={data}></Pgdetailslist>)
                    )}</div>
        </>
    )
}
export default PgDetails