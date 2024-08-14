import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";

const todoSchema = z.object({
  name: z.string().min(1, "To-Do name is required"),
});

const AddTodo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(todoSchema),
  });

  const queryClient = useQueryClient();

  const mutation = useMutation(
    (newTodo) => {
      return fetch("https://task-tracking-backend.onrender.com/api/todo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTodo),
      }).then((res) => res.json());
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("todos");
        reset();
        toast.success("To-Do added successfully!");
      },
    }
  );

  const onSubmit = (data) => {
    mutation.mutate({ name: data.name });
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">Add a New To-Do</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block mb-1">To-Do Name</label>
          <input
            type="text"
            {...register("name")}
            className="w-full px-4 py-2 border rounded"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Add To-Do
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
