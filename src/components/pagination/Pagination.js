import React, {Component} from 'react';
import "./Pagination.scss";
import PaginationBlock from "../pagination-block/PaginationBlock";

class Pagination extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let length = Math.ceil(this.props.playlist.length / 5);
        let blocks = [];
        for (let i = 1; i <= length; i++) {
            blocks.push(
                <PaginationBlock key={i} number={i} className={this.props.className}
                          onClick={this.props.onClick}/>
            )
        };

        console.log(blocks)

        return (
            <div className="center">
                <div className="pagination">
                    <a href="#" onClick={this.props.onClickPrev}>&laquo; Previous</a>
                    {blocks}
                    <a href="#" onClick={this.props.onClickNext}>Next &raquo;</a>
                </div>
            </div>
        );
    }
}

export default Pagination;