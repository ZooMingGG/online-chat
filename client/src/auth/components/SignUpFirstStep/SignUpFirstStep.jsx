import classes from './SignUpFirstStep.module.css';
import { FormControl } from '../../../shared/components/FormControl/FormControl';
import { Button } from '../../../shared/components/Button/Button';

export const SignUpFirstStep = ({ formik, nextStepHandler }) => {
  return (
    <>
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
      <Button
        onClick={nextStepHandler}
        disabled={!formik.isValid}
        className={classes['next-btn']}
        type="button"
      >
        Next
      </Button>
    </>
  );
};
