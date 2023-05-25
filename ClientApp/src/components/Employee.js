import React, { Component } from 'react';
import "./Employee.css";
//import authService from './api-authorization/AuthorizeService'

//import axios from 'axios';

export class Employee extends Component{
    
    static displayname = Employee.name;
    
    render (){
        return (
            <div className='Employee'>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit, urna consequat felis vehicula class ultricies mollis dictumst, 
                    aenean non a in donec nulla. Phasellus ante pellentesque erat cum risus consequat imperdiet aliquam, integer placerat 
                    et turpis mi eros nec lobortis taciti, vehicula nisl litora tellus ligula porttitor metus.</p>
                <label>Name:</label><br/>
                <input type="text" />
            </div>);
    }
}

