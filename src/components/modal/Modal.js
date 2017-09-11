import React, {Component} from 'react';
import Carousel from "../carousel/Carousel";
import "./Modal.scss";

class Modal extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
                <div className="modal fade" id="myModal" role="dialog">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-body">
                                <Carousel current={this.props.current} onClick={this.props.onClick}/>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

Modal.propTypes = {};

export default Modal;