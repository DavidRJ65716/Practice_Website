import React, { Component,useState } from 'react';
import "./Employee.css";

/*function Name(){

    const [name, SetName] = useState("");

    return(
        <div className='employInput2'>
                    <label>Name:</label>
                    <input type="text" />
                    <label>Age:</label>
                    <input type="text" />
                    <label>Department:</label>
                    <input type="text" />
                </div>
    );
}*/

export class Employee extends Component{
    
    static displayname = Employee.name;
    /*constructor(props){
        super(props)
    }*/

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
                            type="text" />
                    </label>
                    <label>
                        Last Name:
                        <input 
                            type="text" />
                    </label>
                    <label>
                        Department:
                        <input 
                        type="text" />
                    </label>
                    <label>
                        Phone:
                        <input 
                            type="tel" 
                            className='phone' 
                            pattern='([0-9]{3})-[0-9]{3}-[0-9]{4})'/>
                    </label>
                    <label>
                        Email:
                        <input 
                            type="text" />
                    </label>
                </div>
            </div>);
    }
}

