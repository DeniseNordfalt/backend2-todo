import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  padding: ${(props) => props.theme.spacing.medium};
`;

export const MainContainer = styled.div``;

export const LoginContainer = styled.div`
  background-color: lightgoldenrodyellow;
  height: 500px;
  width: 350px;

  border-radius: 60% / 70% 70% 50% 50%;

  display: flex;
  margin: auto;

  flex-direction: column;

  text-align: center;
  justify-content: center;
  align-items: center;

  margin-top: 200px;

  input {
    margin-left: 150px;
    margin-right: 150px;
    margin-bottom: 5px;
  }

  box-shadow: 5px 5px 15px black, inset 15px 5px 15px white;
`;

const styledForm = styled.form`
  display: flex;
`;
