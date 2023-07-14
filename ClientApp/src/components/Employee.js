import React, { Component,useState } from 'react';
import "./Employee.css";

export class Employee extends Component{
    
    static displayname = Employee.name;

    //
    /*function name(params) {
       
        const [name, SetName] = useState("");
    }*/
    
    render (){    

        return (
            <div className='Employee'>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit, urna consequat felis vehicula class ultricies mollis dictumst, 
                    aenean non a in donec nulla. Phasellus ante pellentesque erat cum risus consequat imperdiet aliquam, integer placerat 
                    et turpis mi eros nec lobortis taciti, vehicula nisl litora tellus ligula porttitor metus.
                </p>
                <div className='employInput'>
                    <label>Name:</label>
                    <input type="text" />
                    <label>Age:</label>
                    <input type="text" />
                    <label>Department:</label>
                    <input type="text" />
                </div>
            </div>);
    }
}

