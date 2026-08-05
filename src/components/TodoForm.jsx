import { useState } from 'react';

// Todo Form Component
const TodoForm = ({ addTodo }) => {
  // Initialize a state for the input value
  const [value, setValue] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the input value is empty
    if (value === '') {
      alert("Input should not be empty!");
    } else {
      // Call the addTodo function to add a new task with the input value
      addTodo(value);
    }

    // Clear the input field after submission
    setValue("");
  }

  return (
    <form onSubmit={handleSubmit} className="todoform">
      <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
        className="todo-input"
        value={value}
        placeholder="Add a new note..."
      />
      <button type="submit" className="todo-btn">
        Add Note
      </button>
    </form>
  );
};

export default TodoForm;
