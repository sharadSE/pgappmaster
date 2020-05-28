import React, {Component} from 'react'
import './menu.css'
import imj from './logo1.jpg'
import RoomDetails from '../roomdetails/index'
const data='iVBORw0KGgoAAAANSUhEUgAAAKAAAAClCAYAAADbAvaeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAG/SURBVHhe7dIxAcAgEMDAL1a6tP4FwoKHLHdLDOT5/ncPRNYtJAxIyoCkDEjKgKQMSMqApAxIyoCkDEjKgKQMSMqApAxIyoCkDEjKgKQMSMqApAxIyoCkDEjKgKQMSMqApAxIyoCkDEjKgKQMSMqApAxIyoCkDEjKgKQMSMqApAxIyoCkDEjKgKQMSMqApAxIyoCkDEjKgKQMSMqApAxIyoCkDEjKgKQMSMqApAxIyoCkDEjKgKQMSMqApAxIyoCkDEjKgKQMSMqApAxIyoCkDEjKgKQMSMqApAxIyoCkDEjKgKQMSMqApAxIyoCkDEjKgKQMSMqApAxIyoCkDEjKgKQMSMqApAxIyoCkDEjKgKQMSMqApAxIyoCkDEjKgKQMSMqApAxIyoCkDEjKgKQMSMqApAxIyoCkDEjKgKQMSMqApAxIyoCkDEjKgKQMSMqApAxIyoCkDEjKgKQMSMqApAxIyoCkDEjKgKQMSMqApAxIyoCkDEjKgKQMSMqApAxIyoCkDEjKgKQMSMqApAxIyoCkDEjKgKQMSMqApAxIyoCkDEjKgKQMSMqApAxIyoCkDEjKgKQMSMqApAxIaOYA0HwCvQ+7ei4AAAAASUVORK5CYII='
export default class Pgdetailslist extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             showPopup:false,
              }
    }
    togglePopup(e) {
    e.preventDefault();
        this.setState({
          showPopup: !this.state.showPopup
        });
      }
      
      
    render() {
        if(this.props.data){
        return (
        <>
        <div className="list-container">
        <div className="place booked">
            {
                console.log('pgdetaillist'),
                console.log(this.props.data)
            }
        
        <img src={`data:image/jpeg;base64,${data}`} />
            <h3>{this.props.data.name}</h3>
            <div className="beds"><i class="fas fa-bed"></i>3 Beds / Room</div>
            <div className="address">{this.props.data.address}</div>
            <div className="address">  {this.props.data.city}  {this.props.data.state}  {this.props.data.pincode}</div>
            <div className="price-label">
                Room Rent
                <div className="price-lebel price"><i class="fas fa-rupee-sign"></i>{this.props.data.rent_min}</div>
            </div>
            {/* to disply no of bed-------------- */}
            <div class="dialogbox">
                <span class="tip tip-down"></span>
                    <div class="message">
                        <span>{this.props.data.available_beds} bed left</span>
                    </div>
            </div>
            {/* end of display------------------- */}
            <section >
                <div>
                {this.props.data.basicAmenities.map(data=>(
                    
                    <div><i class="fas fa-arrow-circle-right"></i>{data}</div>)
                    )}
                {/* <div><i class="fas fa-wifi"></i>Wifi Available</div>
                <div><i class="fas fa-couch"></i>Furnished</div>
                <div><i class="fas fa-utensils"></i>Meals Available</div> */}
            </div>
            </section>
            <button onClick={this.togglePopup.bind(this)} >More Details</button>
        </div></div>
        {this.state.showPopup ? 
          <RoomDetails
            data={this.props.data}
            closePopup={this.togglePopup.bind(this)}
          />
          : null
        }
        </>
        )
    }
    return null;
    }
}