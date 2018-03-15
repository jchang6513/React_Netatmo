import React from 'react';
import { render } from 'react-dom';

import { Clock } from './components/clock.js';
import { Netatmo } from './components/netatmo.js';
import { Forecast } from './components/forecast.js';

class App extends React.Component {
    render () {
        return (
            <div className='col-12 p-0'>
                <div className='row m-0'>
                    <div className='col-9-16 ml-auto mr-auto'>
                        <Clock/>
                        <Netatmo/>

                        <Forecast/>
                    </div>
                </div>
            </div>
        )        
    }
}

render(<App/>,window.document.getElementById('app'));