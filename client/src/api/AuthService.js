import axios from 'axios';

import { API_URL } from '../constants';
import { authUrls } from './apiUrls';

export class AuthService {
  static signIn = async signInPayload => {
    const response = await axios({
      method: 'post',
      url: `${API_URL}${authUrls.signIn}`,
      data: signInPayload,
    });

    return response.data;
  };

  static signUp = async signUpPayload => {
    const response = await axios({
      method: 'post',
      url: `${API_URL}${authUrls.signUp}`,
      data: signUpPayload,
    });

    return response.data;
  };
}
