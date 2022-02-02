import "./App.css";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import Delete from "@material-ui/icons/Delete";

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
