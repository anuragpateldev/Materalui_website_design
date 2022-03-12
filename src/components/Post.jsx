import React from 'react';
import { Container , makeStyles, Typography , Card , CardActionArea , CardMedia , CardContent , Button , CardActions} from '@material-ui/core';

const useStyles = makeStyles( (theme)=>({
  container:{
    paddingTop:theme.spacing(2),
  },
  card_media:{
      height:250,
      [theme.breakpoints.down('sm')]:{
        height:150
      }
  },
  cardcontenttext:{
      textAlign:'justify',
      fontWeight:'100',
      color:'grey',
      fontSize:'16px'
  },
  card:{
      marginBottom:theme.spacing(5)
  }
}));

const Post = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
        <CardActionArea>
            <CardMedia image='https://v4.mui.com/static/images/cards/paella.jpg' className={classes.card_media}/>
            <CardContent>
                <Typography variant="h5" gutterBottom>Heading</Typography>
                <Typography variant="h6" className={classes.cardcontenttext}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button variant="contained" color="primary">SHARE</Button>
            <Button variant="outlined" color="secondary">LEARN MORE</Button>
        </CardActions>
    </Card>
  )
}

export default Post;
