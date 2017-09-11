import React, {Component} from 'react';
import {connect} from 'react-redux';
import "../../style/CVPage.scss";
import Button from "../../components/button/Button";

class CVPage extends Component {

    constructor(props) {
        super(props);
        this.scrollDown = this.scrollDown.bind(this);
    }

    scrollDown() {
        window.scrollBy(0, 500);
    }

    render() {
        return (
            <div className="cv-content">
                <div className="cv">
                    <header>Education</header>
                    <hr className="divider"/>
                    <div className="scroll-button">
                        <Button text="Next ❯" onClick={this.scrollDown}/>
                    </div>
                </div>
            </div>
        );
    }
}

CVPage.propTypes = {};

let mapStateToProps = function (state) {
    return {};
};

export default connect(mapStateToProps)(CVPage);