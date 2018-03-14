import React from 'react';

import NetatmoStore from '../stores/netatmoStore.js';
import ForecastStore from '../stores/forecastStore.js';

export class Netatmo extends React.Component {
    constructor() {
        super();
        this.state = {
            nStore: NetatmoStore.getAll(),
            fStore: ForecastStore.getAll(),
        }
    }
        
    render() {
        const { nStore } = this.state;
        const { fStore } = this.state;
        
        return(
            <div class='col-12 m-0 p-0 d-flex flex-row'>
                <div class='col-6 m-0 pl-4 py-4 p-0'>
                    <div class='col-11 mr-4 align-center'>
                        <img class='d-block mx-auto' src={fStore[0].text} height='300px'></img>
                    </div>
                    <div class='row m-0 p-0 d-flex flex-row'>                                                
                        <div class='col-8 m-0 p-0'>
                            <h1 id='temp'>{nStore.oTemp}</h1>
                        </div>
                        <div class='col-3 m-0 p-0 pl-4 mt-2 pt-3'>
                            <p id='mMtemp'>{nStore.oMTemp}</p>
                            <p id='mMtemp'>{nStore.omTemp}</p>
                        </div>
                    </div>
                    <div class='col-11 m-0 p-0'>
                        <div class='row m-0 p-0 py-3 d-flex justify-content-between'>
                            <h1 id='inform'>濕度</h1>
                            <h1 id='inform' class='float-right'>
                                {nStore.oHum}<small><small>%</small></small></h1>
                        </div>
                        <div class='row m-0 p-0 py-3 d-flex justify-content-between'>
                            <h1 id='inform'>空污</h1>
                            <h1 id='inform'>
                                {nStore.oPM25}<small><small><small>ppm</small></small></small></h1>
                        </div>
                    </div>                    
                </div>
                <div class='col-6 m-0 pl-4 py-4 p-0'>
                    <div class='col-11 mr-4 align-center'>
                        <img class='d-block mx-auto' src='http://www.ss.ncu.edu.tw/~istep/netatmo/indoor.png' height='300px'></img>
                    </div>                    
                    <div class='row m-0 p-0 d-flex flex-row'>
                        <div class='col-8 m-0 p-0'>
                            <h1 id='temp'>{nStore.iTemp}</h1>
                        </div>
                        <div class='col-3 m-0 p-0 pl-4 pt-3'>
                            <p id='mMtemp'>{nStore.iMTemp}</p>
                            <p id='mMtemp'>{nStore.imTemp}</p>
                        </div>
                    </div>
                    <div class='col-11 m-0 p-0'>
                        <div class='row m-0 p-0 py-3 d-flex justify-content-between'>
                            <h1 id='inform'>濕度</h1>
                            <h1 id='inform' class='float-right'>
                                {nStore.iHum}<small><small>%</small></small></h1>
                        </div>
                        <div class='row m-0 p-0 py-3 d-flex justify-content-between'>
                            <h1 id='inform'>CO<sub>2</sub></h1>
                            <h1 id='inform'>
                                {nStore.iCO2}<small><small><small>ppm</small></small></small></h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}