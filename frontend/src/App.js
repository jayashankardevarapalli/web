import logo from "./logo.svg";
import "./App.css";
import Main from "./Component/Main";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
