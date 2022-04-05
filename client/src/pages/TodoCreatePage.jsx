import React, { useState } from "react";

export default function TodoCreatePage() {
  const [content, setContent] = useState("");

  function handleOnSubmit(e) {
    e.preventDefault();

    const url = "http://localhost:5000/todos";

    const payload = { content };
    const token = localStorage.getItem("token");

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  return (
    <div>
      TodoCreatePage
      <form onSubmit={handleOnSubmit}>
        <label htmlFor="content">content:</label>
        <textarea
          id="content"
          name="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows="10"
          columns="30"
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
