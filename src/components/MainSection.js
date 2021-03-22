import React, { useRef, useCallback } from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  success: {
    color: "green"
  },
  error: {
    color: "red"
  }
}));

export default function MainSection({
  actions,
  city,
  guesses,
  answers,
  loading,
  cities
}) {
  const classes = useStyles();
  const inputRef = useRef(null);
  console.log(actions, city, guesses, answers, loading, cities);

  const getClass = useCallback(
    (answer, guess) => {
      return Math.abs(answer - guess) > 5 ? classes.error : classes.success;
    },
    [classes]
  );

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h5" variant="h5">
          {city}
        </Typography>
        <article className={classes.form} noValidate>
          <TextField
            type="number"
            variant="outlined"
            margin="normal"
            fullWidth
            id="temp"
            label="Guess Temperature"
            name="temp"
            autoFocus
            inputRef={inputRef}
          />

          <Button
            disabled={loading}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => actions.submitCity(inputRef.current.value, city)}
          >
            Check
          </Button>

          <Grid container>
            {answers.map((item, i) => (
              <Grid item xs key={i} className={getClass(item, guesses[i])}>
                {item}
                <hr />
                Was {guesses[i]}
              </Grid>
            ))}
          </Grid>
        </article>
      </div>
    </Container>
  );
}

MainSection.propTypes = {
  city: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired
};

export { MainSection };
