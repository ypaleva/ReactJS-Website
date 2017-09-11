import React, {Component} from 'react';
import {connect} from 'react-redux';
import "../../style/LandingPage.scss";
import Header from "../blocks/header/Header";
import Panel from "../../components/panel/Panel";
import Footer from "../blocks/footer/Footer";

class LandingPage extends Component {

    render() {

        let iconStyle = {
            fontSize:'48px',
        };

        return (
            <div className="landing-content">
                <Header/>
                <div className='background'>
                    <h1>Something</h1>
                </div>
                <div className="panels">
                    <Panel heading="heading" text="content">
                    <i className="material-icons" style={iconStyle}>&#xe30c;</i>
                </Panel>
                    <Panel heading="heading" text="content"/>
                    <Panel heading="heading" text="content"/>
                </div>
                <Footer/>
            </div>
        );
    }
}

LandingPage.propTypes = {};

let mapStateToProps = function (state) {
    return {};
};

export default connect(mapStateToProps)(LandingPage);