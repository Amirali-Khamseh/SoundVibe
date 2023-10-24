import { Wrapper, TextWrapper, PlayButton } from "./styled";
import RadioHeroSectionDesktop from "../../../assets/Images/Radio-hero-section-desktop.png";
import { ButtonText, MainTitle, Text } from "../../ui/Typography";
import { Play } from "../../ui/Icons";
function Hero() {
  return (
    <Wrapper>
      <TextWrapper>
        <MainTitle> Hello!</MainTitle>
        <Text>Pick what sounds the best to you</Text>
        <PlayButton>
          <Play />
          <ButtonText>Play</ButtonText>
        </PlayButton>
      </TextWrapper>
      <img src={RadioHeroSectionDesktop} alt="radio" />
    </Wrapper>
  );
}

export default Hero;
