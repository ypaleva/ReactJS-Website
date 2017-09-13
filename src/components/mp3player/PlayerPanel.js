import React, {Component} from 'react';
import "./PlayerPanel.scss";

class PlayerPanel extends Component {

    render() {

        let playStyle = {
            fontSize: '36px',
            borderStyle: 'ridge',
            width: '50px',
            height: '50px',
            borderRadius: '50px',
            lineHeight: '45px',
        };

        let buttonStyle = {
            fontSize: '28px'
        };

        return (
            <div className="player-panel">

                <div className="player-buttons">
                    <i className="fa fa-step-backward" style={buttonStyle} onClick={this.props.onStepBackward}></i>
                    <i className={this.props.icon} style={playStyle} onClick={this.props.onPlay}></i>
                    <i className="fa fa-step-forward" style={buttonStyle} onClick={this.props.onStepForward}></i>
                </div>
            </div>
        );
    }
}

export default PlayerPanel;