import styled from "@emotion/styled";

const StyledButton = styled.button`
  font-size: 0.8rem;
  display: inline-flex;
  white-space: nowrap;
  height: 32px;
  padding: 0 13px;
  margin: 3px 1px;
  background-color: #f9f9f9;
  border-radius: 4px;
  border: 1px solid #d3d3d3;
  box-shadow: 0 1px 0px 0px #e7e7e7;
  justify-content: center;
  align-items: center;
  flex-grow: 1;

  &:hover {
    cursor: pointer;
    background-color: #f0f0f0;
  }

  & > img {
    height: 24px;
    padding: 1px 7px 1px 0;
  }
`;

export { StyledButton };