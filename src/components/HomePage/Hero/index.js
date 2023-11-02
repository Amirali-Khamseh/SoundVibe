import DesktopRadioImage from "assets/images/radio-desktop.png";
import { Play } from "components/ui/Icons";
import { ButtonText } from "components/ui/Typography";
import { PlayButton, TextWrapper, Wrapper, HeroText, HeroImage, HeroTitleText } from "./styled";
import { useContext } from "react";
import PropTypes from "prop-types";
import { PlayerDispatchContext } from "context/playerContext";
import { actions } from "context/actions";
import TabletRadioImage from "assets/images/radio-tablet.png";
import { useWindowSize } from "hooks/useWindowSize";
import { breakpoints } from "styles/BreakPoints";
function Hero({ tracks }) {
  const dispatch = useContext(PlayerDispatchContext);
  const { width } = useWindowSize();
  const handlePlayClick = () => {
    dispatch({
      type: actions.SET_TRACKS_DATA,
      track: tracks[0],
      tracks,
      isPlaying: true,
    });
  };

  return (
    <Wrapper>
      <TextWrapper>
        <HeroTitleText>Vibe it out </HeroTitleText>
        <HeroText>Pick the sound that makes your vibe </HeroText>
        <PlayButton disabled={!tracks || tracks.length <= 0} onClick={handlePlayClick}>
          <Play />
          <ButtonText>Play</ButtonText>
        </PlayButton>
      </TextWrapper>
      <HeroImage
        src={width < breakpoints.xl ? TabletRadioImage : DesktopRadioImage}
        alt="Hands holding radio"
      />
    </Wrapper>
  );
}

Hero.propTypes = {
  tracks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      duration: PropTypes.number,
      preview: PropTypes.string,
      artist: PropTypes.shape({
        name: PropTypes.string,
      }),
      album: PropTypes.shape({
        title: PropTypes.string,
        cover: PropTypes.string,
      }),
    }),
  ),
};

export default Hero;
