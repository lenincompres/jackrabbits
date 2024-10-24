import Copy from "./classes/Copy.js";

const copy = new Copy();

copy.add("header", [{
  es: "Juego de Mesa",
  en: "Board Game",
}, {
  es: "<small>Preparación</small></br>Inicial",
  en: "Setup",
}, {
  es: "Juego</br><small>Introductorio</small>",
  en: "Intro game",
}, {
  es: "Juego</br><small>Completivo</small>",
  en: "Full game",
}, {
  es: "<small>Tienda</br>&</small>más",
  en: "Store <small>&</small>more",
}]);

copy.add("footer", [{
  es: `Suscríbete al <a class="pop" onclick="popUp('mailingList')"><b>Listado de Correos</b></a> 
  y apoya la campaña que tendremos.`,
  en: `Join the <a class="pop" onclick="popUp('mailingList')"><b>List</b></a> on this domain,
  and stay tuned for our campaign.`,
}, {
  es: "Compra el juego",
  en: "Buy the game",
}, 
"Instagram", 
{
  es: "Versión virtual",
  en: "Virtual version",
}, {
  es: "Descubre la novela",
  en: "Discover the novel",
}]);

copy.add("home", [{
  es: "Compra el juego",
  en: "Buy the game",
}, {
  es: `El juego de tablero en el que viajas
    al reino de conejos y barajas.`,
  en: `The board game for playing cards
    on a land of wooden shards`,
}, {
  es: "Video tutorial",
  en: "Video tutorial",
}, {
  es: "Bienvenida",
  en: "Greetings",
}, {
  es: [
    `Atención heroicos mensajeros,`,
    `Por orden de la Orden de Conejos Mensajeros de la Ciudadela, se te ordena adquirir las cartas de la terna que será ordenada al nuevo concejo real. Esta misión de orden superior es la orden más importante que un conejo de esta orden puede recibir:`,
    `<strong>Visita las casas nobles, adquiere tres cartas con insignias reales y tráelas a la ciudadela</strong>, en tal orden.`,
    `En ese orden, cuando digo <i>tal orden</i> no me refiero a alguna otra orden de conejos mensajeros ni a la orden del motivo de esta carta, sino al orden de los pasos para restaurar el orden en el reino.`,
    `¡En marcha! ¡El tiempo apremia!`,
    `El Heraldo Blanco`,
  ],
  en: [
    `Hear ye, glorious messengers,`,
    `An auspicious quest is in order. The Order of Messenger Rabbits of the Citadel is ordering a race to procure royals to be ordained as the council of thirds. This is the highest order a rabbit of this order can obtain:`,
    `<strong>Visit the noble houses, acquire the cards of three royals, and bring them to the Citadel</strong>, in that order.`,
    `Note that when I say <i>that order</i>, I am not referring to another order</br>of messenger rabbits, nor the order that drives this letter, but the order of the steps you must take, in order to fully restore the realm's order.`,
    `So, hoppity hop, in orderly fashion. Don't dawdle. No time to lose!`,
    `The White Herald`,
  ]
}, {
  es: "Visión General",
  en: "Overview",
}, {
  es: [
    `Irás a transitar por los caminos
    cargando con tus cartas numerales.
    La meta es que regreses al castillo
    luciéndote con tres de las reales.`,
    `Dirígete a las casas de monarcas
    a hacer <b>la adquisición</b> en su presencia.
    Con diez de los puntitos de sus marcas,
    recibes su real correspondencia. `,
  ],
  en: [
    `Go through the realm turn by turn,
    making stops on royal land.
    Win the game when you return
    with three royal cards in hand.`,
    `<b>the acquisition</b> requires
    ten points of a royal’s suit—
    with every turn that transpires,
    you will be scoring more loot.`,
  ]
}, {
  es: [
    `Es gratis completar <b>la travesía</b>
    si viajas por las vías carreteras.
    Se pagan los traslados que precisas:
    transporte, pasadizo o madriguera.`,
    `Detente en los hexágonos que llegues
    y toma <b>el incremento</b> de tus cartas,
    a menos que te salgas o <i>destierres</i>
    por fuera de las piezas y sin barcas.`,
  ],
  en: [
    `Make <b>the journey</b> hex to hex—
    it's free if you stick to roads.
    Only pay to take the treks, 
    or to ride horses and boats.`,
    `Stop when you reach a hex tile,
    and unless you're off the board,
    draw a new card from the pile—
    that's <b>the increment</b> you scored.`,
  ],
}, {
  es: "Fin del juego",
  en: "Ending the Game",
}, {
  es: `Serás protagonista del festejo 
    si a nuestra <a class="pop" onclick="popUp('citadel')"><b>ciudadela</b></a> te regresas,
    trayéndonos las cartas del concejo: 
    tus tres representates de nobleza.`,
  en: `Return to the <a class="pop" onclick="popUp('citadel')"><b>citadel</b></a>  
    with three royal cards in hand. 
    In this race you must excel
    to be the champ of the land.`,
}, {
  es: `Tan pronto se repartan los conejos,
    se exige al colectivo de la mesa
    que escoja, de lo simple a lo complejo,
    la clase de final que le interesa:`,
  en: `Before the royal quest starts, 
  choose a challenge for the mission;
  look for the circular marks
  that set the winning condition.`,
}, {
  es: [
    `<b>simple</b>: traer tres cartas reales, 
    con cualquier letras o <i>palos</i> (símbolos);`,
    `<b>diverso</b>: las tres serán de palos distintos;`,
    `<b>monárquico</b>: traer exactamente una <b>K</b> + una <b>Q</b> + una <b>J</b>, sin importar sus palos;`,
    `<b>diverso y monárquico</b>: traer una <b>K</b> + una <b>Q</b> + una <b>J</b>, de tres palos distintos;`,
    `<b>tribal</b>: traer las tres de un mismo palo.`,
  ],
  en: [
    `<b>simple</b>: get three royal cards of any title (letter) or <i>suit</i> (symbol).`,
    `<b>diverse</b>: get three royal cards of any title, but with three different suits.`,
    `<b>monarchic</b>: get a <b>K</b> + <b>Q</b> + <b>J</b>, of any suit.`,
    `<b>diverse + monarchic</b>: get a <b>K</b> + <b>Q</b> + <b>J</b>, of three different suits.`,
    `<b>tribal</b>: get the three of the same suit.`,
  ]
}, {
  es: `<a href="#setup">Preparación <b>inicial</b></a> </br>(Hasta cuatro participantes)`,
  en: `<a href="#setup"><b>Setup</b></a></br>(Up to four players)`,
}]);

