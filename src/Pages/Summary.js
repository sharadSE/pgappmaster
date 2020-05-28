import React, { Component } from 'react'
import {connect} from 'react-redux'
import CreditCard from '../feature/cart/CreditCard'
import '../feature/invoice/invo.css'
import './summ.css'
// import { TiShoppingCart } from "react-icons/ti";
// import { IoIosTrash } from "react-icons/io";
import axios from 'axios';
class Summary extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Users: []
        };
    }
    render() {
        return (
            <div>
                <>
                {
                    console.log('summary'),
                    console.log(this.props)
                }
                {/* <TiShoppingCart size='2.5rem' viewBox='0 0 21 21'/> */}
                <div style={{color:"black",background:"#aa86b9",paddingLeft:"10px",width:"510px",height:"460px",marginLeft:"165px",marginTop:"50px",borderRadius:"10px"}}>
                <p style={{left:"-180px",fontSize:"30px",fontWeight:"bolder",marginTop:"5px"}}> Booking Summary</p>
                <h3>{this.props.location.data.data.name}</h3>
                      <div>{this.props.location.data.data.address}</div>
                      <div>  {this.props.location.data.data.city}  {this.props.location.data.data.state}  {this.props.location.data.data.pincode}</div>
                <div className='summary'>
                <table>
                    <div className='summhead'>Selected Bed</div>
                {
                      this.props.bList.map((dat,key)=>(
                        <tr><td>{`Bed ${key+1}`}</td><td><i class="fas fa-rupee-sign"></i>{this.props.bprice}</td></tr>
                      ))
                    }
                    <div className='summhead'>Aminities Opted</div>
                    {
                      this.props.aList.map((data,key)=>(
                        <tr><td>{data.name}</td><td><i class="fas fa-rupee-sign"></i>{data.charge}</td></tr>
                      ))
                    }
                    <tr>
                    {<div className='tprice'>Total Price: <i class="fas fa-rupee-sign"></i>{this.props.tprice}</div>}
                    </tr> 
                    </table>
                    </div>
                </div>
                
                {/* style={{float:"right" */}
                <div style={{float:"right",marginTop:"-460px",marginRight:"180px",width:"510px",height:"460px",background:"#91739e",borderRadius:"10px"}}>
                    <CreditCard/>
                </div>
                </>
            </div>
        )}
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


export default connect(mapStateToProps)(Summary);
