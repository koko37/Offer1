import React, { useState } from 'react';
import clsx from 'clsx';
import {
  Avatar,
  Box,
  Button,
  Container,
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
  MailOutline as MailIcon,
  Phone as PhoneIcon,
  Message as MessageIcon
} from '@material-ui/icons';
import Page from '../../../components/Page';
import homes from '../../../homes.json';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  homeImage: {
    width: '100%',
    height: 300,
  },
  avatar: {
    height: 60,
    width: 60,
    backgroundColor: '#f4c4c4',
    color: '#0c4848'
  },
  ownerCard: {
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  spacing: {
    marginTop: 10
  },
  buttons: {
    width: 150
  }
}));

const ProductList = () => {
  const classes = useStyles();
  const home = homes[0];

  return (
    <Page
      className={classes.root}
      title="Browse houses"
    >
      <Container maxWidth="lg">
        <Box mb={2}>
          <img 
            className={classes.homeImage}
            src={home.property.primaryImageUrl} 
            alt={home.property.primaryImageUrl}
          />
        </Box>
        <Grid container spacing={3}>
          <Grid item md={8} xs={12}>
            <Card>
              <CardContent>
                <Box>
                  <Typography gutterBottom variant="h5" component="h2">
                    {home.property.address.addressLine1}, {home.property.address.city}, {home.property.address.state}, {home.property.address.zip}
                  </Typography>
                </Box>
                <Box mt={2}>
                  <Typography gutterBottom variant="h5" component="h2" color="primary">
                    {home.property.numberBedrooms} BED | {home.property.numberBaths} BATH | {home.property.squareFeet} SQF | {home.price}$
                  </Typography>
                </Box>
                <Box mt={2}>
                  <Typography variant="h6" component="h4">
                    Property type:
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="h4">
                  {home.property.propertyType}
                  </Typography>
                </Box>
                <Box mt={2}>
                  <Typography variant="h6" component="h4">
                    Included items:
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="h4">
                    {home.includedItems.map(item => item.name).join(', ')}
                  </Typography>
                </Box>
                <Box mt={2}>
                  <Typography variant="h6" component="h4">
                    Description:
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="h4">
                    {home.property.description}
                  </Typography>
                </Box>
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
          </Grid>
          <Grid item md={4} xs={12}>
            <Card>
              <CardContent>
                <Box className={classes.ownerCard}>
                  <Avatar className={classes.avatar}>
                    {home.listingAgent.user.firstName[0]}
                  </Avatar>
                  <Typography
                    color="textPrimary"
                    gutterBottom
                    variant="h3"
                    className={classes.spacing}
                  >
                    {home.listingAgent.user.firstName} {home.listingAgent.user.lastName}
                  </Typography>
                  <Button
                    className={clsx(classes.spacing, classes.buttons)}
                    variant="contained"
                    color="primary"
                    startIcon={<MessageIcon />}
                  >
                    Message
                  </Button>
                  <Button
                    className={clsx(classes.spacing, classes.buttons)}
                    variant="contained"
                    color="primary"
                    startIcon={<MailIcon />}
                  >
                    Email
                  </Button>
                  <Button
                    className={clsx(classes.spacing, classes.buttons)}
                    variant="contained"
                    color="primary"
                    startIcon={<PhoneIcon />}
                  >
                    Call
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default ProductList;
