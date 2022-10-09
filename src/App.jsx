import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

const App = () => {
  return (
    <div className="bg-zinc h-screen ">
      <div className="container mx-auto p-10">
        <TaskForm />
        <TaskList />
      </div>
    </div>
  );
};

export default App;
