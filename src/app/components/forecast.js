import React from 'react';

import ForecastStore from '../stores/forecastStore.js';

export class Forecast extends React.Component {
    constructor() {
        super();
        this.state = {
            fStore: ForecastStore.getAll(),
        }
    }
        
    render() {
        const { fStore } = this.state
        return(
            <div className='row m-0 p-0 pt-4'>
                <div className='col-12 m-0 px-4 p-0 py-3 d-flex justify-content-between'>
                    <div className='col-3'>
                        <h1 id='inform'>{fStore[0].date}</h1>
                    </div>
                    <div className='col-4 d-flex justify-content-between'>
                        <img className='d-block mx-auto' src={fStore[0].text} height='100px'></img>                 
                    </div>
                    <div className='col-2'>
                        <h1 id='inform'>{fStore[0].Mtemp}</h1>
                    </div>
                    <div className='col-2'>
                        <h1 id='inform'>{fStore[0].mtemp}</h1>   
                    </div>
                </div>
                <div className='col-12 m-0 px-4 p-0 py-3 d-flex justify-content-between'>
                    <div className='col-3'>
                        <h1 id='inform'>{fStore[1].date}</h1>
                    </div>
                    <div className='col-4 d-flex justify-content-between'>
                        <img className='d-block mx-auto' src={fStore[1].text} height='100px'></img>                 
                    </div>
                    <div className='col-2'>
                        <h1 id='inform'>{fStore[1].Mtemp}</h1>
                    </div>
                    <div className='col-2'>
                        <h1 id='inform'>{fStore[1].mtemp}</h1>   
                    </div>
                </div>
                <div className='col-12 m-0 px-4 p-0 py-3 d-flex justify-content-between'>
                    <div className='col-3'>
                        <h1 id='inform'>{fStore[2].date}</h1>
                    </div>
                    <div className='col-4 d-flex justify-content-between'>
                        <img className='d-block mx-auto' src={fStore[2].text} height='100px'></img>
                    </div>
                    <div className='col-2'>
                        <h1 id='inform'>{fStore[2].Mtemp}</h1>
                    </div>
                    <div className='col-2'>
                        <h1 id='inform'>{fStore[2].mtemp}</h1>   
                    </div>
                </div>
            </div>

        )
    }
}

/*

            <div className='row m-0 p-0'>
                <div className='col-4 m-0 p-0 py-3'>
                    <h1 id='forecast' className='text-center'>{fStore[0].date}</h1>
                    <div className='col-10 mx-auto'>
                        <img className='d-block mx-auto' src={fStore[0].text} height='250px'></img>
                    </div>
                    <div className='mx-5 d-flex justify-content-between'>
                        <h1 id='inform'>{fStore[0].mtemp}</h1>
                        <h1 id='inform'>{fStore[0].Mtemp}</h1>
                    </div>
                </div>
                <div className='col-4 m-0 p-0 py-3'>
                    <h1 id='forecast' className='text-center'>{fStore[1].date}</h1>
                    <div className='col-10 mx-auto'>
                        <img className='d-block mx-auto' src={fStore[1].text} height='250px'></img>
                    </div>
                    <div className='mx-5 d-flex justify-content-between'>
                        <h1 id='inform'>{fStore[1].mtemp}</h1>
                        <h1 id='inform'>{fStore[1].Mtemp}</h1>
                    </div>
                </div>
                <div className='col-4 m-0 p-0 py-3'>
                    <h1 id='forecast' className='text-center'>{fStore[2].date}</h1>
                    <div className='col-10 mx-auto'>
                        <img className='d-block mx-auto' src={fStore[2].text} height='250px'></img>
                    </div>
                    <div className='mx-5 d-flex justify-content-between'>
                        <h1 id='inform'>{fStore[2].mtemp}</h1>
                        <h1 id='inform'>{fStore[2].Mtemp}</h1>
                    </div>
                </div>                
            </div>
*/