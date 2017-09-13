import React, {Component} from 'react';
import {connect} from 'react-redux';
import "../../style/TimelinePage.scss";
import Header from "../blocks/header/Header";
import Footer from "../blocks/footer/Footer";
import SideNavBar from "../../components/side-navbar/SideNavBar";
import RightPanel from "../../components/timeline/RightPanel";
import Circle from "../../components/circle/Circle";
import Line from "../../components/line/Line";

class TimelinePage extends Component {

    render() {
        return (
            <div className="timeline-content">
                <Header/>
                <Circle/>
                <Line/>
                <RightPanel/>
                <SideNavBar/>
                <Footer/>
            </div>
        );
    }
}

TimelinePage.propTypes = {};

let mapStateToProps = function (state) {
    return {};
};

export default connect(mapStateToProps)(TimelinePage);