copy.add("setup", [{
  es: "Arma el tablero",
  en: "Build the Board",
}, {
  es: `El mapa que usarás en la partida
    lo creas de improviso y previamente,
    con piezas que conectas por sus vías
    en cientos de maneras diferentes.`,
  en: `To play a <b>jack rabbits</b>' match,
    you must first complete a board;
    build a random land from scratch—
    a new map to be explored.`,
}, {
  es: `El reino de las cartas y sus templos
    se ensambla con terrenos aleatorios;
    empieza por armar el del <a class="pop" onclick="popUp('sample')"><b>ejemplo</b></a>
    o anímate a <a class="pop" onclick="popUp('board')"><b>crear el territorio</b></a>.`,
  en: `The lands you connect and spread
    house the royals from each throne. 
    On your first game, go ahead,
    build the <a class="pop" onclick="popUp('sample')"><b>sample</b></a> as is shown.
    Or play normally instead:
    <a class="pop" onclick="popUp('board')"><b>build a new board</b></a> of your own.`,
}, {
  es: "Reparte las cartas",
  en: "Deal the cards",
}, {
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
}, {
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
}, {
  es: "Sitúa las fichas",
  en: "Set the tokens",
}, {
  es: `Asigna a las personas sus conejos
    y allí en la <a class="pop" onclick="popUp('citadel')"><b>ciudadela</b></a> los colocan.
    Les das las zanahorias de su juego,
    las tres de los colores que les tocan.`,
  en: `Players will select their rabbits,
    place them on the <a class="pop" onclick="popUp('citadel')"><b>citadel</b></a>,
    and pick up their matching carrots—
    they get three of these as well.`,
}, {
  es: `Escoge el <a class="pop" onclick="popUp('endings')"><b>fin del juego</b></a> que se exige,
    descrito en el principio de las reglas;
    y a menos que se juegue por el simple,
    su sello se pondrá en la ciudadela.`,
  en: `Choose the royal quest you're on,
    described in <a class="pop" onclick="popUp('endings')"><b>ending the game</b></a>,
    and place on this hexagon
    the circle that marks this aim.`,
}, {
  es: `Elige a la persona que comienza
    y el orden de los turnos que le siguen
    (le importa en lo absoluto tu sistema
    al noble mensajero que te escribe).`,
  en: `Now, select a starting player,
    and the order of the turns—
    the method for this endeavor
    resides beyond my concerns.`,
}, {
  es: `Después de preparado el territorio,
    comienzas con un <a href="#intro"><b>juego introductorio</b></a>.`,
  en: `Continue to the next frame 
    to complete an <a href="#intro"><b>intro game</b></a>.`,
}]);

