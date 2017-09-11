import React, {Component} from 'react';
import {connect} from 'react-redux';
import "../../style/NotFoundPage.scss";
import Header from "../blocks/header/Header";

class NotFoundPage extends Component {

    render() {
        return (
            <div className="notfound-content">
                <Header/>
                <div className="message">
                    <h3>404 page not found</h3>
                    <p>We are sorry but the page you are looking for does not exist.</p>
                </div>
            </div>
        );
    }
}

NotFoundPage.propTypes = {};

let mapStateToProps = function (state) {
    return {};
};

export default connect(mapStateToProps)(NotFoundPage);