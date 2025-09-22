import Copy from "../../lib/Copy.js";
import ASSETS from "../assets.js";
import versify from "../aux/versify.js";

const setupPage = {
  article: {
    section: [{
      h2: 1,
      h3: Copy.text({
        es: "Arma el tablero",
        en: "Build the Board",
      }),
      p: versify(
        Copy.text({
          es: [`El mapa que usarás en la partida
          lo creas de improviso y previamente.
          Las piezas se conectan por sus vías
          en cientos de maneras diferentes.`,
          `El mapa es un diseño aleatorio
          del reino de las cartas y sus templos.
          Dirígete a <a class="pop" onclick="popUp('board')"><b>crear el territorio</b></a>
          o intenta replicar el del ejemplo.`,],
          en: [`At the start of every match,
          you must first complete a board.
          Map it randomly from scratch,
          or revisit one explored.`,
          `Link the hexes in this spread—
          royal houses from each throne. 
          <a class="pop" onclick="popUp('board')"><b>build a new board</b></a>  right ahead,
          or this sample as is shown.`, ],
        }),
        ASSETS.thumbnailOf("sampleThumbnail", '8em', e => popUp("sample")),
        Copy.text({
          es: [
          `Limítate al ensamble de las tierras
          si juegas con menores de los nueve.
          Que exploren recorrer las carreteras
          usando los conejos que se mueven.
          Añádeles las cartas y sus reglas
          si captan a medida que las prueben.`],
          en: `If there're children under nine,
          only play to build the land.
          Then explore what they design—
          with a rabbit in their hand.
          Add the card deck down the line,
          and the rules they understand.`,
        })),
    }, {
      h2: 2,
      h3: Copy.text({
        es: "Reparte las cartas",
        en: "Deal the cards",
      }),
      p: versify(
        Copy.text({
          es: `Después de que el tablero se termina
          y estén establecidos los lugares,
          la <i>corte</i> se separa bocarriba
          con cartas de los <i>jokers</i> y <i>reales</i>:
          las dos de comodines exclusivas
          y doce que contienen personajes.`,
          en: `Lay the <i>court</i> in any order,
          after placing every tile.
          These are <i>royal</i> cards and <i>jokers</i>,
          and will form a faceup aisle.
          What remains are <i>pips</i> in number,
          and the <i>aces</i> of each style.
          Give a shuffle as in poker— 
          form a facedown drawing <i>pile</i>.`,
        }),
        ASSETS.cards,
        Copy.text({
          es: `En cuanto a las que restan en la <i>pila</i>,
          los <i>palos numerales</i> y los <i>ases</i>,
          después de barajarlas y reunirlas,
          del mazo bocabajo las repartes.
          Entrégales sus tres, sin exhibirlas,
          a cada concursante, individuales.
          Con estas tramarán <b>la travesía</b>
          y harán <b>la adquisición</b> de las reales.`,
          en: `Every player gets three cards, 
          that's their <i>hand</i> to start the chase.
          These resources each one guards, 
          fund <b>the journey</b> they will face.
          And pay royals their regards— 
          per <b>the acquisition</b> phase.`,
        }))
    }, {
      h2: 3,
      h3: Copy.text({
        es: "Sitúa las fichas",
        en: "Set the tokens",
      }),
      p: versify(
        Copy.text({
          es: `Asigna a las personas sus conejos
          y allí en la <a class="pop" onclick="popUp('citadel')"><i>Ciudadela</i></a> los colocan.
          Les das las zanahorias de su juego,
          las tres de los colores que les tocan.`,
          en: `Players choose their token rabbits, 
          set them on the <a class="pop" onclick="popUp('citadel')"><i>Citadel</i></a>.
          And collect their matching carrots—
          they get three of these as well.`,
        }),
        ASSETS.tokens,
        Copy.text({
          es: `Escoge el <a class="pop" onclick="popUp('endings')"><b>fin del juego</b></a> que se exige,
          descrito en el principio de las reglas.
          A menos que se juegue por el simple,
          su sello se pondrá en la Ciudadela.`,
          en: `See what fits to <a class="pop" onclick="popUp('endings')"><b>end the game</b></a>,
          and select the quest you’re on.
          If a circle marks this aim, 
          set it on the hexagon.`,
        }),
        ASSETS.endings,
        Copy.text({
          es: `Elige a la persona que comienza
          y el orden de los turnos que le siguen.
          Me importa en lo absoluto tu sistema,
          que lo hagas al azar o lo designes.`,
          en: `Now select the starting player, 
          and the order of the turns.
          Choose your way for this endeavor—
          it is none of my concerns.`,
        })),
    }],
  },
  footer: {
    p: versify(Copy.text({
      es: `Ya tienes la misión y el territorio.
        Comienza con el <a href="#intro"><b><big>juego introductorio</big></b></a>.`,
      en: `This concludes the setup frame. 
      Next you'll find the  <a href="#intro"><b><big>intro game</big></b></a>.`,
    })),
  },
};

export default setupPage;