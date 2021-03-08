import React from "react";
import {
  HeroBg,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroImg,
  HeroP,
} from "./HeroElements";
import Image from '../../images/wp-1.jpg';

const HeroSection = () => {
  return (
    <HeroContainer id="home">
      <HeroBg>
        <HeroImg src={Image} alt="image" />
      </HeroBg>
      <HeroContent>
        <HeroH1>John and Jane</HeroH1>
        <HeroP>"...may the odds be ever in your favor"</HeroP>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
