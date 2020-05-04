import React, {Component} from 'react'
import ReactDom from 'react-dom'
import './Home.css'
import Header from '../header/header'
import {NavLink} from 'react-router-dom'
import '../App.css'
import Citynames from '../data/city.json'
import Cityareas from '../data/cityarea.json'
import queryString from 'query-string'
import axios from 'axios'
import { compose } from 'redux'

export default class Homepage extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       cityname:'Pune',
       cityarea:'Magarpatta',
       startdate:'2020-06-03',
       enddate:'2020-03-03',
       noofguest:'0',
    }
  }
  citynameHandler=(event)=>{
    this.setState({
      cityname:event.target.value
    })
  }
  cityareaHandler=(e)=>{
      this.setState({
        cityarea:e.target.value
      })
  }
  startdateHandler=(e)=>{
    this.setState({
      startdate:e.target.value
    })
  }
  enddateHandler=(e)=>{
    this.setState({
      enddate:e.target.value
    })
  }
  noofguestHandler=(e)=>{
      this.setState({
        noofguest:e.target.value
      })
  }
  clickHandler = (event) =>{
  }
// here we read from URL---------------------> /?cityname=aaa&cityarea=fff&startdate=03/03/2003&enddate=02/02/2005&noofguest=45
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/poststcdrc')
      .then(response =>{
        console.log(response)
      })
      .catch(error =>{
        console.log('item not found')
      })
    // ====================================================================================
    const values = queryString.parse(this.props.location.search)
    console.log(values.cityname) 
    console.log(values.cityarea)
    console.log(values.startdate)
    console.log(values.enddate)
    console.log(values.noofguest)
  }

 
  render() {
    const myvar = this.state.cityname;
    return (
      <>
      
        <div className="header-banner">
          
  <div className="container-width">
    <div className="clearfix">
    </div>
    <div className="lead-title">A Complete Solution
    </div>
    
    <form className="form">
      <label className="label">City</label>


      <select name="City" required className="select" value={this.cityname} onChange={this.citynameHandler}><option value="">- Select option -</option>
            {
              Citynames.city.map((city,id)=>
            (<option key={id} value={city}>{city}</option>))
            }
      </select>
      <div className="form-group">
        <label className="label" >Area</label>
      <select name="Cityarea" required className="select" value={this.cityarea} onChange={this.cityareaHandler}><option value="">- Select option -</option>
            {
              Cityareas[this.state.cityname].map((cityarea,id)=>
            (<option key={id} value={cityarea}>{cityarea}</option>))
            }
      </select>
      </div>
      
      
      <div className="form-group">
        <label className="label">Start Date</label>
        <input type="date" value={this.startdate} onChange={this.startdateHandler} required type="date" className="input"/>
      </div>
      <div className="form-group">
        <label className="label">End Date</label>
        <input type="date" value={this.enddate} onChange={this.enddateHandler} placeholder="estimated" required type="date" className="input"/>
      </div>
      <div className="form-group">
        <label className="label">No. of Guest</label>
        <input type="number" value={this.noofguest} onFocus={this.noofguestHandler} placeholder="Number Of Guest" required type="number" className="input" required/>
      </div>
      
      <div id="Go" title="Submit" className="form-group">
      
        <button type="submit" className="button" onClick={this.clickHandler}><NavLink to='/pgdetails'> Go</NavLink></button>
        
      </div>
      
    </form>
  </div>
        </div>
      </>
    )
  }
}
