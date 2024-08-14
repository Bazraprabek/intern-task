import { useQuery, useMutation, useQueryClient } from "react-query";
import { Trash, CheckCircle } from "@phosphor-icons/react";

const fetchTodos = async () => {
  const res = await fetch(
    "https://task-tracking-backend.onrender.com/api/todos"
  );
  return res.json();
};

const PendingTodos = () => {
  const queryClient = useQueryClient();
  const {
    data: pendingTodos,
    isLoading,
    isError,
  } = useQuery("todos", fetchTodos);

  const deleteMutation = useMutation(
    (id) => {
      return fetch(
        `https://task-tracking-backend.onrender.com/api/todo/${id}`,
        {
          method: "DELETE",
        }
      );
    },
    {
      onSuccess: () => queryClient.invalidateQueries("todos"),
    }
  );

  const completeMutation = useMutation(
    (id) => {
      return fetch(
        `https://task-tracking-backend.onrender.com/api/complete-todo/${id}`,
        {
          method: "POST",
        }
      );
    },
    {
      onSuccess: () => queryClient.invalidateQueries("todos"),
    }
  );

  if (isLoading) return <p>Loading...</p>;

  if (isError) return <p>Something Went Wrong!</p>;

  console.log(pendingTodos.todos);

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Pending To-Dos</h2>
      <table className="w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-4">To-Do</th>
            <th className="p-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {(pendingTodos.success || pendingTodos.screen) &&
            pendingTodos.todos.map((todo) => (
              <tr key={todo._id} className="border-b">
                <td className="p-4">{todo.name}</td>
                <td className="p-4 flex space-x-4">
                  <button
                    onClick={() => completeMutation.mutate(todo._id)}
                    className="text-green-600"
                  >
                    <CheckCircle size={24} />
                  </button>
                  <button
                    onClick={() => deleteMutation.mutate(todo._id)}
                    className="text-red-600"
                  >
                    <Trash size={24} />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default PendingTodos;