copy.add("intro", [{
  es: "Las FASES de cada turno",
  en: "The PHASES of each turn",
}, {
  es: `Comprende el material preliminar
    al <a href="#full"><b>juego completivo</b></a> regular.`,
  en: `Learn these phases' rules and names, 
    then advance to a <a href="#full"><b>full game</b></a>.`,
}, {
  es: "1<small>ro</small>. La lotería",
  en: "1<small>st</small>. The Lottery",
}, {
  es: [
    `Tus turnos los comienzas con la suerte
    de <strong>un</strong> premio de la pila tras los dados:
    si <strong>un</strong> dado, de los dígitos que obtienes,
    coincide con un número en tus manos,
    demuestra con tu carta que lo tienes
    y llévate la carta de regalo.`,
    `El límite de cartas es de nueve;
    descarta la que quieras si te excedes.`,
    `Conserva el resultado de los dados;
    los usas en <a class="pop" onclick="popUp('price')"><b>el precio</b></a> de traslados.`
  ],
  en: [
    `Start your turns rolling two dice
    to have their digits unfold:
    you'll draw <strong>one</strong> card as a prize
    if you show <strong>one</strong> card you hold,
    proving that its number ties
    to <strong>one</strong> of the dice you rolled.`,
    `If you're ever holding ten, 
    discard down to nine again.`,
    `Hold the outcome of the dice;
    tranfers use it as <a class="pop" onclick="popUp('price')"><b>the price</b></a>.`
  ]
}, {
  es: "2<small>do</small>. La travesía",
  en: "2<small>nd</small>. The Journey",
}, {
  es: [
    `Del sitio hexagonal en el que empiezas,
    escoge si te irás por un camino:
    señala el recorrido por las piezas
    llevando tu conejo peregrino
    y acaba el movimiento si tropiezas
    con una hexagonal en su destino.`,
    `Recuerda que moverte es opcional,
    depende de tu meta a visitar.`,
    `Podrías expandir tus travesías
    pagando <a href="#intro/tranfers"><b>los traslados</b></a> en las vías.`
  ],
  en: [
    `From the current hex you're on, 
    you may choose a path to exit:
    move your rabbit as a pawn 
    along the road you've selected,
    and land at a hexagon—
    wait a turn to cross the hexes.`,
    `You may move towards your goal,
    or choose not to move at all.`,
    `For more transportation modes,
    see <a href="#intro/tranfers"><b>the transfers</b></a> off the roads.`,
  ]
}, {
  es: "3<small>ro</small>. La adquisición",
  en: "3<small>rd</small>. The Acquisition",
}, {
  es: [
    `Tu meta es visitar a la nobleza
    si nadie se ha apropiado de sus cartas:
    un mínimo de diez es lo que cuestan,
    pagado con los palos de sus marcas.
    Se dejan zanahorias en las piezas
    que indican los conejos que las cargan.`,
    `Es gratis visitar a los hexágonos
    y hacer tu recorrido visitándolos.`,
    `Conserva lo que adquieras en tu mano
    y obtén <b>el incremento</b> de inmediato.`,
  ],
  en: [
    `Your goal is to claim the card
    of the hex where you've set foot:
    if unclaimed, you may discard
    ten or more points of their suit,
    then place a carrot to mark,
    and finalize this pursuit.`,
    `There's no cost or consequences
    for visiting residences.`,
    `Keep the card claimed in your hands—
    get <b>the increment</b> at once.`,
  ]
}, {
  es: "4<small>to</small>. El Incremento",
  en: "4<small>th</small>. The increment",
}, {
  es: [
    `Termina en un hexágono tus vueltas
    (a menos de que salgas a la orilla*)
    y allí reclamarás tu recompensa:
    la carta que prosigue de la pila.
    Si llegas con la pila ya desierta,
    baraja las del lote y recopila.`,
    `El límite de cartas es de nueve;
    descarta la que quieras si te excedes.`,
    `*Tu turno acabará sin incremento
    si estás en <a href="#intro/off"><b>el destierro</b></a> en el momento.`,
  ],
  en: [
    `End your turns on a hex tile
    (unless you go off the shore*): 
    get a new card from the pile, 
    and your turn will be done for; 
    if you find no cards, repile—
    shuffle the spent lot once more.`,
    `If you're ever holding ten, 
    discard down to nine again.`,
    `*Do not collect this reward,
    if you ever end <a href="#intro/off"><b>off-board</b></a>.`,
  ]
}, {
  es: "Los traslados",
  en: "The Transfers",
}, {
  es: `Es gratis desplazarte a los hexágonos
    si sigues por los vínculos continuos;
    incluso las montañas, más abajo,
    se cruzan por sus túneles gratuitos.
    En cambio, si utilizas los traslados,
    marcados a mitad de los polígonos,
    <a class="pop" onclick="popUp('price')"><b>el precio</b></a> es el fijado por los dados
    y pagas con las cartas de los símbolos.`,
  en: `It is free to make your rounds
    if you move along the paths;
    in the mountains (farther down),
    these go through an underpass.
    Other ways to get around 
    are contingent on <a class="pop" onclick="popUp('price')"><b>the price</b></a>:
    use the suits marked on the ground
    and pay the sum of your dice.`,
}, {
  es: "traslado por Pasadizos",
  en: "transfer via Shortcuts",
}, {
  es: `Los bosques, las montañas y los ríos,
    que ves en las imágenes de abajo,
    permiten que te cambies de camino
    cruzando por el centro en un atajo,
    marcado con los palos permitidos
    que <a class="pop" onclick="popUp('price')">pagas con tus cartas</a> al cruzarlo.`,
  en: `The mountains, rivers, and woods,
    have two roads not far apart. 
    You may switch between these two,
    trekking through the center part.
    To do this, <a class="pop" onclick="popUp('price')">pay with your suits</a>—
    in this case, clubs, spades, or hearts.`,
}, {
  es: "traslado con Comerciantes",
  en: "transfer via Merchants",
}, {
  es: `Los cruces te permiten transportarte
    viajando por los mares o las tierras:
    cabalgas por las tierras sin pararte,
    moviéndote al hexágono que quieras;
    o sales si es posible que te embarques
    de un cruce con salida a las afueras,
    y surcas tu trayecto por los mares
    entrando por alguna carretera.
    Saldrás en el momento en el que <a class="pop" onclick="popUp('price')">pagues</a> 
    y anuncies el transporte que prefieras.`,
  en: `You may buy two types of rides
    on crossings where roads are forked:
    you'll gallop over the tiles
    to any hex on the board;
    or, row on the seas outside
    to find a road from this port.
    As soon as you <a class="pop" onclick="popUp('price')">pay the price</a>,
    you must move to your next post.
    Since they're not by the seaside,
    landlocked merchants won't have boats.`,
}, {
  es: "traslado con Comodines",
  en: "transfer via Jokers",
}, {
  es: `Si <a class="pop" onclick="popUp('price')">pagas</a> al pasar por las tabernas,
    tendrás un comodín desocupado;
    lo cargas y, al momento en que requieras,
    lo montas y liberas de tu mano.`,
  en: `When you pass by any tavern,
    you may <a class="pop" onclick="popUp('price')">buy</a> a joker card;
    you'll choose when to ride and travel, 
    then release it afterward.`,
}, {
  es: "traslado por Madrigueras",
  en: "transfer via Rabbit holes",
}, {
  es: `Si <a class="pop" onclick="popUp('price')">pagas</a> en la entrada de las cuevas,
    saldrás por la que quieras de inmediato.
    Si no, te ahorrarás lo que te cuesta,
    metiéndote al <a class="pop" onclick="popUp('underground')"><b>subsuelo</b></a> por un rato;
    descansas por el turno y, a la vuelta, 
    te sales por la cueva de tu agrado.`,
  en: `<a class="pop" onclick="popUp('price')">Pay to travel</a> cave to cave—
    use this trick to hop around. 
    But if you would rather save,
    take your rabbit <a class="pop" onclick="popUp('underground')"><b>underground</b></a>. 
    In this case, the payment's waived—
    hop on out in the next round.`,
}, {
  es: "El Destierro",
  en: "Off-board",
}, {
  es: `A veces te conviene que salieras
    cayendo de un camino a las orillas:
    olvida <b>el incremento</b> si lo hicieras
    y acaba con el turno a la deriva;
    mantén <b>la lotería</b> en las afueras,
    y entonces, al llegar <b>la travesía</b>,
    te metes al <a class="pop" onclick="popUp('underground')"><b>subsuelo</b></a> a lo que esperas
    la vuelta en la que escoges la salida.`,
  en: `If you choose to take a road
    that leads to the edge (outbound),
    you'll end your turn off the board,
    with no <b>increment</b>—you've drowned.
    But then, once you've rolled off-board,
    you'll enter the <a class="pop" onclick="popUp('underground')"><b>underground</b></a>!
    Get your <b>increment</b> restored,
    while you wait another round.`,
}, {
  es: `El <a href="#full"><b>juego completivo</b></a> es desafiante,
    con reglas que usarás en lo adelante.`,
  en: `For a <a href="#full"><b>full game</b></a> you'll include 
    the strategies of each suit.`,
}]);

