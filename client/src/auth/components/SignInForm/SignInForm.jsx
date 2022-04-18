import { useFormik } from 'formik';

import classes from './SignInForm.module.css';
import { Button } from '../../../shared/components/Button/Button';
import { Input } from '../../../shared/components/Input/Input';
import { useFetch } from '../../../hooks/useFetch';
import { AuthService } from '../../../api/AuthService';

export const SignInForm = () => {
  const [signIn, isLoading, error] = useFetch(async signInPayload => {
    const response = await AuthService.signIn(signInPayload);
  });

  const formik = useFormik({
    initialValues: {
      tag: '',
      password: '',
    },
    onSubmit: signInPayload => {
      signIn(signInPayload);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <div>
          <label htmlFor="tag">Enter your tag</label>
        </div>
        <div>
          <Input
            onChange={formik.handleChange}
            value={formik.values.tag}
            className={classes.input}
            id="tag"
            name="tag"
            placeholder="Tag..."
            type="text"
          />
        </div>
      </div>
      <div>
        <div>
          <label htmlFor="password">Enter your password</label>
        </div>
        <div>
          <Input
            onChange={formik.handleChange}
            value={formik.values.password}
            className={classes.input}
            id="password"
            name="password"
            placeholder="Password..."
            type="password"
          />
        </div>
      </div>
      <Button
        disabled={isLoading}
        className={classes['submit-btn']}
        type="submit"
      >
        Sign In
      </Button>
    </form>
  );
};
