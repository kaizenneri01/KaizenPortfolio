import React from "react";
import {
  AboutContainer,
  CardContainer,
  CardDescrip,
  CardDiv,
  SubContainer,
} from "./about.styled";
import { CardData } from "./CardData";

const AboutPage = () => {
  return (
    <AboutContainer>
      <SubContainer>
        <h1>about me</h1>
        <CardContainer>
          {CardData.map((item) => (
            <CardDiv key={item.id}>
              <div>{item.icon}</div>
              <CardDescrip>{item.description}</CardDescrip>
            </CardDiv>
          ))}
        </CardContainer>
      </SubContainer>
    </AboutContainer>
  );
};

export default AboutPage;
