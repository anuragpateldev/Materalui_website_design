import React , { useState } from 'react';
import  { AppBar , Toolbar , Typography , makeStyles ,InputBase ,alpha , IconButton ,Badge  } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Avatar from '@material-ui/core/Avatar';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MailIcon from '@material-ui/icons/Mail';
import CancelIcon from '@material-ui/icons/Cancel';

const useStyles = makeStyles((theme) => ({
    logoLg:{
      display:'block',
      [theme.breakpoints.down('xs')]: {
        display:'none',
      },
    },
    logoSm:{
      display:'none',
      [theme.breakpoints.down('xs')]: {
        display:'block',
      },
    },
    toolbar:{
      display:'flex',
      justifyContent:'space-between'
    },
    appBar : {

    },
    searchInput:{
      color:'#fff',
      marginLeft: theme.spacing(1)
    },
    searchIconParent:{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width:'20%',
      [theme.breakpoints.down('sm')]: {
        display: (props) =>(props.open ? "flex" : "none"),
        width:'50%',
      },
    },
    searchIcons:{
      //marginTop: '4px',
    },
    icons:{
      display:'flex',
      alignItems:'center',
      [theme.breakpoints.down('sm')]: {
        display: (props) => (props.open ? "none" : "flex"),
      },
    },
    cancelBtn:{
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    }
}));

const Navbar = () => {
  const [open,setOpen] = useState(false);
  const searchBtnFlag = (e) =>{
    console.log('searchBtnFlag');
    console.log('open ==>',open);
    setOpen(!open);
  }
  const classes = useStyles({open});
  return (
    <div>
        <AppBar className={classes.appBar} position="relative">
          <Toolbar className={classes.toolbar}>
            <Typography variant="h6" className={classes.logoLg}>
              Anurag patel
            </Typography>
            <Typography variant="h6" className={classes.logoSm}>
              Anurag
            </Typography>

            <div className={classes.searchIconParent}>
              <SearchIcon className={classes.searchIcons}/>
              <InputBase placeholder='Search' className={classes.searchInput}/>
              <CancelIcon onClick={()=>setOpen(false)} className={classes.cancelBtn}/>
            </div>

            <div className={classes.icons}>
                <SearchIcon className={classes.searchButton} onClick={ (e)=>setOpen(!open)}/>
                <IconButton aria-label="show 4 new mails" color="inherit">
                  <Badge badgeContent={4} color="secondary">
                    <MailIcon/>
                  </Badge>
                </IconButton>
                <IconButton aria-label="show 17 new notifications" color="inherit">
                  <Badge badgeContent={17} color="secondary">
                    <NotificationsIcon/>
                  </Badge>
                </IconButton>
                <IconButton aria-label="show 17 new notifications" color="inherit">
                  <Avatar alt="Cindy Baker" src="https://v4.mui.com/static/images/avatar/3.jpg" />
                </IconButton>
            </div>
          </Toolbar>
        </AppBar>
    </div>
  )
}
export default Navbar;
