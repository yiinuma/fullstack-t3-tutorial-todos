import Todo from "~/components/todo";
import { api } from "../utils/api";

const Todos = () => {
  const { data: todos, isLoading, isError } = api.todo.all.useQuery();
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching todos ❌</div>;
  return (
    <>
      {todos.length
        ? todos.map((todo) => {
            return <Todo key={todo.id} todo={todo} />;
          })
        : "Create your first todo..."}
    </>
  );
};

export default Todos;
