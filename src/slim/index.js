import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function slim({ message, theme = 'dark' }) {
    return (
        <div className={`cinnamon-sugar-slim ${theme}`}>
            {message}
        </div>
    );
}

slim.propTypes = {
    message: PropTypes.string,
    theme: PropTypes.string
};

export default slim;