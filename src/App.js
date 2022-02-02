import "./App.css";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import SaveIcon from "@material-ui/icons/Save";
import Delete from "@material-ui/icons/Delete";
import { useState } from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";

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
