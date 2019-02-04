import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            submitted: false,
            error: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        let firstname = document.getElementById("firstname").value;
        let lastname = document.getElementById("lastname").value;
        let email = document.getElementById("email").value;
        let phone = document.getElementById("phone").value;
        let message = document.getElementById("message").value;
        if (firstname && lastname && email && message) {
            fetch('http://localhost:3001/mail', {
                method: 'post',
                body: JSON.stringify({
                    "firstname": firstname,
                    "lastname": lastname,
                    "email": email,
                    "phone": phone,
                    "message": message
                }),
                headers: {"Content-Type": "application/json"}
            });
            this.setState({submitted: true, error: false});
        }
        else {
            this.setState({error: true});
        }
    }

    render() {
        return(
            <Scrollbars renderThumbVertical={props => < div {...props} className="thumb-vertical-blue"/>} renderTrackVertical={props => < div {...props} className="track-vertical"/>} style={{ width: "100%", height: "100%" }}>
            <div className="contact">
                <div className="contact_title">
                    <div>Contact Me</div>
                    <div className="contact_title_text">+1 (702) 630-6976 - AaronJLilla@gmail.com</div>
                    {this.state.error && <div className="errormsg"><strong>ERROR:</strong> You must include at least First Name, Last Name, E-Mail, and Message</div>}
                </div>
                {
                    (!this.state.submitted) ? 
                        <div>
                            <form className="contact_form">
                                <input id="firstname" type="text" placeholder="First Name" className="halfinput_left"/>
                                <input id="lastname" type="text" placeholder="Last Name" className="halfinput_right"/>
                                <input id="email" type="text" placeholder="E-Mail"/>
                                <input id="phone" type="number" placeholder="Phone Number"/>
                                <textarea id="message" placeholder="Message"></textarea>
                                <div className="submitbutton" onClick={this.handleSubmit}>Submit</div>
                            </form>
                        </div> 
                    : <div className="submitted">Thank you, your inquiry has been submitted.</div>
                }
            </div>
            </Scrollbars>
        );
    }
}

export default Contact;