copy.add("full", [{
  es: "Las estrategias de cada palo",
  en: "The strategies of each suit",
}, {
  es: `Añade los artículos restantes
    al <a href="#intro"><b>juego introductorio</b></a> principiante.`,
  en: `This frame should be introduced 
    once the <a href="#intro"><b>intro</b></a>'s understood.`
}, {
  es: "Tréboles <small>(Bastos)</small>",
  en: "Clovers <small>(Clubs)</small>",
}, {
  es: "Volar entre las torres K",
  en: "Fly among King Towers",
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
    The “shortfall” (how much you're off)
    is the price that will suffice.
    Pay with suits from the takeoff:
    the hex that flies the device.
    You may trade the passport off
    to pay the club tower's price.`,
  ]
}, {
  es: "Picas <small>(Espadas)</small>",
  en: "Spades <small>(Swords)</small>",
}, {
  es: "Pelear con los conejos",
  en: "Fight with the Rabbits",
}, {
  es: [
    `Ataca en un <i>combate sin empates</i> 
    a quien en el hexágono descansa:
    se lucha superando los ataques,
    sumándose las picas descartadas,
    y cuando se terminen los avances,
    destierra a la persona derrotada.
    Si ganas el combate que empezaste,
    también asaltarías a  sus cartas,
    robando la primera que tocases
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
}, {
  es: "Corazones <small>(Copas)</small>",
  en: "Hearts <small>(Cups)</small>",
}, {
  es: "Acceder a los palacios Q",
  en: "Access the Queen Palaces",
}, {
  es: [
    `Anúnciate en la <i>entrada de las reinas</i>
    y espera que en la mesa te cuestionen:
    si cargas con su carta o con la cuenta 
    de un mínimo de seis en corazones.
    Te expulsan al destierro si te frenan
    y niegas que tu suma se cerciore.
    Mas antes de mostrar tus pertenencias,
    se exige de cualquiera que cuestione
    que muestre previamente que las tenga,
    las cartas con aquellas condiciones,
    pues pierde lo mostrado y se destierra
    si pruebas que te acusa sin razones.`,
    `Tan solo acusarás a los viajeros
    si tienes tu conejo en el tablero.`,
  ],
  en: [
    `As you enter a queen's hex,
    any player may demand:
    that if you do not possess
    the queen's card that marks the land,
    you show six points to the rest,
    adding heart cards from your hand.`,
    `Those who ask to see your hearts,
    must first show cards of their own,
    which, even from far apart,
    prove their access to this zone.
    If you fail to show your cards,
    go off-board—your cover's blown.
    But succeed, and they'll depart—
    off, and lose the cards they've shown.`,
    `Any players off the board 
    may not nag those at the door.`,
  ]
}, {
  es: "Diamantes <small>(Oros)</small>",
  en: "Diamonds <small>(Gold)</small>",
}, {
  es: "Canjear en las plazas J",
  en: "Trade at Jack Plazas",
}, {
  es: `Comercia en los <i>hexágonos de ventas</i>
    con flechas que sugieren intercambio:
    en estos, los diamantes se canjean 
    por cartas descartadas de su palo,
    excepto en el marcado con la estrella,
    que acepta de cualquiera por el pago.
    Recuerda que la pila se renueva
    con cartas que abandonan el mercado.`,
  en: `All spent cards are being sold;
    each jack's hex sells its own suit.
    Check what these posts have in store—
    when you play there, grab some loot.
    What you take, replace with gold
    as the signs instruct you to—
    the star symbol on the board
    means that any suit will do.
    When the pile needs to reload,
    these markets run out of goods.`,
}, {
  es: "+ Canjes Individuales",
  en: "+ Individual Trades",
}, {
  es: `Es válido el <i>comercio por diamantes</i>
    con alguien en el sitio que te encuentras,
    si mientras el negocio se debate,
    se ocultan en las manos las ofertas.
    A quien se le descubra por chantaje,
    después del intercambio se destierra.`,
  en: `Players you meet on the board
    may possess cards that you covet;
    you may buy or sell for gold,
    without showing what is offered.
    Swindlers will get thrown off-board
    if a short change is uncovered.`,
}, {
  es: `Renueva tus partidas habituales
    jugando con las <a href="#optional">reglas <b>opcionales</b></a>.`,
  en: `Try these  <a href="#optional"><b>additional options</b></a>
    once you have gone through the motions.`
}]);

