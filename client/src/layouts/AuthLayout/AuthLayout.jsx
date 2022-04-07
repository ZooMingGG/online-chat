import { AuthBar } from '../../auth/components/AuthBar/AuthBar';
import { AuthRouter } from '../../auth/router/AuthRouter';

export const AuthLayout = () => {
  return (
    <div>
      <AuthBar />
      <AuthRouter />
    </div>
  );
};
