import React, { useState } from "react";
import styled from "styled-components";
import TabList from "../../components/molecules/TabList";
import Header from "../../components/Header";
import FormInput from "../../components/atoms/FormInput";
import FormTextarea from "../../components/atoms/FormTextarea";

const StyledDiv = styled.div`
  background-color: floralwhite;
  width: auto;
  height: auto;
  margin: 10px;
  border-radius: 10px;
  padding: 0px 10px;
`;

const Container = styled.div`
  width: 400px;
  margin: auto;
  padding-top: 150px; ;
`;

const ListContainer = styled.div`
  background-color: paleturquoise;
  width: 400px;
  margin: auto;
  border-width: 1px;
  border-color: grey;
  border-style: solid;
`;

export default function TodoCreatePage() {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [files, setFiles] = useState(null);

  // formData.append("files", files);

  function handleOnSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("content", content);
    formData.append("title", title);

    if (files !== null) {
      for (let i = 0; i < files.length; i++) {
        formData.append("files", files[i]);
      }
    }

    console.log("formData", formData);

    const url = "http://localhost:5000/todos";

    const payload = { title, content };
    const token = localStorage.getItem("token");

    fetch(url, {
      method: "POST",
      headers: {
        // "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => console.log("data", data));
  }

  return (
    <>
      <Header />
      <Container>
        <TabList />
        <ListContainer>
          <StyledDiv>
            TodoCreatePage
            <form onSubmit={handleOnSubmit} encType="multipart/form-data">
              <label htmlFor="title">title</label>
              {/* <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              /> */}
              <FormInput
                input="text"
                label="title"
                value={title}
                setValue={setTitle}
                maxLength="30"
              />

              <label htmlFor="content">content:</label>
              <FormTextarea
                id={"content"}
                name={"content"}
                value={content}
                setValue={setContent}
                rows={10}
                cols={30}
                maxLength={500}
              />

              {/* <textarea
                id="content"
                name="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows="10"
                columns="30"
              /> */}

              <input
                type="file"
                name="files"
                id="files"
                multiple
                onChange={(e) => setFiles(e.target.files)}
              />
              {/* <FormInput
                type="file"
                name="files"
                id="files"
                multiple
                setValue={setFiles}
              /> */}
              {/* {TODO: GET WORKING} */}

              <button type="submit">Submit</button>
            </form>
          </StyledDiv>
        </ListContainer>
      </Container>
    </>
  );
}
