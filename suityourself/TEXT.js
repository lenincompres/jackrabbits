class TEXT {
  static GET_JK = {
    ENG: "Get the Jack Rabbits game",
    ESP: "Adquiere Jack Rabbits!",
  }
  static PAGE_TITLE = {
    ENG: "Suit Yourself Test",
    ESP: "Echa tus cartas",
  }
  static PAGE_TITLE_DONE = {
    ENG: name => name ? `This is <b>${name}</b>'s hand` : "This is your hand",
    ESP: name => name ? `Esta es la mano de <b>${name}</b>` : "Esta es tu mano",
  }
  static YOUR = {
    ENG: "Your ",
    ESP: "Tu ",
  }
  static CARD_HINTS = [{
      ENG: "Use +1 and -1 to change the value.",
      ESP: "Usa +1 y -1 para cambiar el valor.",
    },
    {
      ENG: "See the pips available below.",
      ESP: "Ve los puntos disponibles abajo.",
    },
    {
      ENG: "Reduce others to increase this one.",
      ESP: "Reduce otra para incrementar esta.",
    },
    {
      ENG: "Reduce others to increase this one.",
      ESP: "Reduce otra para incrementar esta.",
    },
  ]
  static POINTS_LEFT = {
    ENG: "Pips available",
    ESP: "Puntos disponibles",
  }
  static NEXT = {
    ENG: "next",
    ESP: "continuar",
  }
  static WHEN_READY = {
    ENG: `Increase the cards at will using the (+1) buttons, and click <b>${TEXT.NEXT.ENG}</b> when you run out of pips.`,
    ESP: `Usa todos los puntos para incrementar las cartas como las prefieras y luego presiona <b>${TEXT.NEXT.ESP}</b>.`,
  }
  static BEGIN = {
    ENG: "begin",
    ESP: "comenzar",
  }
  static TIE = {
    ENG: suits => `To have a definite suit, you must break the tie between ${TEXT.concat(suits, "and")}.`,
    ESP: suits => `Para para tener un símbolo definitivo, necesitas romper el empate entre ${TEXT.concat(suits, "y")}.`,
  }
  static AND = {
    ENG: "and",
    ESP: "y",
  }
  static DONE = {
    ENG: "done",
    ESP: "listo",
  }
  static WHEN_DONE = {
    ENG: `Click <b>${TEXT.DONE.ENG}</b> when safistied.`,
    ESP: `Presiona <b>${TEXT.DONE.ESP}</b> cuando estés satisfecho.`,
  }
  static RESTART = {
    ENG: "Restart",
    ESP: "Reiniciar",
  }
  static FIND_YOURS = {
    ENG: "Reveal your hand",
    ESP: "Revela tu mano",
  }
  static PAGE_DESCRIPTION = {
    ENG: `This exercise will show the <b>suit order</b> that fits your personality. Card suits represent 4 major personality traits. Let's reveal which one you value the most.`,
    ESP: `Este divertido test mostrará <b>el valor de tus símbolos</b> de acuerdo a tu personalidad. Los símbolos de las cartas representan 4 grandes rasgos de la personalidad. Con esta breve interacción podrás revelar cuál valoras más.`,
  }
  static PLAY_DESCRIPTION = {
    ENG: `After clicking <b>${TEXT.BEGIN.ENG}</b>, you'll receive 8 points (or “pips”) to increase the cards above.`,
    ESP: `Despues de presionar <b>${TEXT.BEGIN.ESP}</b>, recibirás 8 puntos parar incrementar el valor de estas cartas.`,
  }
  static DESCRIPTION = {
    ENG: (suit, name) => `This is how ${name ? `<b>${name}</b> values` : "you value"} the 4 main personality traits shown in the cards. According to this valuation, the <strong style="color:${suit.color}">${TEXT[suit.symbol].ENG}</strong> are ${name ? `<b>${name}</b>'s` : "your"} main suit. This symbol is also called <strong style="color:${suit.color}">${TEXT[suit.alt].ENG}</strong>. It is the symbol of ${TEXT[suit.cast].ENG} who focus on ${TEXT[suit.symbol].meaning.ENG}.`,
    ESP: (suit, name) => `Así es como ${name ? `<b>${name}</b> valora` : "valoras"} los 4 principales rasgos de la personalidad en las cartas. De acuerdo con esta valoración, ${name ? `el símbolo principal de <b>${name}</b>` : "tu símbolo principal"} es el de <strong style="color:${suit.color}">${TEXT[suit.symbol].ESP}</strong>. Este símbolo también es llamado <strong style="color:${suit.color}">${TEXT[suit.alt].ESP}</strong>. Es el símbolo de ${TEXT[suit.cast].ESP} enfocandos en ${TEXT[suit.symbol].meaning.ESP}.`,
  }
  static SHARE_HAND = {
    ENG: "Share your hand",
    ESP: "Comparte tu mano",
  }
  static SHARE_MESSAGE ={
    ENG: "This is my hand, how I value the 4 main personality traits shown in the cards. Get to know me.",
    ESP: "Esta es mi mano, como valoro los 4 principales rasgos de la personalidad en las cartas. Ven a conocerme."
  }
  static MAILING_LIST_TEXT ={
    ENG: "Join Lenino's JACK RABBITS mailing list.",
    ESP: "Mantente al tanto de Lenino y sus JACK RABBITS."
  }
  static name = {
    ENG: "name",
    ESP: "nombre",
  }
  static share = {
    ENG: "share",
    ESP: "comparte",
  }
  static diamonds = {
    ENG: "diamonds",
    ESP: "diamantes",
    meaning: {
      ENG: "objectivity, resoursefulness and comfort",
      ESP: "la objetividad, la aptitud y el confort",
    }
  }
  static spades = {
    ENG: "spades",
    ESP: "picas",
    meaning: {
      ENG: "courage, determination and work",
      ESP: "la valentía, la determinación y el esfuerzo",
    }
  }
  static hearts = {
    ENG: "hearts",
    ESP: "corazones",
    meaning: {
      ENG: "pleasure, freedom and art",
      ESP: "el placer, el arte  y la libertad",
    }
  }
  static clovers = {
    ENG: "clovers",
    ESP: "tréboles",
    meaning: {
      ENG: "knowledge, truth and nature",
      ESP: "el conocimiento, la naturaleza y la verdad",
    }
  }
  static gold = {
    ENG: "gold",
    ESP: "oros",
  }
  static swords = {
    ENG: "swords",
    ESP: "espadas",
  }
  static cups = {
    ENG: "cups",
    ESP: "copas",
  }
  static clubs = {
    ENG: "clubs",
    ESP: "bastos",
  }
  static merchant = {
    ENG: "merchants",
    ESP: "mercaderes",
  }
  static warrior = {
    ENG: "warriors",
    ESP: "guerreros",
  }
  static charmer = {
    ENG: "charmers",
    ESP: "encantadores",
  }
  static sage = {
    ENG: "sages",
    ESP: "sabios",
  }
  static wealth = {
    ENG: "wealth",
    ESP: "riqueza",
  }
  static charm = {
    ENG: "charm",
    ESP: "encanto",
  }
  static strength = {
    ENG: "strength",
    ESP: "fuerza",
  }
  static wisdom = {
    ENG: "wisdom",
    ESP: "sabiduría",
  }
  static concat = (cards, and) => {
    let last = cards.pop();
    return `${cards.join(", ")} ${and} ${last}`;
  }
}

export default TEXT;