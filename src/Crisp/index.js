import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function crisp({ message, title, theme='success', icon, dismiss }) {
    const iconClass = icon ? ` icn-${icon}` : '';
    return (
        <div className={`cinnamon-sugar-crisp ${theme}${iconClass}`}>
            <aside/>
            <div className="title">{title}</div>
            <div className="message">{message}</div>
            <a href="#!"
                onClick={dismiss}
                className="btn-dismiss">&times;</a>
        </div>
    );
}

crisp.propTypes = {
    message: PropTypes.string,
    title: PropTypes.string,
    theme: PropTypes.string,
    icon: PropTypes.string,
    dismiss: PropTypes.func
};

export default crisp;