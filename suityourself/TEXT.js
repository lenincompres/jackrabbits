class TEXT {
  static GET_JK = {
    en: "Get the Jack Rabbits game",
    es: "Adquiere Jack Rabbits!",
  }
  static PAGE_TITLE = {
    en: "Suit Yourself Test",
    es: "Echa tus cartas",
  }
  static PAGE_TITLE_DONE = {
    en: name => name ? `This is <b>${name}</b>'s hand` : "This is your hand",
    es: name => name ? `Esta es la mano de <b>${name}</b>` : "Esta es tu mano",
  }
  static YOUR = {
    en: "Your ",
    es: "Tu ",
  }
  static CARD_HINTS = [{
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
  ]
  static POINTS_LEFT = {
    en: "Pips available",
    es: "Puntos disponibles",
  }
  static NEXT = {
    en: "next",
    es: "continuar",
  }
  static WHEN_READY = {
    en: `Increase the cards at will using their (+) buttons, and click <b>${TEXT.NEXT.en}</b> when you run out of pips.`,
    es: `Distribuye los puntos para incrementar (+) el valor de las cartas a tu gusto y luego presiona <b>${TEXT.NEXT.es}</b>.`,
  }
  static BEGIN = {
    en: "begin",
    es: "comenzar",
  }
  static TIE = {
    en: suits => `To have a definite suit, you must break the tie between ${TEXT.concat(suits, "and")}.`,
    es: suits => `Para para tener un símbolo definitivo, necesitas romper el empate entre ${TEXT.concat(suits, "y")}.`,
  }
  static AND = {
    en: "and",
    es: "y",
  }
  static DONE = {
    en: "done",
    es: "listo",
  }
  static WHEN_DONE = {
    en: `Click <b>${TEXT.DONE.en}</b> when safistied.`,
    es: `Presiona <b>${TEXT.DONE.es}</b> cuando estés satisfecho.`,
  }
  static RESTART = {
    en: "Restart",
    es: "Reiniciar",
  }
  static FIND_YOURS = {
    en: "Reveal your hand",
    es: "Revela tu mano",
  }
  static PAGE_DESCRIPTION = {
    en: `This exercise will show the <b>suit order</b> that fits your personality. Card suits represent 4 major personality traits. Let's reveal which one you value the most.`,
    es: `Este divertido test mostrará <b>el valor de tus símbolos</b> de acuerdo a tu personalidad. Los símbolos de las cartas representan 4 grandes rasgos de la personalidad. Con esta breve interacción podrás revelar cuál valoras más.`,
  }
  static PLAY_DESCRIPTION = {
    en: `After clicking <b>${TEXT.BEGIN.en}</b>, you'll receive 8 points (or “pips”) to increase the cards above.`,
    es: `Después de presionar <b>${TEXT.BEGIN.es}</b>, recibirás 8 puntos parar incrementar el valor de estas cartas.`,
  }
  static DESCRIPTION = {
    en: (suit, name) => `This is how ${name ? `<b>${name}</b> values` : "you value"} the 4 main personality traits shown in the cards (strength, charm, wisdom and wealth). According to this valuation, the <strong style="color:${suit.color}">${TEXT[suit.symbol].en}</strong> or <strong style="color:${suit.color}">${TEXT[suit.alt].en}</strong> are ${name ? `<b>${name}</b>'s` : "your"} main suit. This  is the suit of ${TEXT[suit.cast].en} who focus on ${TEXT[suit.symbol].meaning.en}.`,
    es: (suit, name) => `Así es como ${name ? `<b>${name}</b> valora` : "valoras"} los 4 principales rasgos de la personalidad en las cartas (fuerza, encanto, sabiduría y riqueza). De acuerdo con esta valoración, ${name ? `el símbolo principal de <b>${name}</b>` : "tu símbolo principal"} es el de <strong style="color:${suit.color}">${TEXT[suit.symbol].es}</strong> or <strong style="color:${suit.color}">${TEXT[suit.alt].es}</strong>. Este también es el símbolo de ${TEXT[suit.cast].es} enfocandos en ${TEXT[suit.symbol].meaning.es}.`,
  }
  static SHARE_HAND = {
    en: "Share your hand",
    es: "Comparte tu mano",
  }
  static SHARE_MESSAGE ={
    en: "This is my hand, how I value the 4 main personality traits shown in the cards. Get to know me.",
    es: "Esta es mi mano, como valoro los 4 principales rasgos de la personalidad en las cartas. Ven a conocerme."
  }
  static MAILING_LIST_TEXT ={
    en: "Join Lenino's JACK RABBITS mailing list.",
    es: "Mantente al tanto de Lenino y sus JACK RABBITS."
  }
  static name = {
    en: "name",
    es: "nombre",
  }
  static share = {
    en: "share",
    es: "comparte",
  }
  static diamonds = {
    en: "diamonds",
    es: "diamantes",
    meaning: {
      en: "objectivity, resoursefulness and comfort",
      es: "la objetividad, la aptitud y el confort",
    }
  }
  static spades = {
    en: "spades",
    es: "picas",
    meaning: {
      en: "courage, determination and work",
      es: "la valentía, la determinación y el esfuerzo",
    }
  }
  static hearts = {
    en: "hearts",
    es: "corazones",
    meaning: {
      en: "pleasure, freedom and art",
      es: "el placer, el arte  y la libertad",
    }
  }
  static clovers = {
    en: "clovers",
    es: "tréboles",
    meaning: {
      en: "knowledge, truth and nature",
      es: "el conocimiento, la naturaleza y la verdad",
    }
  }
  static gold = {
    en: "gold",
    es: "oros",
  }
  static swords = {
    en: "swords",
    es: "espadas",
  }
  static cups = {
    en: "cups",
    es: "copas",
  }
  static clubs = {
    en: "clubs",
    es: "bastos",
  }
  static merchant = {
    en: "merchants",
    es: "mercaderes",
  }
  static warrior = {
    en: "warriors",
    es: "guerreros",
  }
  static charmer = {
    en: "charmers",
    es: "encantadores",
  }
  static sage = {
    en: "sages",
    es: "sabios",
  }
  static wealth = {
    en: "wealth",
    es: "riqueza",
  }
  static charm = {
    en: "charm",
    es: "encanto",
  }
  static strength = {
    en: "strength",
    es: "fuerza",
  }
  static wisdom = {
    en: "wisdom",
    es: "sabiduría",
  }
  static concat = (cards, and) => {
    let last = cards.pop();
    return `${cards.join(", ")} ${and} ${last}`;
  }
}

export default TEXT;