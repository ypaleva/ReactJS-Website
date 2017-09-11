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

class MusicPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            className: ''
        }
        this.onRowSelect = this.onRowSelect.bind(this);
        this.onChange = this.onChange.bind(this);
        this.handlePrev = this.handlePrev.bind(this);
        this.handleNext = this.handleNext.bind(this);
    }

    onRowSelect(e) {
        console.log('hi ' + e.target.name)
    }

    onChange() {
        this.state.className === '' ? this.setState({className: 'active'}) : this.setState({className: ''});
        console.log('click')
    }

    handlePrev() {
        console.log('click prev')
    }

    handleNext() {
        console.log('click next')
    }

    render() {

        return (
            <div className="music-content">
                <Header/>
                <AboutMePanel/>
                <div className="social">
                    <SocialIcons/>
                </div>
                <SideNavBar/>
                <PlayerPanel/>
                <Table playlist={SONGS} onClick={this.onRowSelect}/>
                <Pagination playlist={SONGS} className={this.state.className} onClick={this.onChange}
                            onClickPrev={this.handlePrev}
                            onClickNext={this.handleNext}/>
            </div>
        );
    }
}

const SONGS = [
    {name: 'song name 1', artist: 'artist name 1', url: '', duration: '3:45'},
    {name: 'song name 2', artist: 'artist name 2', url: '', duration: '5:75'},
    {name: 'song name 3', artist: 'artist name 3', url: '', duration: '3:20'},
    {name: 'song name 4', artist: 'artist name 3', url: '', duration: '3:20'},
    {name: 'song name 5', artist: 'artist name 3', url: '', duration: '3:20'},
    {name: 'song name 6', artist: 'artist name 3', url: '', duration: '3:20'},
    {name: 'song name 7', artist: 'artist name 3', url: '', duration: '3:20'},
];

MusicPage.propTypes = {};

let mapStateToProps = function (state) {
    return {};
};

export default connect(mapStateToProps)(MusicPage);