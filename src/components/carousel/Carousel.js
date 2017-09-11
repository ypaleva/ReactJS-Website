import React, {Component} from 'react';
import "./Carousel.scss";
import Button from "../button/Button";

class Carousel extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="carousel">
                <img className="img-thumbnail" src={this.props.current} alt="" width="750" height="750"/>
                <ControlPanel onClick={this.props.onClick}/>
            </div>
        );
    }

}

Carousel.propTypes = {};

export default Carousel;

class ControlPanel extends Component {

    constructor(props) {
        super(props);
        this.handlePrevious = this.handlePrevious.bind(this);
        this.handleNext = this.handleNext.bind(this);
    }

    handlePrevious() {
        this.props.onClick(-1);
    }

    handleNext() {
        this.props.onClick(1);
    }

    render() {

        return (
            <div className="control-panel">
                <Button text="❮" onClick={this.handlePrevious}/>
                <Button text="❯" onClick={this.handleNext}/>
            </div>
        );
    }

}

ControlPanel.propTypes = {};