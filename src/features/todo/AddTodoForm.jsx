import React, { useState, useEffect } from "react";

function AddTodoForm() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  // Function to handle adding a new todo
  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (todo.trim()) {
      const newTodos = [...todos, { text: todo, completed: false }];
      setTodos(newTodos);
      setTodo("");
      localStorage.setItem("todos", JSON.stringify(newTodos));
    } else {
      alert("Please enter a todo.");
    }
  };

  // Function to handle deleting a todo
  const handleDeleteTodo = (index) => {
    const newTodos = [...todos]; // Create a copy of the state
    newTodos.splice(index, 1); // Remove the todo at the specified index
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  // Function to handle editing a todo (optional)
  const handleEditTodo = (index, newText) => {
    const newTodos = [...todos];
    newTodos[index].text = newText; // Update text of the todo at the index
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  // Load todos from localStorage on component mount
  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  return (
    <div className="">
      <form onSubmit={handleFormSubmit}>
        <input
          className="bg-transparent border text-center p-2 text-white rounded-md"
          type="text"
          placeholder="Enter a Todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button
          type="submit"
          className="text-white border text-base bg-blue-950 p-2"
        >
          Add Todo
        </button>
      </form>

      <ul className=" border mt-10 p-8 rounded-xl bg-slate-900 ">
        <h5 className="text-white">Your Todos :</h5>
        {todos.map((todoItem, index) => (
          <li key={index} className="text-white rounded text-center w-max p-2 ">
           {todoItem.text}
            {/* Delete button */}
            <button
              className="text-white hover:bg-slate-950 ml-2 border rounded-lg p-1 text-base"
              onClick={() => handleDeleteTodo(index)}
            >
              Done
            </button>
            {/* Optional edit button (implementation provided) */}
            <button
              className="text-white hover:bg-slate-950  ml-2 border rounded-lg p-1 text-base"
              onClick={() => {
                // Prompt user for new text and handle edit
                const newText = prompt("Edit Todo:", todoItem.text);
                if (newText) {
                  handleEditTodo(index, newText);
                }
              }}
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AddTodoForm;