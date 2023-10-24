import React from "react";
import { LogoIcon } from "../../components/ui/Icons";
import { SectionSubTitle } from "../../components/ui/Typography";
import { SearchIcon } from "../../components/ui/Icons";
import IconButton from "../../components/ui/IconButton";
import { LogoWrapper, Wrapper } from "./styled";
function Header() {
  return (
    <Wrapper>
      <LogoWrapper>
        <LogoIcon />
        <SectionSubTitle>SoundVibe</SectionSubTitle>
      </LogoWrapper>
      <IconButton width={58} height={58} withBackground>
        <SearchIcon />
      </IconButton>
    </Wrapper>
  );
}

export default Header;
