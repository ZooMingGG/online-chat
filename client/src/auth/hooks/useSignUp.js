import { useFetch } from '../../shared/hooks/useFetch';
import { AuthService } from '../../api/AuthService';

export const useSignUp = () => {
  const [signUpRequest, isLoading, error] = useFetch(AuthService.signUp);

  const signUp = async (...params) => {
    await signUpRequest(...params);
  };

  return [signUp, isLoading, error];
};
