import styled from "styled-components";

export const StyledButton = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.width || 20}px;
  cursor: pointer;
  height: ${(props) => props.height || 20}px;
  ${(props) =>
    props.withBackground &&
    `
  border-radius:50%;
  background-color:${props.backgroundColor || props.theme.colors.lightWhite}
  `};
  transition: hover 0.2s ease-in-out;
  &:hover {
    opacity: 0.6;
  }
`;
