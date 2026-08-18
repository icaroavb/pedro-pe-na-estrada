import fotoTorreEiffel from "../assets/instagram/post_photo_nov2024.jpg";
import fotoLhamasPeru from "../assets/instagram/post_7.jpg";
import fotoBarcoMar from "../assets/instagram/post_marco_aurelio_aug2026.jpg";
import fotoBigBenCarro from "../assets/instagram/naestrada_video_may2026_a.jpg";
import fotoGrupoMotos from "../assets/instagram/naestrada_apr2026_nara.jpg";

export interface Expedition {
  slug: string;
  destino: string;
  pais: string;
  imagem: string;
  precoDestaque: string;
  resumo: string;
  descricao: string;
  inclui: string[];
  vagasTotais: number;
  vagasRestantes: number;
  dataAbertura: string;
  dataViagem: string;
  ativa: boolean;
}

// Expedição em destaque no Hero — a "próxima viagem" com vagas abertas agora
export const expedicaoAtiva: Expedition = {
  slug: "franca-2026",
  destino: "França",
  pais: "França",
  imagem: fotoTorreEiffel,
  precoDestaque: "a partir de 6x sem juros",
  resumo: "Quando a cidade luz faz jus ao nome. E dessa vez você tá nela.",
  descricao:
    "Voltei pra Paris e decidi: da próxima vez levo gente comigo. 18 vagas, eu no grupo do início ao fim, e sim, vai ter foto na Torre Eiffel igualzinha à minha. Clichê? Talvez....",
  inclui: [
    "Passagens aéreas inclusas",
    "Hospedagem",
    "Eu (Pedro) viajando com o grupo, sem escapatória",
    "Grupo fechado — vagas limitadas",
  ],
  vagasTotais: 18,
  vagasRestantes: 5,
  dataAbertura: "2026-09-01T12:00:00",
  dataViagem: "Novembro/2026",
  ativa: true,
};

// Expedições já realizadas — repertório do Pedro
export const expedicoesRealizadas: Expedition[] = [
  {
    slug: "peru",
    destino: "Peru",
    pais: "Peru",
    imagem: fotoLhamasPeru,
    precoDestaque: "expedição realizada",
    resumo: "Fui tirar foto com lhama e voltei parecendo membro honorário do rebanho.",
    descricao:
      "Machu Picchu, altitude que corta o fôlego e um grupo que não parou de rir a viagem inteira.",
    inclui: ["Passagens aéreas inclusas", "Hospedagem", "Roteiro guiado por Pedro"],
    vagasTotais: 18,
    vagasRestantes: 0,
    dataAbertura: "",
    dataViagem: "Realizada",
    ativa: false,
  },
  {
    slug: "caribe",
    destino: "Caribe",
    pais: "Caribe",
    imagem: fotoBarcoMar,
    precoDestaque: "expedição realizada",
    resumo: "Mar dessa cor devia ser proibido de ser real. Mas é.",
    descricao: "Barco, sol, um amigo fazendo joinha em toda foto. A vida podia ser sempre assim.",
    inclui: ["Passagens aéreas inclusas", "Hospedagem", "Roteiro guiado por Pedro"],
    vagasTotais: 16,
    vagasRestantes: 0,
    dataAbertura: "",
    dataViagem: "Realizada",
    ativa: false,
  },
  {
    slug: "reino-unido",
    destino: "Reino Unido",
    pais: "Reino Unido",
    imagem: fotoBigBenCarro,
    precoDestaque: "expedição realizada",
    resumo: "Vendo o Big Ben de dentro do carro tipo quem não tá nem surpreso. Tava, sim.",
    descricao: "Londres sem gastar uma fortuna — e ainda sobrou dinheiro pra comprar besteira.",
    inclui: ["Passagens aéreas inclusas", "Hospedagem", "Roteiro guiado por Pedro"],
    vagasTotais: 20,
    vagasRestantes: 0,
    dataAbertura: "",
    dataViagem: "Realizada",
    ativa: false,
  },
  {
    slug: "grupo-litoral",
    destino: "Expedição em grupo",
    pais: "Brasil e além",
    imagem: fotoGrupoMotos,
    precoDestaque: "expedição realizada",
    resumo: "Chegamos 12 estranhos. Voltamos um grupo de WhatsApp que não silencia.",
    descricao: "É basicamente esse o produto: eu, você, e um bando de gente boa se conhecendo na estrada.",
    inclui: ["Passagens aéreas inclusas", "Hospedagem", "Roteiro guiado por Pedro"],
    vagasTotais: 15,
    vagasRestantes: 0,
    dataAbertura: "",
    dataViagem: "Realizada",
    ativa: false,
  },
];

export const todasExpedicoes: Expedition[] = [expedicaoAtiva, ...expedicoesRealizadas];

export function getExpedicaoBySlug(slug: string): Expedition | undefined {
  return todasExpedicoes.find((e) => e.slug === slug);
}
