import { useFormik } from 'formik';

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
      <button type="submit">Sign In</button>
    </form>
  );
};
