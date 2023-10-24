import styled from "styled-components";
import Hero from "../../components/HomePage/Hero";

const ContentWrapper = styled.main`
  padding: 0 120px;
`;
function HomePage() {
  return (
    <ContentWrapper>
      <Hero />
      <div>Genres</div>
      <div>Song Table</div>
      <aside>Artist</aside>
    </ContentWrapper>
  );
}

export default HomePage;
