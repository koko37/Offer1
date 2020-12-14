import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { mockSearchHomes } from '../../../store/actions/homes';
import {
  Box,
  Container,
  CircularProgress,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';

import { Pagination } from '@material-ui/lab';
import Page from '../../../components/Page';
import SearchBar from './SearchBar';
import HomeCard from './HomeCard';

function mapStateToProps(state) {
  return {
    homes: state.homes.homes,
    loading: state.homes.loading
  };
}

function mapDispatchToProps(dispatch) {
  return {
    searchHomes: (criteria) => mockSearchHomes(criteria)(dispatch),
  }
}

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

const HomeList = ({homes, loading, searchHomes}) => {
  const classes = useStyles();
  
  useEffect(() => {
    searchHomes({});
  }, [searchHomes]);

  return (
    <Page
      className={classes.root}
      title="Homes list"
    >
      <Container maxWidth={false}>
        <SearchBar
          submitCriteria = {(criteria) => searchHomes(criteria)}
          pending = {loading}
        />
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
            Loading search results ...
          </Typography>
        </Box>
        <Box display={loading ? 'none' : 'block'}>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeList);