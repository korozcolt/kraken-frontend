import axios from 'axios';
import authHeader from './auth-header';

const API_URL = process.env.REACT_APP_API_ENDPOINT;

class UserService {
  // getPublicContent() {
  //   return axios.get(API_URL + 'coordinator');
  // }

  getAllCoordinators() {
    return axios.get(API_URL + 'coordinator', { headers: authHeader() });
  }

  getModeratorBoard() {
    return axios.get(API_URL + 'mod', { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }
}

export default new UserService();