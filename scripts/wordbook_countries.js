/**
 * 위키아 국가 페이지에 있는 테이블을 보기 쉬운 마크다운 서식으로
 * 변환해주는 스크립트입니다.
 * 위키아 페이지에서 F12 로 콘솔을 열고 스크립트 전체를  붙여 넣은 뒤
 * getCountries() 를 입력해 출력할 수 있습니다.
 * 
 * https://kaiserreich.fandom.com/wiki/Nations_of_the_World
 */

function getCountries () {
  const countries = []
  const locale = {
    AET: '그라이프발트 백국',
    ANG: '앵그리버 남국',
    ARA: '아란티가 남국',
    AVI: '아비안 가문',
    BAK: '바카라',
    BAN: '블랙록 도적단',
    BAR: '바라드 마권정부',
    BOI: '그리핀스톤 왕국',
    BRF: '브로드펠트 왕국',
    BRZ: '브론즈힐 백국',
    BUF: '버팔로 부족정',
    CHN: '체인질링 랜드',
    CRY: '크리스탈 왕국',
    CYA: '사이아놀리시아 백국',
    DED: '드레드 리그',
    DEP: '데포니아',
    DMT: '다이아몬드 마운틴',
    DRG: '드래곤 부족',
    EQC: '뉴메어랜드 연방',
    EQS: '이퀘스트리아',
    ERI: '에리에 가문',
    EYR: '이리에 가문',
    FAL: '팔코르 후국',
    FAR: '파브룩',
    FAT: '그리포니아 공화국',
    FEA: '페디시아 대공국',
    FEZ: '페제라 군구',
    FIR: '피어트리 마을',
    FLO: '플로웨나 시',
    FRE: '포나이드헨',
    FRN: '프란미스트리아 백국',
    GFF: '그리폰 프론티어',
    GRF: '노바 그리포니아',
    GRI: '그리포니아 제국',
    GRU: '그리퍼스 자유마을',
    GRW: '그리폰 해방군',
    GRY: '그리피안 호스트',
    HAU: '하우크란트',
    HEL: '아델라트 백국',
    HLQ: '헬퀼 기사단',
    HLR: '아크튜러스 기사단',
    JAK: '재키 부족',
    JEB: '릴라 공국',
    JER: '아퀼레이아 왕국',
    JFT: '프리데아 남국',
    JRR: '웨스트킵 변경백국',
    KAT: '카테린 후국',
    LAK: '루메어 남국',
    LCT: '레이크 시티',
    LNS: '롱소드 백국',
    LUS: '루시 후국',
    MIT: '아스테리온',
    MNC: '선스트라이커 부족',
    NCH: '그레네클리프',
    NIM: '님부시아',
    NTR: '북부 부족',
    OLE: '올레니아',
    OLV: '네트 래유어 랜드',
    PLB: '북극곰 공동체',
    PNG: '핑랜드 왕국',
    POM: '포모바라',
    PYT: '그라이펜마르센',
    RCT: '리버 공화국',
    ROU: '로마우 자유시',
    SIC: '시카메온 신성 연방',
    SRS: '스카이나비아 사회주의 공화국',
    STG: '스탈리온그라드',
    STL: '우리 마을',
    STW: '스트로베리 공국',
    TAL: '탈로스 공국',
    TRD: '스카이폴 무역연합',
    VED: '베디나 왕국',
    VIN: '비노비아 공국',
    WAT: '워터타운',
    WIT: '비텐란트',
    WNG: '윙바르디 왕국',
    YAK: '야크야키스탄',
    YAL: '예일 학술국',
    ZES: '늄바 야 카스카지니',
  }

  for (let country of document.querySelectorAll('.wikitable.sortable tr')) {
    // 표 헤더 아이템 제외
    if (!country.hasAttribute('style')) {
      continue
    }
  
    // NodeList suck
    const items = []
    for (let item of country.querySelectorAll('td')) {
      items.push(item)
    }

    const code = items[1].innerText
    const name = items[0].innerText
  
    countries.push({
      code,
      name,
      name_ko: locale[code] ? locale[code] : name,
      flag: items[0].querySelector('img').dataset.src
    })
  }
  
  return countries
    .sort((a, b) => a.code.localeCompare(b.code))
    .map(i => `- ![${i.code} flag](${i.flag}) \`${i.code}\` - ${i.name_ko}`)
    .join('\n')
}
