import styled from "styled-components";
import { ReactComponent as PlayIcon } from "../../assets/Icons/PlayIcon.svg";
import { ReactComponent as Skip } from "../../assets/Icons/Skip.svg";
import { ReactComponent as ChevronLeft } from "../../assets/Icons/Chevron.svg";
import { ReactComponent as PauseIcon } from "../../assets/Icons/Pause.svg";
import { ReactComponent as Speaker } from "../../assets/Icons/Speaker.svg";
import { ReactComponent as Search } from "../../assets/Icons/Search.svg";
import { ReactComponent as Like } from "../../assets/Icons/Like.svg";

const Play = styled(PlayIcon)`
  fill: ${(props) => props.color};
  stroke: ${(props) => props.color};
`;
const SkipLeft = styled(Skip)`
  fill: ${(props) => props.color || "white"};
  stroke: ${(props) => props.color || "white"};
`;
const SkipRight = styled(Skip)`
  fill: ${(props) => props.color || "white"};
  stroke: ${(props) => props.color || "white"};
  transform: rotate(180deg);
`;
const ChevronLeftIcon = styled(ChevronLeft)`
  stroke: ${(props) => props.color || "white"};
`;
const ChevronRightIcon = styled(ChevronLeft)`
  stroke: ${(props) => props.color || "white"};
  transform: rotate(180deg);
`;
const Pause = styled(PauseIcon)`
  fill: ${(props) => props.color || "white"};
  stroke: ${(props) => props.color || "white"};
  transform: rotate(180deg);
`;
const SpeakerIcon = styled(Speaker)`
  stroke: ${(props) => props.color || "white"};
`;
const SearchIcon = styled(Search)`
  fill: ${(props) => props.color || "white"};
  stroke: ${(props) => props.color || "white"};
`;
const LikeIcon = styled(Like)`
  stroke: ${(props) => props.color || "white"};
`;
export {
  Play,
  SkipLeft,
  SkipRight,
  ChevronLeftIcon,
  ChevronRightIcon,
  Pause,
  SpeakerIcon,
  SearchIcon,
  LikeIcon,
};
