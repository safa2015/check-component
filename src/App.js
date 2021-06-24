import "./App.css";
import Address from "./components/Address";
import FullName from "./Components/FullName";
import safa from "./components/safa.gpg"
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div style={{ backgroundColor: "black", height: "800px" }}>
      <div class="row" style={{ backgroundColor: "white", height: "200px" }}>
        <div
          className="col-sm-4"
          style={{ paddingTop: "30px", paddingLeft: "50px" }}
        >
          <ProfilePhoto />
        </div>
        <div className="col-sm-8">
          <FullName />
          <Address />
        </div>
      </div>
    </div>
  );
}

export default App;
