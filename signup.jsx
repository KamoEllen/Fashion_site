import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  }
}));

export default function SignupForm() {
  const classes = useStyles();

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <Typography variant="h6" gutterBottom>
        Sign up
      </Typography>
      <TextField
        id="email"
        label="Email"
        className={classes.textField}
        type="email"
        name="email"
        autoComplete="email"
        margin="normal"
      />
      <TextField
        id="password"
        label="Password"
        className={classes.textField}
        type="password"
        autoComplete="current-password"
        margin="normal"
      />
      <Button variant="contained" color="primary" className={classes.button}>
        Sign up
      </Button>
    </form>
  );
}
