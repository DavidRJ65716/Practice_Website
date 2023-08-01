import React, { Component,useState } from 'react';
import "./Employee.css";

export class Employee extends Component{
    
    static displayname = Employee.name;
    
    constructor(props){
        super(props);

        this.state = {
            
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event){
        //const target = event.target;
        //const value = target.type == 'text' ? target.checked : target.value;

        this.setState({
            //[name]: value
        })
    }

    render (){    

        return (
            <div className='Employee'>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit, urna consequat felis vehicula class ultricies mollis dictumst, 
                    aenean non a in donec nulla. Phasellus ante pellentesque erat cum risus consequat imperdiet aliquam, integer placerat 
                    et turpis mi eros nec lobortis taciti, vehicula nisl litora tellus ligula porttitor metus.
                </p>
                <div className='employInput'>
                    <label>
                        First Name:
                        <input 
                            name="FirstName"
                            type="text" />
                            
                    </label>
                    <label>
                        Last Name:
                        <input 
                            name="LastName"
                            type="text" />
                    </label>
                    <label>
                        Department:
                        <input 
                            name="Deprt"
                            type="text" />
                    </label>
                    <label>
                        Phone:
                        <input
                            name="Phone"
                            type="tel" 
                            className='phone' 
                            pattern='([0-9]{3})-[0-9]{3}-[0-9]{4})'/>
                    </label>
                    <label>
                        Email:
                        <input
                            name="Email"
                            type="text" />
                    </label>
                </div>
            </div>);
    }
}

