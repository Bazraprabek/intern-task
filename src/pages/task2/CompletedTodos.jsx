import { useQuery } from "react-query";

const fetchCompletedTodos = async () => {
  const res = await fetch(
    "https://task-tracking-backend.onrender.com/api/completed-todos"
  );
  return res.json();
};

const CompletedTodos = () => {
  const {
    data: completedTodos,
    isLoading,
    isError,
  } = useQuery("completed-todos", fetchCompletedTodos);

  if (isLoading) return <p>Loading...</p>;

  if (isError) return <p>Something Went Wrong!</p>;

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Completed To-Dos</h2>
      <table className="w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-4">To-Do</th>
          </tr>
        </thead>
        <tbody>
          {(completedTodos.success || completedTodos.screen) &&
            completedTodos.todos.map((todo) => (
              <tr key={todo.id} className="border-b">
                <td className="p-4">{todo.name}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompletedTodos;
