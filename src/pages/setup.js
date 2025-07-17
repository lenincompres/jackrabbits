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
          en: [`To play a <b>Jack Rabbits</b> match,
          you must first complete a board—
          build a random land from scratch,
          a new map to be explored.`,
          `Link the tiles within this spread—
          these house royals from each throne. 
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
          en: `With children younger than nine,
          just play at building the land.
          Insist they roam the design,
          and move the rabbits by hand.
          Include the cards in due time,
          as soon as they understand.`,
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
          en: `Remove each <i>face card</i> and <i>joker</i>
          after placing the last tile.
          Display them in any order—
          line up this <i>court</i> in an aisle. 
          Shuffle the rest as in poker—
          make a facedown drawing <i>pile</i>,
          which holds <i>pip cards</i> of a number
          and <i>aces</i> of fancier style.`,
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
          en: `Each player will draw three cards 
          to hold as the starting <i>hands</i>:
          the resources each regards    
          for <b>the journey</b> through the lands,
          and for the royal rewards
          <b>the acquisition</b> demands.`,
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
          en: `Players will select their rabbits,
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
          en: `Choose the royal quest you're on,
          described in <a class="pop" onclick="popUp('endings')"><b>ending the game</b></a>,
          and place on this hexagon
          the circle that marks this aim.`,
        }),
        ASSETS.endings,
        Copy.text({
          es: `Elige a la persona que comienza
          y el orden de los turnos que le siguen
          (me importa en lo absoluto tu sistema:
          que lo hagas al azar o lo designes).`,
          en: `Now, select a starting player,
          and the order of the turns—
          the method for this endeavor
          resides beyond my concerns.`,
        })),
    }],
  },
  footer: {
    p: versify(Copy.text({
      es: `Después de preparado el territorio,
        comienzas con un <a href="#intro"><b><big>juego introductorio</big></b></a>.`,
      en: `Continue to the next frame 
        to complete an <a href="#intro"><b><big>intro game</big></b></a>.`,
    })),
  },
};

export default setupPage;