import classes from './SignUp.module.css';
import { SignUpForm } from '../SignUpForm/SignUpForm';

export const SignUp = () => {
  return (
    <div className={classes.signup}>
      <div className={classes['signup-title']}>
        Sign Up
      </div>
      <SignUpForm />
    </div>
  );
};
