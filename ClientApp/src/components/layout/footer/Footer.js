import React,{ Component } from "react";
import { MDBFooter } from 'mdb-react-ui-kit';
import './Footer.css';

export class Footer extends Component{
    render() {
        return (
            <MDBFooter bgColor="light" className="text-center text-lg-start text-muted" >
                <div className="text-center" style={{ backgroundColor: 'rgba(0,0,0,0.05)'}}>
                    Practice Website @ 2023 No Copyright
                </div>
            </MDBFooter>
        );
    }
}