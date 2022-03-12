import React from 'react';
import { Typography , 
  AppBar, 
  Button, 
  CameraIcon,
  Card, 
  CardActions, 
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  Link
  } from '@material-ui/core';
  import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
  import { makeStyles } from '@material-ui/core/styles';

  const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '1%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
  }));

const App = ()=>{
  const classes = useStyles();
  const card_item = [1,2,3,4,5,6,7,8,9];

 function CopyWrite (){
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copywrite @'}
        <Link>Your Website</Link>
        {new Date().getFullYear()}
      </Typography>
    )
  }
    return (
      <>
        {/*<CssBaseline/> */}
        {/* AppBar is used for header */}
        <AppBar position="relative">
          <Toolbar>
            <PhotoCameraIcon  className={classes.icon}/>
            <Typography variant="h6">Photo Album</Typography>
          </Toolbar>
        </AppBar>

        <main>
          <div className={classes.heroContent}>
            <Container maxWidth="sm">
              <Typography gutterBottom align="center" variant="h4" color="textPrimary">
                Photo Album
              </Typography>

              <Typography variant="h6" align="justify" paragraph color="textSecondary">
              Lorem Ipsum is simply dummy text of the printing and 
              typesetting industry. Lorem Ipsum has been the industry's 
              standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a 
              type specimen book. It has survived not only five centuries
              </Typography>

              <div className={classes.heroButtons}>
                <Grid justify='center' container spacing={2}>
                  <Grid item>
                    <Button color="secondary" variant='contained'>
                      See my photos
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button color="primary" variant='outlined'>
                      Secondry Action
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </div>

          <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
                {card_item.map( (index)=>(
                  <Grid item xs={12} sd={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      title="Image title"
                      >
                      <img src="rohit.jpg" style={{width:'100%'}}/>
                    </CardMedia>
                    <CardContent className={classes.cardContent}>
                      <Typography variant="h5">
                        Heading
                      </Typography>
                      <Typography>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry
                      </Typography>
                    </CardContent>

                    <CardActions>
                      <Button size="small" color="primary">Edit</Button>
                      <Button size="small" color="primary">View</Button>
                    </CardActions>
                  </Card>
                </Grid>
                ))}

            </Grid>
          </Container>
        </main>

        <footer>
          <Container maxWidth="md">
            <Typography variant="h5" align='center'>Footer</Typography>
            <Typography paragraph align='center'>
              Something here to give the footer a purpose!
            </Typography>
            <CopyWrite/>
          </Container>
          
        </footer>
      </>
    )
}

export default App;s