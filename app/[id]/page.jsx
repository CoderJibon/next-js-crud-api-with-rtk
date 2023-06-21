"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function editUser({ params }) {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todo);

  const { name, email } = todos.filter((todo) => todo._id === params.id);

  const [input, setInput] = useState({ name: name, email: email });

  const handleInputChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <main>
      <h1>CRUD EDIT USER</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleInputChange}
          type="text"
          placeholder="name"
          value={input.name}
          name="name"
        />{" "}
        <input
          onChange={handleInputChange}
          type="text"
          placeholder="email"
          value={input.email}
          name="email"
        />{" "}
        <button type="submit">submit</button>
      </form>
    </main>
  );
}

export default editUser;
