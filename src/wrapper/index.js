import React from 'react';

function wrapper(kinds, {message, title, theme, icon, kind = 'crisp', ...rest}) {
    if (!kinds[kind]) {
        return null;
    }

    const Component = kinds[kind],
        wrapperClass = `cs-${kind}`;

    return Object.assign({}, {
        content: ({dismiss}) => (<Component
            message={message}
            title={title}
            theme={theme}
            icon={icon}
            dismiss={dismiss}/>),
        wrapperClass
    }, rest);
}

export default wrapper;