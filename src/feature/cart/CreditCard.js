import React,{useState} from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css'
import axios from './erer';
import { connect } from 'react-redux'
import { useHistory } from 'react-router';
function CreditCard() {
    const history = useHistory();
    let payload = {
        first_name : "Siddharth",
        last_name : "Choudhary",
        bed_id : "BR5eb4fcc1e302340a141c374e11",
        amenities_opted  : [
            {
                name : "wifi",
                charge : 450
            },
            {
              name : "meal",
              charge : 800
            }   
        ],
      start_date : "2020-05-12",
      end_date : "2020-09-12",
      total_rent : 5250
    }
    let user_id="tenet9000000";
      const handleClick = () => {
          
          axios.post('http://localhost:8082/bookpg/'+user_id,payload)
          .then(response=>{
            console.log(response)
          })
          .catch(err=>{
            console.log("Failed post")
          })
          history.push("/");
          alert("Payment done!!");
      }
  
  const[number,setNumber]=useState('')
  const[name,setName]=useState('')
  const[expiry,setExpiry]=useState('')
  const[cvc,setCvc]=useState('')
  const[focus,setFocus]=useState('')
    return (
      
      <div>
      <p style={{left:"-190px",fontSize:"30px",fontWeight:"bolder",marginTop:"0px"}}>Payment</p>
        <Cards 
        number={number}
        name={name}
        xpiry={expiry}
        cvc={cvc}
        focused={focus}
        />
        <form>
  
        <input type='tel' 
        name='number'
        placeholder='card Number'
        value={number} 
        onChange={e=>setNumber(e.target.value)} 
        onFocus={e=>setFocus(e.target.name)}
        style={{width:"405px",marginLeft:"50px",marginTop:"10px",borderRadius:"5px"}}/>
          <br/>
        <input type='text' 
        name='name'
        placeholder='Name'
        value={name} 
        onChange={e=>setName(e.target.value)} 
        onFocus={e=>setFocus(e.target.name)}
        style={{width:"405px",marginLeft:"50px",marginTop:"3px",borderRadius:"5px"}}/>
      <br/>
        <input type='text' 
        name='expiry'
        placeholder='MM/YY Expiry'
        value={expiry} 
        onChange={e=>setExpiry(e.target.value)} 
        onFocus={e=>setFocus(e.target.name)}
        style={{width:"200px",marginLeft:"50px",marginTop:"3px",borderRadius:"5px"}}/>
        <input type='tel' 
        name='cvc'
        placeholder='CVC'
        value={cvc} 
        onChange={e=>setCvc(e.target.value)} 
        onFocus={e=>setFocus(e.target.name)}
        style={{width:"200px",marginTop:"3px",marginLeft:"3px",borderRadius:"5px"}}/>
  
        <button type="submit" style={{marginRight:"55px",marginTop:"5px",width:"405px",borderRadius:"5px" }}onClick={handleClick}>Pay</button>
  
        </form>
      </div>
    );
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
   export default connect(mapStateToProps)(CreditCard)