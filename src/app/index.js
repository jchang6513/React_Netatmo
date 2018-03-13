import React from 'react';
import { render } from 'react-dom';

import { Clock } from './components/clock.js';

class App extends React.Component {
    render () {
        return (
            <div>
                <Clock/>
                <h1>Hello World!!!</h1>
            </div>
        )        
    }
}

render(<App/>,window.document.getElementById('app'));