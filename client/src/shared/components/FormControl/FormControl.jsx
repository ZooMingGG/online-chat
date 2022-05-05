import classes from './FormControl.module.css';
import { Input } from '../Input/Input';

export const FormControl = ({
  onChange,
  onBlur,
  value,
  className,
  fieldName,
  label,
  error,
  ...rest
}) => {
  return (
    <div>
      <div>
        <label htmlFor={fieldName} className={error ? classes['label-error'] : ''}>
          {label}
        </label>
      </div>
      <div>
        <Input
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          className={className}
          id={fieldName}
          name={fieldName}
          {...rest}
        />
      </div>
      {error ? <div className={classes.error}>{error}</div> : null}
    </div>
  );
};
