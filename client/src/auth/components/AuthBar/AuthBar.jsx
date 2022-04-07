import { Link } from 'react-router-dom';

import classes from './AuthBar.module.css';
import { paths } from '../../router/paths';
import { Button } from '../../../shared/components/Button/Button';

export const AuthBar = () => {
  return (
    <div className={classes.navbar}>
      <div>
        <Link to={paths.signin}>
          <Button className={classes['navbar-action']}>
            Sign In
          </Button>
        </Link>
        <Link to={paths.signup}>
          <Button className={classes['navbar-action']}>
            Sign Up
          </Button>
        </Link>
      </div>
    </div>
  );
};
