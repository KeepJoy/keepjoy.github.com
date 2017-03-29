//in file main.js

'use strict';

//pure JavaScript
var component = require('./component.js');

document.body.appendChild(component());

//react + webpack
import React from 'react';
import ReactDOM from 'react-dom';
import Timer, {desc, Welcome} from './component.jsx';

function updateUI() {
    ReactDOM.render(
        <Timer />, 
        document.getElementById('content')
    );
}


var user_list = (
    <div>
        <Welcome name="Kepp's blog" />
        {desc}
    </div>
);

ReactDOM.render(
    user_list,
    document.getElementById('title')
);


setInterval(updateUI, 1000);