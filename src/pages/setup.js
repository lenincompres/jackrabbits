import Copy from "../../lib/Copy.js";
import ASSETS from "../assets.js";
import versify from "../aux/versify.js";

const setupPage = {
  section: [{
    h2: 1,
    h3: Copy.text({
      es: "Arma el tablero",
      en: "Build the Board",
    }),
    p: versify(
      Copy.text({
        es: `El mapa que usarás en la partida
          lo creas de improviso y previamente,
          con piezas que conectas por sus vías
          en cientos de maneras diferentes.`,
        en: `To play a <b>jack rabbits</b>' match,
          you must first complete a board;
          build a random land from scratch—
          a new map to be explored.`,
      }),
      ASSETS.thumbnailOf("sample", Copy.lang === Copy.LANG.es.code ? '9.5em' : '8em', e => popUp("sample")),
      Copy.text({
        es: `El reino de las cartas y sus templos
          se ensambla en un proceso aleatorio;
          comienza por armar el del <a class="pop" onclick="popUp('sample')"><b>ejemplo</b></a>
          o anímate a <a class="pop" onclick="popUp('board')"><b>crear el territorio</b></a>.`,
        en: `The lands you connect and spread
          house the royals from each throne. 
          On your first game, go ahead,
          build the <a class="pop" onclick="popUp('sample')"><b>sample</b></a> as is shown.
          Or play normally instead:
          <a class="pop" onclick="popUp('board')"><b>build a new board</b></a> of your own.`,
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
          a cada concursante, individuales;
          con estas tramarán <b>la travesía</b>
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
          y allí en la <a class="pop" onclick="popUp('citadel')"><b>ciudadela</b></a> los colocan.
          Les das las zanahorias de su juego,
          las tres de los colores que les tocan.`,
        en: `Players will select their rabbits,
          place them on the <a class="pop" onclick="popUp('citadel')"><b>citadel</b></a>,
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
          (le importa en lo absoluto tu sistema
          al noble mensajero que te escribe).`,
        en: `Now, select a starting player,
          and the order of the turns—
          the method for this endeavor
          resides beyond my concerns.`,
      })),
  }],
  footer: {
    p: versify(Copy.text({
      es: `Después de preparado el territorio,
        comienzas con un <a href="#intro"><b>juego introductorio</b></a>.`,
      en: `Continue to the next frame 
        to complete an <a href="#intro"><b>intro game</b></a>.`,
    })),
  },
};

export default setupPage;