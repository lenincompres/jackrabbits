import ASSETS from "./assets.js";

const PAGES = ["home", "setup", "intro", "full", "optional"];
const PAGE_NAMES = ["Introducción", "Inicio", "Elemental", "Regular", "Opcional"];
const _SELECTED_PAGE = new Binder();

const _LIGHTBOX_ON = new Binder(false);
window.popUp = i => {
  lightBox.set(POPUP[i], "content");
  _LIGHTBOX_ON.value = true;
}

function versify(...poem) {
  return poem.map(p => typeof p !== "string" ? p : ({
    tag: "p",
    content: {
      span: p.split('\n'),
    }
  }));
}


const PAGE_HOME = {
  section: [{
    img: ASSETS.jackRabbits,
    div: "Lenino's",
    h1: "Jack Rabbits",
    p: versify(
      `El juego de tablero en el que viajas
      al reino de conejos y barajas`
    )
  }, {
    class: "letter",
    h2: "Bienvenida",
    p: [
      `Atención heroicos mensajeros,`,
      `Por orden de la Orden de Conejos Mensajeros de la Ciudadela, se te ordena la misión de adquirir la terna que será ordenada al nuevo concejo real. Esta misión de orden superior es la orden más importante que un conejo de esta orden puede recibir:`,
      `<strong>Visita las casas nobles, lleva las cartas pertinentes para adquirir tres con insignias reales y traelas a la ciudadela</strong>, en tal orden.`,
      `En ese orden, cuando digo «tal orden» no me refiero a alguna otra orden de conejos mensajeros ni a la orden del motivo de esta carta, sino al orden de los pasos para restaurar el orden en el reino.`,
      `¡En marcha! ¡El tiempo apremia!`,
      `El Heraldo Blanco`,
    ]
  }, {
    h2: "Visión General",
    p: versify(
      `Irás a transitar por los caminos
      cargando con tus cartas numerales.
      La meta es que regreses al castillo
      luciéndote con tres de las reales.`,
      `Dirígete a las casas de monarcas
      a hacer la adquisición en su presencia.
      Con diez de los puntitos de sus marcas,
      recibes su real correspondencia. `,
      ASSETS.royals,
      `Es gratis completar la travesía
      si viajas por las vías carreteras.
      Se pagan los traslados que precisas:
      transporte, pasadizo o madriguera.`,
      `Detente en los hexágonos que llegues
      y toma el incremento de tus cartas,
      a menos que te salgas o «destierres»
      por fuera de las piezas y sin barcas.`,
    ),
  }, {
    h2: "Fin del juego",
    p: versify(
      `Serás protagonista del festejo 
      si a nuestra ciudadela te regresas,
      trayéndonos las cartas del concejo: 
      tus tres representates de nobleza.`,
      ASSETS.citadel,
      `Tan pronto se repartan los conejos,
      se exige al colectivo de la mesa
      que escoja, de lo simple a lo complejo,
      la clase de final que le interesa:`,
    ),
    ul: {
      li: [
        `<b>simple</b>: traer tres cartas reales, con cualquier letras o «palos» (símbolos);`,
        `<b>diverso</b>: las tres serán de palos distintos;`,
        `<b>monárquico</b>: traer exactamente una <b>K</b> + una <b>Q</b> + una <b>J</b>, sin importar sus palos;`,
        `<b>diverso y monárquico</b>: traer una <b>K</b> + una <b>Q</b> + una <b>J</b>, de tres palos distintos;`,
        `<b>tribal</b>: traer las tres de un mismo palo.`,
      ]
    }
  }],
  header: {
    a: {
      text: "Inicio",
      href: "#setup",
    }
  }
};

