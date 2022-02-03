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

//custom styling for button
const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B, #999)",
    border: 0,
    borderRadius: 15,
    color: "white",
    padding: "5px 30px",
    marginBottom: 15,
  },
});

function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root}>Test Styled Button</Button>;
}

//custom theme
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
          <ButtonStyled />
          <TextField
            variant="filled"
            color="primary.light"
            type="email"
            label="Contact me"
            placeholder="email@email.com"
          />
          <CheckBoxExample />
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
