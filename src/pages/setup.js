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
          lo creas de improviso y previamente,
          con piezas que conectas por sus vías
          en cientos de maneras diferentes.`,
          `El reino de las cartas y sus templos
          se ensambla en un diseño aleatorio;
          comienza por armar el del <a class="pop" onclick="popUp('sample')"><b>ejemplo</b></a>
          o anímate a <a class="pop" onclick="popUp('board')"><b>crear el territorio</b></a>.`,],
          en: [`For the setting of a match,
          you must first complete a board—
          build a random land from scratch,
          a new map to be explored.`,
          `Link the tiles within this spread—
          which house royals from each throne. 
          On your first game, go ahead,
          build the <a class="pop" onclick="popUp('sample')"><b>sample</b></a> as it's shown.
          Or play normally instead:
          <a class="pop" onclick="popUp('board')"><b>build a new board</b></a> of your own.`, ],
        }),
        ASSETS.thumbnailOf("sampleThumbnail", Copy.lang === Copy.LANG.es.code ? '7em' : '5em', e => popUp("sample")),
        Copy.text({
          es: [
          `Limítate al ensamble de las tierras
          si juegas con menores de los nueve.
          Que exploren recorrer las carreteras
          usando los conejos que se mueven.
          Y añádeles las cartas y sus reglas,
          si ves que es el momento de que prueben.`],
          en: `Younger children under nine
          can at first just build the land,
          then explore what they design 
          with a rabbit in their hand.
          Add the card rules in due time—
          once they start to understand.`,
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
          en: `Take out each <i>face card</i> and <i>joker</i>
          after placing the last tile.
          Lay this <i>court</i> in any order
          to display a face-up aisle.
          Shuffle the rest as in poker—
          make a facedown drawing <i>pile</i>,
          which holds <i>pip cards</i> of a number
          and the <i>aces</i> of each style.`,
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
          en: `Every player draws three cards 
          as their <i>hand</i> to start the chase:
          the resources each regards 
          for <b>the journey</b> they must face,
          and to pay for the rewards
          in <b>the acquisition</b> phase.`,
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
          y allí en la <a class="pop" onclick="popUp('citadel')"><i>ciudadela</i></a> los colocan.
          Les das las zanahorias de su juego,
          las tres de los colores que les tocan.`,
          en: `Players must select their rabbits,
          place them on the <a class="pop" onclick="popUp('citadel')"><i>citadel</i></a>,
          and pick up their matching carrots—
          they get three of these as well.`,
        }),
        ASSETS.tokens,
        Copy.text({
          es: `Escoge el <a class="pop" onclick="popUp('endings')"><b>fin del juego</b></a> que se exige,
          descrito en el principio de las reglas;
          y a menos que se juegue por el simple,
          su sello se pondrá en la ciudadela.`,
          en: `See what fits <a class="pop" onclick="popUp('endings')"><b>ending the game</b></a>,
          and select the quest you're on—
          if a circle marks this aim, 
          place it on this hexagon.`,
        }),
        ASSETS.endings,
        Copy.text({
          es: `Elige a la persona que comienza
          y el orden de los turnos que le siguen
          (me importa en lo absoluto tu sistema:
          que lo hagas al azar o lo designes).`,
          en: `As for choosing the first player
          and the order of the turns,
          what you do for this endeavor 
          has no place in my concerns.`,
        })),
    }],
  },
  footer: {
    p: versify(Copy.text({
      es: `Después de preparado el territorio,
        comienzas con un <a href="#intro"><b><big>juego introductorio</big></b></a>.`,
      en: `Follow on to the frame, 
        and complete an <a href="#intro"><b><big>intro game</big></b></a>.`,
    })),
  },
};

export default setupPage;