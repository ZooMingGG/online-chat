import { useFormik } from 'formik';
import * as Yup from 'yup';

import classes from './SignInForm.module.css';
import { Button } from '../../../shared/components/Button/Button';
import { FormControl } from '../../../shared/components/FormControl/FormControl';
import { useSignIn } from '../../hooks/useSignIn';

export const SignInForm = () => {
  const [signIn, isLoading] = useSignIn();

  const formik = useFormik({
    validateOnMount: true,
    initialValues: {
      tag: '',
      password: '',
    },
    validationSchema: Yup.object({
      tag: Yup.string()
        .min(4, 'Tag must be at least 4 characters long')
        .required('Tag is required'),
      password: Yup.string()
        .min(8, 'Password must be at least 8 characters long')
        .required('Password is required'),
    }),
    onSubmit: signInPayload => {
      signIn(signInPayload);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormControl
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.tag}
        className={classes.input}
        error={formik.touched.tag && formik.errors.tag}
        label="Enter your tag"
        fieldName="tag"
        placeholder="Tag..."
        type="text"
      />
      <FormControl
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
        className={classes.input}
        error={formik.touched.password && formik.errors.password}
        label="Enter your password"
        fieldName="password"
        placeholder="Password..."
        type="password"
      />
      <Button
        disabled={isLoading || !formik.isValid}
        className={classes['submit-btn']}
        type="submit"
      >
        Sign In
      </Button>
    </form>
  );
};
