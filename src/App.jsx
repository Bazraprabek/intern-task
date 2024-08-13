import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Tourism from "./pages/task1/Tourism";
import Todolist from "./pages/task2/Todolist";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="tourism" element={<Tourism />} />
          <Route path="todolist" element={<Todolist />} />
        </Routes>
      </Router>
    </>
  );
}
