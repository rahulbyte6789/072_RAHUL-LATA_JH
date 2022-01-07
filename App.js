import { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <>
      <header className="row bg-secondary d-flex d-flex align-items-center">
        <h1 className="col-4 d-flex text-light ">Instant ChatBox</h1>
        <p className="col text-light">
          by ( Rahul Lata ) ( 210940520072)
        </p>
      </header>

      <MyComponent />
    </>
  );
}

function MyComponent() {
  const [message, setMessage] = useState("");
  const [list, setList] = useState([]);

  function handleMessage(e) {
    setMessage(e.target.value);
  }

  function send() {
    if (message === "") {
      alert("Invalid message!!!");
    } else {
      const newList = [message, ...list];

      setList(newList);
      setMessage("");
    }
  }

  return (
    <div className="mx-4">
      <div className="row">
        <textarea
          placeholder="Lets chat here..."
          className=" col form-control form-control-lg mt-4 textField"
          type="textarea"
          rows="4"
          value={message}
          onChange={handleMessage}
        />

        <input
          className="col-2 mt-4 mx-2 sendBtn"
          type="button"
          value="SEND"
          onClick={send}
        />
      </div>

      {list.map((item, index) => (
        <>
          <div
            key={index}
            className="alert alert-secondary fs-4 mt-3 text-start"
          >
            {item}
          </div>

        </>
      ))}
    </div>
  )
}
