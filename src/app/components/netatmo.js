import React from 'react';

import NetatmoStore from '../stores/netatmoStore.js';

export class Netatmo extends React.Component {
    constructor() {
        super();
        this.state = {
            nStore: NetatmoStore.getAll(),
        }
    }
        
    render() {
        return(
            <div>
                <p>{this.state.nStore.oTemp}</p>
                <p>{this.state.nStore.oMTemp}</p>
                <p>{this.state.nStore.omTemp}</p>
                <p>{this.state.nStore.oHum}</p>
                <p>{this.state.nStore.oPr}</p>
                <p>{this.state.nStore.iTemp}</p>
                <p>{this.state.nStore.iMTemp}</p>
                <p>{this.state.nStore.imTemp}</p>
                <p>{this.state.nStore.iHum}</p>
                <p>{this.state.nStore.iCO2}</p>
                <p>{this.state.nStore.iNoi}</p>
            </div>
        )
    }
}