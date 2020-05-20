import React, { Component } from 'react'
import {connect} from 'react-redux'
import CreditCard from '../feature/cart/CreditCard'
// import './Summary.css';
// import { TiShoppingCart } from "react-icons/ti";
// import { IoIosTrash } from "react-icons/io";
import axios from '../feature/cart/erer';
class Summary extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Users: []
        };
    }
    // componentDidMount() {
    //     axios.get(`https://jsonplaceholder.typicode.com/users`)
    //       .then(res => {
    //         const Users= res.data;
    //         this.setState({ Users });
    //       })
    //   }

    render() {
        return (
            <div>
                <>
                {/* <TiShoppingCart size='2.5rem' viewBox='0 0 21 21'/> */}
                <div style={{color:"black",background:"#785587",width:"510px",height:"460px",marginLeft:"165px",marginTop:"50px",borderRadius:"10px"}}>
                <p style={{left:"-180px",fontSize:"30px",fontWeight:"bolder",marginTop:"5px"}}>CheckOut</p>
                <h5> Booking Summary</h5>
                {/* <ul>
                    { this.state.Users.map(function (user){
                    return([
                    <li>{user.name}</li>

                    ]);
                })}
                </ul> */}
                <h5> Booking Charge:####</h5>
                <h5> Total:#######</h5>
                </div>
    
                {/*<div style={{color:"black",background:"#785587",width:"510px",height:"450px",marginLeft:"678px",marginTop:"-480px",borderRadius:"10px"}}>
                <p style={{left:"-210px",fontSize:"30px",fontWeight:"bolder"}}>Payment</p>
                <div style={{width:"400px",height:"170px",background:"black",marginLeft:"50px",color:"white",borderRadius:"10px",fontSize:"30px"}}>
                    VISA
                </div>
                <div>
                    <form>
                <input type="text" id="name" style={{width:"400px",height:"35px",marginLeft:"50px",marginTop:"15px",borderRadius:"10px"}}/>
               <input type="text" id="num" style={{width:"400px",height:"35px",marginLeft:"50px",marginTop:"5px",borderRadius:"10px"}}/>
               <input type="date" id="exp" style={{width:"190px",height:"35px",marginLeft:"50px",marginTop:"5px",borderRadius:"10px"}}/>
               <input type="text" id="cvv" style={{width:"190px",height:"35px",marginLeft:"20px",marginBottom:"5px",borderRadius:"10px"}}/>
               <button style={{marginLeft:"45px",marginTop:"30px",width:"150px"}}>Pay</button>
               </form>
               </div>
                </div>*/}
                <div style={{float:"right",marginTop:"-460px",marginRight:"180px",width:"510px",height:"460px",background:"#785587",borderRadius:"10px"}}>
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
