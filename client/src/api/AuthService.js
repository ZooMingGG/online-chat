import axios from 'axios';

import { API_URL } from '../constants';

export class AuthService {
  static signIn = async signInPayload => {
    const response = await axios({
      method: 'post',
      url: `${API_URL}/auth/sign-in`,
      data: signInPayload,
    });

    return response.data;
  };

  static signUp = async signUpPayload => {
    const response = await axios({
      method: 'post',
      url: `${API_URL}/auth/sign-up`,
      data: signUpPayload,
    });

    return response.data;
  };
}
