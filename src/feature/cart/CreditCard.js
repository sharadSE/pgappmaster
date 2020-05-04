import React,{useState} from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css'
import axios from './erer';
import { useHistory } from 'react-router';
function CreditCard() {
    const history = useHistory();
  
      const handleClick = () => {
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
   export default CreditCard