import React, { Component } from 'react';

class Button extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        let {text, onClick} = this.props;

        return (
            <div className="button" onClick={onClick}>
                {text}
            </div>
        );
    }
}

Button.propTypes = {
    text: React.PropTypes.string,
    onClick: React.PropTypes.func
};

export default Button;