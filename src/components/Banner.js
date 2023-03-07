import { Component } from "react";
import PropTypes from 'prop-types';

class Banner extends Component {
    render() {

        const {text} = this.props;

        return (
            <div>{text}</div>
        )
    }
}

Banner.PropTypes = {

    texto: PropTypes.array
}