copy.add("optional", [{
  es: "Reglas Opcionales",
  en: "Optional Rules",
}, {
  es: `Renueva tus partidas habituales,
  jugando con las reglas opcionales.`,
  en: `Once you have gone through the motions,
  you may consider these options.`,
}, {
  es: "Ases",
  en: "Aces",
}, {
  es: "Ases Ambivalentes",
  en: "Ambivalent Aces",
}, {
  es: `Elige los valores de tus ases,
    que cuentan por un <b>1</b> o por un <b>11</b>,
    ya sea en el momento en que los gastes
    o incluso en el momento que los compres.`,
  en: `You may decide on their value
    whenever using an ace:
    <b>1</b> or <b>11</b>—what have you—
    even in the marketplace.`,
}, {
  es: "Ases capitales",
  en: "capital Aces",
}, {
  es: `El <b>A</b>s que de primero desembolses,
    descártalo y consérvalo en tu frente;
    pues éste se valora por un <b>11</b>
    y solo por un <b>1</b> tus siguientes.`,
  en: `Your first <b>A</b>ce is worth <b>11</b>—
    the others you spend are <b>1</b>s.
    As a record that it's spent then, 
    keep it in front of your hands.`,
}, {
  es: "Capitales adicionales",
  en: "Additional capital",
}, {
  es: `Los <b>A</b>ces capitales que se exponen
    se cuentan por un <b>1</b> permanente;
    si el palo que precisas corresponde,
    lo añades del que tienes en tu frente.`,
  en: `Playing your capital <b>A</b>ce
    will grant you a bonus tip:
    when needed at any place,
    it counts as one extra pip.`,
  }, {
    es: "Piezas",
    en: "Tiles",
}, {
  es: `<a class="pop" onclick="popUp('advancedCitadel')">Ciudadela Avanzada</a>`,
  en: `<a class="pop" onclick="popUp('advancedCitadel')">Advanced Citadel</a>`,
}, {
  es: `Se esperan corazones al entrar;
    canjeas lo que quieras con diamantes;
    y puedes con tus tréboles volar,
    con palos cualesquiera de restante.`,
  en: `Use your hearts to demand access;
    diamonds, to buy any loot; 
    and clubs, to get flying passes—
    shortfall's paid in any suit.`,
}, {
  es: "Palos Justos",
  en: "Tight Suits",
}, {
  es: `Se juega con un palo por conejo
    y un <a class="pop" onclick="popUp('roadTiles')">set de carreteras</a> a su vez;
    con tres participantes, por ejemplo,
    un palo se elimina con un set.`,
  en: `Have as many suits as players,
    and one of each <a class="pop" onclick="popUp('roadTiles')">road tiles</a> too;
    for instance, with three contenders,
    remove a set and a suit.`,
}, {
  es: "Tablero Urbano",
  en: "Urban Board",
}, {
  es: `Conecta los hexágonos directo,
  y olvídate <a class="pop" onclick="popUp('roadTiles')">de rombos y de triángulos</a>;
  la falta de traslado en los trayectos
  hará que se incrementen los obstáculos.`,
  en: `To play this version correctly,
  make a land of shorter miles,
  connecting hexes directly
  and removing all <a class="pop" onclick="popUp('roadTiles')">road tiles</a>.`,
}, {
  es: "Estrategias",
  en: "Estrategies",
}, {
  es: "Vuelos Residenciales",
  en: "Residential flights",
}, {
  es: `Las plazas, ciudadela y los palacios
    se añaden al destino de los vuelos;
    podrás aterrizar en los hexágonos,
    excepto por supuesto en el subsuelo.`,
  en: `When flying from any tower, 
    find more places to touch down;
    you may reach—with the clubs' power—
    any hex above the ground.`,
}, {
  es: "Palacios Provisionales",
  en: "Provisional Palaces",
}, {
  es: `Conviertes residencias en palacios
    si exhibes corazones al pararte:
    tu mínimo de seis reglamentarios
    que acusan a cualquiera al visitarte.`,
  en: `Display a sum of six hearts
    at any house where you'll rest, 
    declaring you'll use these cards
    to accuse incoming guests.`,
}, {
  es: "Zanahorias ventajosas",
  en: "Trailing Carrots",
}, {
  es: `Podrás incrementar la travesía
    si está tu zanahoria en un lugar;
    pues puedes, en el turno que visitas,
    salirte sin parar a descansar.`,
  en: `The journey may be prolonged
    if your carrot's on a hex;
    you may visit and go on
    to the place you're headed next.`,
  }, {
    es: "Cartas",
    en: "Cards",
}, {
  es: "Lotería Gorda",
  en: "Windfall Lottery",
}, {
  es: `Permite reclamar la lotería
    por múltiples aciertos y regalos,
    ya sea con las cartas que validas
    o incluso con un doble de los dados.`,
  en: `You may win more than one prize,
    the lottery has no limits—
    whether cards that match the dice,
    or a roll of double digits.`,
}, {
  es: "Manos Extralimitadas",
  en: "Overtaxed Hands",
}, {
  es: `Las cartas en tu mano y su manejo
    te retan en un juego de escasez,
    pues cuentas con un límite pequeño
    cargando con un máximo de seis.`,
  en: `The cap on your cards is slender,
    up to six to hold on to.
    Plan to be a wiser spender
    on the quest that you pursue.`,
}, {
  es: "Valores Patriarcales",
  en: "Patriarchal values",
}, {
  es: `Valoras a los <b>A</b>ses por <b>14</b>;
    los reyes, es por <b>13</b> que valoras;
    las reinas, subvalóralas por <b>12</b>;
    y es <b>11</b> (menos precio) por las jotas.`,
  en: `Have unequal value levels—
    if you don't think that is whack—
    from <b>14</b> down to <b>11</b>,
    for the <b>A</b>ce, <b>K</b>ing, <b>Q</b>ueen & <b>J</b>ack.
    `,
}]);

