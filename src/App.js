import "./App.css";
import Button from "@material-ui/core/Button";

import SaveIcon from "@material-ui/icons/Save";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button
          size="small"
          style={{
            fontSize: 6,
          }}
          onClick={() => alert("hello")}
          variant="contained"
          color="primary"
          startIcon={<SaveIcon />}
        >
          Save
        </Button>
      </header>
    </div>
  );
}

export default App;
