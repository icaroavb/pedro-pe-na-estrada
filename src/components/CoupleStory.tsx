import fotoLanternas from "../assets/instagram/naestrada_jan2026_epsurpresa.jpg";

export default function CoupleStory() {
  return (
    <section className="bleed beat-open rule-top">
      <div className="couple">
        <div
          className="couple-still reveal"
          style={{ backgroundImage: `url(${fotoLanternas})` }}
        />

        <div className="couple-copy">
          <span className="t-label">04 — @naestrada.trips</span>
          <h2 className="t-mid">E se desse pra dar a volta ao mundo sem ser rico?</h2>
          <p>
            Eu e a Nara resolvemos provar na prática. 50 dias, um mundo inteiro, quase
            nenhum dinheiro sobrando. E no meio disso tudo... a gente pode acabar
            casando 👀
          </p>
          <p className="couple-fine">
            Não é uma expedição pra vender vaga. É a prova de que funciona — a gente
            vive exatamente o que vende pro grupo.
          </p>
          <a
            className="btn btn--ghost"
            href="https://instagram.com/naestrada.trips"
            target="_blank"
            rel="noopener noreferrer"
          >
            Seguir a viagem
          </a>
        </div>
      </div>
    </section>
  );
}
