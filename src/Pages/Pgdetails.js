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
         database:[]    
        }
    }
    renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to='/' />
        }
      }
    componentDidMount(){
     axios.get('http://localhost:8081/getpg',{params:{city:this.props.location.data.cityname,area:this.props.location.data.cityarea,start_date:this.props.location.data.startdate,end_date:this.props.location.data.enddate,no_of_guest:this.props.location.data.noofguest}})
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
            
        <PgDetails data={this.state.database}></PgDetails>
        </div>
        )
        }
        return this.componentDidMount;
    }
}
