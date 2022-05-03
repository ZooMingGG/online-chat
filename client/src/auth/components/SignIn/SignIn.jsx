import classes from './SignIn.module.css';
import { SignInForm } from '../SignInForm/SignInForm';

export const SignIn = () => {
  return (
    <div className={classes.signin}>
      <div className={classes['signin-title']}>Sign In</div>
      <SignInForm />
    </div>
  );
};
