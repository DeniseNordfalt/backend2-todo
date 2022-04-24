import styled from "styled-components";
import {
  MdClose,
  MdOutlineRadioButtonUnchecked,
  MdCheckCircleOutline,
  MdExpandMore,
  MdExpandLess,
  MdFilePresent,
} from "react-icons/md";

export const FileIcon = styled(MdFilePresent)`
  width: auto;
  height: 24px;
  min-height: 24px;
  color: #00bcd4;
`;

export const DeleteIcon = styled(MdClose)`
  /* margin: auto; */
  align-self: center;
  height: 24px;
  width: auto;
  cursor: pointer;
  color: palevioletred;
`;

export const CircleIcon = styled(MdOutlineRadioButtonUnchecked)`
  /* margin: auto; */
  align-self: center;
  height: 22px;
  width: auto;
  cursor: pointer;
  color: MediumAquaMarine;
`;

export const CheckCircleIcon = styled(MdCheckCircleOutline)`
  /* margin: auto; */
  align-self: center;
  height: 22px;
  width: auto;
  cursor: pointer;
  color: lightslategray;
`;

export const ExpandIcon = styled(MdExpandMore)`
  align-self: center;
  height: 24px;
  min-height: 24px;
  width: auto;
`;

export const ExpandLessIcon = styled(MdExpandLess)`
  align-self: center;
  height: 24px;
  min-height: 24px;
  width: auto;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  &.done {
    color: lightslategray;
    text-decoration: line-through;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CardTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`;

export const CardBody = styled.div`
  border-top: 1px solid grey;
  /* border-bottom: 1px solid grey; */
  &.hidden {
    display: none;
  }
`;

export const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const ImageItem = styled.img`
  width: 100px;
`;

export const FileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: auto;
  outline: 1px solid grey;
`;
export const FileItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0;
`;

export const FileName = styled.p`
  font-size: 14px;
  font-weight: bold;
  margin: auto;
`;

export const FileNameContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ContentContainer = styled.div``;
