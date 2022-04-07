import { Routes, Route, Navigate } from 'react-router-dom';

import { paths } from './paths';
import { SignIn } from '../../auth/components/SignIn/SignIn';
import { SignUp } from '../../auth/components/SignUp/SignUp';

export const AuthRouter = () => {
  return (
    <Routes>
      <Route path={paths.signin} element={<SignIn />} />
      <Route path={paths.signup} element={<SignUp />} />
      <Route path="*" element={<Navigate to={paths.signin} />} />
    </Routes>
  );
};
