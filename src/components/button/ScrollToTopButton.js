import React, {Component} from 'react';
import "./ScrollToTopButton.scss";

class ScrollToTopButton extends Component {

    constructor(props) {
        super(props);
        this.scrollStep = this.scrollStep.bind(this);
        this.scrollToTop = this.scrollToTop.bind(this);
    }

    scrollStep() {
        if (window.pageYOffset === 0) {
            clearInterval(this.state.intervalId);
        }
        window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
    }

    scrollToTop() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <button title='Back to top' className='scroll' onClick={this.scrollToTop}>
                <span className='arrow-up glyphicon glyphicon-chevron-up'></span>
            </button>
        );
    }
}

ScrollToTopButton.propTypes = {
    text: React.PropTypes.string,
    onClick: React.PropTypes.func
};

export default ScrollToTopButton;