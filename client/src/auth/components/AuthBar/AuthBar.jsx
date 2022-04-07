import { Link } from 'react-router-dom';

import classes from './AuthBar.module.css';
import { paths } from '../../router/paths';

export const AuthBar = () => {
  return (
    <div className={classes.navbar}>
      <div>
        <Link to={paths.signin}>
          <button className={classes['navbar-action']}>
            Sign In
          </button>
        </Link>
        <Link to={paths.signup}>
          <button className={classes['navbar-action']}>
            Sign Up
          </button>
        </Link>

      </div>
    </div>
  );
};
