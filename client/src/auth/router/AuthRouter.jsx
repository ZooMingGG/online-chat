import { Routes, Route, Navigate } from 'react-router-dom';

import { routes } from './routes';
import { SignIn } from '../../auth/components/SignIn/SignIn';
import { SignUp } from '../../auth/components/SignUp/SignUp';

export const AuthRouter = () => {
  return (
    <Routes>
      <Route path={routes.signin} element={<SignIn />} />
      <Route path={routes.signup} element={<SignUp />} />
      <Route path="*" element={<Navigate to={routes.signin} />} />
    </Routes>
  );
};
