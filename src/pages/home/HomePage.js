import React from "react";
import { MdDoubleArrow } from "react-icons/md";
import {
  HomeContainer,
  HomeImage,
  ImageBtn,
  ImageContainer,
  MyName,
  Mytitle,
  NameContainer,
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
      <NameContainer>
        <MyName>Hi im john karl neri</MyName>
        <Mytitle>
          im a freelance front-end developer and I making UI design
        </Mytitle>
      </NameContainer>
    </HomeContainer>
  );
};

export default HomePage;
