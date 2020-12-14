import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
  makeStyles
} from '@material-ui/core';
import { MapPin as MapIcon, Search as SearchIcon, DollarSign as MoneyIcon, Home as HomeIcon } from 'react-feather';

const useStyles = makeStyles((theme) => ({
  root: {},
  importButton: {
    marginRight: theme.spacing(1)
  },
  exportButton: {
    marginRight: theme.spacing(1)
  },
  searchButton: {
    minHeight: '56px',
    height: '100%'
  }
}));

const SearchBar = ({ submitCriteria, pending, ...rest }) => {
  const classes = useStyles();
  const [criteria, setCriteria] = useState({})

  const handleChange = (k, v) => {
    setCriteria({
      ...criteria,
      [k]: v
    })
  }

  return (
    <div
      className={classes.root}
      {...rest}
    >
      <Box mt={3}>
        <Card>
          <CardContent>
            <Box display="flex" spacing={2}>
              <Grid
                container
                spacing={3}
              >
                <Grid
                  item
                  lg={4}
                  md={5}
                  xs={12}
                >
                  <TextField
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SvgIcon
                            fontSize="small"
                            color="action"
                          >
                            <MapIcon />
                          </SvgIcon>
                        </InputAdornment>
                      )
                    }}
                    placeholder="Address"
                    variant="outlined"
                    onChange={(e) => handleChange('address', e.target.value)}
                    fullWidth
                  />
                </Grid>
                <Grid
                  item
                  lg={4}
                  md={5}
                  xs={12}
                >
                  <Grid
                    container
                    spacing={1}
                  >
                    <Grid item xs={6}>
                      <TextField
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <SvgIcon
                                fontSize="small"
                                color="action"
                              >
                                <MoneyIcon />
                              </SvgIcon>
                            </InputAdornment>
                          )
                        }}
                        placeholder="Min"
                        variant="outlined"
                        onChange={(e) => handleChange('minPrice', e.target.value)}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <SvgIcon
                                fontSize="small"
                                color="action"
                              >
                                <MoneyIcon />
                              </SvgIcon>
                            </InputAdornment>
                          )
                        }}
                        placeholder="Max"
                        variant="outlined"
                        onChange={(e) => handleChange('maxPrice', e.target.value)}
                        fullWidth
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid
                  item
                  lg={2}
                  md={2}
                  xs={12}
                >
                  <TextField
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SvgIcon
                            fontSize="small"
                            color="action"
                          >
                            <HomeIcon />
                          </SvgIcon>
                        </InputAdornment>
                      )
                    }}
                    placeholder="Bedrooms"
                    variant="outlined"
                    onChange={(e) => handleChange('numberOfRooms', e.target.value)}
                    fullWidth
                  />
                </Grid>
                <Grid
                  item
                  lg={2}
                  md={12}
                  xs={12}
                >
                  <Button
                    className={classes.searchButton}
                    variant="contained"
                    color="primary"
                    startIcon={<SearchIcon />}
                    onClick={() => submitCriteria(criteria)}
                    disabled = {pending}
                    fullWidth
                  >
                    Search
                  </Button>
                </Grid>
                
              </Grid>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

SearchBar.propTypes = {
  updateCriteria: PropTypes.func
};

export default SearchBar;
