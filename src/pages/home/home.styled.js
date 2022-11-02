import styled from "styled-components";
import ProfilePic from "../../assets/pic.jpg";

export const HomeContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 5rem;
`;

export const ImageContainer = styled.div`
  /* transition: 0.5s;
  background-image: linear-gradient(
    90deg,
    #00ff85 15%,
    #9dc725,
    transparent 75%
  );
  border-radius: 10px; */
`;

export const HomeImage = styled.div`
  background-image: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0),
      transparent
    ),
    url(${ProfilePic});
  background-position: center;
  background-size: cover;
  position: relative;
  height: 25rem;
  width: 20rem;
  display: flex;
  align-items: flex-end;
  border-radius: 10px;
  transition: all 0.3s ease-in-out;
  z-index: 1;
  &::before {
    background-image: linear-gradient(
      90deg,
      rgba(0, 255, 133, 0.87),
      rgba(157, 199, 37, 0.3),
      transparent
    );
    content: "";
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: 1;
    border-radius: 10px;
    transition: all 1s;
    z-index: -1;
    opacity: 0;
  }
  &:hover::before {
    opacity: 1;
  }
  &:hover {
    opacity: 0.9;
    transform: scale(1.05);
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
  transition: all 1s;
`;

export const NameContainer = styled.div`
  display: block;
`;

export const MyName = styled.h1`
  color: white;
  font-size: 5rem;
  inline-size: 40rem;
  letter-spacing: -1px;
  text-transform: uppercase;
  font-family: Righteous;
  margin: 0;
`;

export const Mytitle = styled.h3`
  color: white;
  font-weight: 100;
  font-size: 2rem;
  text-transform: uppercase;
  inline-size: 25rem;
`;
