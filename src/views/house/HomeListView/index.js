import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  CircularProgress,
  Typography,
  makeStyles
} from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import Page from '../../../components/Page';
import Toolbar from './Toolbar';
import HomeCard from './HomeCard';
import homes from '../../../homes.json';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  productCard: {
    height: '100%'
  },
  spinner: {
    marginRight: 32
  }
}));

const HomeList = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Browse houses"
    >
      <Container maxWidth={false}>
        <Toolbar />
        <Box mt={5} display="flex" justifyContent="center" alignItems="center" p={5}>
          <CircularProgress color="primary" className={classes.spinner} />
          <Typography
            color="textPrimary"
            variant="h2"
          >
            Loading search results ...
          </Typography>
        </Box>
        <Box>
          <Box mt={3}>
            <Grid
              container
              spacing={3}
            >
              {homes.map((home) => (
                <Grid
                  item
                  key={home.id}
                  lg={4}
                  md={6}
                  xs={12}
                >
                  <HomeCard
                    className={classes.productCard}
                    home={home}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
          <Box
            mt={3}
            display="flex"
            justifyContent="center"
          >
            <Pagination
              color="primary"
              count={3}
              size="small"
            />
          </Box>
        </Box>
      </Container>
    </Page>
  );
};

export default HomeList;
