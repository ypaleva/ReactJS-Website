import React, {Component} from 'react';
import "./Footer.scss";
import SocialIcons from "../../../components/social-icons/SocialIcons";

class Footer extends Component {

    render() {
        return (
            <div className="footer">
                <SocialIcons/>
            </div>
        );
    }
}

export default Footer;