//in file main.js

'use strict';

//pure JavaScript
var component = require('./component.js');

document.body.appendChild(component());

//react + webpack
import React from 'react';
import ReactDOM from 'react-dom';
import Hello, {user_name, Welcome} from './component.jsx';

function updateUI() {
    ReactDOM.render(
        <Hello />, 
        document.getElementById('content')
    );
}


var user_list = (
    <div>
        {user_name}
        <Welcome p="aaa" />
        <Welcome p="bbb" />
    </div>
);

ReactDOM.render(
    user_list,
    document.getElementById('title')
);


setInterval(updateUI, 1000);