import Copy from "../classes/Copy"

let TEXT = new Copy({
  GET_JK: {
    en: "Get the Jack Rabbits game",
    es: "Adquiere Jack Rabbits!",
  },
  PAGE_TITLE: {
    en: "Suit Yourself Test",
    es: "Echa tus cartas",
  },
  PAGE_TITLE_DONE: {
    en: "This is your hand",
    es: "Esta es tu mano",
  },
  YOUR: {
    en: "Your ",
    es: "Tu ",
  },
  CARD_HINTS: [{
      en: "Use + and - to change the value.",
      es: "Usa + y - para cambiar el valor.",
    },
    {
      en: "Spend the pips available below.",
      es: "Ve los puntos disponibles abajo.",
    },
    {
      en: "Reduce others to increase this one.",
      es: "Reduce otra para incrementar esta.",
    },
    {
      en: "Reduce others to increase this one.",
      es: "Reduce otra para incrementar esta.",
    },
  ],
  POINTS_LEFT: {
    en: "Pips available",
    es: "Puntos disponibles",
  },
  NEXT: {
    en: "next",
    es: "continuar",
  },
  WHEN_READY: {
    en: `Increase the cards at will using their (+) buttons, and click *NEXT* when you run out of pips.`,
    es: `Distribuye los puntos para incrementar (+) el valor de las cartas a tu gusto y luego presiona *CONTINUAR*.`,
  },
  BEGIN: {
    en: "begin",
    es: "comenzar",
  },
  TIE: {
    en: `To have a definite suit, you must break the tie between $0.`,
    es: `Para para tener un símbolo definitivo, necesitas romper el empate entre $0,.`,
  },
  AND: {
    en: "and",
    es: "y",
  },
  DONE: {
    en: "done",
    es: "listo",
  },
  WHEN_DONE: {
    en: `Click *NEXT* when safistied.`,
    es: `Presiona *CONTINUAR* cuando estés satisfecho.`,
  },
  RESTART: {
    en: "Restart",
    es: "Reiniciar",
  },
  FIND_YOURS: {
    en: "Reveal your hand",
    es: "Revela tu mano",
  },
  PAGE_DESCRIPTION: {
    en: `This exercise will show the <b>suit order</b> that fits your personality. Card suits represent 4 major personality traits. Let's reveal which one you value the most.`,
    es: `Este divertido test mostrará <b>el valor de tus símbolos</b> de acuerdo a tu personalidad. Los símbolos de las cartas representan 4 grandes rasgos de la personalidad. Con esta breve interacción podrás revelar cuál valoras más.`,
  },
  PLAY_DESCRIPTION: {
    en: `After clicking *BEGIN*, you'll receive 8 points (or “pips”) to increase the cards above.`,
    es: `Después de presionar *COMENZAR*, recibirás 8 puntos parar incrementar el valor de estas cartas.`,
  },
  DESCRIPTION: {
    en: `This is how you value the 4 main personality traits shown in the cards (strength, charm, wisdom and wealth). According to this valuation, the <strong style="color:%0,">%1,</strong> or <strong style="color:%0,">%2,</strong> are your main suit. This  is the suit of %3, who focus on %4.`,
    es: `Así es como valoras los 4 principales rasgos de la personalidad en las cartas (fuerza, encanto, sabiduría y riqueza). De acuerdo con esta valoración, tu símbolo principal es el de <strong style="color:%0,">%1,</strong> or <strong style="color:$0,">%2,</strong>. Este también es el símbolo de %3, enfocandos en %4.`,
  },
  DESCRIPTION_OTHER: {
    en: `This is how %5 values the 4 main personality traits shown in the cards (strength, charm, wisdom and wealth). According to this valuation, the <strong style="color:%0,">%1,</strong> or <strong style="color:%0,">%2,</strong> are their main suit. This  is the suit of %3, who focus on %4.`,
    es: `Así es como %5 valora los 4 principales rasgos de la personalidad en las cartas (fuerza, encanto, sabiduría y riqueza). De acuerdo con esta valoración, su símbolo principal es el de <strong style="color:%0,">%1,</strong> or <strong style="color:$0,">%2,</strong>. Este también es el símbolo de %3, enfocandos en %4.`,
  },
  SHARE_HAND: {
    en: "Share your hand",
    es: "Comparte tu mano",
  },
  SHARE_MESSAGE: {
    en: "This is my hand, how I value the 4 main personality traits shown in the cards. Get to know me.",
    es: "Esta es mi mano, como valoro los 4 principales rasgos de la personalidad en las cartas. Ven a conocerme."
  },
  MAILING_LIST_TEXT: {
    en: "Join Lenino's JACK RABBITS mailing list.",
    es: "Mantente al tanto de Lenino y sus JACK RABBITS."
  },
  name: {
    en: "name",
    es: "nombre",
  },
  share: {
    en: "share",
    es: "comparte",
  },
  diamonds: {
    en: "diamonds",
    es: "diamantes",
  },
  diamonds_meaning: {
    en: "objectivity, resoursefulness and comfort",
    es: "la objetividad, la aptitud y el confort",
  },
  spades: {
    en: "spades",
    es: "picas",
  },
  spades_meaning: {
    en: "courage, determination and work",
    es: "la valentía, la determinación y el esfuerzo",
  },
  hearts: {
    en: "hearts",
    es: "corazones",
  },
  hearts_meaning: {
    en: "pleasure, freedom and art",
    es: "el placer, el arte  y la libertad",
  },
  clovers: {
    en: "clovers",
    es: "tréboles",
  },
  clovers_meaning: {
    en: "knowledge, truth and nature",
    es: "el conocimiento, la naturaleza y la verdad",
  },
  gold: {
    en: "gold",
    es: "oros",
  },
  swords: {
    en: "swords",
    es: "espadas",
  },
  cups: {
    en: "cups",
    es: "copas",
  },
  clubs: {
    en: "clubs",
    es: "bastos",
  },
  merchant: {
    en: "merchants",
    es: "mercaderes",
  },
  warrior: {
    en: "warriors",
    es: "guerreros",
  },
  charmer: {
    en: "charmers",
    es: "encantadores",
  },
  sage: {
    en: "sages",
    es: "sabios",
  },
  wealth: {
    en: "wealth",
    es: "riqueza",
  },
  charm: {
    en: "charm",
    es: "encanto",
  },
  strength: {
    en: "strength",
    es: "fuerza",
  },
  wisdom: {
    en: "wisdom",
    es: "sabiduría",
  },
});

const concat = (cards, and) => {
  let last = cards.pop();
  return `${cards.join(", ")}, ${and}, ${last},`;
};