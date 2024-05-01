import ASSETS from "./assets.js";
import {
  versify
} from "./auxiliary.js";
import Mapper from "./classes/Mapper.js";
import Typer from "./classes/Typer.js";

let typer = new Typer();

typer.add("home", [{
  es: `El juego de tablero en el que viajas
    al reino de conejos y barajas.`,
  en: `The board game for playing cards
    on a lang of wooden shards`,
}, {
  es: "Bienvenida",
}, {
  es: [
    `Atención heroicos mensajeros,`,
    `Por orden de la Orden de Conejos Mensajeros de la Ciudadela, se te ordena la misión de adquirir la terna que será ordenada al nuevo concejo real. Esta misión de orden superior es la orden más importante que un conejo de esta orden puede recibir:`,
    `<strong>Visita las casas nobles, lleva las cartas pertinentes para adquirir tres con insignias reales y traelas a la ciudadela</strong>, en tal orden.`,
    `En ese orden, cuando digo <i>tal orden</i> no me refiero a alguna otra orden de conejos mensajeros ni a la orden del motivo de esta carta, sino al orden de los pasos para restaurar el orden en el reino.`,
    `¡En marcha! ¡El tiempo apremia!`,
    `El Heraldo Blanco`,
  ]
}, {
  es: "Visión General",
}, {
  es: [
    `Irás a transitar por los caminos
    cargando con tus cartas numerales.
    La meta es que regreses al castillo
    luciéndote con tres de las reales.`,
    `Dirígete a las casas de monarcas
    a hacer la adquisición en su presencia.
    Con diez de los puntitos de sus marcas,
    recibes su real correspondencia. `,
  ]
}, {
  es: [
    `Es gratis completar la travesía
    si viajas por las vías carreteras.
    Se pagan los traslados que precisas:
    transporte, pasadizo o madriguera.`,
    `Detente en los hexágonos que llegues
    y toma el incremento de tus cartas,
    a menos que te salgas o <i>destierres</i>
    por fuera de las piezas y sin barcas.`,
  ]
}, {
  es: "Fin del juego",
}, {
  es: `Serás protagonista del festejo 
    si a nuestra <a class="pop" onclick="popUp('citadel')"><b>ciudadela</b></a> te regresas,
    trayéndonos las cartas del concejo: 
    tus tres representates de nobleza.`,
}, {
  es: `Tan pronto se repartan los conejos,
    se exige al colectivo de la mesa
    que escoja, de lo simple a lo complejo,
    la clase de final que le interesa:`,
}, {
  es: [
    `<b>simple</b>: traer tres cartas reales, 
    con cualquier letras o <i>palos</i> (símbolos);`,
    `<b>diverso</b>: las tres serán de palos distintos;`,
    `<b>monárquico</b>: traer exactamente una <b>K</b> + una <b>Q</b> + una <b>J</b>, sin importar sus palos;`,
    `<b>diverso y monárquico</b>: traer una <b>K</b> + una <b>Q</b> + una <b>J</b>, de tres palos distintos;`,
    `<b>tribal</b>: traer las tres de un mismo palo.`,
  ]
}, {
  es: `<a href="#setup">Preparación <b>inicial</b></a>`,
}]);

