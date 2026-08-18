const passos = [
  {
    titulo: "Manda um oi no zap",
    texto: "Sem formulário, sem enrolação. Chama e eu mesmo respondo (às vezes às 2h da manhã).",
  },
  {
    titulo: "Entra no grupo",
    texto:
      "Vaga limitada, parcela no cartão, pronto. Já fui bloqueado por gente que achou que era pegadinha.",
  },
  {
    titulo: "Eu vou junto, sério",
    texto:
      "Não desapareço depois que cai o pagamento. Tô lá, tirando foto com vocês, perdido no mapa igual todo mundo.",
  },
  {
    titulo: "Curte e posta",
    texto: "O resto é sua conta pra deixar bonita. A logística chata é problema meu.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bleed beat-open rule-top">
      <div className="sec-head">
        <span className="t-label">01 — Como funciona</span>
        <h2 className="t-big">É simples assim (sério mesmo)</h2>
      </div>

      <div className="steps">
        {passos.map((passo, i) => (
          <article className="step reveal" key={passo.titulo}>
            <span className="t-index">{String(i + 1).padStart(2, "0")}</span>
            <div>
              <h3>{passo.titulo}</h3>
              <p>{passo.texto}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
