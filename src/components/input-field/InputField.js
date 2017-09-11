import React, {Component} from 'react';
import './InputField.scss';

class InputField extends Component {

    constructor(props) {
        super(props);
    }

    render(){

        let {type, name, placeholder} = this.props;

        return (
            <div className="input-field">
                <input type={type} ref={name} placeholder={placeholder}/>
            </div>
        )
    }

}

InputField.propTypes = {
    type: React.PropTypes.string,
    name: React.PropTypes.string,
    placeholder: React.PropTypes.string
};

export default InputField;