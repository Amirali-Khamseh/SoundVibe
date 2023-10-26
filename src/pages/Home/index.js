import { useEffect, useState } from "react";
import axios from "axios";
import { SectionTitle } from "components/ui/Typography";
import { Hero, Genres, Artists } from "components/HomePage";
import { ContentWrapper, GreyTitle, TrendsAndArtistsSection, Aside } from "./styled";
import { toast } from "react-toastify";
import { loadCharts } from "services/api";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import TracksTable from "components/TracksTable";

function Home() {
  const [chart, setChart] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        const data = await loadCharts();
        setChart(data);
      } catch (err) {
        toast.error(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  return (
    <ContentWrapper>
      <Hero />
      <Genres />
      <TrendsAndArtistsSection>
        <div>
          <GreyTitle>Global</GreyTitle>
          <SectionTitle>Tranding right now</SectionTitle>
          <TracksTable tracks={chart?.tracks?.data} />
        </div>
        <Aside>
          <GreyTitle>Global</GreyTitle>
          <SectionTitle>Top Artists</SectionTitle>
          <Artists isLoading={isLoading} artists={chart?.artists.data} />
        </Aside>
      </TrendsAndArtistsSection>
    </ContentWrapper>
  );
}

export default Home;
