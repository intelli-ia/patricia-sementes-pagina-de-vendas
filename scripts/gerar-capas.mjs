/**
 * Gera as capas das 8 Sementes em public/sementes/0X.webp.
 *
 * As capas são desenhadas, não fotografadas: cada semente recebe um emblema de
 * traço fino sobre a mesma gramática de luz do resto da página (verde como luz,
 * fundo quase preto, grão e vinheta) e a descrição da semente impressa dentro
 * da lâmina. O título fica de fora: a galeria já o renderiza como legenda logo
 * abaixo do plano, e repeti-lo dentro da capa só criaria eco.
 *
 * O corpo do texto é dimensionado para o tamanho REAL do plano na galeria —
 * cerca de 1/3 da imagem original —, não para a imagem vista de perto.
 *
 * Uso: node --disable-warning=MODULE_TYPELESS_PACKAGE_JSON scripts/gerar-capas.mjs
 * O binário do Chrome pode ser apontado por CHROME_PATH.
 */
import { existsSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer-core';
import { SEMENTES } from '../src/lib/sementes.ts';

const RAIZ = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const SAIDA = resolve(RAIZ, 'public/sementes');

/** Proporção do plano da galeria: 700 x 900 unidades → 0.7778. */
const LARGURA = 1050;
const ALTURA = 1350;

const VERDE = '#90c3a4';

const CHROMES = [
  process.env.CHROME_PATH,
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
].filter(Boolean);

/* ── Geometria auxiliar ─────────────────────────────────────────────── */

/** Espiral de Arquimedes — usada em "Ressignifique Sua Jornada". */
function espiral(voltas = 2.6, raioFinal = 78) {
  const passos = 200;
  const pontos = [];
  for (let i = 0; i <= passos; i++) {
    const t = i / passos;
    const ang = t * voltas * Math.PI * 2 - Math.PI / 2;
    const r = t * raioFinal;
    pontos.push(`${(100 + Math.cos(ang) * r).toFixed(1)} ${(100 + Math.sin(ang) * r).toFixed(1)}`);
  }
  return `M${pontos.join(' L')}`;
}

/** Raios distribuídos em círculo — usada em "Conexão Espiritual". */
function raios(quantidade, raioInterno, raioExterno, giro = 0) {
  return Array.from({ length: quantidade }, (_, i) => {
    const ang = (i / quantidade) * Math.PI * 2 + giro;
    const x1 = 100 + Math.cos(ang) * raioInterno;
    const y1 = 100 + Math.sin(ang) * raioInterno;
    const x2 = 100 + Math.cos(ang) * raioExterno;
    const y2 = 100 + Math.sin(ang) * raioExterno;
    return `<path d="M${x1.toFixed(1)} ${y1.toFixed(1)} L${x2.toFixed(1)} ${y2.toFixed(1)}" />`;
  }).join('');
}

/* ── Os oito emblemas ───────────────────────────────────────────────── */

const EMBLEMAS = [
  // 01 · O Despertar — o sol que rompe a linha do horizonte.
  `<path d="M34 132 H166" opacity=".5" />
   <path d="M64 132 A36 36 0 0 1 136 132" />
   <path d="M100 62 V42" /><path d="M62 76 L50 62" /><path d="M138 76 L150 62" />
   <path d="M44 104 H26" opacity=".7" /><path d="M156 104 H174" opacity=".7" />`,

  // 02 · A Travessia — duas margens e o arco entre elas.
  `<path d="M24 142 H62" opacity=".5" /><path d="M138 142 H176" opacity=".5" />
   <path d="M62 142 C78 66 122 66 138 142" />
   <path d="M62 142 V168" opacity=".35" /><path d="M138 142 V168" opacity=".35" />
   <circle cx="100" cy="64" r="5.5" />`,

  // 03 · O Poder do Merecimento — a taça aberta que recebe.
  `<path d="M54 74 H146" />
   <path d="M60 74 C60 116 78 132 100 132 C122 132 140 116 140 74" />
   <path d="M100 132 V160" /><path d="M76 166 H124" />
   <path d="M100 54 V32" opacity=".7" />
   <path d="M74 60 L62 42" opacity=".55" /><path d="M126 60 L138 42" opacity=".55" />`,

  // 04 · Seu Ecossistema — os nós que sustentam ou limitam.
  `<path d="M93.7 67.7 L60.3 108.3" opacity=".6" />
   <path d="M106.3 67.7 L139.7 108.3" opacity=".6" />
   <path d="M61.9 122.2 L92.1 145.8" opacity=".6" />
   <path d="M138.1 122.2 L107.9 145.8" opacity=".6" />
   <path d="M64 116 H136" opacity=".6" />
   <circle cx="100" cy="60" r="10" /><circle cx="54" cy="116" r="10" />
   <circle cx="146" cy="116" r="10" /><circle cx="100" cy="152" r="10" />`,

  // 05 · Mulheres, Prosperidade e Dinheiro — o broto que nasce da moeda.
  `<circle cx="100" cy="134" r="44" /><circle cx="100" cy="134" r="33" opacity=".38" />
   <path d="M100 90 V32" />
   <path d="M100 74 C78 74 68 62 66 44 C88 44 98 56 100 74 Z" opacity=".9" />
   <path d="M100 58 C122 58 132 46 134 28 C112 28 102 40 100 58 Z" opacity=".9" />`,

  // 06 · Ressignifique Sua Jornada — o mesmo caminho, em outro raio.
  `<path d="${espiral()}" />
   <circle cx="100" cy="22" r="4.5" />`,

  // 07 · Conexão Espiritual — o eixo e o que irradia dele.
  `<circle cx="100" cy="100" r="28" />
   <circle cx="100" cy="100" r="44" opacity=".3" />
   ${raios(8, 52, 76)}
   ${raios(8, 58, 66, Math.PI / 8)}`,

  // 08 · Herdeira de Si Mesma — o que se recebe abaixo, o que se transmite acima.
  `<path d="M100 26 V174" />
   <path d="M100 74 C74 74 60 60 54 40" /><path d="M100 96 C126 96 140 82 146 62" />
   <path d="M100 52 C80 52 70 42 64 26" opacity=".55" />
   <path d="M100 126 C74 126 60 140 54 160" opacity=".6" />
   <path d="M100 104 C126 104 140 118 146 138" opacity=".6" />
   <path d="M100 148 C80 148 70 158 64 174" opacity=".4" />`,
];

/**
 * Correção vertical por emblema, em unidades do viewBox. Nem todo desenho é
 * simétrico em torno de y=100 — o sol nascente vive no alto, a ponte no baixo —
 * e sem isso o traço fica descentralizado dentro do anel.
 */
const AJUSTES = [14, -16, 0, -6, -3, 0, 0, 0];

/** Cada capa recebe a luz num ponto diferente — nenhuma repete a outra. */
const LUZES = [
  ['50%', '8%'], ['18%', '26%'], ['82%', '20%'], ['30%', '78%'],
  ['72%', '72%'], ['50%', '96%'], ['50%', '38%'], ['12%', '58%'],
];

/* ── Página que vira imagem ─────────────────────────────────────────── */

const GRAO =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='240'%3E" +
  "%3Cfilter id='r'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.82' numOctaves='4'/%3E" +
  "%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23r)'/%3E%3C/svg%3E";

/** Marcas de canto: dão à lâmina o ar de placa gravada, não de card genérico. */
const CANTOS = ['tl', 'tr', 'bl', 'br'].map((c) => `<i class="canto ${c}"></i>`).join('');

function paginaDaCapa(index) {
  const numero = String(index + 1).padStart(2, '0');
  const [lx, ly] = LUZES[index];
  const { descricao } = SEMENTES[index];

  return `<!doctype html>
<html lang="pt-BR"><head><meta charset="utf-8">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Alegreya:wght@400;500&family=Inter:wght@300;400;600&display=swap">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body { width: ${LARGURA}px; height: ${ALTURA}px; background: #0b0c0c; }
  .capa {
    position: relative; width: ${LARGURA}px; height: ${ALTURA}px; overflow: hidden;
    display: flex; flex-direction: column; padding: 86px 92px 96px;
    background: linear-gradient(166deg, #202826 0%, #141917 44%, #0d0f0e 100%);
    font-family: Inter, system-ui, sans-serif;
  }
  .camada { position: absolute; inset: 0; pointer-events: none; }
  /* A luz muda de lugar a cada capa — é o que dá identidade a cada semente. */
  .luz { background: radial-gradient(56% 40% at ${lx} ${ly},
    rgba(144,195,164,.40) 0%, rgba(144,195,164,.12) 38%, transparent 70%); }
  .brilho { background: linear-gradient(180deg, rgba(255,255,255,.055) 0%, transparent 20%); }
  .vinheta { background: radial-gradient(132% 100% at 50% 38%,
    transparent 42%, rgba(0,0,0,.58) 100%); }
  .grao { opacity: .07; mix-blend-mode: overlay; background-image: url("${GRAO}"); }

  .moldura { position: absolute; inset: 40px; border: 1px solid rgba(255,255,255,.085); }
  .canto { position: absolute; width: 30px; height: 30px; border: 1.5px solid rgba(144,195,164,.55); }
  .canto.tl { top: -1.5px; left: -1.5px; border-right: 0; border-bottom: 0; }
  .canto.tr { top: -1.5px; right: -1.5px; border-left: 0; border-bottom: 0; }
  .canto.bl { bottom: -1.5px; left: -1.5px; border-right: 0; border-top: 0; }
  .canto.br { bottom: -1.5px; right: -1.5px; border-left: 0; border-top: 0; }

  /* Cabeçalho: rótulo à esquerda, numeral serifado à direita. */
  .topo { position: relative; display: flex; align-items: baseline; justify-content: space-between; }
  .rotulo {
    display: flex; align-items: center; gap: 16px;
    font-size: 21px; font-weight: 600; letter-spacing: .36em; text-transform: uppercase;
    color: rgba(168,212,184,.72);
  }
  .rotulo i { display: block; width: 46px; height: 1px; background: rgba(144,195,164,.55); }
  .numero {
    font-family: Alegreya, Georgia, serif; font-weight: 500; font-size: 92px; line-height: .8;
    color: rgba(144,195,164,.6);
  }

  /* O miolo é centrado no espaço que sobra do cabeçalho, e emblema e bloco de
     texto têm altura FIXA: sem isso, uma copy de 4 linhas e outra de 5 deixariam
     os emblemas em alturas diferentes e o baralho perderia a unidade. */
  .miolo { position: relative; flex: 1; display: flex; flex-direction: column; justify-content: center; }
  .emblema { height: 480px; display: flex; align-items: center; justify-content: center; }
  .emblema svg { width: 400px; height: 400px; filter: drop-shadow(0 0 40px rgba(144,195,164,.4)); }

  .regua {
    width: 124px; height: 1px; margin: 0 auto 48px;
    background: linear-gradient(90deg, transparent, rgba(144,195,164,.85), transparent);
  }
  .texto {
    margin: 0 auto; max-width: 800px; min-height: 400px; text-align: center;
    font-size: 50px; font-weight: 300; line-height: 1.6; letter-spacing: .003em;
    color: rgba(255,255,255,.84); text-wrap: pretty;
  }
</style></head>
<body><div class="capa">
  <div class="camada luz"></div>
  <div class="camada brilho"></div>

  <div class="topo">
    <span class="rotulo"><i></i>Semente</span>
    <span class="numero">${numero}</span>
  </div>

  <div class="miolo">
    <div class="emblema">
    <svg viewBox="0 0 200 200" fill="none" stroke="${VERDE}" stroke-width="2.9"
         stroke-linecap="round" stroke-linejoin="round">
      <circle cx="100" cy="100" r="92" opacity=".26" />
      <g transform="translate(0 ${AJUSTES[index]})">${EMBLEMAS[index]}</g>
    </svg>
    </div>

    <div class="regua"></div>
    <p class="texto">${descricao}</p>
  </div>

  <div class="moldura">${CANTOS}</div>
  <div class="camada vinheta"></div>
  <div class="camada grao"></div>
</div></body></html>`;
}

/* ── Execução ───────────────────────────────────────────────────────── */

const chrome = CHROMES.find((caminho) => existsSync(caminho));
if (!chrome) {
  console.error('Chrome não encontrado. Aponte o binário com CHROME_PATH.');
  process.exit(1);
}

mkdirSync(SAIDA, { recursive: true });

const navegador = await puppeteer.launch({ executablePath: chrome, headless: true });
try {
  const pagina = await navegador.newPage();
  await pagina.setViewport({ width: LARGURA, height: ALTURA, deviceScaleFactor: 1 });

  for (let i = 0; i < EMBLEMAS.length; i++) {
    // 'networkidle0' trava a partir da segunda capa: o socket do preconnect com
    // o Google Fonts fica aberto. 'load' + document.fonts.ready basta.
    await pagina.setContent(paginaDaCapa(i), { waitUntil: 'load' });
    await pagina.evaluate(() => document.fonts.ready);

    // A copy é a única coisa que varia de altura entre as capas. Se um dia ela
    // crescer a ponto de vazar a lâmina, o erro precisa aparecer aqui.
    const vazou = await pagina.evaluate(() => {
      const capa = document.querySelector('.capa');
      return capa.scrollHeight > capa.clientHeight;
    });
    if (vazou) throw new Error(`a copy da semente ${i + 1} não cabe na capa`);

    const arquivo = resolve(SAIDA, `${String(i + 1).padStart(2, '0')}.webp`);
    await pagina.screenshot({ path: arquivo, type: 'webp', quality: 92 });
    console.log(`capa ${String(i + 1).padStart(2, '0')} gerada`);
  }
} finally {
  await navegador.close();
}
