import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Content from '../Content';

export default () => (
  <div>
    <AppBar position="static" >
      <Toolbar>
      <Typography variant="h6">
        SCRAPER
      </Typography>
      </Toolbar>
    </AppBar>
    <Content />
  </div>
);