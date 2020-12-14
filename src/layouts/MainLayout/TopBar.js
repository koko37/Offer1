import React from 'react';
import { connect } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  makeStyles
} from '@material-ui/core';
import { LogIn as LoginIcon, LogOut as LogoutIcon } from 'react-feather';
import Logo from '../../components/Logo';
import { mockLogout } from '../../store/actions/auth';

const useStyles = makeStyles((theme) => ({
  root: {},
  logoLink: {
    display: 'flex',
    alignItems: 'center',
  },
  logoImg: {
    marginRight: theme.spacing(2),
  },
  logoText: {
    color: 'white'
  },
  copyText: {
    color: 'gray'
  },
  avatar: {
    width: 60,
    height: 60
  }
}));

function mapStateToProps(state) {
  return {
    loginStatus: state.auth.loginStatus
  };
}

function mapDispatchToProps(dispatch) {
  return {
    logout: () => mockLogout()(dispatch),
  }
}

const TopBar = ({
  loginStatus,
  logout
}) => {
  const classes = useStyles();

  return (
    <AppBar
      className={classes.root}
      elevation={0}
    >
      <Toolbar>
        <RouterLink to="/" className={classes.logoLink}>
          <Logo alt="logo" className={classes.logoImg} />
          <Typography variant="h3" className={classes.logoText}>
            Offer1 v0.1
          </Typography>
          <Typography variant="h4" className={classes.copyText}>
            &nbsp;@rocky
          </Typography>
        </RouterLink>
        <Box flexGrow={1} />
        <RouterLink to="/login">
          {!loginStatus &&(<IconButton className={classes.logoText}>
            <LoginIcon />
          </IconButton>)}
          {loginStatus &&(<IconButton className={classes.logoText} onClick={logout}>
            <LogoutIcon />
          </IconButton>)}
        </RouterLink>
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
  onMobileNavOpen: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);
