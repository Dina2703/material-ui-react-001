import "./App.css";
import SaveIcon from "@material-ui/icons/Save";
import Delete from "@material-ui/icons/Delete";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import { useState } from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextField from "@material-ui/core/TextField";

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
    <div className="App">
      <header className="App-header">
        <TextField variant="filled" color="secondary" type="email" label='Contact me' placeholder='email@email.com'/>
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
  );
}

export default App;
