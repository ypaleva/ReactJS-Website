import React, {Component} from 'react';
import {connect} from 'react-redux';
import "../../style/MusicPage.scss";
import Header from "../blocks/header/Header";
import SideNavBar from "../../components/side-navbar/SideNavBar";
import AboutMePanel from "../../components/panel/AboutMePanel";
import SocialIcons from "../../components/social-icons/SocialIcons";
import Table from "../../components/table/Table";
import PlayerPanel from "../../components/mp3player/PlayerPanel";
import Pagination from "../../components/pagination/Pagination";
import Footer from "../blocks/footer/Footer";

class MusicPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            current: 1,
            index: 0,
            icon: 'fa fa-play'
        };
        this.changeIndex = this.changeIndex.bind(this);
        this.onRowSelect = this.onRowSelect.bind(this);
        this.onChange = this.onChange.bind(this);
        this.play = this.play.bind(this);
        this.stepBackward = this.stepBackward.bind(this);
        this.stepForward = this.stepForward.bind(this);
    }

    changeIndex(k) {
        let x = this.state.current;
        k >= 0 ? x += 1 : x -= 1;
        if (x <= 0) {
            this.setState({current: 1, index: 0})
        } else if (x >= Math.ceil(SONGS.length / 5)) {
            this.setState({current: Math.ceil(SONGS.length / 5)})
        } else {
            this.setState({current: x, index: this.state.index + 5})
        }
    }

    onChange(e) {
        console.log('hi ' + e.target.value);
        this.setState({})
    }

    onRowSelect(e) {
        console.log('hi ' + e.target.name)
    }

    play() {
        this.state.icon == 'fa fa-play' ? this.setState({icon: 'fa fa-pause'}) : this.setState({icon: 'fa fa-play'})
    }

    stepBackward() {

    }

    stepForward() {

    }

    render() {

        return (
            <div className="music-content">
                <Header/>
                <AboutMePanel/>

                <SideNavBar/>
                <PlayerPanel icon={this.state.icon} onPlay={this.play} onStepBackward={this.stepBackward}
                             onStepForward={this.stepForward}/>
                <Table playlist={SONGS.splice(this.state.index, 5)} onClick={this.onRowSelect}/>
                <Pagination playlist={SONGS} current={this.state.current} onClick={this.onChange}
                            onChange={this.changeIndex}/>
                <Footer/>
            </div>
        );
    }
}

const SONGS = [
    {name: 'song name 1', artist: 'artist name 1', url: '', duration: '3:45'},
    {name: 'song name 2', artist: 'artist name 2', url: '', duration: '5:75'},
    {name: 'song name 3', artist: 'artist name 3', url: '', duration: '3:20'},
    {name: 'song name 4', artist: 'artist name 4', url: '', duration: '3:22'},
    {name: 'song name 5', artist: 'artist name 5', url: '', duration: '3:29'},
    {name: 'song name 6', artist: 'artist name 6', url: '', duration: '3:33'},
    {name: 'song name 7', artist: 'artist name 7', url: '', duration: '3:40'},
    {name: 'song name 8', artist: 'artist name 8', url: '', duration: '3:30'},
    {name: 'song name 9', artist: 'artist name 9', url: '', duration: '3:49'},
];

MusicPage.propTypes = {};

let mapStateToProps = function (state) {
    return {};
};

export default connect(mapStateToProps)(MusicPage);