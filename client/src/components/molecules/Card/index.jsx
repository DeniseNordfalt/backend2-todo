import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as s from "./styles";
import Modal from "../Modal";
import { convertToReadableDateTime } from "../../../utils/dateTime";

export default function Card({ title, content, id, date, files, ...props }) {
  const [open, setOpen] = useState("");
  const [done, setDone] = useState("");
  const [show, setShow] = useState(false);

  const image =
    "https://images.unsplash.com/photo-1457301473530-d6d4d4d7b824?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1362&q=80";

  const handleOnClick = () => {
    setDone(!done);
    console.log("id", id);

    const url = `http://localhost:5000/todos/${id}`;

    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    window.location.reload(false);
  };

  const handleFileDelete = (file) => {
    const url = `http://localhost:5000/todos/${id}/${file.originalname}`;

    console.log("id", id);
    console.log("files", file.originalname);
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    window.location.reload(false);
  };

  const handleOnDelete = () => {
    const url = `http://localhost:5000/todos/${id}`;

    console.log("id", id);
    fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    window.location.reload(false);
  };

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <s.CardContainer className={props.done ? "done" : "not-done"}>
      <s.CardHeader>
        <div
          onClick={() => {
            handleOnClick();
          }}
        >
          {props.done ? <s.CheckCircleIcon /> : <s.CircleIcon />}
        </div>
        <s.CardTitle
          onClick={() => {
            setOpen(!open);
          }}
        >
          <h3>{title}</h3>
          {open ? <s.ExpandLessIcon /> : <s.ExpandIcon />}
        </s.CardTitle>
        <s.DeleteIcon
          onClick={() => {
            handleOnDelete();
          }}
        />
      </s.CardHeader>

      <s.CardBody className={open ? "open" : "hidden"}>
        <s.ContentContainer>
          {content}
          {/* {id} */}
          <s.FileContainer>
            {files &&
              files.map((file, i) => {
                console.log("map file", "index", i, file);
                return (
                  <s.FileItem>
                    <s.FileNameContainer>
                      <s.FileIcon />
                      <a
                        href={`http://localhost:5000/${file.path}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <s.FileName>{file.originalname}</s.FileName>
                      </a>
                    </s.FileNameContainer>
                    <button onClick={() => handleFileDelete(file)}>
                      Delete file
                    </button>
                  </s.FileItem>
                );
              })}
          </s.FileContainer>
          <p>created at: {convertToReadableDateTime(date)}</p>
        </s.ContentContainer>
        <s.ImageContainer></s.ImageContainer>

        <button onClick={() => setShow(true)}>Edit</button>
        <Modal
          onClose={() => setShow(false)}
          show={show}
          title={title}
          content={content}
          id={id}
        />
      </s.CardBody>
    </s.CardContainer>
  );
}
