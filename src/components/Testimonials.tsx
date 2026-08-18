// Reservado para quando houver depoimentos REAIS (prints de DM/comentários, com
// autorização de quem escreveu). Não renderizado em Home.tsx de propósito — texto
// fabricado soa falso pra quem já segue o Pedro. Ver README.md.
interface Testimonial {
  nome: string;
  destino: string;
  texto: string;
}

export default function Testimonials({ testimonials }: { testimonials: Testimonial[] }) {
  if (testimonials.length === 0) return null;

  return (
    <section className="bleed beat-open rule-top">
      <div className="sec-head">
        <span className="t-label">Quem já foi</span>
        <h2 className="t-big">Não é só a minha palavra</h2>
      </div>

      <div className="steps">
        {testimonials.map((t) => (
          <article className="step" key={t.nome}>
            <span className="t-index">“</span>
            <div>
              <p>{t.texto}</p>
              <span className="t-label">
                {t.nome} — {t.destino}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
