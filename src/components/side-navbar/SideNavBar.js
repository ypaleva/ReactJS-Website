import React, {Component} from 'react';
import './SideNavBar.scss';

class SideNavBar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="side-navbar">
                <div className="container">
                    <div className="row">
                            <ul className="nav nav-pills nav-stacked">
                                <li><a href="/resume">Resume</a></li>
                                <li><a href="/photography">Photography</a></li>
                                <li><a href="/timeline">Timeline</a></li>
                                <li><a href="/music">Music</a></li>
                            </ul>
                    </div>
                </div>
            </div>
        );
    }

}

export default SideNavBar;