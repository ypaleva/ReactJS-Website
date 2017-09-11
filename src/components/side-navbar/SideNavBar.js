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
                                <li><a href="#section1">Section 1</a></li>
                                <li><a href="#section2">Section 2</a></li>
                                <li><a href="#section3">Section 3</a></li>
                            </ul>
                    </div>
                </div>
            </div>
        );
    }

}

export default SideNavBar;