import React, {Component} from 'react';
import {connect} from 'react-redux';
import "../../style/AboutPage.scss";
import Header from "../blocks/header/Header";
import SideNavBar from "../../components/side-navbar/SideNavBar";
import ScrollToTopButton from "../../components/button/ScrollToTopButton";
import AboutMePanel from "../../components/panel/AboutMePanel";
import SocialIcons from "../../components/social-icons/SocialIcons";
import Footer from "../blocks/footer/Footer";

class AboutPage extends Component {

    render() {
        return (
            <div className="about-content">
                <Header/>
                <AboutMePanel/>
                <SideNavBar/>
                <Footer/>
            </div>
        );
    }
}

AboutPage.propTypes = {};

let mapStateToProps = function (state) {
    return {};
};

export default connect(mapStateToProps)(AboutPage);