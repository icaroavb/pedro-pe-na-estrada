import { Link } from "react-router-dom";
import type { Expedition } from "../data/expeditions";

export default function ExpeditionCard({ expedicao }: { expedicao: Expedition }) {
  return (
    <Link to={`/expedicao/${expedicao.slug}`} className="reel">
      <div className="reel-plate" style={{ backgroundImage: `url(${expedicao.imagem})` }} />
      {expedicao.ativa && <span className="reel-flag">Vagas abertas</span>}
      <span className="t-label">{expedicao.dataViagem}</span>
      <h3>{expedicao.destino}</h3>
    </Link>
  );
}
