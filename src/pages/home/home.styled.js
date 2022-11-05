import styled from "styled-components";
import ProfilePic from "../../assets/pic.jpg";

export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 5rem;
  flex-wrap: wrap;
`;

export const ImageContainer = styled.div``;

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
  transition: all 0.3s ease-out;
  box-shadow: 1rem 1rem rgba(212, 205, 30, 0.9);
  z-index: 1;
  @media screen and (min-width: 1600px) {
    height: 30rem;
    width: 25rem;
  }
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
    box-shadow: 2rem 2rem rgba(26, 207, 196, 0.87);
    transform: scale(1.01);
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
  margin-left: 3rem;
  @media screen and (max-width: 1200px) {
    margin-top: 5rem;
  }
  @media screen and (min-width: 1600px) {
    margin-left: 6rem;
  }
`;

export const MyName = styled.h1`
  color: white;
  font-size: 5rem;
  inline-size: 40rem;
  letter-spacing: -1px;
  text-transform: uppercase;
  font-family: Righteous;
  margin: 0;
  background-image: linear-gradient(90deg, #d4cd1e, #1acfc4);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;

  @media screen and (min-width: 1600px) {
    font-size: 6rem;
    inline-size: 50rem;
    word-spacing: -10px;
  }
`;

export const Mytitle = styled.h3`
  color: #ddded6;
  font-weight: 100;
  font-size: 2rem;
  text-transform: uppercase;
  inline-size: 25rem;
  @media screen and (min-width: 1600px) {
    font-size: 2.5rem;
    inline-size: 30rem;
  }
`;
