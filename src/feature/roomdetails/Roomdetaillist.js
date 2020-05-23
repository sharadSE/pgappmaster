import React, { Component } from 'react'

export default class Roomdetaillist extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isCheck: false,
             signal: false,
             disabledButtons: [],
        }
    }
    isChecked = (event) =>{
        this.setState({isCheck: !this.state.isCheck});
    }
    signal = (event) =>{
        this.setState({signal: !this.state.signal});
    }
    handleOptionClick=(index,event)=>{
        // this.refs.btn.setAttribute("disabled", "disabled");
        this.setState(oldState => {
            const newDisabledButtons = [...oldState.disabledButtons];
            newDisabledButtons[index] = true;
            return {
              disabledButtons: newDisabledButtons,
            }
          })
    }
    // onClick={(event)=>this.handleOptionClick(key1,event)}
    // disabled={this.state.disabledButtons[key1]}
    componentDidMount (){
        disabledButtons: new Array(2).fill(true)
    }
    shouldComponentUpdate(nextProps, nextState){
        if(this.props.data.pg_id!=nextProps.pg_id){
            return true
        }
        return false
    }
    render() {
        let message
        if(this.state.signal){
          message='Now select Aminities'
        }
        else {
          message='Select Room First'
        }
        return (
            <>
                <center><label>{message}</label></center>
                {
                    console.log('room detail list problem--------------------------'),
                    console.log(this.props.data),
                    console.log(this.props.data.pincode),
                    console.log(this.props.data.optionalAmenities),
                    console.log(this.props.data.total_beds),
                    console.log(this.props.data.available_beds),
                    console.log(this.props.data.rooms)

                }
                {
                    // <h1>{this.props.data.rooms.room_id}</h1>
                }
                {
                    // this.props.data.rooms.map(data=>(
                    //     <li>{data.room_id}</li>
                    // ))
                }
                {/* ------------------------------------------------------ */}
                {/* {this.props.data.rooms[data].room_id} */}
                {/* ----------------------------------------------- */}
                {
                  this.props.data.rooms.map((data,key)=>(
                    <div className="dropdown">
                        <button className="dropbtn" key={key}>
                                    Room {key}</button>
                        <div className="dropdown-content">
                        {       
                                    data.bedList.map((d,key1)=>(
                                        <a href="#"
                                            onClick={(event)=>this.props.addBed(d,data.rent_per_bed)}
                                    >Bed {d.tenant_id ? '-X' : key+1}</a>                          
                            ))
                        }
                        </div>
                   </div>))
                }
                <div className="amini-block">
                {
                    this.props.data.optionalAmenities.map((data,key)=>(
                        
                        <label className="amini-container">{data.name}
                        <input type="checkbox" onClick={()=>this.props.addAmin(data)} onChange={this.isChecked} value={this.state.isCheck}/><span className="checkmark"></span>
                        </label>
                    ))
                }
                </div>
            </>
        )
    }
}
