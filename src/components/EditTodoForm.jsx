import { useState } from 'react';

const EditTodoForm = ({ editTodo, task }) => {
  // Initialize a state for the input value
  const [value, setValue] = useState(task.task);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the input value is empty
    if (value === '') {
      alert("Input should not be empty!");
    } else {
      // Call the editTodo function to update the task with the new value
      editTodo(value, task.id);
    }

    // Clear the input field after submission
    setValue("");
  }

  return (
    <form onSubmit={handleSubmit} className="Todos">
      <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
        className="edit-input"
        value={value}
        placeholder="update task"
      />
      <button type="submit" className="todo-btn">
        Update
      </button>
    </form>
  );
};

export default EditTodoForm;
