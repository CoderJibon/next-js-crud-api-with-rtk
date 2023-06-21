"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser, deleteUSer, getAllUser } from "./todoApi.jsx";
import Link from "next/link.js";

export default function Home() {
  const [input, setInput] = useState({ name: "", email: "" });
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todo);

  const handleInputChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser(input));
  };

  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch]);

  const handleDeleteItem = (id) => {
    dispatch(deleteUSer(id));
  };

  return (
    <main>
      <h1>CRUD Operations</h1>
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
      <hr />
      <ul>
        {todos.length > 0 &&
          todos.map((item, index) => {
            return (
              <li key={index}>
                {item.name} : {item.email}{" "}
                <button>
                  <Link href={`/${item._id}`}>Edit</Link>{" "}
                </button>
                <button onClick={() => handleDeleteItem(item._id)}>
                  Delete
                </button>
              </li>
            );
          })}
      </ul>
    </main>
  );
}
