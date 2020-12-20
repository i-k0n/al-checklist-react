import styled from "@emotion/styled";
import { keyframes } from "@emotion/react"

const shine = keyframes`
  0% {
    transform: translateX(-30px) rotate(-25deg);
  }
  
  100% {
    transform: translateX(250px) rotate(-25deg);
  }
`;

const CardContainer = styled.label`
  opacity: ${props => props.checked ? "0.4" : "1"};
  position: relative;
  cursor: pointer;
  border: 1px solid #e0e0e0;
  display: none;
  grid-template-rows: auto 1fr;
  margin: 5px;
  font-family: "Open Sans", Roboto, sans-serif;
  font-size: 12.5px;

  &.show {
    display: grid;
  }

  &:hover {
    border: 1px solid #aaa;
  }

  @media only screen and (max-width: 768px) {
    margin: 4px;
  }

  @media only screen and (max-width: 425px) {
    margin: 3px;
  }
`;

const CardInput = styled.input`
  display: none;
`;

const ShipType = styled.span`
  position: absolute;
  top: 8px;
  left: 8px;
  object-fit: none;
  border: 0;
  border-radius: 15px;
  color: #fff;
  font-weight: 600;
  font-size: 13px;
  text-align: center;
  padding: 2px 8px;

  &:after {
    opacity: 0;
    content: attr(data-title);
    font-weight: normal;
    padding: 3px 8px 4px;
    position: absolute;
    border-radius: 4px;
    left: -50%;
    top: 170%;
    white-space: nowrap;
    z-index: 20;
    background: #444;
    pointer-events: none;
  }

  &:hover:after {
    opacity: 1;
    color: #fff;
    transition-delay: 500ms;
  }
`;

const ShipImageContainer = styled.div`
@keyframes shine {
  0% {
    transform: translateX(-100px) translateY(-300px) rotate(45deg);
  }

  25% {
    transform: translateX(100px) translateY(0px) rotate(45deg);
  }

  100% {
    transform: translateX(100px) translateY(0px) rotate(45deg);
  }
}
&.shine {
  position: relative;
  overflow: hidden;
  transition: all 100ms linear;
}

&.shine::after {
  content: "";
  display: block;
  width: 75%;
  height: 300%;
  background: rgb(255, 255, 255);
  background: linear-gradient(to right, transparent 0%, #F4DAB97f 15%, #E9C0E2af 30%, #CFAAF3ff 45%, #97B8E5af 65%, #68CCC27f 80%, transparent 100%);
  opacity: 0.75;
  mix-blend-mode: overlay;
  position: absolute;
  top: 0;
  left: 0;
  animation: shine 7s linear infinite;
  transform: translateX(100px) translateY(0px) rotate(45deg);
  z-index: 1;
}`;

const ShipImage = styled.img`
  display: block;
  width: 100%;

`;

const ShipInfo = styled.div`
  background-color: #fff;
  color: #777;
  padding: 12px 14px 16px;
  line-height: 1.2em;
`;

const ShipMeta = styled.div`
  padding: 0.2em 0;
  word-break: break-word;
`;

const ShipID = styled.span`
`;

const Dot = styled.span`
  text-decoration: none;
  color: #777;

  &:hover {
    color: #444;
  }

  &:before {
    content: "\\00A0\\00B7\\00A0";
    font-weight: 900;
  }

  &:hover:before {
    color: #777;
  }
`;

const ShipTypeText = styled.span`
  position: relative;
  

  &:after {
    opacity: 0;
    content: attr(data-title);
    font-weight: normal;
    padding: 3px 8px 4px;
    position: absolute;
    border-radius: 4px;
    left: -50%;
    top: 170%;
    white-space: nowrap;
    z-index: 20;
    background: #444;
    pointer-events: none;
  }

  &:hover:after {
    opacity: 1;
    color: #fff;
    transition-delay: 500ms;
  }
`;

const WikiURL = styled.a`
  text-decoration: none;
  color: #777;

  &:hover {
    color: #444;
    text-decoration: underline;
  }
`;

const ShipName = styled.h4`
  font-size: 13.5px;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: 0.25px;
  color: #222;
  padding: 0.3em 0 0.4em;
`;

const ShipRarityAndFaction = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0.2em 0;
  word-break: break-word;
`;

const ShipRarity = styled.span`
  &:after {
    content: "\\00A0\\002F\\00A0";
  }
`;

const ShipFaction = styled.span``;

const ShipAcquisition = styled.div`
  padding: 0.2em 0;
  word-break: break-word;
`;

const ShipBuildPool = styled.span``;

const ShipBuildTime = styled.span``;

const ShipDropMap = styled.div`
  padding: 0.2em 0;
  word-break: break-word;
`;



export { 
  CardContainer, 
  CardInput,
  ShipType,
  ShipImageContainer,
  ShipImage,
  ShipInfo,
  ShipMeta,
  ShipID,
  Dot,
  ShipTypeText,
  WikiURL,
  ShipName,
  ShipRarityAndFaction,
  ShipRarity,
  ShipFaction,
  ShipAcquisition,
  ShipBuildPool,
  ShipBuildTime,
  ShipDropMap,
};