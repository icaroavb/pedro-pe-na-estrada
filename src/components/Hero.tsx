import type { Expedition } from "../data/expeditions";
import { buildExpeditionWhatsAppLink } from "../lib/whatsapp";

export default function Hero({ expedicao }: { expedicao: Expedition }) {
  const preenchidas = expedicao.vagasTotais - expedicao.vagasRestantes;
  const progresso = (preenchidas / expedicao.vagasTotais) * 100;

  return (
    <section className="hero bleed">
      <div className="hero-plate" style={{ backgroundImage: `url(${expedicao.imagem})` }} />

      <div className="hero-body">
        <span className="t-label">Próxima expedição · vagas abertas</span>

        <h1 className="t-mega">
          Vem conhecer o mundo gastando <em>muito pouco</em>
        </h1>

        <p className="hero-lede">{expedicao.resumo}</p>

        <div className="hero-specs">
          <div className="spec-row">
            <div className="spec">
              <span className="t-label">Destino</span>
              <b>{expedicao.destino}</b>
            </div>
            <div className="spec">
              <span className="t-label">Embarque</span>
              <b>{expedicao.dataViagem}</b>
            </div>
            <div className="spec">
              <span className="t-label">Restam</span>
              <b>
                {expedicao.vagasRestantes}/{expedicao.vagasTotais}
              </b>
            </div>
          </div>

          <div className="gauge" role="presentation">
            <span style={{ width: `${progresso}%` }} />
          </div>

          <div className="hero-actions">
            <a
              className="btn btn--zap"
              href={buildExpeditionWhatsAppLink(expedicao.destino)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Quero minha vaga
            </a>
            <span className="t-label">Resposta no WhatsApp, por mim mesmo</span>
          </div>
        </div>
      </div>
    </section>
  );
}
