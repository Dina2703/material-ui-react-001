import "./App.css";
import SaveIcon from "@material-ui/icons/Save";
import Delete from "@material-ui/icons/Delete";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import { useState } from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextField from "@material-ui/core/TextField";
import {
  makeStyles,
  ThemeProvider,
  createTheme,
} from "@material-ui/core/styles";
import { green, lightBlue } from "@material-ui/core/colors";
import "fontsource-roboto";
import { Typography } from "@material-ui/core";

//custom styling for button
const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, blue, #999, green)",
    border: 0,
    borderRadius: 15,
    color: "white",
    padding: "5px 30px",
    marginBottom: 15,
  },
  textField: {
    background: "linear-gradient(150deg, orange, red)",
    marginBottom: 15,
  },
});

function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root}>Test Styled Button</Button>;
}
function TextFieldStyled() {
  const classes = useStyles();
  return (
    <TextField
      className={classes.textField}
      variant="filled"
      type="email"
      label="Contact Me"
      placeholder="email@email.com"
    />
  );
}

//custom theme for color and typography
const theme = createTheme({
  palette: {
    primary: {
      main: green[500],
      light: green[200],
    },
    secondary: {
      main: lightBlue[500],
    },
  },
  typography: {
    h2: {
      fontSize: 35,
      fontFamily: "Times New Roman",
      marginBottom: 10,
    },
    subtitle1: {
      fontFamily: "fantasy",
    },
  },
});

function CheckBoxExample() {
  const [checked, setChecked] = useState(true);
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          color="primary"
          // icon={<Delete />}
          // checkedIcon={<SaveIcon />}
        />
      }
      label="Testing checkbox"
    />
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <Typography variant="h2" align="left" component="div">
            Welcome to MUI course
          </Typography>
          <Typography variant="subtitle1">Learn how to use MUI</Typography>
          <ButtonStyled />
          <TextField
            variant="filled"
            color="primary.light"
            type="email"
            label="Click here to email"
            placeholder="email@email.com"
          />
          <CheckBoxExample />
          <TextFieldStyled />
          <ButtonGroup size="small" variant="contained">
            <Button
              color="primary"
              onClick={() => alert("saved")}
              startIcon={<SaveIcon />}
            >
              Save
            </Button>
            <Button
              color="secondary"
              onClick={() => alert("discarded")}
              endIcon={<Delete />}
            >
              Discard
            </Button>
          </ButtonGroup>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
