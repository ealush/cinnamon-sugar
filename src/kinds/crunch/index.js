import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function crunch({ message, title, theme='grey', icon, dismiss, noClose }) {
    const iconClass = icon ? `fa fa-${icon}` : '',
        noIconClass = iconClass === '' ? ' no-icon' : '';
    return (
        <div className={`cinnamon-sugar-crunch ${theme}${noIconClass}`}>
            <aside className={iconClass}/>
            { title && <div className="title">{title}</div> }
            { message && <div className="message">{message}</div> }
            {!noClose && <a href="#!"
                onClick={dismiss}
                className="btn-dismiss">&times;</a>}
        </div>
    );
}

crunch.propTypes = {
    message: PropTypes.any,
    title: PropTypes.any,
    theme: PropTypes.string,
    icon: PropTypes.string,
    dismiss: PropTypes.func,
    noClose: PropTypes.bool
};

export default crunch;