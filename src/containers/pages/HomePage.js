import React, {Component} from 'react';
import {connect} from 'react-redux';
import "../../style/HomePage.scss";
import Header from "../blocks/header/Header";
import SideNavBar from "../../components/side-navbar/SideNavBar";
import ScrollToTopButton from "../../components/button/ScrollToTopButton";
import AboutMePanel from "../../components/panel/AboutMePanel";
import SocialIcons from "../../components/social-icons/SocialIcons";

class HomePage extends Component {

    render() {
        return (
            <div className="home-content">
                <Header/>
                <AboutMePanel/>
                <div className="social">
                    <SocialIcons/>
                </div>
                <SideNavBar/>
            </div>
        );
    }
}

HomePage.propTypes = {};

let mapStateToProps = function (state) {
    return {};
};

export default connect(mapStateToProps)(HomePage);