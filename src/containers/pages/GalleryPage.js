import React, {Component} from 'react';
import {connect} from 'react-redux';
import "../../style/GalleryPage.scss";
import Header from "../blocks/header/Header";
import ImageVector from "../../components/image-vector/ImageVector";
import Modal from "../../components/modal/Modal";
import Carousel from "../../components/carousel/Carousel";
import SideNavBar from "../../components/side-navbar/SideNavBar";
import AboutMePanel from "../../components/panel/AboutMePanel";

class GalleryPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            current: 0,
            gallery: [
                "https://cdn.pixabay.com/photo/2017/08/17/20/19/puppy-2652730__340.jpg",
                "https://cdn.pixabay.com/photo/2017/06/18/00/35/puppy-2414187__340.jpg",
                "https://cdn.pixabay.com/photo/2017/06/02/08/17/french-bulldog-2365662__340.jpg",
                "https://cdn.pixabay.com/photo/2016/07/07/15/35/puppy-1502565__340.jpg",
                "https://cdn.pixabay.com/photo/2016/06/29/15/40/dog-1487058__340.jpg",
                "https://cdn.pixabay.com/photo/2016/02/25/10/31/puppy-1221791__340.jpg",
                "https://cdn.pixabay.com/photo/2017/08/17/20/19/puppy-2652730__340.jpg",
                "https://cdn.pixabay.com/photo/2017/06/18/00/35/puppy-2414187__340.jpg",
                "https://cdn.pixabay.com/photo/2017/06/02/08/17/french-bulldog-2365662__340.jpg",
                "https://cdn.pixabay.com/photo/2016/07/07/15/35/puppy-1502565__340.jpg"
            ]
        };
        this.handleClick = this.handleClick.bind(this);
        this.changeIndex = this.changeIndex.bind(this);
    }

    changeIndex(k) {
        let x = this.state.current;
        k >= 0 ? x += 1 : x -= 1;
        x <= this.state.gallery.length - 1 ?
            this.setState({current: x}) : this.setState({current: 0})
    }

    handleClick(i) {
        console.log(i.target.id);
        this.setState({
            current: i.target.id
        })
    }

    render() {
        return (
            <div className="gallery-content">
                <Header/>
                <SideNavBar/>
                <ImageVector images={this.state.gallery} onClickPhoto={this.handleClick}/>
                <div className="carousel-modal">
                    <Modal current={this.state.gallery[this.state.current]} onClick={this.changeIndex}/>
                </div>
            </div>
        );
    }
}

GalleryPage.propTypes = {};

let mapStateToProps = function (state) {
    return {};
};

export default connect(mapStateToProps)(GalleryPage);