typer.add("setup", [{
  es: "El tablero",
}, {
  es: [
    `El mapa que usarás en la partida
      lo creas de improviso y previamente,
      con piezas que conectas por sus vías
      en cientos de maneras diferentes.`,
  ]
}, {
  es: [
    `El reino de las cartas y sus templos
      se ensambla con terrenos aleatorios;
      empieza por armar el del <a class="pop" onclick="popUp('sample')"><b>ejemplo</b></a>
      o anímate a <a class="pop" onclick="popUp('board')"><b>crear el territorio</b></a>.`,
  ]
}, {
  es: "Las cartas",
}, {
  es: [
    `Después de que el tablero se termina
      y estén establecidos los lugares,
      la <i>corte</i> se separa bocarriba
      con cartas de los <i>jokers</i> y <i>reales</i>:
      las dos de comodines exclusivas
      y doce que contienen personajes.`,
  ]
}, {
  es: [
    `En cuanto a las que restan en la <i>pila</i>,
      los <i>palos numerales</i> y los <i>ases</i>,
      después de barajarlas y reunirlas,
      del mazo bocabajo las repartes.
      Entrégales sus tres, sin exhibirlas,
      a cada concursante, individuales.
      Con estas tramarán la travesía
      y harán la adquisición de las reales.`,
  ]
}, {
  es: "Las fichas",
}, {
  es: [`Asigna a las personas sus conejos
      y allí en la <a class="pop" onclick="popUp('citadel')"><b>ciudadela</b></a> los colocan.
      Les das las zanahorias de su juego,
      las tres de los colores que les tocan.`, ]
}, {
  es: [
    `Escoge el <a class="pop" onclick="popUp('endings')"><b>fin del juego</b></a> que se exige,
      descrito en el principio de las reglas;
      y a menos que se juegue por el simple,
      su sello se pondrá en la ciudadela.`,
  ]
}, {
  es: [
    `Elige a la persona que comienza
      y el orden de los turnos que le siguen
      (le importa en lo absoluto tu sistema
      al noble mensajero que te escribe).`,
  ]
}, {
  es: [
    `Preparas el inicio del lugar
      y empiezas con un <a href="#intro">juego <b>ELEMENTAl</b></a>.`
  ]
}]);