const PAGE_SETUP = {
  section: [{
    img: ASSETS.setup1,
    h2: "1. El tablero",
    p: versify(
      `El mapa que usarás en la partida
      lo creas de improviso y previamente,
      con piezas que conectas por sus vías
      en cientos de maneras diferentes.`,
      ASSETS.sample,
      `El reino de las cartas y sus templos
      se ensambla con terrenos aleatorios.
      Empieza por armar el del <a>ejemplo</a>
      o anímate a <a onclick="popUp(0)">crear el territorio</a>.`,
    ),
  }, {
    img: ASSETS.setup2,
    h2: "2. Las cartas",
    p: versify(
      `Después de que el tablero se termina
      y estén establecidos los lugares,
      la «corte» se separa bocarriba
      con cartas de los «jokers» y «reales»:
      las dos de comodines exclusivas
      y doce que contienen personajes.`,
      `En cuanto a las que restan en la «pila»,
      los «palos numerales» y los «ases»,
      después de barajarlas y reunirlas,
      del mazo bocabajo se reparten.
      Entrégales sus tres, sin exhibirlas,
      a cada concursante, individuales.
      Con estas tramarán la travesía
      y harán la adquisición de las reales.`,
      ASSETS.cards,
    )
  }, {
    img: ASSETS.setup3,
    h2: "3. Las fichas",
    p: versify(
      `Asigna a las personas sus conejos
      y allí en la <strong>ciudadela</strong> los colocan.
      Les das las zanahorias de su juego,
      las tres de los colores que les tocan.`,
      `Dirígete al principio de las reglas
      y escoge el fin del juego que se exige;
      su sello se pondrá en la <strong>ciudadela</strong>,
      a menos que se juege por el simple.`,
      ASSETS.endings,
      `Elige a la persona que comienza
      y el orden de los turnos que le siguen
      (le importa en lo absoluto tu sistema
      al noble mensajero que te escribe).`,
      `Los turnos se describen en los versos
      del juego <a href="#intro">ELEMENTAL</a> en el reverso.`,
    ),
  }],
  header: {
    p: versify(
      `Preparas el <b>INICIO</b> del lugar
      y empiezas con un juego  <a href="#intro">ELEMENTAl</a>.`
    ),
  },
};

const PAGE_INTRO = {
  header: {
    p: versify(
      `Dominas el siguiente material
      y luego lo del juego <b>REGULAR</b>.`
    ),
    h2: "Las FASES de cada turno",
  },
  section: [{
    h2: "1. La lotería",
    p:versify(
      `Tu turno lo comienzas con la suerte
      de un premio de la pila tras los dados.
      Si un dado, de los dígitos que obtienes,
      coincide con un número en tus manos,
      demuestra con tu carta que lo tienes
      y llévate la carta de regalo.`,
      ASSETS.lottery,
      `El límite de cartas es de nueve;
      descarta la que quieras si te excedes.
      Conserva el resultado de los dados;
      los usas en <a onclick="popUp(1)"><b>el precio</b></a> de traslados`
    ),
  }, {
    h2: "2. La travesía",
    p: versify(
      `Del sitio hexagonal en el que empiezas,
      escoge si te irás por un camino.
      Señala el recorrido por las piezas
      llevando tu conejo peregrino.
      Y acaba el movimiento si tropiezas
      con una hexagonal en su destino.`,
      ASSETS.journey,
      `Recuerda que moverte es opcional,
      depende de tu meta a visitar.`,
      `Podrías expandir tus travesías
      pagando <b>los traslados</b> en las vías.`,
    ),
  }, {
    h2: "3. La adquisición",
    p: versify(
      `Tu meta es visitar a la nobleza
      si nadie se ha apropiado de sus cartas.
      Un mínimo de diez es lo que cuestan,
      pagado con los palos de sus marcas.
      Se dejan zanahorias en las piezas
      que indican los conejos que las cargan.`,
      ASSETS.adquisition,
      `Es gratis descanzar en los hexágonos
      y hacer tu recorrido visitándolos.`,
      `Conserva lo que adquieras en tu mano
      y obtén <b>el incremento</b> de inmediato.`,
    ),
  }, {
    h2: "4. El Incremento",
    p: versify(
      `Te toca, en el hexágono que esperas,
      la carta que prosigue de la pila.
      Si llegas con la pila ya desierta,
      baraja las del lote y recopila.
      Así que, en un hexágono te quedas
      y el turno se termina al recibirla.*`,
      ASSETS.increment,
      `El límite de cartas es de nueve;
      descarta la que quieras si te excedes.`,
      `*Tu turno acabará sin incremento
      si estás en <b>el destierro</b> en el momento.`,
    ),
  }, {
    tag: "header",
    h3: "Los traslados",
  }, {
    p: versify(
      `Es gratis desplazarte a los hexágonos
      si sigues por los vínculos continuos;
      incluso las montañas, más abajo,
      se cruzan por sus túneles gratuitos.
      En cambio, si utilizas los traslados,
      marcados a mitad de los polígonos,
      <a onclick="popUp(1)"><b>el precio</b></a> es el fijado por los dados
      y pagas con las cartas de los símbolos.`,
      {
        tag: "h4",
        html: "traslado por Pasadizos"
      },
      `Los bosques, las montañas y los ríos,
      que ves en las imágenes de abajo,
      permiten que te cambies de camino
      cruzando por el centro en un atajo,
      marcado con los palos permitidos
      que pagas con tus cartas al cruzarlo.`,
    ),
    img: ASSETS.rhombi,
  }, {
    h4: "traslado con Comerciantes",
    p: versify(
      `Los cruces te permiten transportarte
      viajando por los mares o las tierras:
      cabalgas por las tierras sin pararte,
      moviéndote al hexágono que quieras;
      o sales, si es posible que te embarques
      de un cruce con salida a las afueras,
      y surcas tu trayecto por los mares
      entrando por alguna carretera.
      Saldrás en el momento en el que pagues 
      y anuncies el transporte que prefieras.`,
      {
        tag: "h4",
        html: "traslado con Comodines"
      },
      `Si pagas al pasar por las tabernas,
      tendrás un comodín desocupado;
      lo cargas y, al momento en que requieras,
      lo montas y liberas de tu mano. `,
    ),
    img: ASSETS.rides,
  }, {
    h4: "traslado por Madrigueras",
    p: versify(
      `Si pagas en la entrada de las cuevas,
      te irás a la que quieras de inmediato.
      Si no, te ahorrarás lo que te cuesta,
      metiéndote al subsuelo por un rato;
      descansas por el turno y, a la vuelta, 
      te sales por la cueva de tu agrado.`,
      {
        tag: "h3",
        html: "El Destierro"
      },
      `A veces te conviene que salieras
      cayendo de un camino a las orillas.
      Olvida el incremento si lo hicieras,
      y acaba con el turno a la deriva.
      Mantén <b>la lotería</b> en las afueras,
      y entonces, al llegar <b>la travesía</b>,
      te metes al subsuelo a lo que esperas
      la vuelta en la que escoges la salida.`,
    ),
    img: ASSETS.caves,
  }, {
    tag: "header",
    p: versify(
      `El juego <a href="#full">REGULAR</a> es desafiante,
      con reglas que usarás en lo adelante.`,
    )
  }],
};

