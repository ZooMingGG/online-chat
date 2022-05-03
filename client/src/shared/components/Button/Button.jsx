import classes from './Button.module.css';

export const Button = ({ children, onClick, className, icon, ...rest }) => {
  const buttonClasses = [classes.button];

  if (className) {
    buttonClasses.push(className);
  }

  return (
    <button type="button" onClick={onClick} className={buttonClasses.join(' ')} {...rest}>
      {children}
    </button>
  );
};
