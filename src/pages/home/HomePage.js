import React from "react";
import { MdDoubleArrow } from "react-icons/md";
import {
  HomeContainer,
  HomeImage,
  ImageBtn,
  ImageContainer,
} from "./home.styled";

const HomePage = () => {
  return (
    <HomeContainer>
      <ImageContainer>
        <HomeImage>
          <ImageBtn>
            <MdDoubleArrow size="1.5rem" />
          </ImageBtn>
        </HomeImage>
      </ImageContainer>
      <div>
        <h1>Hi im john karl neri</h1>
        <h3>im a freelance front-end developer and I making UI</h3>
      </div>
    </HomeContainer>
  );
};

export default HomePage;