typer.add("intro", [{
  es: `Dominas el siguiente material
    y luego lo del <a href="#full">juego <b>REGULAR</b></a>.`
}, {
  es: "Las FASES de cada turno",
}, {
  es: "1. La lotería",
}, {
  es: [
    `Tu turno lo comienzas con la suerte
    de un premio de la pila tras los dados.
    Si un dado, de los dígitos que obtienes,
    coincide con un número en tus manos,
    demuestra con tu carta que lo tienes
    y llévate la carta de regalo.`,
    `El límite de cartas es de nueve;
    descarta la que quieras si te excedes.`,
    `Conserva el resultado de los dados;
    los usas en <a class="pop" onclick="popUp('price')"><b>el precio</b></a> de traslados`
  ]
}, {
  es: "2. La travesía",
}, {
  es: [`Del sitio hexagonal en el que empiezas,
    escoge si te irás por un camino.
    Señala el recorrido por las piezas
    llevando tu conejo peregrino.
    Termina el movimiento si tropiezas
    con una hexagonal en su destino.`,
    `Recuerda que moverte es opcional,
    depende de tu meta a visitar.`,
    `Podrías expandir tus travesías
    pagando <a href="#intro/tranfers"><b>los traslados</b></a> en las vías.`,
  ]
}, {
  es: "3. La adquisición",
}, {
  es: [
    `Tu meta es visitar a la nobleza
    si nadie se ha apropiado de sus cartas.
    Un mínimo de diez es lo que cuestan,
    pagado con los palos de sus marcas.
    Se dejan zanahorias en las piezas
    que indican los conejos que las cargan.`,
    `Es gratis visitar a los hexágonos
    y hacer tu recorrido visitándolos.`,
    `Conserva lo que adquieras en tu mano
    y obtén <b>el incremento</b> de inmediato.`,
  ]
}, {
  es: "4. El Incremento",
}, {
  es: [
    `Te toca, en el hexágono que esperas,
    la carta que prosigue de la pila.
    Si llegas con la pila ya desierta,
    baraja las del lote y recopila.
    Así que, en un hexágono te quedas
    y el turno se termina al recibirla.*`,
    `El límite de cartas es de nueve;
    descarta la que quieras si te excedes.`,
    `*Tu turno acabará sin incremento
    si estás en <a href="#intro/off"><b>el destierro</b></a> en el momento.`,
  ]
}, {
  es: "Los traslados",
}, {
  es: `Es gratis desplazarte a los hexágonos
    si sigues por los vínculos continuos;
    incluso las montañas, más abajo,
    se cruzan por sus túneles gratuitos.
    En cambio, si utilizas los traslados,
    marcados a mitad de los polígonos,
    <a class="pop" onclick="popUp('price')"><b>el precio</b></a> es el fijado por los dados
    y pagas con las cartas de los símbolos.`,
}, {
  es: "traslado por Pasadizos",
}, {
  es: `Los bosques, las montañas y los ríos,
    que ves en las imágenes de abajo,
    permiten que te cambies de camino
    cruzando por el centro en un atajo,
    marcado con los palos permitidos
    que pagas con tus cartas al cruzarlo.`,
}, {
  es: "traslado con Comerciantes",
}, {
  es: `Los cruces te permiten transportarte
    viajando por los mares o las tierras:
    cabalgas por las tierras sin pararte,
    moviéndote al hexágono que quieras;
    o sales, si es posible que te embarques
    de un cruce con salida a las afueras,
    y surcas tu trayecto por los mares
    entrando por alguna carretera.
    Saldrás en el momento en el que pagues 
    y anuncies el transporte que prefieras.`,
}, {
  es: "traslado con Comodines",
}, {
  es: `Si pagas al pasar por las tabernas,
    tendrás un comodín desocupado;
    lo cargas y, al momento en que requieras,
    lo montas y liberas de tu mano. `,
}, {
  es: "traslado por Madrigueras",
}, {
  es: `Si pagas en la entrada de las cuevas,
    saldrás por la que quieras de inmediato.
    Si no, te ahorrarás lo que te cuesta,
    metiéndote al <a class="pop" onclick="popUp('underground')"><b>subsuelo</b></a> por un rato;
    descansas por el turno y, a la vuelta, 
    te sales por la cueva de tu agrado.`,
}, {
  es: "El Destierro"
}, {
  es: `A veces te conviene que salieras
    cayendo de un camino a las orillas.
    Olvida el incremento si lo hicieras,
    y acaba con el turno a la deriva.
    Mantén <b>la lotería</b> en las afueras,
    y entonces, al llegar <b>la travesía</b>,
    te metes al subsuelo a lo que esperas
    la vuelta en la que escoges la salida.`,
}, {
  es: `El <a href="#full">juego <b>regular</b></a> es desafiante,
    con reglas que usarás en lo adelante.`
}]);

