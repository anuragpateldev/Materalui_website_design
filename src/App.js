import React from 'react';
import Leftbar from './components/Leftbar';
import Rightbar from './components/Rightbar';
import Feed from './components/Feed';
import Navbar from './components/Navbar';
import { Grid , makeStyles } from '@material-ui/core';
import ApAdd from './components/ApAdd';

const useStyles = makeStyles( (theme)=>({
  container:{
    
  },
  right:{
    [theme.breakpoints.down('sm')]:{
      display:'none'
    }
  }
}));

const  App = () =>{
  const classes = useStyles();
  return (
    <>
      <Navbar/>
      <Grid container className={classes.container}>
        <Grid item sm={2} xs={2}><Leftbar/></Grid>
        <Grid item sm={7} xs={10}><Feed/></Grid>
        <Grid item sm={3} className={classes.right}><Rightbar/></Grid>
      </Grid>
      <ApAdd/>
    </>
  )
}

export default App;
// 1:12 min star video https://www.youtube.com/watch?v=lKZiXQWnlUw