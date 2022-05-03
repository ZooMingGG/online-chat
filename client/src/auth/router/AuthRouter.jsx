import { Routes, Route, Navigate } from 'react-router-dom';

import { paths } from './paths';
import { SignIn } from '../components/SignIn/SignIn';
import { SignUp } from '../components/SignUp/SignUp';

export const AuthRouter = () => {
  return (
    <Routes>
      <Route path={paths.signIn} element={<SignIn />} />
      <Route path={paths.signUp} element={<SignUp />} />
      <Route path="*" element={<Navigate to={paths.signIn} />} />
    </Routes>
  );
};
