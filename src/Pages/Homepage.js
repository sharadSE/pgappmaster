import React, {Component} from 'react'
import './Home.css'
import {Link} from 'react-router-dom'
import '../App.css'
import Citynames from '../data/city.json'
import Cityareas from '../data/cityarea.json'
import {format} from 'date-fns'
export default class Homepage extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       cityname:'Pune',
       cityarea:'Hadapsar',
       startdate:'2020-05-31',
       enddate:'2020-06-29',
       noofguest:'2',
    }
  }
  citynameHandler=(event)=>{
    this.setState({
      cityname:event.target.value,
      
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
  clickHandler = (e) =>{
    e.preventDefault();

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
        <input type="date" value={this.enddate} min={format(this.state.startdate,"YYYY-MM-DD")} onChange={this.enddateHandler} placeholder="estimated" required type="date" className="input"/>
      </div>
      <div className="form-group">
        <label className="label">No. of Guest</label>
        <input type="number" value={this.noofguest} onChange={this.noofguestHandler} placeholder="Number Of Guest" required type="number" className="input" required/>
      </div>
      
      <div id="Go" title="Submit" className="form-group">
      
        <button type="submit" className="button" onClick={this.clickHandler}>
              <Link to={{
                  pathname:'/pgdetails',
                  data:{
                    cityname:this.state.cityname,
                    cityarea:this.state.cityarea,
                    startdate:this.state.startdate,
                    enddate:this.state.enddate,
                    noofguest:this.state.noofguest
                  },
              }}>Go</Link></button>
      </div>
    </form>
    { console.log('Homepage--------js')
    }
  </div>
        </div>
      </>
    )
  }
}
