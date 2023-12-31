import IconButton from "components/ui/IconButton";
import { Logo, Searchi } from "components/ui/Icons";
import { SectionSubtitle } from "components/ui/Typography";
import { LogoWrapper, Wrapper } from "./styled";
import { ContentWrapper } from "layout";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Wrapper>
      <ContentWrapper display="flex" items="center" content="space-between">
        <Link to="/">
          <LogoWrapper>
            <Logo />
            <SectionSubtitle>SoundVibe</SectionSubtitle>
          </LogoWrapper>
        </Link>
        <Link to="/search">
          <IconButton withBackground height={58} width={58}>
            <Searchi />
          </IconButton>
        </Link>
      </ContentWrapper>
    </Wrapper>
  );
}

export default Header;
