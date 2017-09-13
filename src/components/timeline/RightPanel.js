import React, {Component} from 'react';
import "./RightPanel.scss";
import Carousel from "../carousel/Carousel";

class RightPanel extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="right-panel">
                <div className="gallery">
                    <Carousel current="https://cdn.pixabay.com/photo/2017/06/02/08/17/french-bulldog-2365662__340.jpg"/>
                </div>
                <div className="description">
                    some text
                </div>
            </div>
        );
    }
}

export default RightPanel;