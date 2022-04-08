import { AuthLayout } from './layouts/AuthLayout/AuthLayout';
import { AppLayout } from './layouts/AppLayout/AppLayout';

export const App = () => {
  const isAuthenticated = false;

  return (
    <div className="App">
      {isAuthenticated ? <AppLayout /> : <AuthLayout />}
    </div>
  );
};
