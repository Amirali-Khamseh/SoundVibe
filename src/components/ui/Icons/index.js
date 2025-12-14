import styled from "styled-components";
import SearchIcon from "assets/icons/search.svg?react";
import ArrowRightIcon from "assets/icons/arrow-right.svg?react";
import MusicIcon from "assets/icons/music.svg?react";
import SkipIcon from "assets/icons/skip.svg?react";
import VolumeIcon from "assets/icons/volume.svg?react";
import PlayIcon from "assets/icons/play.svg?react";
import HeartIcon from "assets/icons/heart.svg?react";
import PauseIcon from "assets/icons/pause.svg?react";
import UsersIcon from "assets/icons/users.svg?react";
import Logo from "assets/icons/logo.svg?react";
const Play = styled(PlayIcon)`
  fill: ${(props) => props.color || "white"};
  stroke: ${(props) => props.color || "white"};
`;

const SkipLeft = styled(SkipIcon)`
  fill: ${(props) => props.color || "white"};
`;

const SkipRight = styled(SkipLeft)`
  transform: rotate(180deg);
`;

const Pause = styled(PauseIcon)`
  fill: ${(props) => props.color || "white"};
  stroke: ${(props) => props.color || "white"};
`;

const Volume = styled(VolumeIcon)`
  stroke: ${(props) => props.color || "white"};
`;

const Music = styled(MusicIcon)`
  stroke: ${(props) => props.color || "white"};
`;

const ArrowRight = styled(ArrowRightIcon)`
  stroke: ${(props) => props.color || "white"};
`;

const ArrowLeft = styled(ArrowRight)`
  stroke: ${(props) => props.color || "white"};
  transform: rotate(180deg);
`;

const Heart = styled(HeartIcon)`
  stroke: ${(props) => props.color || "white"};
`;

const Users = styled(UsersIcon)`
  stroke: ${(props) => props.color || "white"};
`;

const Searchi = styled(SearchIcon)`
  fill: ${(props) => props.color || "white"};
`;

export {
  Play,
  SkipLeft,
  SkipRight,
  Pause,
  Volume,
  Music,
  ArrowRight,
  ArrowLeft,
  Heart,
  Users,
  Searchi,
  Logo,
};
