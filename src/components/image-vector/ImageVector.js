import React, {Component} from 'react';
import './ImageVector.scss';

class ImageVector extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        let photos = this.props.images.map((photo, i) => <img key={i} id={i} className={i === 0 ? "first" : ""} src={photo}
                                                              onClick={this.props.onClickPhoto} alt="" data-toggle="modal" data-target="#myModal"/>);
        console.log(photos);
        return (
            <div className="image-vector">
                <div className="text">
                    <h1>My gallery</h1>
                    <p>some textome textome textome textome textome textome textome textome textome
                        textome textome textome textome textome textome textome
                        textome textome textome textome textome textome textome textome textome textome
                        textome textome textome textome text textome textome textome textome text textome textome textome textome text</p>
                </div>

                <div className="photobanner">
                    {photos}
                </div>
            </div>
        );
    }

}

export default ImageVector;