import styled from "styled-components";
import ProfilePic from "../../assets/pic.jpg";

export const HomeContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 5rem;
`;

export const ImageContainer = styled.div`
  &:hover {
    background-image: linear-gradient(
      90deg,
      #00ff85 15%,
      #9dc725,
      transparent 75%
    );
    border-radius: 10px;
  }
`;

export const HomeImage = styled.div`
  position: relative;
  height: 25rem;
  width: 20rem;
  /* background-position: center;
  background-size: cover; */
  display: flex;
  align-items: flex-end;
  border-radius: 10px;
  &::before {
    background-image: url(${ProfilePic});
    background-position: center;
    background-size: cover;
    content: "";
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: 1;
    border-radius: 10px;
  }
  &:hover::before {
    opacity: 0.5;
  }
`;

export const ImageBtn = styled.div`
  position: relative;
  margin: 1rem;
  text-align: center;
  color: #ddded6;
  background-color: #050504;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  overflow: hidden;
  &::before {
    display: flex;
    align-items: center;
    content: "Go to linkedin";
    position: absolute;
    top: 0;
    left: -250%;
    height: 100%;
  }
  &:hover::before {
    left: 110%;
    display: contents;
  }
`;