const PAGE_FULL = {
  header: {
    p: versify(
      `Añade los artículos restantes
      al juego <b>ELEMENTAL</b> de principiantes.`
    ),
    h2: "las estrategias de cada palo",
  },
  section: [{
    h3: "Tréboles <small>(Bastos)</small>",
    h4: "Volar entre las torres K",
    img: ASSETS.clubs,
    p: versify(
      `Preséntate con «carta pasaporte»,
      un trébol al lanzar la lotería,
      y harás la travesía torre-a-torre
      si no lo sobrepasa lo que tiras.
      En cambio, si los dados son mayores,
      te sales al destierro en las orillas.
      Igual el pasaporte lo recoges;
      y el premio, si un acierto se confirma.`,
      `Se puede completar la travesía,
      pagar la diferencia de los dados,
      con palos de la torre de partida
      que cubran el «restante» resultado.
      La carta pasaporte es permitida
      si vuelas de la torre de los bastos.`,
    ),
  }, {
    h3: "Picas <small>(Espadas)</small>",
    h4: "Pelear con los conejos",
    img: ASSETS.spades,
    p: versify(
      `Declárale la «guerra sin empates» 
      a quien en el hexágono descansa. 
      Si vences a la víctima que asaltes,
      a ciegas le arrebatas una carta.
      Se lucha superando los ataques,
      sumándose las picas descartadas.
      Y cuando se le acaben los avances
      a quien se le derrota en la batalla,
      termina en el destierro en el instante
      y roban (si es la víctima asaltada).`,
      `Si robas y la carta es de nobleza,
      te toca el incremento de tus cartas;
      y entrégale a la corte la que quieras,
      si acaso la que robas es tu cuarta.`,
    ),
  }, {
    h3: "Corazones <small>(Copas)</small>",
    h4: "Acceder a los palacios Q",
    img: ASSETS.hearts,
    p: versify(
      `Anúnciate en la «entrada de las reinas»
      y espera que en la mesa te cuestionen:
      si cargas con su carta o con la cuenta 
      de un mínimo de seis en corazones.
      Te expulsan al destierro si te frenan
      y niegas que tu suma se cerciore.
      Mas, antes de mostrar tus pertenencias,
      se exige de cualquiera que cuestione,
      que muestre previamente que las tenga,
      las cartas con aquellas condiciones.
      Pues, pierde lo que muestra y se destierra
      si pruebas que te acusa sin razones.`,
      `Tan solo acusarás a los viajeros
      si tienes tu conejo en el tablero.`,
    ),
  }, {
    h3: "Diamantes <small>(Oros)</small>",
    h4: ["Canjear en las Plazas J", "y con los conejos"],
    img: ASSETS.diamonds,
    p: versify(
      `Observa los «hexágonos de ventas»
      con flechas que sugieren intercambio.
      En estos, los diamantes se cajean 
      por cartas descartadas de su palo.
      Excepto en el marcado con la estrella,
      que acepta de cualquiera por el pago.
      Recuerda que la pila se renueva
      con cartas que abandonan el mercado.`,
      `Es válido el comercio por diamantes
      con alguien en el sitio que te encuentras.
      Y mientras el negocio se debate,
      se ocultan en las manos las ofertas.
      A quien se le descubra por chantaje,
      después del intercambio se destierra.`,
    ),
  }]
};

