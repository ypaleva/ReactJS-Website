import React, {Component} from 'react';
import './AboutMePanel.scss';
import SocialIcons from "../social-icons/SocialIcons";

class AboutMePanel extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="about-panel">
                <div className="panel-body">
                    <img src="https://cdn.pixabay.com/photo/2017/08/20/02/35/pug-2660487__340.jpg" className="img-circle" alt="Cinque Terre" width="150" height="150"/>
                    <h3>{this.props.heading}</h3>
                    <p>{this.props.text}</p>
                </div>
            </div>
        );
    }

}

export default AboutMePanel;