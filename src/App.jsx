import { useState } from "react";
import "./app.css";

export default function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(todo) {
    const result = [...todos, todo];
    setTodos(result);
  }

  function removeTodo(id) {
    const result = todos.filter((el) => el.id !== id);
    setTodos(result);
  }

  function editTodo(id) {
    const result = todos.map((el) => {
      if (el.id === id) {
        return { title: prompt("Malumotni Tahrirlang"), id: el.id };
      } else {
        return el;
      }
    });

    setTodos(result);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const res = { title: formData.get("title"), id: Date.now() };

    if (inputText.value.length === 0) {
      alert("Input bo'sh bo'lishi mumkin emas");
    } else {
      addTodo(res);
      e.target.reset();
    }
  }

  return (
    <div className="container">
      <div> <h1 className="titleTodo">To do List</h1>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Nimadir yozing..."
            name="title"
            type="text"
            id="inputText"
            className="input"
          />
          <button className="inputBtn">Saqlash</button>
        </form>

        <ul>
          {todos.length > 0 ? (
            todos.map(({ title, id }) => {
              return (
                <li className="list">
                  <h3>{title}</h3>
                  <div className="buttons">
                    <button className="deleteButton" onClick={() => removeTodo(id)}>Delete</button>
                    <button className="editButton" onClick={() => editTodo(id)}>Edit</button>
                  </div>
                </li>
              );
            })
          ) : (
            <h2 className="titleoff">Ma'lumotlar mavjud emas !</h2>
          )}
        </ul>
      </div>
    </div>
  );
}
