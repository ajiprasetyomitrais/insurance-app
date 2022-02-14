import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import DetailInsurance from "./pages/DetailInsurance";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/details/:id" element={<DetailInsurance />} />
      </Routes>
  );
}

export default App;
