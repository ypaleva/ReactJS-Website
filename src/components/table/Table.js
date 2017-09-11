import React, {Component} from 'react';
import TableRow from "../table-row/TableRow";
import "./Table.scss";

class Table extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        let rowStyle= {
            cursor: 'pointer',
            backgroundColor: '#ded7ce'
        };

        let rows = this.props.playlist.map((song, i) => <TableRow key={i} className="row" playlist={song}
                                                                  onClick={this.props.onClick} style={rowStyle}/>);

        console.log('Playlist: ' + rows);

        return (
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Artist</th>
                    <th>Duration</th>
                </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}

export default Table;