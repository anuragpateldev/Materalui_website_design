import React from 'react';
import { Container , makeStyles, Typography } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PersonIcon from '@material-ui/icons/Person';
import ListIcon from '@material-ui/icons/List';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import SmartphoneIcon from '@material-ui/icons/Smartphone';

const useStyles = makeStyles( (theme)=>({
  item:{
    display:'flex',
    alignItems:'center',
    marginBottom:theme.spacing(4),
    [theme.breakpoints.up('sm')]:{
      marginBottom:theme.spacing(3)
    }
  },
  container:{
    height:'100vh',
    color:'#fff',
    paddingTop:theme.spacing(2),
    backgroundColor:theme.palette.primary.main,
    [theme.breakpoints.up('sm')]:{
      backgroundColor:'#fff',
      color:'grey',
      border:'1px solid #eee'
    },
    position:"sticky",
    top:0
  },
  text:{
    marginLeft:theme.spacing(1),
    cursor:'pointer',
    [theme.breakpoints.down('sm')]:{
      display:'none'
    }
  }
}));

const Leftbar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
        <div className={classes.item}>
          <HomeIcon className={classes.icon}/>
          <Typography className={classes.text}>Home</Typography>
        </div>

        <div className={classes.item}>
          <PersonIcon className={classes.icon}/>
          <Typography className={classes.text}>Friends</Typography>
        </div>

        <div className={classes.item}>
          <ListIcon className={classes.icon}/>
          <Typography className={classes.text}>List</Typography>
        </div>

        <div className={classes.item}>
          <CameraAltIcon className={classes.icon}/>
          <Typography className={classes.text}>Camera</Typography>
        </div>

        <div className={classes.item}>
          <VideoLibraryIcon className={classes.icon}/>
          <Typography className={classes.text}>Videos</Typography>
        </div>
        
        <div className={classes.item}>
          <SmartphoneIcon className={classes.icon}/>
          <Typography className={classes.text}>App</Typography>
        </div>

        <div className={classes.item}>
          <NotificationsIcon className={classes.icon}/>
          <Typography className={classes.text}>Notifications</Typography>
        </div>

        
    </Container>
  )
}

export default Leftbar;
