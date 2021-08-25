import "./App.css";
import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  Button,
} from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";
import useStyles from "./styles";

//creating an array of cards to map over, to show different card elements

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function App() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      {/* default styling is added to your component because of css baseline */}
      <AppBar position="relative">
        {/* NEED to focus on learning positioning */}
        <Toolbar>
          <PhotoCamera className={classes.icon} />
          <Typography variant="h6">Photo ALbum</Typography>
        </Toolbar>
      </AppBar>
      {/* semantic html syntax to signify we are at the main point of the website */}
      <main>
        <div className={classes.container}>
          {/* all properties are given with material UI */}
          <Container maxWidth="sm" style={{ marginTop: "100px" }}>
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterButton
            >
              Photo Album
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Hello everyone this is a photo album.
            </Typography>
            {/* Components + Components API on Material UI Website */}
            {/* demos and explanations for each component */}
            {/* components API contains list of props and rules/classes for Material UI 
              Example: align="center", color="inherit" etc...
            */}
            {/* Example: Components => Typography */}
            {/* components section is where you will spend most of your time when researching how to use Material UI */}
            <div className={classes.button}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    See my photos
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/user/erondu/1600x900"
                    title="Image Title"
                  />
                  {/* images must be given a height */}
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card, you can use this section to describe
                      the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
      </footer>
      <Typography variant="subtitle1" align="center" color="textSecondary">
        Something to give footer a purpose
      </Typography>
    </>
    //wrapped in react fragment
    //material UI is completely responsive.
  );
}

export default App;
