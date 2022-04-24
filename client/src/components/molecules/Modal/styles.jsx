import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.div`
  /* width: 500px; */
  background-color: white;
`;

export const ModalHeader = styled.div`
  padding: 10px;
`;

export const ModalTitle = styled.div`
  margin: 0;
`;

export const ModalBody = styled.div`
  padding: 10px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  display: flex;
  flex-direction: column;
  width: auto;

  input,
  textarea {
    width: 100%;
    border: 1px solid #eee;
    padding: 10px;
    border-radius: 5px;
    outline: none;
    resize: none;
    overflow: auto;

    &:focus {
      border: 1px solid #ccc;
    }
  }
`;

export const ModalFooter = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const ListContainer = styled.div`
  background-color: paleturquoise;
  width: 400px;
  margin: auto;
  border-width: 1px;
  border-color: grey;
  border-style: solid;
`;

export const StyledDiv = styled.div`
  background-color: floralwhite;
  width: auto;
  height: auto;
  margin: 10px;
  border-radius: 10px;
  padding: 0px 10px;
`;
