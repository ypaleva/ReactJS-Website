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
                    <Carousel current={this.props.current} onClick={this.props.onClick}/>
                </div>
                <div className="description">
                    some text
                </div>
            </div>
        );
    }
}

export default RightPanel;