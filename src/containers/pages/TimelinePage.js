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

    constructor(props) {
        super(props);
        this.state = {
            currentFirst: 0,
            currentSecond: 0,
            currentThird: 0
        }
        this.onClickFirst = this.onClickFirst.bind(this);
    }

    onClickFirst(k) {
        let x = this.state.currentFirst;
        k >= 0 ? x += 1 : x -= 1;
        x <= first.length - 1 ?
            this.setState({currentFirst: x}) : this.setState({currentFirst: 0})
    }

    render() {
        return (
            <div className="timeline-content">
                <Header/>
                <Circle/>
                <Line/>
                <RightPanel current={first[this.state.currentFirst]} onClick={this.onClickFirst}/>
                <SideNavBar/>
                <Footer/>
            </div>
        );
    }
}

const first = [
    "https://cdn.pixabay.com/photo/2017/08/17/20/19/puppy-2652730__340.jpg",
    "https://cdn.pixabay.com/photo/2017/06/18/00/35/puppy-2414187__340.jpg",
    "https://cdn.pixabay.com/photo/2017/06/02/08/17/french-bulldog-2365662__340.jpg"
];
const second = [
    "https://cdn.pixabay.com/photo/2016/07/07/15/35/puppy-1502565__340.jpg",
    "https://cdn.pixabay.com/photo/2016/06/29/15/40/dog-1487058__340.jpg",
    "https://cdn.pixabay.com/photo/2016/02/25/10/31/puppy-1221791__340.jpg"
];

const third = [
    "https://cdn.pixabay.com/photo/2017/08/17/20/19/puppy-2652730__340.jpg",
    "https://cdn.pixabay.com/photo/2017/06/18/00/35/puppy-2414187__340.jpg",
    "https://cdn.pixabay.com/photo/2017/06/02/08/17/french-bulldog-2365662__340.jpg"
];

TimelinePage.propTypes = {};

let mapStateToProps = function (state) {
    return {};
};

export default connect(mapStateToProps)(TimelinePage);