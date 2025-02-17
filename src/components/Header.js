import React, { useEffect, useState } from "react";
import Todo from "./Todo";
import tasks from "./data";

const Header = () => {
  console.log(tasks);

  const [isShow, setIsShow] = useState(false);
  const [form, setForm] = useState({
    task: "",
    day: "",
  });
  const [todos, setTodos] = useState(tasks);

  const handleInput = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
    console.log(form);
  };

  const handleClickShow = () => {
    setIsShow(!isShow);
  };
  const handleClick = () => {
    if (form.task === "" || form.day === "") {
      return false;
    } else {
      let id = Math.floor(Math.random() * 10000);
      setTodos([
        ...todos,
        { id: id, task: form.task, day: form.day, idDone: false },
      ]);
      // setForm(form);
    }
    setForm({
      task: "",
      day: "",
    });
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);
  return (
    <div>
      <h4>Task Tracker</h4>
      <div className="div-form ">
        <button
          className={isShow ? "btn btn-primary" : "btn btn-secondary"}
          onClick={handleClickShow}
        >
          {isShow ? `Show ` : `Close `}
          And Task Bar
        </button>
        {isShow && (
          <div className="container">
            <label htmlFor="task">Task</label>
            <br />
            <input
              type="text"
              name="task"
              id="task"
              className="w-100"
              placeholder="Add Task"
              value={form.task}
              onChange={(e) => handleInput(e)}
            />
            <br />
            <br />
            <label htmlFor="day">Day & Time</label>
            <br />
            <input
              type="text"
              name="day"
              id="day"
              value={form.day}
              className="w-100"
              placeholder="Add Day & Time"
              onChange={(e) => handleInput(e)}
            />
            <br /> <br />
            <button className="btn btn-info w-100" onClick={handleClick}>
              Save Task
            </button>
          </div>
        )}
      </div>
      <br />

      <Todo todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default Header;
