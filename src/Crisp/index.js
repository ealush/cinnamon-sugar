import React from 'react';
import './style.scss';

function Component({ message, title, theme='success', icon, dismiss }) {
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

function crisp({message, title, theme, icon, ...rest}) {
    return Object.assign({}, {
        content: ({dismiss}) => (<Component
            message={message}
            title={title}
            theme={theme}
            icon={icon}
            dismiss={dismiss}/>)
    }, rest);
}

export default crisp;