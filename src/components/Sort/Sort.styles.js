import styled from "@emotion/styled";
import check from "../../assets/icons/check.svg"

const SortText = styled.p`
  font-size: 13px;
`;

const HideButtonLabel = styled.label`
  padding: 3px 47px 3px 20px;
  width: 100%;
  display: block;
  text-align: left;
  color: ${props => props.isHidden ? "#444" : "#777"};
  cursor: pointer;
  position: relative;
  z-index: 2;
  transition: color 200ms ease-in;
  overflow: hidden;

  font-size: 13px;
  font-weight: 500;

  &:before {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    content: "";
    background-color: #e2e2e2;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: ${props => props.isHidden ? "translate(-50%, -50%) scale3d(56, 56, 1)" : "translate(-50%, -50%) scale3d(1, 1, 1)"};
    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
    opacity: ${props => props.isHidden ? "1" : "0"};
    z-index: -1;
  }

  &:after {
    width: 20px;
    height: 20px;
    content: "";
    border: ${props => props.isHidden ? "1px solid #65da55" : "1px solid #ccc"};
    background-color: ${props => props.isHidden ? "#65da55" : "#fff"};
    background-image: url(${check});
    background-repeat: no-repeat;
    background-position: 2px 3px;
    background-size: 1rem;
    border-radius: 50%;
    z-index: 2;
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    transition: all 200ms ease-in;
  }

  &:hover {
    cursor: pointer;
    background-color: #f0f0f0;
  }
`;

export { SortText, HideButtonLabel };