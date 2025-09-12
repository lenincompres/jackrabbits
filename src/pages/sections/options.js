import Copy from "../../../lib/Copy.js";
import versify from "../../aux/versify.js";

const optionalSections = [
  {
  h4: Copy.text({
    es: "Piezas",
    en: "Tiles",
  }),
  section: [{
    h5: Copy.text({
      es: `<a class="pop" onclick="popUp('advancedCitadel')">Ciudadela Avanzada</a>`,
      en: `<a class="pop" onclick="popUp('advancedCitadel')">Advanced Citadel</a>`,
    }),
    p: versify(Copy.text({
      es: `Si eliges la carátula de atrás,
      incluyes estrategias importantes:
      se esperan corazones al entrar,
      canjeas lo que quieras con diamantes,
      y puedes con tus tréboles volar
      con palos cualesquiera de restante.`,
      en: `There are three distinctive assets,
      which are marked in this reboot.
      Question hearts to gain the access;
      buy with diamonds any loot; 
      show your clubs for flying passes—
      shortfall’s paid in any suit.`,
    })),
  }, {
    h5: Copy.text({
      es: "Palos Justos",
      en: "Tight Suits",
    }),
    p: versify(Copy.text({
      es: `Se juega con un palo por conejo
      y un <a class="pop" onclick="popUp('roadTiles')">set de carreteras</a> a su vez.
      Con tres participantes, por ejemplo,
      retírales un palo con un set.
      Contempla al escoger el <a class="pop" onclick="popUp('endings')">fin del juego</a>
      si acaso es imposible de obtener.
      A veces, sin las picas y sus duelos,
      podría complicársete vencer.`,
      en: `Have as many suits as players,
      and a set of <a class="pop" onclick="popUp('roadTiles')">road tiles</a> too—
      meaning that with three contenders, 
      you’ll remove one set and suit.
      Pick a fitting kind of ending—
      one that cards allow you to.
      Spades are often recommended—
      best for tribal game pursuit.`,
    })),
    /*},{
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
      })),*/
  }],
}, {
  h4: Copy.text({
    es: "Ases",
    en: "Aces",
  }),
  section: [{
    h5: Copy.text({
      es: "Ases Ambivalentes",
      en: "Ambivalent Aces",
    }),
    p: versify(Copy.text({
      es: `Elige los valores de tus ases,
        que cuentan por un <b>1</b> o por un <b>11</b>,
        ya sea en el momento en que los gastes
        o incluso en el momento que los compres.`,
      en: `Choose to use them as <b>11</b>,
      any time you play an <b>A</b>ce.
      Or a <b>1</b> when it's deserving—
      lottery or marketplace.`,
    })),
  }, {
    h5: Copy.text({
      es: "Ases capitales",
      en: "Capital Aces",
    }),
    p: versify(Copy.text({
      es: `El as que de primero desembolses,
        descártalo y consérvalo en tu frente;
        pues éste se valora por un <b>11</b>
        y solo por un <b>1</b> tus siguientes.`,
      en: `Your first <b>A</b>ce is worth <b>11</b>,
        and the rest you spend are <b>1</b>s.
        As a record that it’s spent then, 
        keep it in front of your hands.`,
    })),
  }, {
    h5: Copy.text({
      es: "Capitales adicionales",
      en: "Additional capital",
    }),
    p: versify(Copy.text({
      es: `Los <b>ases capitales</b> que se exponen
        se cuentan por un <b>1</b> permanente;
        si el palo que precisas corresponde,
        lo añades del que tienes en tu frente.`,
      en: `When you play <b>capital Aces</b>,
        add a stable bonus tip.
        At the suit-appropriate places,
        they will grant an extra pip.`,
    })),
  }],
}, {
  h4: Copy.text({
    es: "Estrategias",
    en: "Strategies",
  }),
  section: [{
    h5_clubs: Copy.text({
      es: "Vuelos Residenciales",
      en: "Residential flights",
    }),
    p: versify(Copy.text({
      es: `Las plazas, Ciudadela y los palacios
        se añaden al destino de los vuelos;
        podrás aterrizar en los hexágonos,
        excepto por supuesto en el subsuelo.`,
      en: `When you fly from any tower, 
        find more places to touch down.
        You may reach with the clubs’ power
        any hex above the ground.`,
    })),
  }, {
    h5_hearts: Copy.text({
      es: "Palacios Provisionales",
      en: "Provisional Palaces",
    }),
    p: versify(Copy.text({
      es: `Conviertes residencias en palacios
        si exhibes corazones al pararte:
        tu mínimo de seis reglamentarios
        que juzgan a cualquiera al visitarte.`,
      en: `Show your hearts while taking rest—
      six or more within your count.
      Question all incoming guests—
      never do this underground.`,
    })),
  }, {
    h5: Copy.text({
      es: "Zanahorias ventajosas",
      en: "Trailing Carrots",
    }),
    p: versify(Copy.text({
      es: `Podrás incrementar la travesía
        si está tu zanahoria en un lugar;
        pues puedes, en el turno que visitas,
        salirte sin parar a descansar.`,
      en: `If your carrot’s on a hex,
        you may visit and move on.
        Go to where you're headed next—
        needn’t wait to move along.`,
    })),
  }]
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
      en: `Win a bundle as your prize,
        give the lottery no limits—
        whether cards that match the dice,
        or when rolling double digits.`,
    })),
  }, {
    h5: Copy.text({
      es: "Manos Extralimitadas",
      en: "Overtaxed Hands",
    }),
    p: versify(Copy.text({
      es: `Las cartas se tendrán en escasez,
        pues cargas con un máximo de seis.`,
      en: `Cap the cards you may accrue—
        up to six to hold on to.`,
    })),
  }, {
    h5: Copy.text({
      es: "Excedente Expropiado",
      en: "Seized Surplus",
    }),
    p: versify(Copy.text({
      es: `Si ocultas un exceso en lo que tomas,
        quienquiera que lo note te lo roba.`,
      en: `If withholding cards you’re found,
        your revealer robs you down.`,
    })),
  }, {
    h5: Copy.text({
      es: "Valores Patriarcales",
      en: "Patriarchal values",
    }),
    p: versify(Copy.text({
      es: `Valoras a los ases por <b>14</b>;
        los reyes, es por <b>13</b> que valoras;
        las reinas, subvalóralas por <b>12</b>;
        y es <b>11</b> (menos precio) por las jotas.`,
      en: `Have unequal value levels:
        <b>A</b>ce then <b>K</b>ing then <b>Q</b>ueen then <b>J</b>ack—
        from <b>14</b> until <b>11</b>—
        then consider why it’s whack.`,
    })),
  }]
}];

export default optionalSections;