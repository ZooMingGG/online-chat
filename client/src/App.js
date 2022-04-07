import { AuthLayout } from './layouts/AuthLayout/AuthLayout';
import { AppLayout } from './layouts/AppLayout/AppLayout';

const isAuthenticated = true;

export const App = () => {
  return (
    <div className="App">
      {isAuthenticated ? <AppLayout /> : <AuthLayout />}
    </div>
  );
};
