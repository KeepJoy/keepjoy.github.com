//in file component.jsx

import React from 'react';
import ReactDOM from 'react-dom';

export default class Hello extends React.Component {
    render() {
        return <div>timer:{new Date().toLocaleTimeString()}</div>;
    }
}

function formatName(user){
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName : 'Harry',
    lastName : 'Poter',
}

export function Welcome(prop) {
    return <div>{user_name} <div>Welcome props.p is {prop.p}</div></div>;
}

export const user_name = (<div>Hey, {formatName(user)}</div>);

