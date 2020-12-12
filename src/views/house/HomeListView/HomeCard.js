import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Divider,
  Grid,
  IconButton,
  Typography,
  makeStyles
} from '@material-ui/core';
import {
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  media: {
    height: 140
  },
  statsItem: {
    alignItems: 'center',
    display: 'flex'
  },
  statsIcon: {
    marginRight: theme.spacing(1)
  }
}));

const HomeCard = ({ className, home, ...rest }) => {
  const classes = useStyles();

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardMedia
        className={classes.media}
        image={home.property.primaryImageUrl}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {home.property.address.city}, {home.property.address.state}, {home.property.address.zip}
        </Typography>
        <Typography gutterBottom variant="h5" component="h2" color="primary">
          {home.property.numberBedrooms} BED | {home.property.numberBaths} BATH | {home.property.squareFeet} SQF | {home.price}$
        </Typography>
        <Typography variant="body2" color="textSecondary" component="h4">
          {home.property.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FacebookIcon />
        </IconButton>
        <IconButton aria-label="share">
          <TwitterIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

HomeCard.propTypes = {
  className: PropTypes.string,
  home: PropTypes.object.isRequired
};

export default HomeCard;
