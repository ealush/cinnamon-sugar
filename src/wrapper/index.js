import React from 'react';
import PropTypes from 'prop-types';

function wrapper(kinds, {message, title, theme, icon, kind = 'crisp', noClose = false, ...rest}) {
    if (!kinds[kind]) {
        return null;
    }

    const Component = kinds[kind],
        wrapperClass = `cs-${kind}`,
        Content = ({dismiss}) => (<Component message={message}
            title={title}
            theme={theme}
            icon={icon}
            noClose={noClose}
            dismiss={dismiss}/>);

    return Object.assign({}, {
        content: Content,
        wrapperClass
    }, rest);
}


export default wrapper;