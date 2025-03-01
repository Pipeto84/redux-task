import "./App.css";
import { useSelector } from "react-redux";


function App() {
  const taskState = useSelector((state) => state.tasks);
  console.log(taskState);

  return (
    <div>
      <div>Hola Pipe</div>
    </div>
  );
}

export default App;
