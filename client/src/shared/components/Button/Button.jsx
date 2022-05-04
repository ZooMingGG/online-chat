import classes from './Button.module.css';

export const Button = ({ children, onClick, className, Icon, ...rest }) => {
  const buttonClasses = [classes.button];

  if (className) {
    buttonClasses.push(className);
  }

  if (Icon) {
    return <Icon onClick={onClick} className={className} {...rest} />;
  }

  return (
    <button type="button" onClick={onClick} className={buttonClasses.join(' ')} {...rest}>
      {children}
    </button>
  );
};
