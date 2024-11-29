import Copy from "../lib/Copy.js"

Copy.add({
  GET_JK: {
    en: "Get the Jack Rabbits game",
    es: "Adquiere Jack Rabbits!",
  },
  pageTitle: {
    en: "Suit Yourself Test",
    es: "Echa tus cartas",
  },
  pageTitleDone: {
    en: "This is your hand",
    es: "Esta es tu mano",
  },
  and: {
    en: "and",
    es: "y",
  },
  your: {
    en: "Your ",
    es: "Tu ",
  },
  cardHints: [{
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
  pointsLeft: {
    en: "Pips available",
    es: "Puntos disponibles",
  },
  next: {
    en: "next",
    es: "continuar",
  },
  begin: {
    en: "begin",
    es: "comenzar",
  },
  done: {
    en: "done",
    es: "listo",
  },
  restart: {
    en: "Restart",
    es: "Reiniciar",
  },
  findYours: {
    en: "Reveal your hand",
    es: "Revela tu mano",
  },
  pageDescription: {
    en: `This exercise will show the <b>suit order</b> that fits your personality. Card suits represent 4 major personality traits. Let's reveal which one you value the most.`,
    es: `Este divertido test mostrará <b>el valor de tus símbolos</b> de acuerdo a tu personalidad. Los símbolos de las cartas representan 4 grandes rasgos de la personalidad. Con esta breve interacción podrás revelar cuál valoras más.`,
  },
  shareHand: {
    en: "Share your hand",
    es: "Comparte tu mano",
  },
  shareMessage: {
    en: "This is my hand, how I value the 4 main personality traits shown in the cards. Get to know me.",
    es: "Esta es mi mano, como valoro los 4 principales rasgos de la personalidad en las cartas. Ven a conocerme."
  },
  mailingList: {
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
  diamondsMeaning: {
    en: "objectivity, resoursefulness and comfort",
    es: "la objetividad, la aptitud y el confort",
  },
  spades: {
    en: "spades",
    es: "picas",
  },
  spadesMeaning: {
    en: "courage, determination and work",
    es: "la valentía, la determinación y el esfuerzo",
  },
  hearts: {
    en: "hearts",
    es: "corazones",
  },
  heartsMeaning: {
    en: "pleasure, freedom and art",
    es: "el placer, el arte  y la libertad",
  },
  clovers: {
    en: "clovers",
    es: "tréboles",
  },
  cloversMeaning: {
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
  tie: {
    en: `To have a definite suit, you must break the tie between $0.`,
    es: `Para para tener un símbolo definitivo, necesitas romper el empate entre $0.`,
  },
});

Copy.add({
  whenReady: {
    en: `Increase the cards at will using their (+) buttons, and click <b>${Copy.at.next}</b> when you run out of pips.`,
    es: `Distribuye los puntos para incrementar (+) el valor de las cartas a tu gusto y luego presiona <b>${Copy.at.next}</b>.`,
  },
  playDescription: {
    en: `After clicking <b>${Copy.at.next}</b>, you'll receive 8 points (or “pips”) to increase the cards above.`,
    es: `Después de presionar <b>${Copy.at.next}</b>, recibirás 8 puntos parar incrementar el valor de estas cartas.`,
  },
  whenDone: {
    en: `Consider the last card, and click <b>${Copy.at.next}</b> when safistied.`,
    es: `Considera la última carta y resiona <b>${Copy.at.next}</b> cuando estés satisfecho.`,
  },
  description: {
    en: `This is how you value the 4 main personality traits shown in the cards (${Copy.at.strength}, ${Copy.at.charm}, ${Copy.at.wisdom} and ${Copy.at.wealth}). According to this valuation, the <strong style="color:$0">$1</strong>, or <strong style="color:$0">$2</strong>, are your main suit. This  is the suit of $3, who focus on $4.`,
    es: `Así es como valoras los 4 principales rasgos de la personalidad en las cartas (${Copy.at.strength}, ${Copy.at.charm}, ${Copy.at.wisdom} y ${Copy.at.wealth}). De acuerdo con esta valoración, tu símbolo principal es el de <strong style="color:$0">$1</strong> o <strong style="color:$0">$2,</strong>. Este también es el símbolo de $3, enfocandos en $4.`,
  },
});

export const stringItems = (cards, and = "and") => {
  const last = cards.pop();
  return `${cards.join(", ")} ${and} ${last}`;
};

export const replacePlaceholders = (str, arr) => str.replace(/\$(\d+)/g, (match, i) => {
  const value = arr[parseInt(i, 10)];
  return value !== undefined ? value : match;
});