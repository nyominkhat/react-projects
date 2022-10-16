import styled from "styled-components";

import { ReactComponent as Cross } from "../assets/cross.svg";

const StyledButton = styled.button`
  background-color: #ff731d;
  color: #fff;
  padding: 0.5em 1em;
  border: 1px solid #ccc;
  transition: background-color 100ms ease-in;
  cursor: pointer;

  &:hover {
    background-color: #fa6102;
  }
`;

const StyledButtonSmall = styled(StyledButton)`
  padding: 0.3em 0.8em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledItem = styled.li`
  display: flex;
  align-items: center;
  padding-bottom: 6px;
`;

const StyledColumn = styled.span`
  padding: 0 6px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  a {
    color: inherit;
  }
`;

export default function Item({ item, onRemoveItem }) {
  return (
    <StyledItem>
      <StyledColumn style={{ width: "40%" }}>
        <a href={item.url} target="_blank" rel="noreferrer">
          {item.title}
        </a>
      </StyledColumn>
      <StyledColumn style={{ width: "30%" }}>{item.author}</StyledColumn>
      <StyledColumn style={{ width: "10%" }}>{item.num_comments}</StyledColumn>
      <StyledColumn style={{ width: "10%" }}>{item.points}</StyledColumn>
      <StyledColumn style={{ width: "10%" }}>
        <StyledButtonSmall onClick={() => onRemoveItem(item)}>
          <Cross height="16px" width="16px" />
        </StyledButtonSmall>
      </StyledColumn>
    </StyledItem>
  );
}
