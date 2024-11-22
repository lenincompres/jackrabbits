import Copy from "../../lib/Copy.js";
import {
  versify
} from "../../src/auxiliary.js";

const optionalSections = [{
  h4: Copy.text({
    es: "Ases",
    en: "Aces",
  }),
  h5: Copy.text({
    es: "Ases Ambivalentes",
    en: "Ambivalent Aces",
  }),
  p: versify(Copy.text({
    es: `Elige los valores de tus ases,
      que cuentan por un <b>1</b> o por un <b>11</b>,
      ya sea en el momento en que los gastes
      o incluso en el momento que los compres.`,
    en: `You may decide on their value
      whenever using an ace:
      <b>1</b> or <b>11</b>—what have you—
      even in the marketplace.`,
  })),
  h5_: Copy.text({
    es: "Ases capitales",
    en: "capital Aces",
  }),
  p_: versify(Copy.text({
    es: `El <b>A</b>s que de primero desembolses,
      descártalo y consérvalo en tu frente;
      pues éste se valora por un <b>11</b>
      y solo por un <b>1</b> tus siguientes.`,
    en: `Your first <b>A</b>ce is worth <b>11</b>—
      the others you spend are <b>1</b>s.
      As a record that it's spent then, 
      keep it in front of your hands.`,
  })),
  h5__: Copy.text({
    es: "Capitales adicionales",
    en: "Additional capital",
  }),
  p__: versify(Copy.text({
    es: `Los <b>A</b>ces capitales que se exponen
      se cuentan por un <b>1</b> permanente;
      si el palo que precisas corresponde,
      lo añades del que tienes en tu frente.`,
    en: `Playing your capital <b>A</b>ce
      will grant you a bonus tip:
      when needed at any place,
      it counts as one extra pip.`,
  })),
}, {
  h4: Copy.text({
    es: "Piezas",
    en: "Tiles",
  }),
  h5: Copy.text({
    es: `<a class="pop" onclick="popUp('advancedCitadel')">Ciudadela Avanzada</a>`,
    en: `<a class="pop" onclick="popUp('advancedCitadel')">Advanced Citadel</a>`,
  }),
  p: versify(Copy.text({
    es: `Se esperan corazones al entrar;
      canjeas lo que quieras con diamantes;
      y puedes con tus tréboles volar,
      con palos cualesquiera de restante.`,
    en: `Use your hearts to demand access;
      diamonds, to buy any loot; 
      and clubs, to get flying passes—
      shortfall's paid in any suit.`,
  })),
  h5_: Copy.text({
    es: "Palos Justos",
    en: "Tight Suits",
  }),
  p_: versify(Copy.text({
    es: `Se juega con un palo por conejo
      y un <a class="pop" onclick="popUp('roadTiles')">set de carreteras</a> a su vez;
      con tres participantes, por ejemplo,
      un palo se elimina con un set.`,
    en: `Have as many suits as players,
      and one of each <a class="pop" onclick="popUp('roadTiles')">road tiles</a> too;
      for instance, with three contenders,
      remove a set and a suit.`,
  })),
  h5__: Copy.text({
    es: "Tablero Urbano",
    en: "Urban Board",
  }),
  p__: versify(Copy.text({
    es: `Conecta los hexágonos directo,
    y olvídate <a class="pop" onclick="popUp('roadTiles')">de rombos y de triángulos</a>;
    la falta de traslado en los trayectos
    hará que se incrementen los obstáculos.`,
    en: `To play this version correctly,
    make a land of shorter miles,
    connecting hexes directly
    and removing all <a class="pop" onclick="popUp('roadTiles')">road tiles</a>.`,
  })),
}, {
  h4: Copy.text({
    es: "Estrategias",
    en: "Strategies",
  }),
  h5: Copy.text({
    es: "Vuelos Residenciales",
    en: "Residential flights",
  }),
  p: versify(Copy.text({
    es: `Las plazas, ciudadela y los palacios
      se añaden al destino de los vuelos;
      podrás aterrizar en los hexágonos,
      excepto por supuesto en el subsuelo.`,
    en: `When flying from any tower, 
      find more places to touch down;
      you may reach—with the clubs' power—
      any hex above the ground.`,
  })),
  h5_: Copy.text({
    es: "Palacios Provisionales",
    en: "Provisional Palaces",
  }),
  p_: versify(Copy.text({
    es: `Conviertes residencias en palacios
      si exhibes corazones al pararte:
      tu mínimo de seis reglamentarios
      que acusan a cualquiera al visitarte.`,
    en: `Display a sum of six hearts
      at any house where you'll rest, 
      declaring you'll use these cards
      to accuse incoming guests.`,
  })),
  h5__: Copy.text({
    es: "Zanahorias ventajosas",
    en: "Trailing Carrots",
  }),
  p__: versify(Copy.text({
    es: `Podrás incrementar la travesía
      si está tu zanahoria en un lugar;
      pues puedes, en el turno que visitas,
      salirte sin parar a descansar.`,
    en: `The journey may be prolonged
      if your carrot's on a hex;
      you may visit and go on
      to the place you're headed next.`,
  })),
}, {
  h4: Copy.text({
    es: "Cartas",
    en: "Cards",
  }),
  section: [{
    h5: Copy.text({
      es: "Lotería Gorda",
      en: "Windfall Lottery",
    }),
    p: versify(Copy.text({
      es: `Permite reclamar la lotería
        por múltiples aciertos y regalos,
        ya sea con las cartas que validas
        o incluso con un doble de los dados.`,
      en: `You may win more than one prize,
        the lottery has no limits—
        whether cards that match the dice,
        or a roll of double digits.`,
    })),
  }, {
    h5: Copy.text({
      es: "Manos Extralimitadas",
      en: "Overtaxed Hands",
    }),
    p: versify(Copy.text({
      es: `Las cartas en tu mano y su manejo
        te retan en un juego de escasez,
        pues cuentas con un límite pequeño
        cargando con un máximo de seis.`,
      en: `The cap on your cards is slender,
        up to six to hold on to.
        Plan to be a wiser spender
        on the quests that you pursue.`,
    })),
  }, {
    h5: Copy.text({
      es: "Valores Patriarcales",
      en: "Patriarchal values",
    }),
    p: versify(Copy.text({
      es: `Valoras a los <b>A</b>ses por <b>14</b>;
        los reyes, es por <b>13</b> que valoras;
        las reinas, subvalóralas por <b>12</b>;
        y es <b>11</b> (menos precio) por las jotas.`,
      en: `Have unequal value levels—
        if you don't think that is whack—
        from <b>14</b> down to <b>11</b>,
        for the <b>A</b>ce, <b>K</b>ing, <b>Q</b>ueen & <b>J</b>ack.
        `,
    })),
  }]
}];

export default optionalSections;