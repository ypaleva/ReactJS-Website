import React, {Component} from 'react';
import "../pagination/Pagination.scss";

class PaginationBlock extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <a href="#" className={this.props.className} onClick={this.props.onClick}>{this.props.number}</a>
        );
    }

}

export default PaginationBlock;