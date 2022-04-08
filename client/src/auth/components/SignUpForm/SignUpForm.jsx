import { useFormik } from 'formik';

import classes from './SignUpForm.module.css';
import { Button } from '../../../shared/components/Button/Button';
import { Input } from '../../../shared/components/Input/Input';

export const SignUpForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
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
          <label htmlFor="firstName">Enter your first name</label>
        </div>
        <div>
          <Input
            onChange={formik.handleChange}
            value={formik.values.firstName}
            className={classes.input}
            id="firstName"
            name="firstName"
            type="text"
          />
        </div>
      </div>
      <div>
        <div>
          <label htmlFor="lastName">Enter your last name</label>
        </div>
        <div>
          <Input
            onChange={formik.handleChange}
            value={formik.values.lastName}
            className={classes.input}
            id="lastName"
            name="lastName"
            type="text"
          />
        </div>
      </div>
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
            type="password"
          />
        </div>
      </div>
      <Button
        className={classes['submit-btn']}
        type="submit"
      >
        Sign Up
      </Button>
    </form>
  );
};
