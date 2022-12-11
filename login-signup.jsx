<!DOCTYPE html>
<html>
  <head>
    <title>Login / Signup - Fashion</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    <link rel="stylesheet" href="https://unpkg.com/material-ui@latest/dist/css/material-ui.min.css" />
    <style>
      body {
        margin: 0;
        padding: 0;
        font-family: "Roboto", sans-serif;
      }
    </style>
  </head>
  <body>
    <div id="root"></div>
    <script src="https://unpkg.com/react@latest/umd/react.production.min.js"></script>
    <script src="https://unpkg.com/react-dom@latest/umd/react-dom.production.min.js"></script>
    <script src="https://unpkg.com/babel-standalone@latest/babel.min.js"></script>
    <script src="https://unpkg.com/material-ui@latest/dist/material-ui.min.js"></script>
    <script type="text/babel">
      const {
        Typography,
        TextField,
        Button,
        Paper,
        Link,
        Box,
        makeStyles,
        useTheme,
      } = MaterialUI;
        const useStyles = makeStyles((theme) => ({
    root: {
      padding: theme.spacing(3, 2),
      margin: theme.spacing(3),
    },
    form: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      margin: theme.spacing(3),
    },
    textField: {
      margin: theme.spacing(1),
    },
    button: {
      margin: theme.spacing(1),
    },
    link: {
      margin: theme.spacing(1),
    },
  }));

  const LoginPage = () => {
    const classes = useStyles();
    const theme = useTheme();

    return (
      <Paper className={classes.root}>
        <Typography variant="h3" gutterBottom>
          Login
        </Typography>
        <form className={classes.form}>
          <TextField
            label="Username"
            variant="outlined"
            className={classes.textField}
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            className={classes.textField}
          />
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Login
          </Button>
          <Box>
            <Link
              href="/signup"
              variant="body1"
              className={classes.link}
              />
            {
            " "}
            Don't have an account? Sign up
            </Link>
            </Box>
            </form>
            </Paper>
            );
            };
              const SignupPage = () => {
    const classes = useStyles();
    const theme = useTheme();

    return (
      <Paper className={classes.root}>
        <Typography variant="h3" gutterBottom>
          Signup
        </Typography>
        <form className={classes.form}>
          <TextField
            label="Username"
            variant="outlined"
            className={classes.textField}
          />
          <TextField
            label="Email"
            variant="outlined"
            type="email"
            className={classes.textField}
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            className={classes.textField}
          />
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Signup
          </Button>
          <Box>
            <Link
              href="/login"
              variant="body1"
              className={classes.link}
              style={{ textDecoration: "none" }}
            >
              Already have an account? Login
            </Link>
          </Box>
        </form>
      </Paper>
    );
  };

  const App = () => (
    <Box display="flex" flexDirection="column" alignItems="center">
      <LoginPage />
      <SignupPage />
    </Box>
  );

  ReactDOM.render(<App />, document.getElementById("root"));
</script>
 </body>
</html>


             
