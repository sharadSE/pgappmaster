import React,{Component} from 'react'
import data from '../data/data.json'
import PgDetails from '../feature/pgdetails/index'
import axios from 'axios'
import '../feature/pgdetails/menu.css'
import { Redirect } from 'react-router-dom'
import NopgFound from './errorHandlePages/NopgFound'
export default class Pgdetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isFetching:false,
            redirect: false,
            cityname:this.props.location.data.cityname,
            cityarea:this.props.location.data.cityarea,
            startdate:this.props.location.data.startdate,
            enddate:this.props.location.data.enddate,
            noofguest:this.props.location.data.noofguest,
         database:[]    
        }
    }
    componentDidMount(){
     axios.get('http://localhost:8081/getpg',{params:{city:this.state.cityname,area:this.state.cityarea,start_date:this.state.startdate,end_date:this.state.enddate,no_of_guest:this.state.noofguest}})
    .then(response =>{
      this.setState({database:response.data})
    })
    .catch(error =>{
    console.log(error)
  })
  this.setState({isFetching:true})
    }
        render() {
            if(this.state.database.length<1){
                return (
                    <>
                        <NopgFound/>
                    </>
                )
            }
            if(this.state.isFetching && this.state.database.length){
        return (
            <div>
            
            {console.log('pages pgdetails'),
            console.log(this.state.database)}
            
        <PgDetails data={this.state.database} startd={this.state.startdate} endd={this.state.enddate}></PgDetails>
        </div>
        )
        }
        return this.componentDidMount;
    }
}
