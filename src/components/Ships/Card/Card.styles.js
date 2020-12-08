import styled from "@emotion/styled";

const CardContainer = styled.label`
  opacity: ${props => props.checked ? "0.4" : "1"}
`;

export { CardContainer };