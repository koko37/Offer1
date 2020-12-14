import React from 'react';
import { Box, CircularProgress, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  spinner: {
    marginRight: 32
  }
}));

const Loading = ({loading}) => {
  const classes = useStyles();

  return (
    <Box 
      display={loading ? 'flex' : 'none'}
      justifyContent="center"
      alignItems="center"
      p={5}
      mt={5}
    >
      <CircularProgress color="primary" className={classes.spinner} />
      <Typography
        color="textPrimary"
        variant="h2"
      >
        Loading results ...
      </Typography>
    </Box>
  )
}

export default Loading;
