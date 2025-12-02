import Copy from "../../lib/Copy.js";
import ASSETS from "../assets.js";
import versify from "../aux/versify.js";
import HandSection from "../HandSection.js";
import Song from "../Song.js";

const setupPage = {
  section: new HandSection({
    header: {
      h2: Copy.text({
        es: "Prepara la Mesa en 3 pasos",
        en: "3 Steps to set the table",
      }),
    },
    section: [{
      h3: "1. </br>" + Copy.text({
        es: "Arma el tablero",
        en: "Build the Board",
      }),
      p: versify(
        Copy.text({
          es: [`El mapa que usarás en la partida
          lo creas de improviso y previamente.
          Las piezas se conectan por sus vías
          en cientos de maneras diferentes.`,
            `Ensamblas un diseño aleatorio
          del reino de las cartas y sus templos.
          Dirígete a <a class="pop" onclick="popUp('board')"><b>crear el territorio</b></a>
          o intenta replicar el del ejemplo.`,
          ],
          en: [`At the start of every match,
          you must first complete a board.
          Map it randomly from scratch,
          or revisit one explored.`,
            `Link the houses from each throne, 
          which are hexes in this spread. 
          <a class="pop" onclick="popUp('board')"><b>build a new board</b></a>  of your own,
          or the sample right ahead.`,
          ],
        }),
        ASSETS.thumbnailOf("sampleThumbnail", '8em', e => popUp("sample")),
        Copy.text({
          es: `Limítate al ensamble de las tierras
          si juegas con menores de los nueve.
          Que exploren recorrer las carreteras
          usando los conejos que se mueven.
          Añádeles las cartas y sus reglas
          si entienden a medida que las prueben.`,
          en: `If there're children under nine,
          only play to build the land.
          Then explore what they design—
          with a rabbit in their hand.
          Bring the cards in down the line,
          and the rules they understand.`,
        })),
    }, {
      h3: "2. </br>" + Copy.text({
        es: "Reparte las cartas",
        en: "Deal the cards",
      }),
      p: versify(
        Copy.text({
          es: `Después de que el tablero se termina
          y estén establecidos los lugares,
          la <i>corte</i> se separa bocarriba
          con cartas de los <i>jókers</i> y <i>reales</i>:
          las dos de comodines exclusivas
          y doce que contienen personajes.`,
          en: `Lay the <i>court</i> in any order,
          after placing every tile.
          These are <i>royal</i> cards and <i>jokers</i>,
          and will form a faceup aisle.
          What remains are <i>pips</i> in number,
          and the <i>aces</i> of each style.
          Give a shuffle as in poker—
          set a facedown drawing <i>pile</i>.`,
        }),
        ASSETS.cards,
        Copy.text({
          es: `En cuanto a las que restan en la <i>pila</i>,
          los <i>palos numerales</i> y los <i>ases</i>,
          después de barajarlas y reunirlas,
          del mazo bocabajo las repartes.
          Se empieza con las <i>manos</i> repartidas,
          ocultas y de a tres por concursante.
          Con estas tramarán <b>la travesía</b>
          y harán <b>la adquisición</b> de las reales.`,
          en: `Every player gets three cards, 
          that's their <i>hand</i> to start the chase.
          These resources, each one guards, 
          fund <b>the journey</b> they will face.
          And pay royals their regards,
          per <b>the acquisition</b> phase.`,
        }))
    }, {
      h3:"3. </br>" + Copy.text({
        es: "Sitúa las fichas",
        en: "Set the tokens",
      }),
      p: versify(
        Copy.text({
          es: `Asigna a las personas un conejo,
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
          en: `For <a class="pop" onclick="popUp('endings')"><b>objective</b></a> of the game,
          choose the kind of quest you’re on.
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
          Choose your ways for this endeavor—
          none of these are my concerns.`,
        })),
    }],
    footer: {
      a_button_song: {
        marginBottom: "1em",
        content: Song.List[1].link,
      },
      p: versify(Copy.text({
        es: `Ya tienes la misión y el territorio.
        Comienza con el <a href="#intro"><b><big>juego introductorio</big></b></a>.`,
        en: `This concludes the setup frame. 
      Now complete the  <a href="#intro"><b><big>intro game</big></b></a>.`,
      })),
    },
  }),
};

export default setupPage;