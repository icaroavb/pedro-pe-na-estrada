import type { Expedition } from "../data/expeditions";
import ExpeditionCard from "./ExpeditionCard";

interface ExpeditionGridProps {
  indice: string;
  titulo: string;
  subtitulo?: string;
  expedicoes: Expedition[];
}

export default function ExpeditionGrid({
  indice,
  titulo,
  subtitulo,
  expedicoes,
}: ExpeditionGridProps) {
  return (
    <section className="bleed beat-tight rule-top">
      <div className="sec-head">
        <span className="t-label">{indice}</span>
        <h2 className="t-big">{titulo}</h2>
        {subtitulo && <p>{subtitulo}</p>}
      </div>

      <div className="rail">
        {expedicoes.map((exp) => (
          <ExpeditionCard key={exp.slug} expedicao={exp} />
        ))}
      </div>
    </section>
  );
}
