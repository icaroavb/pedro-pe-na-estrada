import fotoLondres from "../assets/instagram/naestrada_may2026_c.jpg";
import fotoElefantes from "../assets/instagram/naestrada_may2026_d.jpg";

const episodios = [
  {
    tag: "EP 01",
    titulo: "Viagem Surpresa 2026",
    texto:
      "20 pessoas embarcam sem saber o destino. Só descobrem no avião. Sim, teve gente que quase chorou. De nervoso e de felicidade.",
  },
  {
    tag: "Docu-série",
    titulo: "Volta ao Mundo em 50 dias",
    texto:
      "Eu e a Nara, 20 países, quase sem dinheiro. Tem elefante, tem lanterna, tem gente se perguntando se a gente vai casar no meio da viagem.",
  },
];

export default function SeriesShowcase() {
  return (
    <section className="bleed beat-open rule-top">
      <div className="sec-head">
        <span className="t-label">03 — Séries</span>
        <h2 className="t-big">Isso aqui não é oferta. É série.</h2>
        <p>
          Vaga limitada é uma coisa. Mas o que sai dessas viagens vira episódio — e a
          maioria das pessoas chega aqui por causa deles.
        </p>
      </div>

      <div className="series-scene">
        <div className="series-sticky">
          <div className="series-still" style={{ backgroundImage: `url(${fotoLondres})` }} />
        </div>

        <div>
          {episodios.map((ep) => (
            <article className="series-ep reveal" key={ep.titulo}>
              <span className="t-label">{ep.tag}</span>
              <h3>{ep.titulo}</h3>
              <p>{ep.texto}</p>
            </article>
          ))}

          <article className="series-ep reveal">
            {/* largura limitada: o arquivo tem 361px nativos, esticar borraria */}
            <div
              className="series-still series-still--inline"
              style={{ backgroundImage: `url(${fotoElefantes})` }}
            />
          </article>
        </div>
      </div>
    </section>
  );
}
