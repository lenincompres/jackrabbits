import Copy from "../../../lib/Copy.js";
import ASSETS from "../../assets.js";
import versify from "../../aux/versify.js";

const strategySections = [{
  backgroundColor: "rgba(200,240,240,0.3)",
  h3: Copy.text({
    es: "Tréboles <small>(Bastos)</small>",
    en: "Clovers <small>(Clubs)</small>",
  }),
  img: ASSETS.clubs,
  h4: Copy.text({
    es: "Volar entre dos torres K",
    en: "Fly among King Towers",
  }),
  p: versify(Copy.text({
    es: [
      `Preséntate con carta pasaporte,
      un trébol al lanzar <b>la lotería</b>,
      y harás <b>la travesía</b> por las torres
      si no lo sobrepasa lo que tiras.
      En cambio, si los dados son mayores,
      te sales al destierro en las orillas.
      Igual el pasaporte lo recoges,
      y el premio si un acierto se confirma.`,
      `Se puede completar la travesía,
      pagar la diferencia de los dados,
      con palos de la torre de partida
      que cubran el <i>restante</i> resultado.
      La carta pasaporte es permitida
      si vuelas de la torre de los bastos.`
    ],
    en: [
      `Show one card before you roll;
      if it beats the dice or ties,
      pick a tower as a goal
      for <b>the journey</b> through the skies.
      Otherwise, you'll fall off-board,
      yet keep your card anywise.
      And <b>the lottery</b> still holds:
      you may match and claim the prize.`,
      `You'll still fly and won't fall off
      if you pay to meet the dice.
      The <i>shortfall</i> (how much you're off)
      is the price that will suffice.
      Pay with suits from the takeoff:
      the hex that flies the device.
      You may trade the passport off
      to pay the club tower's price.`,
    ]
  })),
}, {
  backgroundColor: "rgba(220,200,255,0.4)",
  h3: Copy.text({
    es: "Picas <small>(Espadas)</small>",
    en: "Spades <small>(Swords)</small>",
  }),
  img: ASSETS.spades,
  h4: Copy.text({
    es: "Pelear por las cartas",
    en: "Fight for cards",
  }),
  p: versify(Copy.text({
    es: [
      `Ataca en un combate sin empates
      a quien en el hexágono descansa.
      Se lucha superando los ataques,
      sumándose las picas descartadas;
      y cuando se terminen los avances,
      destierra a la persona derrotada.
      Si ganas el combate que empezaste,
      también asaltarías a  sus cartas:
      le robas la primera que tocases
      (a ciegas deberás seleccionarla).`,
      `Si robas y la carta es de nobleza,
      te toca <b>el incremento</b> de tus cartas;
      y entrégale a la corte la que quieras
      si acaso la que robas es tu cuarta.`,
    ],
    en: [
      `You may steal a random card 
      and send a player off-board, 
      if you're playing where they are 
      and challenge them with a sword. `,
      `You attack, and they defend, 
      adding spades you can afford.
      And the weakest, in the end, 
      will be sent out of the board.`,
      `A count draw is strictly barred;
      discard your spades when you're done.
      There will be no stolen card  
      if the defender has won.`,
      `When you steal a royal card, 
      discard one if it's your fourth; 
      go to <b>the increment</b> part,
      and swap carrots in accord.`,
    ]
  })),
}, {
  backgroundColor: "rgba(255,200,210,0.4)",
  h3: Copy.text({
    es: "Corazones <small>(Copas)</small>",
    en: "Hearts <small>(Cups)</small>",
  }),
  img: ASSETS.hearts,
  h4: Copy.text({
    es: "Juzgar en los palacios Q",
    en: "Judge at Queen Palaces",
  }),
  p: versify(Copy.text({
    es: [
      `Anúnciate en la entrada de las reinas
      y espera que en la mesa te cuestionen:
      si cargas con su carta de nobleza, 
      o un mínimo de seis en corazones.
      Te expulsan al destierro si te frenan
      y niegas que tu suma se cerciore.
      Mas, antes de mostrar tus pertenencias,
      se exige de cualquiera que cuestione:
      que muestre previamente que las tenga,
      las cartas con aquellas condiciones;
      pues pierde lo mostrado y se destierra
      si pruebas que te acusa sin razones.
      Tampoco se permiten exigencias
      de quien en el destierro las expone.`,
    ],
    en: [
      `As you enter a queen's hex,
      any player may demand:
      that if you do not possess
      the queen's card that marks the land,
      you show six points to the rest,
      adding heart cards from your hand.
      Off-board players can't request;
      they're not fit to take a stand.`,
      `Those who ask to see your hearts,
      must first show cards of their own,
      which, even from far apart,
      prove their access to this zone.
      If you fail to show your cards,
      go off-board—your cover's blown!
      But succeed, and they'll depart—
      kicked off, losing what they've shown.`,
    ]
  })),
}, {
  backgroundColor: "rgba(250,240,200,0.4)",
  h3: Copy.text({
    es: "Diamantes <small>(Oros)</small>",
    en: "Diamonds <small>(Gold)</small>",
  }),
  img: ASSETS.diamonds,
  h4: Copy.text({
    es: "Comerciar en las plazas J",
    en: "Trade at Jack Plazas",
  }),
  p: versify(Copy.text({
    es: `Consigue los artículos en venta,
      de centros con los símbolos marcados.
      En estos, los diamantes se canjean 
      por cartas descartadas de sus palos;
      excepto en el marcado con la estrella,
      que acepta de cualquiera por el pago.`,
    en: `All spent cards are being sold;
      each jack's hex sells its own suit.
      Check what these posts have in store—
      when you play there, grab some loot.
      What you take, replace with gold
      as the signs instruct you to.
      The star symbol on the board
      means that any suit will do.`,
  })),
  h5: Copy.text({
    es: "+ Comercio Interpersonal",
    en: "+ Interpersonal Trades",
  }),
  p_0: versify(Copy.text({
    es: `Es válido el comercio por diamantes
      con alguien en el sitio que te encuentras,
      si inicias la partida en lo adelante
      sumándole la cláusula a las reglas.
      En tanto los negocios se debaten,
      se ocultan en las manos las ofertas;
      y a quien se le descubra por chantaje,
      después del intercambio se destierra.`,
    en: `If agreed when the game starts,
      the cards in hand may be sold.
      Those who meet may trade with cards
      while taking turns on the board.
      They must conceal their rewards
      and strike deals offering gold.
      If traded cards prove a farce,
      swindlers will get thrown off-board.`,
  })),
}];

export default strategySections;