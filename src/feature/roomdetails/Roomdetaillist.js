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
                  Object.keys(this.props.data.rooms).map((data,key)=>(
                    <div className="dropdown">
                        <button className="dropbtn" key={key}>
                                    {this.props.data.rooms[data].id}</button>
                        <div className="dropdown-content">
                        {
                            Object.keys(this.props.data.rooms[data].bedList).map((d,key1)=>(
                                        <a href="#"
                                            onClick={(event)=>this.props.addBed(this.props.data.rooms[data].bedList[d],this.props.data.rooms[data].rent_per_bed)}
                                            >{this.props.data.rooms[data].bedList[d].bed_id}</a>                          
                            ))
                        }
                        </div>
                   </div>))
                }
                <div className="amini-block">
                {
                    Object.keys(this.props.data.optionalAmenities).map((data,key)=>(
                        
                        <label className="amini-container">{this.props.data.optionalAmenities[data].name}
                        <input type="checkbox" onClick={()=>this.props.addAmin(this.props.data.optionalAmenities[data])} onChange={this.isChecked} value={this.state.isCheck}/><span className="checkmark"></span>
                        </label>
                    ))
                }
                </div>
            </>
        )
    }
}
