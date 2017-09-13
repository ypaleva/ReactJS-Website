import React, {Component} from 'react';
import "./Pagination.scss";
import PaginationBlock from "../pagination-block/PaginationBlock";

class Pagination extends Component {

    constructor(props) {
        super(props);
        this.handlePrev = this.handlePrev.bind(this);
        this.handleNext = this.handleNext.bind(this);
    }

    handlePrev() {
        this.props.onChange(-1);
    }

    handleNext() {
        this.props.onChange(1);
    }

    render() {
        let length = Math.ceil(this.props.playlist.length / 5);
        let blocks = [];
        for (let i = 1; i <= length; i++) {
            blocks.push(
                <PaginationBlock key={i} number={i} className={i === this.props.current ? "active" : ""}
                                 onClick={this.props.onClick}/>
            )
        }
        return (
            <div className="center">
                <div className="pagination">
                    <a href="#" onClick={this.handlePrev}>&laquo; Previous</a>
                    {blocks}
                    <a href="#" onClick={this.handleNext}>Next &raquo;</a>
                </div>
            </div>
        );
    }
}

export default Pagination;