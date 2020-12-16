import styled from "@emotion/styled";

const CounterContainer = styled.ul`
  font-family: "Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 0.9rem;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto 5px;
  max-width: 940px;
`;

const CounterItem = styled.li`
  position: relative;
  background-color: #f9f9f9;
  border: 1px solid transparent;
  border-radius: 4px;
  padding: 8px 16px;
  margin: 5px;
  text-align: end;
  font-size: 14px;
  font-weight: normal;
  flex-grow: 1;
  white-space: nowrap;

  &:after {
    content: "";
    background-image: url(${props => require("../../assets/icons/icon-faction-" + props.faction + ".png")});
    background-repeat: no-repeat;
    background-position-y: center;
    background-position-x: 10px;
    background-size: contain;
    opacity: 0.12;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 1;
  }

  &.total {
    flex-basis: 75%;
  }

  &.span {
    font-size: 1rem;
    font-weight: 400;
    font-family: "Noto Sans", "Roboto", sans-serif;
    padding-left: 4px;
  }
`;

const FactionName = styled.span`
  font-weight: 500;
  font-size: 13px;
`;

export { CounterContainer, CounterItem, FactionName };