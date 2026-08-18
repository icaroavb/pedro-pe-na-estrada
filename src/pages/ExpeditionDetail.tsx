import { Link, useParams } from "react-router-dom";
import { getExpedicaoBySlug } from "../data/expeditions";
import { buildExpeditionWhatsAppLink } from "../lib/whatsapp";

export default function ExpeditionDetail() {
  const { slug } = useParams<{ slug: string }>();
  const expedicao = slug ? getExpedicaoBySlug(slug) : undefined;

  if (!expedicao) {
    return (
      <div className="notfound bleed">
        <h1 className="t-big">Essa expedição não existe</h1>
        <Link className="btn btn--ghost" to="/">
          Voltar pro início
        </Link>
      </div>
    );
  }

  return (
    <article>
      <div className="detail-top bleed">
        <div className="detail-plate" style={{ backgroundImage: `url(${expedicao.imagem})` }} />
        <Link to="/" className="back">
          ← Voltar
        </Link>
        <span className="t-label">{expedicao.dataViagem}</span>
        <h1 className="t-big">{expedicao.destino}</h1>
      </div>

      <div className="detail-body bleed beat-tight">
        <p className="detail-lede">{expedicao.resumo}</p>
        <p>{expedicao.descricao}</p>

        <span className="t-label">O que está incluso</span>
        <ul className="manifest">
          {expedicao.inclui.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        {expedicao.ativa && (
          <div className="spec">
            <span className="t-label">Vagas restantes</span>
            <b>
              {expedicao.vagasRestantes}/{expedicao.vagasTotais}
            </b>
          </div>
        )}

        <div className="hero-actions">
          <a
            className="btn btn--zap"
            href={buildExpeditionWhatsAppLink(expedicao.destino)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {expedicao.ativa ? "Quero minha vaga" : "Perguntar sobre a próxima"}
          </a>
        </div>
      </div>
    </article>
  );
}
