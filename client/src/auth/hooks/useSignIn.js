import { useFetch } from '../../shared/hooks/useFetch';
import { AuthService } from '../../api/AuthService';

export const useSignIn = () => {
  const [signInRequest, isLoading, error] = useFetch(AuthService.signIn);

  const signIn = async (...params) => {
    await signInRequest(...params);
  };

  return [signIn, isLoading, error];
};
