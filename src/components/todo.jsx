import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons';
import { faCircleMinus } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

// Todo Component
const Todo = ({ task, deleteTodo, state, editTodo }) => {
  // Initialize a state for the completion status of the task
  const [completed, setCompleted] = useState(task.completed);

  // Use useEffect to update the local storage when the component renders
  useEffect(() => {
    localStorage.setItem("LTodos", JSON.stringify(state));
  });

  // Function to toggle the completion status of the task
  const toggleComplete = () => {
    setCompleted(!completed);
  };

  return (
    <div className="Todos">
      <p onClick={toggleComplete} className={completed ? "completed" : ""}>{task.task}</p>

      <div>
        {/* Icon for editing the todo */}
        <FontAwesomeIcon className='editTodo' icon={faWandMagicSparkles} onClick={() => editTodo(task.id)} title="Edit" />

        {/* Icon for deleting the todo */}
        <FontAwesomeIcon className="faTrash" icon={faCircleMinus} onClick={() => { deleteTodo(task.id) }} title="Delete" />
      </div>
    </div>
  );
};

export default Todo;
