// Language data + UI translations + Activision link localizer for Ops Update Hub.
export const LANGS = [
  { flag: '🇩🇪', label: 'Deutsch',   code: 'de',   loc: 'de' },
  { flag: '🇫🇮', label: 'English',   code: 'en',   loc: 'en' },
  { flag: '🇳🇴', label: 'English',   code: 'en',   loc: 'en' },
  { flag: '🇦🇺', label: 'English',   code: 'en',   loc: 'en' },
  { flag: '🇬🇧', label: 'English',   code: 'en',   loc: 'en' },
  { flag: '🇪🇸', label: 'Español',   code: 'es',   loc: 'es' },
  { flag: '🇱🇺', label: 'Français',  code: 'fr',   loc: 'fr' },
  { flag: '🇧🇪', label: 'Français',  code: 'fr',   loc: 'fr' },
  { flag: '🇫🇷', label: 'Français',  code: 'fr',   loc: 'fr' },
  { flag: '🇮🇹', label: 'Italiano',  code: 'it',   loc: 'it' },
  { flag: '🇧🇷', label: 'Português', code: 'pt',   loc: 'br/pt' },
  { flag: '🇯🇵', label: '日本語',     code: 'ja',   loc: 'ja' },
  { flag: '🇨🇳', label: '简体中文',   code: 'zh',   loc: 'zh' },
  { flag: '🇹🇼', label: '繁體中文',   code: 'zhTw', loc: 'tw' },
  { flag: '🇰🇷', label: '한국어',     code: 'ko',   loc: 'ko' },
];

const LOCSET = new Set(['de','en','es','fr','it','ja','ko','zh','br','pt','tw','mx','ru','pl','nl']);

function stripLocale(pathSegs) {
  const s = [...pathSegs];
  while (s.length && LOCSET.has(s[0].toLowerCase())) s.shift();
  return s;
}

// Insert the chosen locale into support.activision.com links so redirects match the language.
export function localize(url, loc) {
  try {
    const u = new URL(url);
    if (!/(^|\.)activision\.com$/.test(u.hostname)) return url;
    let segs = stripLocale(u.pathname.split('/').filter(Boolean));
    if (loc && loc !== 'en') segs = loc.split('/').concat(segs);
    u.pathname = '/' + segs.join('/');
    return u.toString();
  } catch (e) { return url; }
}

