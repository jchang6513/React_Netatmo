import { EventEmitter } from 'events';

import forecast from '../../../data/forecast.json';

class ForecastStore extends EventEmitter {
    constructor() {
        super();

        this.forecast = [
            {
                date:  forecast['query']['results']["channel"]['item']['forecast'][0]['day'].toUpperCase(),
                Mtemp: forecast['query']['results']["channel"]['item']['forecast'][0]['high'],
                mtemp: forecast['query']['results']["channel"]['item']['forecast'][0]['low'],
                text:  'https://s.yimg.com/os/weather/1.0.1/shadow_icon/60x60/'+
                       forecast['query']['results']["channel"]['item']['forecast'][0]['text'].replace(" ","_").toLowerCase()+'_day_night@2x.png'
            },
            {
                date:  forecast['query']['results']["channel"]['item']['forecast'][1]['day'].toUpperCase(),
                Mtemp: forecast['query']['results']["channel"]['item']['forecast'][1]['high'],
                mtemp: forecast['query']['results']["channel"]['item']['forecast'][1]['low'],
                text:  'https://s.yimg.com/os/weather/1.0.1/shadow_icon/60x60/'+              
                       forecast['query']['results']["channel"]['item']['forecast'][1]['text'].replace(" ","_").toLowerCase()+'_day_night@2x.png'
            },
            {
                date:  forecast['query']['results']["channel"]['item']['forecast'][2]['day'].toUpperCase(),
                Mtemp: forecast['query']['results']["channel"]['item']['forecast'][2]['high'],
                mtemp: forecast['query']['results']["channel"]['item']['forecast'][2]['low'],
                text:  'https://s.yimg.com/os/weather/1.0.1/shadow_icon/60x60/'+              
                       forecast['query']['results']["channel"]['item']['forecast'][2]['text'].replace(" ","_").toLowerCase()+'_day_night@2x.png'
            }            
        ]
    }
    
    getAll() {
        return this.forecast;
    }
}

const forecastStore = new ForecastStore;

export default forecastStore;