import React,{Component} from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css'
import axios from 'axios';
import { connect } from 'react-redux'
import Invoice from '../invoice/Invoice'

  
    let userid='user90001';

class CreditCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
       invoice:Object.create(null),
       isFetching:false,
       showPopup:false,
       payload :{
        first_name : "Siddharth",
        last_name : "Choudhary",
        bed_id : this.props.bList[0].bed.bed_id,
        amenities_opted : this.props.aList,
      start_date : "2020-05-12",
      end_date : "2020-09-12",
      total_rent : this.props.tprice,
      },
    }
  }
  componentDidMount(){
    axios({
      method: 'post',
      url:'http://localhost:8082/bookpg/'+userid,
      data: JSON.stringify(this.state.payload),
      headers:{
        'Content-Type':'application/json'
      }
    })    
    .then((response) => {            
    //  console.log(response.data.amenities_opted[0].name);
         this.setState({invoice:response.data})   
    })
    .catch((error) =>{
    console.log('error--->'+error)
    })
        this.setState({isFetching:true});
  }
  togglePopup(e) {
    e.preventDefault();
    this.setState({
      showPopup: !this.state.showPopup
    });
      }
  render() {
    if(this.state.isFetching && Object.keys(this.state.invoice).length){
    return (
      <>
        {
          console.log('payload stingy'),
          console.log(JSON.stringify(this.state.payload))
        }
      <p style={{left:"-190px",fontSize:"30px",fontWeight:"bolder",marginTop:"0px"}}>Payment</p>
        <Cards number='number' name='name' xpiry='expiry' cvc='cvc' focused='focus'/>
        <form>
  
        <input type='tel' name='number'placeholder='card Number' value='number' style={{width:"405px",marginLeft:"50px",marginTop:"10px",borderRadius:"5px"}}/>
          <br/>
        <input type='text' name='name'placeholder='Name'value='name'style={{width:"405px",marginLeft:"50px",marginTop:"3px",borderRadius:"5px"}}/>
          <br/>
        <input type='text' name='expiry' placeholder='MM/YY Expiry' value='expiry' style={{width:"200px",marginLeft:"50px",marginTop:"3px",borderRadius:"5px"}}/>
        <input type='tel' name='cvc' placeholder='CVC'value='cvc' style={{width:"200px",marginTop:"3px",marginLeft:"3px",borderRadius:"5px"}}/>
  
        <button type="submit" style={{marginRight:"55px",marginTop:"5px",width:"405px",borderRadius:"5px" }}onClick={this.togglePopup.bind(this)}>Pay</button>
                                                                                                                              
        </form>
        {
          console.log('on the page of pay'),
          console.log(this.state.invoice)
        }
        {this.state.showPopup ? 
          <Invoice
            data={this.state.invoice}
            closePopup={this.togglePopup.bind(this)}
          />
          : null
        }
      </>
    )
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
 export default connect(mapStateToProps)(CreditCard)


  //   let invoice;
  //     const handleClick = (event) => {
  //         event.preventDefault();
  //         axios({
  //           method: 'post',
  //           url:'http://localhost:8082/bookpg/'+userid,
//           data: JSON.stringify(payload),
  //           headers:{
  //             'Content-Type':'application/json'
  //           }
  //       })    
  //       .then((response) => {            
  //         //  console.log('reponse--------------------'+response.data.amenities_opted[0].name);
  //         invoice=response.data
  //       })
  //       .catch((error) =>{
  //         console.log('error--->'+error)
  //     })
  //     }
  
  // const[number,setNumber]=useState('')
  // const[name,setName]=useState('')
  // const[expiry,setExpiry]=useState('')
  // const[cvc,setCvc]=useState('')
  // const[focus,setFocus]=useState('')
  //   return (
      
  //     <div>
  //       {
  //     console.log('payload stingy'),
  //     console.log(JSON.stringify(payload))
  //   }
  //     <p style={{left:"-190px",fontSize:"30px",fontWeight:"bolder",marginTop:"0px"}}>Payment</p>
  //       <Cards 
  //       number={number}
  //       name={name}
  //       xpiry={expiry}
  //       cvc={cvc}
  //       focused={focus}
  //       />
  //       <form>
  
  //       <input type='tel' 
  //       name='number'
  //       placeholder='card Number'
  //       value={number} 
  //       onChange={e=>setNumber(e.target.value)} 
  //       onFocus={e=>setFocus(e.target.name)}
  //       style={{width:"405px",marginLeft:"50px",marginTop:"10px",borderRadius:"5px"}}/>
  //         <br/>
  //       <input type='text' 
  //       name='name'
  //       placeholder='Name'
  //       value={name} 
  //       onChange={e=>setName(e.target.value)} 
  //       onFocus={e=>setFocus(e.target.name)}
  //       style={{width:"405px",marginLeft:"50px",marginTop:"3px",borderRadius:"5px"}}/>
  //     <br/>
  //       <input type='text' 
  //       name='expiry'
  //       placeholder='MM/YY Expiry'
  //       value={expiry} 
  //       onChange={e=>setExpiry(e.target.value)} 
  //       onFocus={e=>setFocus(e.target.name)}
  //       style={{width:"200px",marginLeft:"50px",marginTop:"3px",borderRadius:"5px"}}/>
  //       <input type='tel' 
  //       name='cvc'
  //       placeholder='CVC'
  //       value={cvc} 
  //       onChange={e=>setCvc(e.target.value)} 
  //       onFocus={e=>setFocus(e.target.name)}
  //       style={{width:"200px",marginTop:"3px",marginLeft:"3px",borderRadius:"5px"}}/>
  
  //       <button type="submit" style={{marginRight:"55px",marginTop:"5px",width:"405px",borderRadius:"5px" }}onClick={handleClick}>Pay</button>
                                                                                                                              
  //       </form>
  //     </div>
  //   );
  // }
  