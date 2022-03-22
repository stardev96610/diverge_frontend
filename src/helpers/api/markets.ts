import { APICore } from './apiCore';
import axios from 'axios';

const api = new APICore();

// account
function getMarkets(params: {}) {
    // const baseUrl = process.env.REACT_APP_API_URL + '/markets/getMarkets';
    const baseUrl = 'http://localhost:82/api/markets/getMarkets';
    return api.create(`${baseUrl}`, params);
    // return await axios.post(baseUrl, {});
}

    
export { getMarkets };
