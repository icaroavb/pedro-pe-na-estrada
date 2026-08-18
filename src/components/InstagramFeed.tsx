import fotoBarco from "../assets/instagram/post_marco_aurelio_aug2026.jpg";
import fotoLive from "../assets/instagram/post_video_mar2025.jpg";
import fotoLondres from "../assets/instagram/naestrada_may2026_c.jpg";
import fotoGrupo from "../assets/instagram/naestrada_apr2026_nara.jpg";
import fotoLhamas from "../assets/instagram/post_7.jpg";
import fotoMoto from "../assets/instagram/naestrada_mar2026.jpg";

const PERFIL = "https://instagram.com/pedrosantt_oficial";

// Prévia real do feed — não é o site inteiro, é o convite. O resto tá rolando
// agora no Instagram. Trocar por posts mais recentes sempre que o Pedro quiser.
const fotos = [
  {
    src: fotoGrupo,
    alt: "Turma reunida nas motos, na praia",
    href: "https://www.instagram.com/p/DXj7uzOkpZs/",
  },
  {
    src: fotoLondres,
    alt: "Pedro em Londres, comprando comida de rua",
    href: "https://www.instagram.com/p/DYR_5cboYK8/",
  },
  {
    src: fotoBarco,
    alt: "Pedro e um amigo num barco, mar azul-turquesa",
    href: "https://www.instagram.com/p/Db4m2N0DhXV/?img_index=1",
  },
  {
    src: fotoLhamas,
    alt: "Pedro com lhamas no Peru",
    href: "https://www.instagram.com/p/DbZKCt_JUQf/",
  },
  {
    src: fotoMoto,
    alt: "Pôr do sol com avião cruzando o céu",
    href: "https://www.instagram.com/p/DWhtkMjCUHd/",
  },
  {
    src: fotoLive,
    alt: "Pedro gravando uma live em estúdio",
    href: "https://www.instagram.com/p/DHd7h3vxyF3/",
  },
];

export default function InstagramFeed() {
  return (
    <section className="bleed beat-open rule-top">
      <div className="rail">
        {fotos.map((foto) => (
          <a
            key={foto.src}
            href={foto.href}
            target="_blank"
            rel="noopener noreferrer"
            className="reel"
            aria-label={foto.alt}
          >
            <div className="reel-plate" style={{ backgroundImage: `url(${foto.src})` }} />
          </a>
        ))}
      </div>

      <div className="outro beat-tight">
        <span className="t-label">05 — O resto</span>
        <h2 className="t-big">Isso aqui é só um pedacinho</h2>
        <p>
          O resto tá rolando agora, ao vivo, no{" "}
          <a className="inline" href={PERFIL} target="_blank" rel="noopener noreferrer">
            @pedrosantt_oficial
          </a>
          . Bora ver?
        </p>
        <a className="btn btn--ghost" href={PERFIL} target="_blank" rel="noopener noreferrer">
          Ver tudo no Instagram
        </a>
      </div>
    </section>
  );
}
