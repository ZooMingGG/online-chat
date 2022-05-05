import { useFormik } from 'formik';
import * as Yup from 'yup';

import classes from './SignUpForm.module.css';
import { Button } from '../../../shared/components/Button/Button';
import { FormControl } from '../../../shared/components/FormControl/FormControl';

export const SignUpForm = () => {
  const formik = useFormik({
    validateOnMount: true,
    initialValues: {
      firstName: '',
      lastName: '',
      tag: '',
      password: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(3, 'First name must be at least 3 characters long')
        .required('First name is required'),
      lastName: Yup.string()
        .min(3, 'Last name must be at least 3 characters long')
        .required('Last name is required'),
      tag: Yup.string()
        .min(4, 'Tag must be at least 4 characters long')
        .required('Tag is required'),
      password: Yup.string()
        .min(8, 'Password must be at least 8 characters long')
        .required('Password is required'),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormControl
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.firstName}
        className={classes.input}
        error={formik.touched.firstName && formik.errors.firstName}
        label="Enter your first name"
        fieldName="firstName"
        placeholder="First name..."
        type="text"
      />
      <FormControl
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastName}
        className={classes.input}
        error={formik.touched.lastName && formik.errors.lastName}
        label="Enter your last name"
        fieldName="lastName"
        placeholder="Last name..."
        type="text"
      />
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
      <Button disabled={!formik.isValid} className={classes['submit-btn']} type="submit">
        Sign Up
      </Button>
    </form>
  );
};
