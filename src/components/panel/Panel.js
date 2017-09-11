import React, {Component} from 'react';
import './Panel.scss';

class Panel extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-body">
                    <span className="icon mif-home"></span>
                    <h3>{this.props.heading}</h3>
                    <p>{this.props.content}</p>
                </div>
            </div>
        );
    }

}

export default Panel;