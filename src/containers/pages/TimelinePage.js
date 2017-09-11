import React, {Component} from 'react';
import {connect} from 'react-redux';
import "../../style/TimelinePage.scss";
import Header from "../blocks/header/Header";

class TimelinePage extends Component {

    render() {
        return (
            <div className="timeline-content">
                <Header/>
            </div>
        );
    }
}

TimelinePage.propTypes = {};

let mapStateToProps = function (state) {
    return {};
};

export default connect(mapStateToProps)(TimelinePage);