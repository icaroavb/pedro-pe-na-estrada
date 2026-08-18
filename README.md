# Pê na Estrada

Protótipo do site do **Pê na Estrada** (@pedrosantt_oficial) — viagens e expedições
internacionais em grupo. Vite + React + TypeScript, pensado para ampliar o alcance da
marca sem perder a proximidade que já funciona no Instagram: o Pedro embarca junto com
o grupo, a reserva é 100% pelo WhatsApp, e cada expedição tem vagas limitadas.

## Rodando localmente

```bash
npm install
npm run dev
```

Abre em `http://localhost:5173`.

Para conferir a build de produção localmente:

```bash
npm run build
npm run preview
```

## Deploy (GitHub Pages)

O deploy é automático via GitHub Actions ([.github/workflows/deploy.yml](.github/workflows/deploy.yml)):
todo push na branch `main` builda o projeto e publica em GitHub Pages.

> **Passo obrigatório, uma vez só:** em **Settings → Pages → Build and deployment →
> Source**, selecionar **GitHub Actions** (não "Deploy from a branch"). Sem isso o job
> de build passa mas o de deploy falha com `HttpError: Not Found` / status 404 —
> o Pages precisa estar habilitado antes do primeiro deploy.

O site fica em `https://<usuario>.github.io/pedro-pe-na-estrada/`. O `base` já está
configurado em [vite.config.ts](vite.config.ts) e as rotas usam `HashRouter`
(`react-router-dom`) porque o GitHub Pages não suporta rewrite de rotas no servidor.

## O que configurar antes de divulgar o link

- **Número de WhatsApp**: trocar o placeholder em [src/lib/whatsapp.ts](src/lib/whatsapp.ts)
  (`WHATSAPP_NUMBER`) pelo número real do Pedro.
- **Fotos**: as imagens em `src/assets/instagram/` são thumbnails reais baixadas do
  Instagram público (@pedrosantt_oficial e @naestrada.trips) — ver seção "Créditos de
  imagem" abaixo. Trocar por posts mais recentes sempre que o Pedro quiser atualizar.
- **Depoimentos**: a seção foi **removida** da Home de propósito — não existiam
  depoimentos reais disponíveis no momento da criação do site, e um texto fabricado
  soa falso pra quem já segue o Pedro. O componente `src/components/Testimonials.tsx`
  está pronto e só precisa ser reativado em [src/pages/Home.tsx](src/pages/Home.tsx)
  quando houver prints reais de DM/comentários (com autorização de quem escreveu).
- **Expedições**: destino ativo, vagas e datas ficam em
  [src/data/expeditions.ts](src/data/expeditions.ts).

## Créditos de imagem

As fotos em `src/assets/instagram/` vêm de posts públicos de @pedrosantt_oficial e
@naestrada.trips no Instagram, baixadas diretamente das thumbnails servidas pelo CDN
público do Instagram (não há scraping de conteúdo privado nem uso de API não-oficial).
São usadas aqui como material da própria marca, no próprio site da marca — não para
redistribuição a terceiros. Uma das fotos (`naestrada_jan2026_epsurpresa.jpg`) mostra
a Nara (@narabeeatriz), pessoa real e parceira do Pedro nesse conteúdo; se em algum
momento ela quiser que essa foto específica saia do site, é só trocar pelo arquivo
`naestrada_may2026_d.jpg` (mesma cena de casal, sem esse enquadramento) ou remover a
seção `CoupleStory.tsx`.

## Estrutura

```
src/
  assets/instagram/  fotos reais baixadas do Instagram (ver Créditos de imagem)
  data/              conteúdo do site (expedições) — hoje é código, não CMS
  lib/               helpers (link de WhatsApp)
  components/        peças de UI reutilizáveis
  pages/             Home e página de detalhe de expedição
```

## Premissas futuras / próximos passos

Este é um protótipo estático pensado para validar a ideia rápido no GitHub Pages. Para
uma versão de produção, os pontos abaixo merecem investimento:

- **CMS headless** (ex.: Sanity, ou até uma planilha/Notion como fonte de dados): hoje
  quem atualiza destinos e vagas precisa mexer em código (`src/data/*.ts`) e fazer novo
  deploy. Um painel simples daria autonomia pro Pedro editar isso sozinho.
- **Depoimentos reais**: coletar prints/citações reais (com autorização) e reativar
  `Testimonials.tsx` na Home — ver seção acima.
- **Feed dinâmico do Instagram**: hoje `InstagramFeed.tsx` mostra fotos reais mas fixas
  (baixadas manualmente, ver Créditos de imagem). Uma integração com a Graph API da Meta
  (exige app aprovado pelo Pedro) traria o feed sempre atualizado automaticamente, sem
  precisar rebaixar imagens à mão.
- **Captura de leads**: hoje todo CTA vai direto pro WhatsApp, sem formulário. Se o
  volume crescer, vale considerar um formulário rápido (nome + telefone) antes do
  redirecionamento, para o Pedro ter uma lista de contatos própria (não depender só do
  histórico do WhatsApp/Instagram).
- **Domínio próprio + analytics**: registrar um domínio (ex. penaestrada.com.br) e
  adicionar Google Analytics / Meta Pixel para medir de fato quanto o site está
  ampliando o alcance além do Instagram.
- **Unificação visual das duas contas**: a persona de marca identificou que
  @pedrosantt_oficial (tom noturno/urbano) e @naestrada.trips (tom dourado/romântico,
  documentário do casal) ainda não compartilham identidade visual. O site já usa uma
  paleta que mistura os dois (fundo noturno + dourado), mas vale formalizar isso como
  guia de marca único para redes sociais e materiais futuros.
- **Sorteio/ação promocional**: a seção "vaga bônus" no site é intencionalmente informal
  (sem certificação de loteria). Se o Pedro quiser evoluir para um sorteio oficial
  regulado (como o modelo de referência viajantesdesorte.com.br), isso exige CNPJ
  próprio, certificado de autorização SPA/MF e compliance jurídico específico — é uma
  decisão de negócio separada, não só de design de site.
