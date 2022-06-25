import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { authSelectors, authOperations } from 'redux/auth';
import s from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const email = useSelector(authSelectors.getUserEmail);

  return (
    <div className={s.container}>
      <p className={s.email}>{email}</p>
      <Button
        variant="contained"
        size="small"
        startIcon={<LogoutIcon />}
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Logout
      </Button>
    </div>
  );
}
