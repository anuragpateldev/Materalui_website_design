import React from 'react';
import { Container , makeStyles, Typography , Avatar } from '@material-ui/core';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';

const useStyles = makeStyles( (theme)=>({
  container:{
    paddingTop:theme.spacing(2),
  }
}));

const Rightbar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
        <Typography variant="h6" gutterBottom>Online Friends</Typography>
        <AvatarGroup max={4}>
          <Avatar alt="Remy Sharp" src="https://v4.mui.com/static/images/avatar/1.jpg" />
          <Avatar alt="Travis Howard" src="https://v4.mui.com/static/images/avatar/2.jpg" />
          <Avatar alt="Cindy Baker" src="https://v4.mui.com/static/images/avatar/3.jpg" />
          <Avatar alt="Agnes Walker" src="https://v4.mui.com/static/images/avatar/4.jpg" />
          <Avatar alt="Anurag Henderson" src="https://v4.mui.com/static/images/avatar/5.jpg" />
          <Avatar alt="Ankit Henderson" src="https://v4.mui.com/static/images/avatar/6.jpg" />
          <Avatar alt="Rohit Henderson" src="https://v4.mui.com/static/images/avatar/7.jpg" />
          <Avatar alt="Ram Henderson" src="https://v4.mui.com/static/images/avatar/8.jpg" />
          <Avatar alt="Shyam Henderson" src="https://v4.mui.com/static/images/avatar/9.jpg" />
       </AvatarGroup>

       <div style={{marginTop:'30px'}}>
       <Typography variant="h6" gutterBottom>Gallary</Typography>
        <ImageList rowHeight={100} cols={3}>
            <ImageListItem >
              <img src="https://v4.mui.com/static/images/image-list/breakfast.jpg" alt="anurag" />
            </ImageListItem>

            <ImageListItem >
              <img src="https://v4.mui.com/static/images/image-list/burgers.jpg" alt="anurag" />
            </ImageListItem>

            <ImageListItem >
              <img src="https://v4.mui.com/static/images/image-list/camera.jpg" alt="anurag" />
            </ImageListItem>

            <ImageListItem >
              <img src="https://v4.mui.com/static/images/image-list/camera.jpg" alt="anurag" />
            </ImageListItem>

            <ImageListItem >
              <img src="https://v4.mui.com/static/images/image-list/camera.jpg" alt="anurag" />
            </ImageListItem>
        </ImageList>
      </div>
    </Container>
  )
}

export default Rightbar;
