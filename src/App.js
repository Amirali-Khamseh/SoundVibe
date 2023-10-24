import { ThemeProvider } from "styled-components";
import { theme } from "./styles/Theme";
import { GlobalStyles } from "./styles/Global";
import {
  Play,
  SkipLeft,
  SkipRight,
  ChevronLeftIcon,
  ChevronRightIcon,
  Pause,
  SpeakerIcon,
  SearchIcon,
  LikeIcon,
} from "./components/ui/Icons";
import {
  ButtonText,
  MainTitle,
  SectionSubTitle,
  SectionTitle,
  Text,
  SubText,
} from "./components/ui/Typography";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MainTitle>SoundVibe</MainTitle>
      <SectionTitle>SoundVibe</SectionTitle>
      <SectionSubTitle>SoundVibe</SectionSubTitle>
      <Text>SoundVibe</Text>
      <SubText>SoundVibe</SubText>
      <ButtonText>SoundVibe</ButtonText>
      <Play color="red" />
      <SkipLeft />
      <SkipRight />
      <ChevronLeftIcon />
      <ChevronRightIcon />
      <Pause />
      <SpeakerIcon />
      <SearchIcon />
      <LikeIcon />
    </ThemeProvider>
  );
}

export default App;
