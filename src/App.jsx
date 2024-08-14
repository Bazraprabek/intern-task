import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Tourism from "./pages/task1/Tourism";
// import Todolist from "./pages/task2/Todolist";
import { QueryClient, QueryClientProvider } from "react-query";
import AddTodo from "./pages/task2/AddTodo";
import PendingTodos from "./pages/task2/PenddingTodos";
import CompletedTodos from "./pages/task2/CompletedTodos";
import Layout from "./pages/task2/Layout";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="tourism" element={<Tourism />} />
          <Route path="/todolist" element={<Layout />}>
            <Route index element={<AddTodo />} />
            <Route path="pending-todos" element={<PendingTodos />} />
            <Route path="completed-todos" element={<CompletedTodos />} />
          </Route>
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}
