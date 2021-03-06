import React, { Component } from 'react'
import Roomdetaillist from './Roomdetaillist'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { connect } from 'react-redux'
import './pop.css'

class RoomDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isFetching:false,
      moredetails:Object.create(null)
    }
  }
  componentDidMount(){
    // axios.get('http://localhost:8081/getpg/'+this.props.data.pg_id+'/'+this.props.startd+'/'+this.props.endd)
    axios.get('http://localhost:8081/getpg/'+this.props.data.pg_id)
    .then(res => {
       this.setState({moredetails:res.data})
    })
    this.setState({isFetching:true})
  }
  clickHandler=(event)=>{
    event.preventDefault();
    this.props.bookBed();
  }
  // 
    render() {
        if(this.state.isFetching && Object.keys(this.state.moredetails).length){
            return (
                  <div className='popup'>
                    <div className='popup-inner'>
                      {
                        console.log('index roomdetails'),
                        console.log(this.props),
                        console.log('moredetails'),
                        console.log(this.state.moredetails)
                      }
                      <h3>{this.props.data.name}</h3>
                      <div className="address">{this.props.data.address}</div>
                      <div className="address">  {this.props.data.city}  {this.props.data.state}  {this.props.data.pincode}</div>
                      <button onClick={this.props.closePopup} >X</button>
                      <Roomdetaillist data={this.state.moredetails} addBed={this.props.addBed} addAmin={this.props.addAmin}></Roomdetaillist>
                    
                    {console.log(this.props.bList)}
                    {
                      this.props.bList.map((dat,key)=>(
                        <li>{`Selected Bed     : ${this.props.bprice}`}</li>
                      ))
                    }
                    {
                      this.props.aList.map((data,key)=>(
                        <li>{`${data.name}     : ${data.charge}`}</li>
                      ))
                    } 
                    <button onClick={(event)=>this.clickHandler(event)}>
                    <Link to={{
                    pathname:'/Summary',
                    data:this.props
                    }}>Book</Link></button>
                    {/* <button onClick={()=>this.props.bookBed()}>Book</button> */}
                    {/* </NavLink> */}
                  {/* <button onClick={this.props.closePopup}>Continue</button>*/}
                    </div>
                  </div>
            );
    }
    return this.componentDidMount;
}
}

function mapStateToProps(state){
  return {
     count: state.bedBook.bookingCount,
     bList: state.bedBook.bedList,
     aList: state.bedBook.aminList,
     bprice: state.bedBook.bedprice,
     tprice: state.bedBook.totalprice,
  }
}
function mapDispatchToProps(dispatch){
  return {
    addBed:(bed,price)=>{
      dispatch({type: 'ADD_BED', payload:{bed:bed,price:price}})
    },
    addAmin:(amin)=>{
      dispatch({type: 'ADD_AMIN', payload: amin})
    },
    bookBed:()=>{
      dispatch({type: 'BOOK_BED'})
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(RoomDetails)
