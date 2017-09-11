import React, {Component} from 'react';
import './SocialIcons.scss';

class SocialIcons extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="social">
                <div className="col-md-12">
                    <ul className="social-network social-circle">
                        <li><a href="#" className="icoFacebook" title="Facebook"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#" className="icoInstagram" title="Instagram"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="#" className="icoGoogle" title="Google +"><i className="fa fa-google-plus"></i></a></li>
                        <li><a href="#" className="icoLinkedin" title="Linkedin"><i className="fa fa-linkedin"></i></a></li>
                    </ul>
                </div>
            </div>
        );
    }

}

export default SocialIcons;