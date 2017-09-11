import React, {Component} from 'react';
import "./TableRow.scss"

class TableRow extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <tr onClick={this.props.onClick} style={this.props.style}>
                <td>{this.props.playlist.name}</td>
                <td>{this.props.playlist.artist}</td>
                <td>{this.props.playlist.duration}</td>
            </tr>
        );
    }
}

export default TableRow;