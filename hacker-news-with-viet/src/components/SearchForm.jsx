import React from "react";
import styled from "styled-components";

import InputWithLabel from "./InputWithLabel";

const StyledSearchForm = styled.form`
  padding: 0.5em 1em;
  display: flex;
  align-items: center;
`;

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

const StyledButtonLargh = styled(StyledButton)`
  padding: 0.5em 1em;
`;

export default function SearchForm({
  handleSearchSumit,
  query,
  handleSearchInput,
}) {
  return (
    <StyledSearchForm onSubmit={handleSearchSumit}>
      <InputWithLabel
        id="search"
        value={query}
        onChange={handleSearchInput}
        isFocus
      >
        Search:{" "}
      </InputWithLabel>

      <StyledButtonLargh type="submit" disabled={!query}>
        Search
      </StyledButtonLargh>
    </StyledSearchForm>
  );
}
