import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { useFetch } from '../../../shared/hooks/useFetch';
import { AuthService } from '../../../api/AuthService';
import { SignUpFirstStep } from '../SignUpFirstStep/SignUpFirstStep';
import { SignUpSecondStep } from '../SignUpSecondStep/SignUpSecondStep';

export const SignUpForm = () => {
  const [step, setStep] = useState(1);
  const [userAvatar, setUserAvatar] = useState(null);

  const [signUp] = useFetch(async signUpPayload => {
    await AuthService.signUp(signUpPayload);
  });

  const formik = useFormik({
    validateOnMount: true,
    initialValues: {
      firstName: '',
      lastName: '',
      tag: '',
      password: '',
      userAvatar: null,
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
      const formData = new FormData();

      formData.append('firstName', values.firstName);
      formData.append('lastName', values.lastName);
      formData.append('tag', values.tag);
      formData.append('password', values.password);
      formData.append('userAvatar', values.userAvatar);

      signUp(formData);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      {step === 1 ? <SignUpFirstStep formik={formik} nextStepHandler={() => setStep(2)} /> : null}
      {step === 2 ? (
        <SignUpSecondStep
          formik={formik}
          prevStepHandler={() => setStep(1)}
          userAvatar={userAvatar}
          setUserAvatar={setUserAvatar}
        />
      ) : null}
    </form>
  );
};
