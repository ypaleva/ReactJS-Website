import React, {Component} from 'react';
import {connect} from 'react-redux';
import "../../style/NotFoundPage.scss";
import Header from "../blocks/header/Header";
import Footer from "../blocks/footer/Footer";

class NotFoundPage extends Component {

    render() {
        return (
            <div className="notfound-content">
                <Header/>
                <div className="message">
                    <h3>404 page not found</h3>
                    <p>The page you are looking for does not exist.</p>
                </div>
                <Footer/>
            </div>
        );
    }
}

NotFoundPage.propTypes = {};

let mapStateToProps = function (state) {
    return {};
};

export default connect(mapStateToProps)(NotFoundPage);