typer.add("full", [{
  es: `Se añaden los artículos restantes
      al <a href="#intro">juego <b>elemental</b></a> de principiantes.`
}, {
  es: "las estrategias de cada palo",
}, {
  es: "Tréboles <small>(Bastos)</small>",
}, {
  es: "Volar entre las torres K",
}, {
  es: [
    `Preséntate con <i>carta pasaporte</i>,
    un trébol al lanzar <b>la lotería</b>,
    y harás <b>la travesía</b> torre-a-torre
    si no lo sobrepasa lo que tiras.
    En cambio, si los dados son mayores,
    te sales al destierro en las orillas.
    Igual el pasaporte lo recoges;
    y el premio, si un acierto se confirma.`,
    `Se puede completar la travesía,
    pagar la diferencia de los dados,
    con palos de la torre de partida
    que cubran el <i>restante</i> resultado.
    La carta pasaporte es permitida
    si vuelas de la torre de los bastos.`
  ]
}, {
  es: "Picas <small>(Espadas)</small>",
}, {
  es: "Pelear con los conejos",
}, {
  es: [
    `Declárale la <i>guerra sin empates</i> 
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
    te toca <b>el incremento</b> de tus cartas;
    y entrégale a la corte la que quieras,
    si acaso la que robas es tu cuarta.`,
  ]
}, {
  es: "Corazones <small>(Copas)</small>",
}, {
  es: "Acceder a los palacios Q",
}, {
  es: [
    `Anúnciate en la <i>entrada de las reinas</i>
    y espera que en la mesa te cuestionen:
    si cargas con su carta o con la cuenta 
    de un mínimo de seis en corazones.
    Te expulsan al destierro si te frenan
    y niegas que tu suma se cerciore.
    Mas, antes de mostrar tus pertenencias,
    se exige de cualquiera que cuestione,
    que muestre previamente que las tenga,
    las cartas con aquellas condiciones,
    Pues, pierde lo mostrado y se destierra
    si pruebas que te acusa sin razones.`,
    `Tan solo acusarás a los viajeros
    si tienes tu conejo en el tablero.`,
  ]
}, {
  es: "Diamantes <small>(Oros)</small>",
}, {
  es: "Canjear en las plazas J",
}, {
  es: "y con los conejos",
}, {
  es: [
    `Observa los <i>hexágonos de ventas</i>
    con flechas que sugieren intercambio.
    En estos, los diamantes se canjean 
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
  ]
}, {
  es: `Renueva tus partidas habituales
    jugango con las <a href="#optional">reglas <b>opcionales</b></a>.`
}]);

typer.add("optional", [{
  es: "Reglas Opcionales",
}, {
  es: "Ases Ambivalentes",
}, {
  es: `Elige los valores de tus ases,
    que cuentan por un <b>1</b> o por un <b>11</b>,
    ya sea en el momento en que los gastes
    o incluso en el momento que los compres.`,
}, {
  es: "Ases capitales",
}, {
  es: `El <i><b>A</b>s</i> que de primero desembolses,
    descártalo y consérvalo en tu frente;
    pues éste se valora por un <b>11</b>
    y solo por un <b>1</b> tus siguientes.`,
}, {
  es: "Ases capitales adicionales",
}, {
  es: `Recibe un complemento adicional
    del <b>A</b>s que desembolsas en tu frente;
    la cuenta de su palo es opcional
    y vale por un <b>1</b> permanente.`,
}, {
  es: `<a class="pop" onclick="popUp('advancedCitadel')">Ciudadela Avanzada</a>`,
}, {
  es: `Se esperan corazones al entrar;
    canjeas lo que quieras con diamantes;
    y puedes con tus tréboles volar,
    con palos cualesquiera de restante.`,
}, {
  es: "Lluvia de premios",
}, {
  es: `Permite reclamar <b>la lotería</b>
    por múltiples aciertos y regalos,
    ya sea con las cartas que validas
    o incluso con un doble de los dados.`,
}, {
  es: "Cartas Cortas",
}, {
  es: `Se juega con un palo por conejo
    y un <a class="pop" onclick="popUp('roadTiles')">set de carreteras</a> a su vez;
    con tres participantes, por ejemplo,
    un palo se elimina con un set.`,
}, {
  es: "Valores Patriarcales",
}, {
  es: `Valoras a los <b>A</b>ses por <b>14</b>;
    los reyes, es por <b>13</b> que valoras;
    las reinas, subvalóralas por <b>12</b>;
    y es <b>11</b> (menos precio) por las jotas.`,
}, {
  es: "Manos Mínimas",
}, {
  es: `Las cartas en tu mano y su manejo
    te retan en un juego de escasez,
    pues cuentas con un límite pequeño
    cargando con un máximo de seis.`,
}, {
  es: "Rastro de zanahorias",
}, {
  es: `Podrás incrementar la travesía
    si está tu zanahoria en un lugar;
    pues puedes, en el turno que visitas,
    salirte sin parar a descansar.`,
}, {
  es: "Juego <b>Regular</b>",
}]);

typer.add("popup", [{
  es: "Ciudadela",
}, {
  es: `La pieza hexagonal en la que empiezas…
    y acabas al traer a la nobleza.`
}, {
  es: "Subsuelo",
}, {
  es: `La pieza hexagonal en la que esperas
    si vas a atravesar las madrigueras.`
}, {
  es: "Ciudadela Avanzada",
}, {
  es: `Detrás, la ciudadela es avanzada:
    con torre, con palacio y con su plaza.`
}, {
  es: "Set de carreteras",
}, {
  es: `Las seis particulares en un combo
    de piezas triangulares y de rombos.`
}, {
  es: "Tablero de ejemplo",
}, {
  es: "Crear el territorio",
}, {
  es: [
    `Comienza por poner la <i>ciudadela</i>
    y el negro del <i>subsuelo</i>, separándolos.
    Revuelve bocabajo lo que queda:
    los rombos, los hexágonos y triángulos.`,
    `Indica a las personas que recojan
    iguales cantidades de las piezas,
    por formas geométricas les tocan
    de a doce dividido por cabeza.`,
    `Ofréceles la opción de colocarlas
    por turnos o por libre preferencia.
    Por <b>turnos</b>: se mantienen sin mirarlas,
    y pieza que volteen la conectan;
    y <b>libre</b>: se permiten voltearlas
    sin turnos ni descansos al ponerlas.
    Igual observarán al conectarlas
    el vínculo de vías carreteras:`,
  ]
}, {
  es: [
    `Evita callejones sin salidas (T)
    y vínculos de dos hexagonales (x).`,
    `Es bueno que se eviten cercanías
    de piezas triangulares similares (!).`,
    `Las islas que desees las inicias
    con una hexagonal a la que apartes.`,
    `La pieza del subsuelo es exclusiva;
    se queda sin uniones laterales.`,
  ]
}, {
  es: "El precio",
}, {
  es: [
    `Las vías con los símbolos de cartas
    te ofrecen un <i>traslado</i> de lugar.
    La suma de los dados es la tasa,
    o el mínimo que tienes que pagar. 
    Se pierde el sobrepago si te pasas;
    los símbolos se pueden combinar.`,
    `Las cartas se <i>descartan</i> al usarse,
    dejándolas a un lado de la mesa.
    Es <b>1</b> lo que cuentas por los ases,
    y <b>10</b> por las reales o con letras.
    Recuerda, si es que gastas las reales,
    quitar tu zanahoria de sus piezas,
    y en vez de terminar en el descarte,
    regresan a la corte en la que empiezan.`,
  ]
}]);



export const PAGER = new Mapper({
  home: {
    section: [{
      class: "carded",
      img: ASSETS.jackRabbits,
      p: versify(typer.get("home")),
      a: {
        href: "../",
        text: "jackrabbits.lenino.net",
      }
    }, {
      class: "letter",
      h2: typer.next(),
      p: typer.next(),
    }, {
      h2: typer.next(),
      p: versify(typer.next(), ASSETS.royals, typer.next()),
    }, {
      h2: typer.next(),
      p: versify(typer.next(), ASSETS.citadelThumb, typer.next()),
      ul: {
        li: typer.next(),
      }
    }],
    footer: {
      p: versify(typer.next()),
    },
  },
  setup: {
    section: [{
      h2: 1,
      h3: typer.get("setup"),
      p: versify(typer.next(), ASSETS.sample, typer.next()),
    }, {
      h2: 2,
      h3: typer.next(),
      p: versify(typer.next(), ASSETS.cards, typer.next())
    }, {
      h2: 3,
      h3: typer.next(),
      p: versify(typer.next(), ASSETS.tokens, typer.next(), ASSETS.endings, typer.next()),
    }],
    footer: {
      p: versify(typer.next()),
    },
  },
  intro: {
    header: {
      p: versify(typer.get("intro")),
      h2: typer.next(),
    },
    section: [{
      img: ASSETS.lottery,
      h3: typer.next(),
      p: versify(typer.next()),
    }, {
      img: ASSETS.journey,
      h3: typer.next(),
      p: versify(typer.next()),
    }, {
      img: ASSETS.acquisition,
      h3: typer.next(),
      p: versify(typer.next()),
    }, {
      img: ASSETS.increment,
      h3: typer.next(),
      p: versify(typer.next()),
    }, {
      a: {
        name: "intro/tranfers",
      },
      tag: "header",
      h3: typer.next(),
    }, {
      p: versify(typer.next(), {
        marginTop: '1.2rem',
        tag: "h4",
        html: typer.next()
      }, typer.next()),
      img: ASSETS.rhombi,
    }, {
      h4: typer.next(),
      p: versify(typer.next(), {
        tag: "h4",
        html: typer.next()
      }, typer.next()),
      img: ASSETS.rides,
    }, {
      h4: typer.next(),
      p: versify(typer.next(), {
        tag: "a",
        name: "intro/off",
      }, {
        tag: "h3",
        html: typer.next()
      }, typer.next()),
      img: ASSETS.caves,
    }],
    footer: {
      p: versify(typer.next()),
    },
  },
  full: {
    header: {
      p: versify(typer.get("full")),
      h2: typer.next(),
    },
    section: {
      boxShadow: "1px 1px 3px black",
      content: [{
        backgroundColor: "rgba(200,250,250,0.3)",
        h3: typer.next(),
        img: ASSETS.clubs,
        h4: typer.next(),
        p: versify(typer.next()),
      }, {
        backgroundColor: "rgba(220,200,255,0.6)",
        h3: typer.next(),
        img: ASSETS.spades,
        h4: typer.next(),
        p: versify(typer.next()),
      }, {
        backgroundColor: "rgba(250,200,220,0.6)",
        h3: typer.next(),
        img: ASSETS.hearts,
        h4: typer.next(),
        p: versify(typer.next()),
      }, {
        backgroundColor: "rgba(250,240,200,0.4)",
        h3: typer.next(),
        img: ASSETS.diamonds,
        h4: typer.next(),
        h5: typer.next(),
        p: versify(typer.next()),
      }]
    },
    footer: {
      p: versify(typer.next()),
    },
  },
  optional: {
    header: {
      h2: typer.get("optional"),
    },
    section: {
      backgroundColor: "rgba(255,255,255,0.6)",
      margin: "0.5rem 1.1rem",
      content: [{
        h3: typer.next(),
        p: versify(typer.next()),
      }, {
        h3: typer.next(),
        p: versify(typer.next()),
      }, {
        h3: typer.next(),
        p: versify(typer.next()),
      }, {
        h3: typer.next(),
        p: versify(typer.next()),
      }, {
        h3: typer.next(),
        p: versify(typer.next()),
      }, {
        h3: typer.next(),
        p: versify(typer.next()),
      }, {
        h3: typer.next(),
        p: versify(typer.next()),
      }, {
        h3: typer.next(),
        p: versify(typer.next()),
      }, {
        h3: typer.next(),
        p: versify(typer.next()),
      }],
    },
    footer: {
      a: {
        html: typer.next(),
        href: "#full",
      }
    },
  },
}, true);


export const POPPER = new Mapper({
  citadel: {
    h3: typer.get("popup"),
    img: ASSETS.citadel,
    p: versify(typer.next()),
  },
  underground: {
    h3: typer.next(),
    img: ASSETS.underground,
    p: versify(typer.next())
  },
  advancedCitadel: {
    h3: typer.next(),
    img: ASSETS.advancedCitadel,
    p: versify(typer.next())
  },
  roadTiles: {
    h3: typer.next(),
    img: ASSETS.roadTiles,
    p: versify(typer.next())
  },
  sample: {
    h3: typer.next(),
    img: ASSETS.sample,
  },
  endings: {
    content: PAGER.map.home.section[3],
  },
  board: {
    h3: typer.next(),
    p: versify(typer.next()),
    img: ASSETS.guides,
    ul: {
      li: typer.next()
    }
  },
  price: {
    h4: typer.next(),
    p: versify(typer.next())
  }
});