import styled from "@emotion/styled";
import check from "../../assets/icons/check.svg"

const HideButtonLabel = styled.label`
  padding: 3px 47px 3px 20px;
  width: 100%;
  display: block;
  text-align: left;
  color: #3c454c;
  cursor: pointer;
  position: relative;
  z-index: 2;
  transition: color 200ms ease-in;
  overflow: hidden;

  &:before {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    content: "";
    background-color: #e2e2e2;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) scale3d(1, 1, 1);
    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 0;
    z-index: -1;
  }

  &:after {
    width: 20px;
    height: 20px;
    content: "";
    border: 1px solid #ccc;
    background-color: #fff;
    background-image: url(${check});
    background-repeat: no-repeat;
    background-position: 2px 3px;
    background-size: 1rem;
    border-radius: 50%;
    /* box-sizing: border-box; */
    z-index: 2;
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    transition: all 200ms ease-in;
  }
`;

export { HideButtonLabel };