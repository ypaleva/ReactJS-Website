import React, {Component} from 'react';
import './Logo.scss';
import logo from "./logo.png";
import {Image} from "react-bootstrap";

class Logo extends Component {

    render() {
        return (
            <div className="logo">
                <Image src={logo} height={65} width={80}/>
            </div>
        );
    }
}

Logo.propTypes = {
    image: React.PropTypes.string
};

export default Logo;