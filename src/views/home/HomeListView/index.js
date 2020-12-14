import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Pagination } from '@material-ui/lab';
import {
  Box,
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import { mockSearchHomes } from '../../../store/actions/homes';
import Page from '../../../components/Page';
import Loading from '../../../components/Loading';
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
        <Loading loading={loading} />
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
                  <RouterLink to={`/homes/${home.id}`}>
                    <HomeCard
                      className={classes.productCard}
                      home={home}
                    />
                  </RouterLink>
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
              count={1}
              size="small"
            />
          </Box>
        </Box>
      </Container>
    </Page>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeList);