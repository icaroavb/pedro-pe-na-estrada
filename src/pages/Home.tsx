import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import BonusRaffle from "../components/BonusRaffle";
import ExpeditionGrid from "../components/ExpeditionGrid";
import SeriesShowcase from "../components/SeriesShowcase";
import CoupleStory from "../components/CoupleStory";
import InstagramFeed from "../components/InstagramFeed";
import { expedicaoAtiva, expedicoesRealizadas } from "../data/expeditions";

export default function Home() {
  return (
    <>
      <Hero expedicao={expedicaoAtiva} />
      <HowItWorks />
      <BonusRaffle expedicao={expedicaoAtiva} />
      <ExpeditionGrid
        indice="Arquivo"
        titulo="Onde a gente já esteve"
        subtitulo="Mais de 30 países no repertório — e em cada um deles eu estava junto do grupo."
        expedicoes={expedicoesRealizadas}
      />
      <SeriesShowcase />
      <CoupleStory />
      <InstagramFeed />
    </>
  );
}
