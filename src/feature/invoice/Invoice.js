import React, { Component } from 'react'
import "../roomdetails/pop.css"
import './invo.css'
import { Redirect } from 'react-router-dom'

export default class Invoice extends Component {
        constructor(props) {
            super(props)
        
            this.state = {
                redirect: false
            }
        }
        setRedirect = () => {
            this.setState({
              redirect: true
            })
          }
          renderRedirect = () => {
            if (this.state.redirect) {
              return <Redirect to='/' />
            }
          }
    render() {
        return (
            <>
            {
                console.log('its invoice popup'),
                console.log(this.props)
            }
            <div className='popup'>
                <div className='popup-inner'>
                    <center><h2>Invoice</h2></center>
                    <button onClick={this.props.closePopup} >X</button>
                    <table>
                        <tr>
                            <td>Invoice Id</td>
                            <td>{this.props.data.inovice_id}</td>
                        </tr>
                        <tr>
                            <td>Name</td>
                            <td>`{this.props.data.first_name} {this.props.data.last_name}`</td>
                        </tr>
                        <tr>
                            <td>User Contact</td>
                            <td>{this.props.data.user_contact}</td>
                        </tr>
                        <tr>
                            <td>User Address</td>
                            <td>{this.props.data.user_address}</td>
                        </tr>
                        <tr>
                            <td>Pg Detail</td>
                            <td>`{this.props.data.pg_name}  {this.props.data.pg_address}`</td>
                        </tr>
                        <tr>
                            <td>Pg Owner</td>
                            <td>{this.props.data.pg_owner}</td>
                        </tr>
                        <tr>
                            <td>Pg Contact</td>
                            <td>{this.props.data.pg_contact}</td>
                        </tr>
                        <tr>
                            <td>Room Type/Rent per Bed</td>
                            <td>`{this.props.data.room_type} / {this.props.data.rent_per_bed}`</td>
                        </tr>
                        <tr>
                            <td>Aminities Opted</td>
                            <td>
                                {
                                    this.props.data.amenities_opted.map((data,key)=>(
                                        <li>{data.name}</li>
                                    ))
                                }
                            </td>
                        </tr>
                        <tr>
                            <td>Start date /End date</td>
                            <td>`{this.props.data.start_date} / {this.props.data.end_date}`</td>
                        </tr>
                        <tr>
                            <td>Total Amount</td>
                            <td>{this.props.data.total_rent}</td>
                        </tr>
                        <tr>
                            <td>Booking Time</td>
                            <td>{this.props.data.booking_date}</td>
                        </tr>
                    </table>
                    {this.renderRedirect()}
                    <div className='done'>
                    <button className='button1' onClick={this.setRedirect}>Done</button>
                    </div>
                </div>
            </div>
            </>
        )
    }
}
