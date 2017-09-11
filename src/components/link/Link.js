import React, {Component} from 'react';
import {Link as RouterLink} from 'react-router-dom';
import './Link.scss';

class Link extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return this.props.link
            ? <RouterLink
                className={`link ${this.props.className}`}
                onClick={() => this.props.onClick(this.props.text)}
                to={this.props.link}
            >
                {this.props.icon}
                {this.props.text}
            </RouterLink>
            : <a
                className={`link ${this.props.className}`}
                onClick={() => this.props.onClick(this.props.text)}
                {...(this.props.href ? {href: this.props.href} : {})}
            >
                {this.props.icon}
                {this.props.text}
            </a>;
    }
}

Link.propTypes = {
    icon: React.PropTypes.object,
    className: React.PropTypes.string,
    text: React.PropTypes.string,
    link: React.PropTypes.string,
    href: React.PropTypes.string,
    onClick: React.PropTypes.func,
};

Link.defaultProps = {
    className: '',
    link: '',
    text: '',
    onClick: () => {},
};

export default Link;