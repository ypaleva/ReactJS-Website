import React, {Component} from 'react';
import './BootstrapTable.scss';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

class Table extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        let {selectRowProp, options} = this.props;

        return (
            <div className="table">
                <BootstrapTable version='4' selectRow={selectRowProp} options={options}>
                    <TableHeaderColumn dataField='id'>Name</TableHeaderColumn>
                    <TableHeaderColumn dataField='name'>Artist</TableHeaderColumn>
                </BootstrapTable>
            </div>
        );
    }

}

export default Table;