window.POPUP = [{
  h3: "Crear el territorio",
  p: versify(
    `Comienza por poner la «<strong>ciudadela</strong>»
    y el negro del «<strong>subsuelo</strong>», separándolos.
    Revuelve bocabajo lo que queda:
    los rombos, los hexágonos y triángulos.`,
    `Indica a las personas que recojan
    iguales cantidades de las piezas,
    por formas geométricas les tocan
    de a doce dividido por cabeza.`,
    `Ofréceles la opción de colocarlas
    por turnos o por libre preferencia.
    Por turnos: se mantienen sin mirarlas,
    y pieza que volteen la conectan;
    y libre: se permiten voltearlas
    sin turnos ni descansos al ponerlas.
    Igual observarán al conectarlas
    el vínculo de vías carreteras:`,
  ),
  img: ASSETS.guides,
  ul: {
    li: [
      `Evita callejones sin salidas (T)
          y vínculos de dos hexagonales (x).`,
      `Es bueno que se eviten cercanías
          de piezas triangulares similares (!).`,
      `Las islas que desees las inicias
          con una hexagonal a la que apartes.`,
      `La pieza del subsuelo es exclusiva;
          se queda sin uniones laterales.`,
    ]
  }
}, {
  h4: "El precio",
  p: versify(
    `Las vías con los símbolos de cartas
    te ofrecen un «traslado» de lugar.
    La suma de los dados es la tasa,
    o el mínimo que tienes que pagar. 
    Se pierde el sobrepago si te pasas;
    los símbolos se pueden combinar.`,
    `Las cartas se «descartan» al usarse,
    dejándolas a un lado de la mesa.
    Es 1 lo que cuentas por los ases,
    y 10 por las reales o con letras.
    Recuerda, si es que gastas las reales,
    quitar tu zanahoria de sus piezas,
    y en vez de terminar en el descarte,
    regresan a la corte en la que empiezan.`,
  )
}];

DOM.set({
  meta: "utf-8",
  title: "Lenino's Jack Rabbits - Instructions",
  viewport: "width=device-width, minimum-scale=1.0, maximum-scale=1.0",
  icon: "images/icon.png",

  aside: {
    class: {
      active: _LIGHTBOX_ON,
    },
    main: {
      a: {
        text: "X",
        click: e => _LIGHTBOX_ON.value = false,
      },
      section: {
        id: "lightBox",
      }
    }
  },


  header: {
    a: {
      b: "Lenino's",
      h1: "JACK RABBITS",
      p: "Instructions",
      href: `#${PAGES[0]}`,
    },
    nav: {
      ul: {
        li: PAGES.map((page, i) => !i ? undefined : ({
          class: {
            active: _SELECTED_PAGE.as(val => val === i),
          },
          a: {
            color: `var(--${page})`,
            html: PAGE_NAMES[i],
            href: `#${page}`,
          }
        }))
      }
    }
  },

  main: {
    article: {
      id: "mainArticle",
    },
  },

  footer: {
    p: `Descubre contenido y tutoriales. Taguéanos, suscríbete y comparte.
    @lenino • @lenino.jackrabbits • jackrabbits.lenino.net`,
  },

});

_LIGHTBOX_ON.value = false;

const PAGE_MODELS = [PAGE_HOME, PAGE_SETUP, PAGE_INTRO, PAGE_FULL];
window.addEventListener("hashchange", refreshPage);

function refreshPage() {
  let hash = location.hash.substr(1);
  if (!hash) hash = "home";
  let i = PAGES.indexOf(hash);
  if (_SELECTED_PAGE.value === i) return;
  _SELECTED_PAGE.value = i;
  mainArticle.set({
    backgroundColor: `var(--${hash})`,
    content: PAGE_MODELS[i]
  });
}
refreshPage();