copy.add("more", [{
  es: "Compra el juego",
  en: "Buy the game"
}, {
  es: `Visita nuestra tienda en línea y adquiere la copia física del juego.`,
  en: `Visit our online store and get a physical copy of the game.`,
}, {
  es: "Listado de correo",
  en: `Mailing list`,
}, {
  es: "Aquí te podemos avisar sobre nuestra campana de lanzamiento.",
  en: `Here we can let you know more about our launch campaign.`
}, {
  es: "Versión virtual",
  en: "Virtual version"
}, {
  es: "Juega <b>Jack Rabbits</b> con tus amistades en línea.",
  en: "Play <b>Jack Rabbits</b> online with your friends."
}, {
  es: "Echa tus cartas",
  en: "Suit yourself",
}, {
  es: `Este test revelará el símbolo que mejor se ajusta a tu personalidad.`,
  en: `This test will reveal the suit that best fits your personality.`,
}, {
  es: "Descubre la novela",
  en: "Discover the novel",
}, {
  es: `Existe un manuscrito de novela inspirado en este mundo de maravillas.`,
  en: `There's a manuscript of a novel inspired in this same land of wonders.`,
}])

copy.add("popup", [{
  es: "Ciudadela",
  en: "Citadel",
}, {
  es: `La pieza hexagonal en la que empiezas…
    y acabas al traer a la nobleza.`,
  en: `The hex where the journey starts…
    and ends with three royal cards.`
}, {
  es: "Subsuelo",
  en: "underground",
}, {
  es: `La pieza hexagonal en la que esperas
    si vas a atravesar las madrigueras.`,
  en: `The hex where you wait around
    to reach caves in the next round.`
}, {
  es: "Ciudadela Avanzada",
  en: "Advanced Citadel",
}, {
  es: `La ficha del inicio es reforzada:
    con torre, con palacio y con su plaza.`,
  en: `This citadel has more power:
    a palace, plaza and tower.`
}, {
  es: "Piezas viales",
  en: "Road tiles",
}, {
  es: "Tablero de ejemplo",
  en: "Sample board",
}, {
  es: "Crear el territorio",
  en: "Build a new Board",
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
    Igual se recomienda al conectarlas
    contar con las siguientes sugerencias:`,
    `Evita: callejones sin salidas <sup>T</sup>;
    los vínculos de dos hexagonales <sup>x</sup>;
    y hacer la conección consecutiva
    de piezas triangulares similares <sup>!</sup>.
    Las islas que desees las inicias
    con una hexagonal a la que apartes;
    y observa que el subsuelo, en exclusiva,
    se queda sin uniones laterales.`,
  ],
  en: [
    `Place the <i>citadel</i> hex first. 
    Leave aside the <i>underground</i>. 
    Pile and shuffle all the rest,
    even the small ones, face down.`,
    `Deal by tile shape, equal shares—
    there are twelve of every kind—
    as you hand each player theirs,
    the division will be fine.`,
    `To place them, first choose a style
    between a strict or free pace.
    <b>Strict</b>: take turns placing one tile—
    the one you flip, you must place.
    <b>Free</b>: no turns, it's all freestyle—
    flip all the tiles on their face. 
    These suggestions are worthwhile
    as guidelines in either case:`,
    `Don't make a dead-ending road <sup>T</sup>,
    or join the roads from two hexes <sup>x</sup>,
    and keep triangles spread broad,
    instead of closely connected <sup>!</sup>.
    To start an island abroad,
    just place a hex disconnected;
    yet, the underground is odd,
    and will remain unconnected.`,
  ]
}, {
  es: "El precio",
  en: "The price",
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
  ],
  en: [
    `Transfer posts along the way
    charge the total on the dice. 
    It's OK to overpay; 
    you don't have to be precise. 
    The suits allowed where you pay 
    may be combined for the price.`,
    `Show and leave out what you spend; 
    it's <i>discarded</i> once you're done. 
    You may spend royals as <b>10</b>,
    and the aces are worth <b>1</b>.
    If you spend a royal card,
    return it to the court's aisle;
    and you must remove your mark,
    take your carrot off their tile.`,
  ]
}, {
  es: "Listado de correo",
  en: "Mailing list",
}, {
  es: "Lenino está preparando una campaña para <b>Jack Rabbits</b> y puede avisarte cuando esté lista.",
  en: "Lenino is preparing a launch campaign for <b>Jack Rabbits</b>, and can notify you when it's ready."
}]);


export default copy;