import styled from "styled-components";

export const Tab = styled.div`
  background-color: paleturquoise;
  position: relative;
  /* margin-bottom: -1px; */

  width: auto;
  min-width: 50px;
  height: 40px;
  padding: 0px 10px;

  border-top: 1px solid grey;
  border-left: 1px solid grey;
  border-right: 1px solid grey;

  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

export const TabContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
