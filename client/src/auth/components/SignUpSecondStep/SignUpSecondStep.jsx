import classes from './SignUpSecondStep.module.css';
import { AvatarSelect } from '../AvatarSelect/AvatarSelect';
import { Button } from '../../../shared/components/Button/Button';

export const SignUpSecondStep = ({ formik, prevStepHandler, userAvatar, setUserAvatar }) => {
  return (
    <>
      <AvatarSelect userAvatar={userAvatar} setUserAvatar={setUserAvatar} formik={formik} />
      <div className={classes['second-step-actions']}>
        <Button onClick={prevStepHandler} type="button">
          Go Back
        </Button>
        <Button disabled={!formik.isValid} type="submit">
          {userAvatar ? 'Sign Up' : 'Skip and Sign Up'}
        </Button>
      </div>
    </>
  );
};
