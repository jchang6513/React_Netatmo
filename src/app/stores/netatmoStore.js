import { EventEmitter } from 'events';

import data from '../../../data/data.json';
import airbox from '../../../data/airbox.json';

class NetatmoStore extends EventEmitter {
    constructor() {
        super();
        this.netatmo = {
            oTemp: data['body']['modules'][0]['dashboard_data']['Temperature'].toFixed(1),
            oMTemp: data['body']['modules'][0]['dashboard_data']['max_temp'].toFixed(1),
            omTemp: data['body']['modules'][0]['dashboard_data']['min_temp'].toFixed(1),
            oHum: data['body']['modules'][0]['dashboard_data']['Humidity'],
            oPM25: airbox["feeds"][0]["AirBox"]['s_d0'],
            iTemp: data['body']['devices'][0]['dashboard_data']['Temperature'].toFixed(1),
            iMTemp: data['body']['devices'][0]['dashboard_data']['max_temp'].toFixed(1),
            imTemp: data['body']['devices'][0]['dashboard_data']['min_temp'].toFixed(1),
            iHum: data['body']['devices'][0]['dashboard_data']['Humidity'],
            iCO2: data['body']['devices'][0]['dashboard_data']['CO2']         
        }
    }
    
    getAll() {
        return this.netatmo;
    }
}

const netatmoStore = new NetatmoStore;

export default netatmoStore;

window.data = data;
window.airbox = airbox;