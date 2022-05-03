import axios from 'axios';

import { API_URL } from '../constants';

export class AuthService {
  static signIn = async signInPayload => {
    const response = await axios({
      method: 'post',
      url: API_URL,
      data: signInPayload,
    });

    return response.data;
  };
}
