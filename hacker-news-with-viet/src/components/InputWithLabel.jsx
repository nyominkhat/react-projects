import { useEffect, useRef } from "react";
import styled from "styled-components";

const StyledLabel = styled.label`
  font-size: 1.5rem;
  margin-right: 0.5em;
`;

const StyledInput = styled.input`
  border: none;
  padding: 0.5em 1em;
  border-bottom: 1px solid #ccc;
  margin-right: 0.5em;
`;

function InputWithLabel({ id, value, onChange, children, isFocus = false }) {
  // const inputRef = useRef();

  // useEffect(() => {
  //   if (isFocus && inputRef.current) {
  //     inputRef.current.focus();
  //   }
  // }, [isFocus]);

  return (
    <>
      <StyledLabel htmlFor={id}>{children}</StyledLabel>
      <StyledInput
        type="text"
        id={id}
        autoFocus={isFocus}
        value={value}
        onChange={onChange}
        // ref={inputRef}
      />
    </>
  );
}

export default InputWithLabel;
