import { EventEmitter } from 'events';

import data from '../../../data/data.json';

class NetatmoStore extends EventEmitter {
    constructor() {
        super();
        this.netatmo = {
            oTemp: data['body']['modules'][0]['dashboard_data']['Temperature'],
            oMTemp: data['body']['modules'][0]['dashboard_data']['max_temp'],
            omTemp: data['body']['modules'][0]['dashboard_data']['min_temp'],
            oHum: data['body']['modules'][0]['dashboard_data']['Humidity'],
            oPr: data['body']['devices'][0]['dashboard_data']['Pressure'],
            iTemp: data['body']['devices'][0]['dashboard_data']['Temperature'],
            iMTemp: data['body']['devices'][0]['dashboard_data']['max_temp'],
            imTemp: data['body']['devices'][0]['dashboard_data']['min_temp'],
            iHum: data['body']['devices'][0]['dashboard_data']['Humidity'],
            iCO2: data['body']['devices'][0]['dashboard_data']['CO2'],
            iNoi: data['body']['devices'][0]['dashboard_data']['Noise'],
        }
    }
    
    getAll() {
        return this.netatmo;
    }
}

const netatmoStore = new NetatmoStore;

export default netatmoStore;