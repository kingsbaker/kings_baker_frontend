import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<>Hello World</>} />
      </Routes>
    </div>
  );
}

export default App;