export const T = {
  de: { feedLive:'LIVE-FEED', eyebrow:'INTEL / ALLE TITEL / PATCH & FORTSCHRITT',
    para:'Jedes offizielle Update der Black-Ops- und Modern-Warfare-Reihen — von Black Ops (2010) bis Black Ops 7. Patchnotes, Ränge & Prestige, Matchmaking & Stufenbelohnungen, titelübergreifende Belohnungen, Roadmaps und direkte Fehlermeldung.',
    disclaimer:'Inoffizieller, von Fans erstellter Aggregator. Nicht mit Activision verbunden. Links führen zum offiziellen Support.',
    statTracked:'Erfasste Titel', statLive:'Aktive Titel', statCoverage:'Abdeckung',
    fAll:'ALLE', fLive:'AKTIV', fLegacy:'ARCHIV', fUpcoming:'DEMNÄCHST',
    searchPh:'TITEL / JAHR / STUDIO SUCHEN', inView:'TITEL ANGEZEIGT', openBriefing:'BRIEFING ÖFFNEN', knownIssues:'Bekannte Probleme',
    tPatch:'PATCHNOTES', tRanks:'RÄNGE & PRESTIGE', tRewards:'BELOHNUNGEN', tRoadmap:'ROADMAP', tFeedback:'FEEDBACK & FEHLER',
    managingTitle:'Verwalte dein Activision-Konto', managingSub:'Sichere und verwalte das Konto, das deinen Fortschritt, Käufe und Crossplay verbindet. Jede Karte verlinkt den passenden offiziellen Activision-Support-Artikel.',
    accountOps:'KONTO-OPS', seasonUpdates:'SEASON-UPDATES', securityH:'SICHERHEIT & DURCHSETZUNG', policyH:'RICHTLINIEN', createdBy:'ERSTELLT VON', chooseLang:'SPRACHE WÄHLEN' },
  es: { feedLive:'FEED EN VIVO', eyebrow:'INTEL / TODOS LOS TÍTULOS / PARCHE Y PROGRESO',
    para:'Cada actualización oficial de las sagas Black Ops y Modern Warfare — desde Black Ops (2010) hasta Black Ops 7. Notas del parche, rangos y prestigio, emparejamiento y recompensas por niveles, recompensas entre títulos, hojas de ruta y reporte directo de errores.',
    disclaimer:'Agregador no oficial creado por fans. Sin afiliación con Activision. Los enlaces llevan al soporte oficial.',
    statTracked:'Títulos seguidos', statLive:'Títulos activos', statCoverage:'Cobertura',
    fAll:'TODOS', fLive:'ACTIVO', fLegacy:'CLÁSICO', fUpcoming:'PRÓXIMO',
    searchPh:'BUSCAR TÍTULO / AÑO / ESTUDIO', inView:'TÍTULO(S) EN VISTA', openBriefing:'ABRIR INFORME', knownIssues:'Problemas conocidos',
    tPatch:'NOTAS DEL PARCHE', tRanks:'RANGOS Y PRESTIGIO', tRewards:'RECOMPENSAS', tRoadmap:'HOJA DE RUTA', tFeedback:'COMENTARIOS Y ERRORES',
    managingTitle:'Gestiona tu cuenta de Activision', managingSub:'Protege y gestiona la cuenta que une tu progreso, compras y juego cruzado. Cada tarjeta enlaza al artículo oficial de soporte de Activision correspondiente.',
    accountOps:'OPS DE CUENTA', seasonUpdates:'ACTUALIZACIONES DE TEMPORADA', securityH:'SEGURIDAD Y SANCIONES', policyH:'POLÍTICAS Y NORMAS', createdBy:'CREADO POR', chooseLang:'ELEGIR IDIOMA' },
  fr: { feedLive:'FLUX EN DIRECT', eyebrow:'INTEL / TOUS LES TITRES / MISE À JOUR & PROGRESSION',
    para:'Chaque mise à jour officielle des séries Black Ops et Modern Warfare — de Black Ops (2010) à Black Ops 7. Notes de patch, rangs et prestige, matchmaking et récompenses de palier, récompenses inter-titres, feuilles de route et signalement de bugs.',
    disclaimer:'Agrégateur non officiel créé par des fans. Sans lien avec Activision. Les liens mènent au support officiel.',
    statTracked:'Titres suivis', statLive:'Titres actifs', statCoverage:'Couverture',
    fAll:'TOUS', fLive:'ACTIF', fLegacy:'CLASSIQUE', fUpcoming:'À VENIR',
    searchPh:'RECHERCHER TITRE / ANNÉE / STUDIO', inView:'TITRE(S) AFFICHÉ(S)', openBriefing:'OUVRIR LE BRIEFING', knownIssues:'Problèmes connus',
    tPatch:'NOTES DE PATCH', tRanks:'RANGS & PRESTIGE', tRewards:'RÉCOMPENSES', tRoadmap:'FEUILLE DE ROUTE', tFeedback:'AVIS & BUGS',
    managingTitle:'Gérer votre compte Activision', managingSub:'Sécurisez et gérez le compte qui relie votre progression, vos achats et le cross-play. Chaque carte renvoie à l\u2019article d\u2019assistance officiel d\u2019Activision.',
    accountOps:'OPS DE COMPTE', seasonUpdates:'MISES À JOUR DE SAISON', securityH:'SÉCURITÉ & SANCTIONS', policyH:'RÈGLES & POLITIQUES', createdBy:'CRÉÉ PAR', chooseLang:'CHOISIR LA LANGUE' },
  it: { feedLive:'FEED IN DIRETTA', eyebrow:'INTEL / TUTTI I TITOLI / PATCH E PROGRESSI',
    para:'Ogni aggiornamento ufficiale delle serie Black Ops e Modern Warfare — da Black Ops (2010) a Black Ops 7. Note della patch, gradi e prestigio, matchmaking e ricompense a livelli, ricompense tra titoli, roadmap e segnalazione diretta dei bug.',
    disclaimer:'Aggregatore non ufficiale creato dai fan. Non affiliato con Activision. I link portano al supporto ufficiale.',
    statTracked:'Titoli seguiti', statLive:'Titoli attivi', statCoverage:'Copertura',
    fAll:'TUTTI', fLive:'ATTIVO', fLegacy:'CLASSICO', fUpcoming:'IN ARRIVO',
    searchPh:'CERCA TITOLO / ANNO / STUDIO', inView:'TITOLO/I IN VISTA', openBriefing:'APRI BRIEFING', knownIssues:'Problemi noti',
    tPatch:'NOTE DELLA PATCH', tRanks:'GRADI E PRESTIGIO', tRewards:'RICOMPENSE', tRoadmap:'ROADMAP', tFeedback:'FEEDBACK E BUG',
    managingTitle:'Gestisci il tuo account Activision', managingSub:'Proteggi e gestisci l\u2019account che collega progressi, acquisti e cross-play. Ogni scheda rimanda all\u2019articolo di supporto ufficiale di Activision.',
    accountOps:'OPS ACCOUNT', seasonUpdates:'AGGIORNAMENTI STAGIONALI', securityH:'SICUREZZA E SANZIONI', policyH:'REGOLE E POLITICHE', createdBy:'CREATO DA', chooseLang:'SCEGLI LINGUA' },
  pt: { feedLive:'FEED AO VIVO', eyebrow:'INTEL / TODOS OS TÍTULOS / PATCH E PROGRESSO',
    para:'Cada atualização oficial das séries Black Ops e Modern Warfare — de Black Ops (2010) até Black Ops 7. Notas de patch, patentes e prestígio, matchmaking e recompensas por nível, recompensas entre títulos, roadmaps e reporte direto de bugs.',
    disclaimer:'Agregador não oficial criado por fãs. Sem afiliação com a Activision. Os links levam ao suporte oficial.',
    statTracked:'Títulos acompanhados', statLive:'Títulos ativos', statCoverage:'Cobertura',
    fAll:'TODOS', fLive:'ATIVO', fLegacy:'CLÁSSICO', fUpcoming:'EM BREVE',
    searchPh:'BUSCAR TÍTULO / ANO / ESTÚDIO', inView:'TÍTULO(S) EM EXIBIÇÃO', openBriefing:'ABRIR BRIEFING', knownIssues:'Problemas conhecidos',
    tPatch:'NOTAS DE PATCH', tRanks:'PATENTES E PRESTÍGIO', tRewards:'RECOMPENSAS', tRoadmap:'ROADMAP', tFeedback:'FEEDBACK E BUGS',
    managingTitle:'Gerencie sua conta Activision', managingSub:'Proteja e gerencie a conta que une seu progresso, compras e crossplay. Cada cartão leva ao artigo de suporte oficial da Activision.',
    accountOps:'OPS DA CONTA', seasonUpdates:'ATUALIZAÇÕES DA TEMPORADA', securityH:'SEGURANÇA E PENALIDADES', policyH:'POLÍTICAS E DIRETRIZES', createdBy:'CRIADO POR', chooseLang:'ESCOLHER IDIOMA' },
  ja: { feedLive:'ライブフィード', eyebrow:'情報 / 全タイトル / アップデート＆進行',
    para:'Black OpsおよびModern Warfareシリーズの公式アップデートを網羅 — Black Ops（2010）からBlack Ops 7まで。パッチノート、階級とプレステージ、マッチメイキングと段階報酬、タイトル間報酬、ロードマップ、バグ報告。',
    disclaimer:'非公式のファン制作アグリゲーターです。Activisionとは関係ありません。リンクは公式サポートに移動します。',
    statTracked:'追跡タイトル', statLive:'稼働中タイトル', statCoverage:'対応範囲',
    fAll:'すべて', fLive:'稼働中', fLegacy:'旧作', fUpcoming:'近日',
    searchPh:'タイトル / 年 / スタジオを検索', inView:'件表示中', openBriefing:'ブリーフィングを開く', knownIssues:'既知の問題',
    tPatch:'パッチノート', tRanks:'階級とプレステージ', tRewards:'報酬サポート', tRoadmap:'ロードマップ', tFeedback:'フィードバックと不具合',
    managingTitle:'Activisionアカウントの管理', managingSub:'進行状況、購入、クロスプレイをつなぐアカウントを保護・管理します。各カードは該当する公式Activisionサポート記事へリンクします。',
    accountOps:'アカウント操作', seasonUpdates:'シーズンアップデート', securityH:'セキュリティと処分', policyH:'ポリシーとガイドライン', createdBy:'制作', chooseLang:'言語を選択' },
  zh: { feedLive:'实时动态', eyebrow:'情报 / 所有作品 / 更新与进度',
    para:'涵盖《黑色行动》与《现代战争》系列的所有官方更新——从《黑色行动》(2010)到《黑色行动7》。补丁说明、军衔与威望、匹配与阶段奖励、跨作品奖励、路线图以及直接的错误反馈。',
    disclaimer:'非官方粉丝制作的聚合站。与 Activision 无关。链接指向官方支持。',
    statTracked:'收录作品', statLive:'活跃作品', statCoverage:'覆盖范围',
    fAll:'全部', fLive:'活跃', fLegacy:'经典', fUpcoming:'即将推出',
    searchPh:'搜索作品 / 年份 / 工作室', inView:'个作品显示中', openBriefing:'打开简报', knownIssues:'已知问题',
    tPatch:'补丁说明', tRanks:'军衔与威望', tRewards:'奖励支持', tRoadmap:'路线图', tFeedback:'反馈与报错',
    managingTitle:'管理你的 Activision 账户', managingSub:'保护并管理连接你的进度、购买和跨平台游玩的账户。每张卡片都链接到相应的官方 Activision 支持文章。',
    accountOps:'账户操作', seasonUpdates:'赛季更新', securityH:'安全与处罚', policyH:'政策与准则', createdBy:'制作者', chooseLang:'选择语言' },
  zhTw: { feedLive:'即時動態', eyebrow:'情報 / 所有作品 / 更新與進度',
    para:'涵蓋《黑色行動》與《現代戰爭》系列的所有官方更新——從《黑色行動》(2010)到《黑色行動7》。修補說明、軍階與威望、配對與階段獎勵、跨作品獎勵、路線圖以及直接的錯誤回報。',
    disclaimer:'非官方粉絲製作的彙整站。與 Activision 無關。連結指向官方支援。',
    statTracked:'收錄作品', statLive:'進行中作品', statCoverage:'涵蓋範圍',
    fAll:'全部', fLive:'進行中', fLegacy:'經典', fUpcoming:'即將推出',
    searchPh:'搜尋作品 / 年份 / 工作室', inView:'個作品顯示中', openBriefing:'開啟簡報', knownIssues:'已知問題',
    tPatch:'修補說明', tRanks:'軍階與威望', tRewards:'獎勵支援', tRoadmap:'路線圖', tFeedback:'回饋與錯誤',
    managingTitle:'管理你的 Activision 帳戶', managingSub:'保護並管理連接你的進度、購買與跨平台遊玩的帳戶。每張卡片都連結到相應的官方 Activision 支援文章。',
    accountOps:'帳戶操作', seasonUpdates:'賽季更新', securityH:'安全與處分', policyH:'政策與準則', createdBy:'製作者', chooseLang:'選擇語言' },
  ko: { feedLive:'실시간 피드', eyebrow:'정보 / 전체 타이틀 / 패치 & 진행',
    para:'블랙 옵스와 모던 워페어 시리즈의 모든 공식 업데이트 — 블랙 옵스(2010)부터 블랙 옵스 7까지. 패치 노트, 계급과 프레스티지, 매치메이킹과 단계 보상, 타이틀 간 보상, 로드맵, 직접 버그 신고.',
    disclaimer:'비공식 팬 제작 애그리게이터입니다. Activision과 무관합니다. 링크는 공식 지원으로 연결됩니다.',
    statTracked:'추적 타이틀', statLive:'활성 타이틀', statCoverage:'지원 범위',
    fAll:'전체', fLive:'활성', fLegacy:'레거시', fUpcoming:'출시 예정',
    searchPh:'타이틀 / 연도 / 스튜디오 검색', inView:'개 타이틀 표시 중', openBriefing:'브리핑 열기', knownIssues:'알려진 문제',
    tPatch:'패치 노트', tRanks:'계급 & 프레스티지', tRewards:'보상 지원', tRoadmap:'로드맵', tFeedback:'피드백 & 버그',
    managingTitle:'Activision 계정 관리', managingSub:'진행 상황, 구매, 크로스플레이를 연결하는 계정을 보호하고 관리하세요. 각 카드는 해당 공식 Activision 지원 문서로 연결됩니다.',
    accountOps:'계정 작업', seasonUpdates:'시즌 업데이트', securityH:'보안 및 제재', policyH:'정책 및 지침', createdBy:'제작', chooseLang:'언어 선택' },
};
