import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "./actions/index";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className='App'>
      <h1>Learn Redux {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
}

export default App;
