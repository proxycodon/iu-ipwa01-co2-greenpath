// Import Axios for HTTP requests
import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api';

//GET-Request to API endpoints
export default {
  getFaqs() {
    return axios.get(`${BASE_URL}/faqs`);
  },
  getEmissions() {
    return axios.get(`${BASE_URL}/emissions`);
  }
};
