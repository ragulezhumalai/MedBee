import { useState, useEffect } from 'react';
import TodoForm from "./TodoForm.jsx";
import Todo from "./todo.jsx";
import { v4 as uuidv4 } from 'uuid';
import EditTodoForm from './EditTodoForm.jsx';
import questMark from '/public/Quest_mark.png'; // Import the question mark image

// Todo Wrapper Component
const Todowrapper = () => {

  // Define the state for storing todos
const [todos, setTodo] = useState(() => {
  const storedTodos = localStorage.getItem("LTodos");
  return storedTodos ? JSON.parse(storedTodos) : [];
});

  // Use useEffect to save todos to local storage whenever todos change
  useEffect(() => {
     console.log("Saving:", todos);
    localStorage.setItem("LTodos", JSON.stringify(todos));
  }, [todos]);

  // Function to add a new todo
  const addTodo = (todo) => {
    const newTodo = { id: uuidv4(), task: todo, completed: false, isEditing: false };
    const updatedTodos = [...todos, newTodo];
    //  console.log(updatedTodos);
    setTodo(updatedTodos);
  }

  // Function to delete a todo
  const deleteTodo = (id) => {
    setTodo(todos.filter(todo => todo.id !== id));
  }

  // Function to toggle the editing state of a todo
  const editTodo = (id) => {
    setTodo(todos.map(todo => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo))
  }

  // Function to edit the task of a todo
  const editTask = (task, id) => {
    setTodo(todos.map(todo => todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo))
  }

  return (
    <div className="TodoWrapper text-center">
      <h1>Notes</h1>
      <TodoForm addTodo={addTodo} />
      {todos.length === 0 ? (
        <div className="No-Todos">
          <img src={questMark} alt="Question Mark"></img>
          <h2>No Tasks Yet, Add something.</h2>
        </div>
      ) : (
        <div className="Todo">
          {todos.map((todo) => (
            todo.isEditing ? (<EditTodoForm key={todo.id} editTodo={editTask} task={todo} />) : (<Todo task={todo} state={todos} deleteTodo={deleteTodo} key={todo.id} editTodo={editTodo} />)
          ))
          }
        </div>
      )}
    </div>
  );
};

export default Todowrapper;

