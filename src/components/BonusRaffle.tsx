import type { Expedition } from "../data/expeditions";
import { buildWhatsAppLink } from "../lib/whatsapp";

export default function BonusRaffle({ expedicao }: { expedicao: Expedition }) {
  return (
    <section className="bleed beat-tight rule-top">
      <div className="sec-head">
        <span className="t-label">02 — Ação bônus</span>
        <h2 className="t-mid">
          Uma vaga sorteada entre quem confirmar antes do lançamento
        </h2>
        <p>
          Confirmou presença pra <strong>{expedicao.destino}</strong> antes da abertura
          oficial? Concorre a levar um acompanhante sem custo extra. Simples, informal,
          sem pegadinha — do jeito que a gente faz.
        </p>
      </div>

      <a
        className="btn btn--ghost"
        href={buildWhatsAppLink(
          `Oi Pedro! Quero confirmar presença antecipada pra ${expedicao.destino} e concorrer à vaga bônus 🎁`
        )}
        target="_blank"
        rel="noopener noreferrer"
      >
        Confirmar presença antecipada
      </a>
    </section>
  );
}
