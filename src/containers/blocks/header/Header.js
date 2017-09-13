import React, {Component} from 'react';
import Link from "../../../components/link/Link";
import './Header.scss';

class Header extends Component {

    render() {
        return (
            <div className="header">
                <div className="links">
                    <Link link="/about" text="About"/>
                    <Link link="/" text="Home"/>
                </div>
            </div>
        );
    }
}

var mapStateToProps = function (state) {
    return {};
};

export default Header;