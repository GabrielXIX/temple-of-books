import { Component } from "react";
import PropTypes from 'prop-types';

class Banner extends Component {
    render() {

        const {texto} = this.props;

        return (
            <h1 className='Banner'>{texto}</h1>
        )
    }
}

Banner.propTypes = {

    texto: PropTypes.string.isRequired
}

export default Banner;