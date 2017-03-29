//in file component.jsx

import React from 'react';
import ReactDOM from 'react-dom';

export default class Timer extends React.Component {
    render() {
        var d = new Date();
        return <div>time now:{d.toLocaleTimeString()} {d.toLocaleString()}</div>;
    }
}



export function Welcome(prop) {
    return <div>Welcome  {prop.name}</div>;
}

export const desc = (
    <p>
        正在施工中。。。
    </p>
);
