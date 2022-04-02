import React, { useState } from "react";

export default function UserCreatePage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleOnSubmit(e) {
    e.preventDefault();

    const url = "http://localhost:5000/users";

    const payload = { username, password };

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <label htmlFor="password">username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="password">password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
