import { useFormik } from 'formik';

import classes from './SignInForm.module.css';
import { Button } from '../../../shared/components/Button/Button';

export const SignInForm = () => {
  const formik = useFormik({
    initialValues: {
      tag: '',
      password: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <div>
          <label htmlFor="tag">Enter your tag</label>
        </div>
        <div>
          <input
            id="tag"
            name="tag"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.tag}
          />
        </div>
      </div>
      <div>
        <div>
          <label htmlFor="password">Enter your password</label>
        </div>
        <div>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </div>
      </div>
      <Button
        className={classes['submit-btn']}
        type="submit"
      >
        Sign In
      </Button>
    </form>
  );
};
