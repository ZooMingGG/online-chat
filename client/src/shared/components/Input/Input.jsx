import classes from './Input.module.css';

export const Input = ({ value, onChange, className, ...rest }) => {
  const inputClasses = [classes.input];

  if (className) {
    inputClasses.push(className);
  }

  return <input value={value} onChange={onChange} className={inputClasses.join(' ')} {...rest} />;
};
