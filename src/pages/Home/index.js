import { useEffect, useState } from "react";
import { SectionTitle } from "components/ui/Typography";
import { Hero, Genres, Artists } from "components/HomePage";
import { GreyTitle, TrendsAndArtistsSection, Aside } from "./styled";
import { toast } from "react-toastify";
import { loadCharts, loadTopRadioTracks } from "services/api";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import TracksTable from "components/TracksTable";

function Home() {
  const [chart, setChart] = useState();
  const [radio, setRadio] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        const chart = await loadCharts();
        const radio = await loadTopRadioTracks();
        setChart(chart);
        setRadio(radio);
      } catch (err) {
        toast.error(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  return (
    <main>
      <Hero tracks={radio} />
      <Genres />
      <TrendsAndArtistsSection>
        <div>
          <GreyTitle>Global</GreyTitle>
          <SectionTitle>Tranding right now</SectionTitle>
          <TracksTable tracks={chart?.tracks?.data} isLoading={isLoading} />
        </div>
        <Aside>
          <GreyTitle>Global</GreyTitle>
          <SectionTitle>Top Artists</SectionTitle>
          <Artists isLoading={isLoading} artists={chart?.artists.data} />
        </Aside>
      </TrendsAndArtistsSection>
    </main>
  );
}

export default Home;
